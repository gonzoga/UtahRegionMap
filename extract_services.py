import re
import json
import os

def decode_email(encoded):
    try:
        r = int(encoded[:2], 16)
        email = ''.join([chr(int(encoded[i:i+2], 16) ^ r) for i in range(2, len(encoded), 2)])
        return email
    except Exception as e:
        return ""

def clean_text(text):
    if not text:
        return ""
    # Remove HTML tags
    text = re.sub(r'<[^>]+>', '', text)
    # Remove extra whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text

def extract_data(file_path):
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    services = []
    
    # Identify county blocks
    # Pattern to find the start of a county block and its content
    # We'll rely on the "county [name]-info" class and the h3 tag
    
    # Strategy: Split by "county [name]-info" might be hard because we need the end of the div.
    # Instead, let's look for the H3 headers which seem to denote the start of a county section
    # And then look for service-containers until the next county section.
    
    # Actually, the structure matches: <div class="... county ..."> ... </div>
    # But nested divs make regex for matching the closing div hard.
    # Let's iterate through the file finding "Judicial District" headers and extracting services following them.
    
    # 1. Find all sections starting with unique county headers
    county_matches = list(re.finditer(r'<h3>\d+(?:st|nd|rd|th) Judicial District - (.*?)</h3>', content))
    
    for i, match in enumerate(county_matches):
        county_section_name = match.group(1).strip()
        start_index = match.end()
        end_index = county_matches[i+1].start() if i + 1 < len(county_matches) else len(content)
        
        section_content = content[start_index:end_index]
        
        # Find service containers in this section
        # NOTE: Regex '.' does not match newlines by default, so use re.DOTALL
        # But since valid HTML might have nested divs, non-greedy match might stop early or late.
        # However, "service-container" structure seems shallow.
        
        # Let's try to capture each service container
        container_pattern = r'<div class="service-container">(.*?)</div>'
        container_matches = re.finditer(container_pattern, section_content, re.DOTALL)
        
        for cm in container_matches:
            s_content = cm.group(1)
            
            # Extract Name
            name_match = re.search(r'<p class="lead-in-text mb-zero">(.*?)</p>', s_content, re.DOTALL)
            service_name = clean_text(name_match.group(1)) if name_match else "Unknown Service"
            
            # Extract Phone
            phone_match = re.search(r'href="tel:(.*?)"', s_content)
            phone = phone_match.group(1) if phone_match else ""
            
            # Extract Contact
            contact_match = re.search(r'<p class="mb-zero">Contact: (.*?)</p>', s_content, re.DOTALL)
            contact = clean_text(contact_match.group(1)) if contact_match else ""
            
            # Extract Address
            # Address is typically the <p> after contact, or just a <p> containing <br />
            # It's harder to pinpoint by position with regex only.
            # Let's look for the paragraph that has a <br /> and is NOT the contact line (though contact format varies)
            # Most addresses have a city/state/zip line which often ends with zip.
            
            # Alternative: Iterate p tags
            p_tags = re.findall(r'<p class="mb-zero">(.*?)</p>', s_content, re.DOTALL)
            
            address = ""
            # Heuristic: Find the p tag that is not contact and not just a phone number link
            # The contact p tag was already found (starts with Contact:)
            # The phone tag contains href="tel"
            
            for p in p_tags:
                if 'Contact:' in p:
                    continue
                if 'href="tel:' in p:
                    continue
                if 'span class="__cf_email__"' in p:
                    continue
                
                # It's likely the address.
                # Address often has <br />
                cleaned_p = clean_text(p.replace('<br />', ', ').replace('<br>', ', '))
                # Check if it looks like an address (has digits, maybe Zip)
                if re.search(r'\d+', cleaned_p):
                     address = cleaned_p
                     break
            
            # Extract Email
            email_match = re.search(r'data-cfemail="(.*?)"', s_content)
            email = decode_email(email_match.group(1)) if email_match else ""
            
            services.append({
                "county": county_section_name,
                "service_name": service_name,
                "phone": phone,
                "contact": contact,
                "address": address,
                "email": email
            })

    return services

if __name__ == "__main__":
    if not os.path.exists('index.html'):
        print("Error: index.html not found")
    else:
        data = extract_data('index.html')
        with open('services.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2)
        print(f"Extracted {len(data)} services to services.json")
