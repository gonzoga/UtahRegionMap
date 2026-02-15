# YIC Map Integration Plan

Based on deep research of `https://www.schools.utah.gov/yic`, here is a series of improvements to prepare the interactive map for seamless integration.

## 1. Visual Alignment (Trust & Branding)

The map currently looks generic. To feel "native" to the USBE site, we must adopt their exact design system.

- **Color Palette Update**:
  - **Map Base**: Change default county blue to match USBE Primary Blue (`#00447B`) or Secondary Blue (`#065D89`).
  - **Hover States**: Use the lighter blue accent found in their buttons.
  - **Text**: Switch labels to `Montserrat` (headers) or `Open Sans` (body) to match the site's typography.
  - **Borders**: Use white strokes (current) but verify width matches their icon styles.
- **Typography**:
  - Import `Montserrat` and `Open Sans` Google Fonts.
  - Apply `Montserrat` showing font-weight 700 to the county labels.

### 1.1 ADA Color Compliance (Verified)

- **Primary Blue (`#00447B`) vs White**: 13.5:1 ratio (Passes WCAG AAA).
- **Secondary Blue (`#065D89`) vs White**: 9.0:1 ratio (Passes WCAG AAA).
- **Inactive Gray (`#475569`) vs White**: 7.0:1 ratio (Passes WCAG AA). *Changed from non-compliant `#94a3b8`.*

## 2. Functional Integration (The "Directory" Tab)

The current "Directory" tab only lists 5 PDF downloads. This is a high-friction user experience. The map should be the **primary** interface here.

- **Deployment Strategy**:
  - The map should be embedded directly into the "Directory" content area.
  - **Fallback**: Keep the PDF links below the map for printing/offline use.
- **Interaction Flow**:
  - **Default State**: Show the full state map.
  - **Click Action**: Clicking a county triggers a side-panel or modal (matching the site's card style) that displays the specific *YIC Director*, *Foster Care POC*, and *ETCA Specialist* for that region.
  - **Dynamic Data**: We need to scrape/extract the data from those existing PDFs and populate our `app.js` data structure so the map yields real, valuable contact info.

## 3. Data Enhancement (Real Value)

Currently, our map displays placeholder "Service" data. To be useful on the YIC page, it must serve the specific audience (Educators, Case Workers).

- **Action Item**: Digitize the data from:
  - *YIC Directors List*
  - *Foster Care Point of Contact List*
  - *Specialist List*
- **Implementation**: Update `js/app.js` to structure this data by county (e.g., `SaltLake: { director: 'Name', email: '...', phone: '...' }`).

## 4. Mobile Experience (Responsive)

The YIC page uses a stacked tab system on mobile. A large map can be clumsy here.

- **Interaction Tweak**: On mobile (`< 768px`), disable "scroll to zoom" to prevent users from getting stuck in the map when scrolling down the page. Use a specific "Use two fingers to move the map" overlay or button.
- **List View**: Below the map, automatically render an accordion list of counties. Mobile users often prefer tapping a list over pinching a map.

## 5. Search & Filtering (UX Upgrade)

The current page lacks search for these directories.

- **New Feature**: Add a search bar inside the map container: *“Find your School District or County”*.
- **Behavior**:
  - User types "Alpine School District".
  - Map highlights "Utah County" (since Alpine is in Utah County) and shows the relevant contacts.
  - This bridges the gap between "District" knowledge and "County" geography.

## Execution Steps

1. **Style Refactor**: Update `index.css` / `index.html` with USBE colors and fonts.
2. **Data Entry**: Manually transfer data from the 5 PDFs into a JSON object in `app.js`.
3. **Logic Update**: Modify `app.js` to render the specific "Director/POC" card layout instead of generic services.
4. **Mobile Polish**: Add the list-view fallback for small screens.

## Technical Deployment (Omni CMS)

Based on our analysis, the site runs on **Omni CMS** (formerly OmniUpdate). This changes our deployment strategy:

- **No Plugins**: We cannot use WordPress plugins.
- **Embed Strategy**: The map must be packaged as a standalone "Widget" or "Gadget".
  - **HTML**: A single container `div` (e.g., `<div id="yic-interactive-map"></div>`).
  - **Assets**: CSS and JS files hosted on the USBE server or a CDN.
  - **Installation**: The site admin will paste our "Embed Code" (Script + CSS + Div) into an "Editable Region" or create a new "Asset" in Omni CMS.
- **Recommendation**: We will deliver a `dist/` folder containing a consolidated `map-widget.js` and `map-styles.css` for easy "Drop-in" implementation.

## Phase 2: Broader Site UX Strategy (Beyond the Map)

To transform the YIC site from a file repository into a service portal, we propose the following "Useful Conversions":

### 1. Allocations (The "PDF Trap" -> Interactive Dashboard)

- **Current Friction**: Static PDFs require manual searching and calculation.

- **Proposed Solution**: Create a simple interactive table/chart.
- **User Value**: Administrators can select their district to see current allocations, balances, and 3-year trends instantly.

### 2. Forms (Print/Scan -> Centralized Portal)

- **Current Friction**: Fragmented PDF downloads requiring print/sign/scan cycles.

- **Proposed Solution**: Centralize all workflows into a dedicated "Forms" tab using web forms (e.g., Qualtrics).
- **User Value**: Reduces submission errors and eliminates "printer fatigue."

### 3. Policy (Legalese -> Plain Language)

- **Current Friction**: Direct links to dense State Code and Board Rules.

- **Proposed Solution**: Create "Quick Guides" or "Plain English" summaries for major rules (e.g., R277-709).
- **User Value**: Democratizes access to compliance information for non-legal staff and parents.

### 4. Monitoring (Invisible -> Transparency Hub)

- **Current Friction**: Monitoring results are hidden in obscure reports.

- **Proposed Solution**: Add a public "Monitoring & Outcomes" section with a "Program Status" traffic light for LEAs.
- **User Value**: Drives accountability and helps programs self-correct.
