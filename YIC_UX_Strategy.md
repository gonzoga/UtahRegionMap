# YIC User Experience Strategy

Based on a deep audit of `schools.utah.gov/yic`, this document identifies specific user flows that cause friction and proposes "Useful Conversions" to modernize the experience.

## Executive Summary

The current YIC site functions as a **Digital Filing Cabinet**: it stores static documents (PDFs) rather than facilitating actions. The goal is to convert it into a **Service Portal** where users interact with data and complete tasks directly.

---

## 1. Financial Allocations (The "PDF Trap")

**Current Flow (Friction):**

1. User clicks "Financial" tab.
2. User downloads "FY 2025 YIC Allocation" PDF.
3. User manually searches for their district in a static table.
4. User repeats for previous years to see trends.
    * *Result:* Data is locked; comparing funding requires manual data entry by the user.

**Proposed Flow (The "Allocations Dashboard"):**

* **Change:** Replace PDF links with a simple interactive table/chart.
* **User Action:** User selects "Alpine District" from a dropdown.
* **System Response:** Displays current allocation, remaining balance, and a 3-year funding trend line.
* **Benefit:** Instant transparency and zero manual calculation for district business administrators.

---

## 2. Forms & Submissions (The "Print/Scan Loop")

**Current Flow (Friction):**

1. User navigates to "Financial" for budget forms OR "Resources" for student forms (Fragmented).
2. User downloads a PDF form.
3. User prints, fills out by hand, scans, and emails it to a specialist.
    * *Result:* High effort, prone to errors, hard to track status.

**Proposed Flow (The "Forms Portal"):**

* **Change:** Centralize all workflows into a dedicated "Forms" tab using web forms (e.g., Qualtrics or embedded HTML forms).
* **User Action:** User clicks "Submit Budget Request".
* **System Response:** Opens a validated web form with pre-filled district info. Submitting triggers an auto-email receipt.
* **Benefit:** Reduces submission errors and eliminates the "print/scan" barrier.

---

## 3. Directory & Contacts (The "Generic List")

**Current Flow (Friction):**

1. User clicks "Directory".
2. User sees 5 separate PDF links (Directors, POCs, Specialists).
3. User downloads all 5 to find the right contact for their specific region.
    * *Result:* "PDF Fatigue" and version control issues (users save old lists).

**Proposed Flow (The "Interactive Map" - *As planned*):**

* **Change:** Embed the SVG Interactive Map.
* **User Action:** User clicks "Washington County" on the map.
* **System Response:** A card displays the *exact* YIC Director, Foster Care POC, and Specialist for that county.
* **Benefit:** One click delivers context-aware contact info.

---

## 4. Policy & Rules (The "Wall of Text")

**Current Flow (Friction):**

1. User clicks "Regulation".
2. User is linked to external State Legislature pages (Utah Code/Board Rules).
3. User reads raw legal statutes to understand simple requirements.
    * *Result:* Intimidating and confusing for non-legal staff (educators/parents).

**Proposed Flow (The "Policy Plain Language"):**

* **Change:** Create "Quick Guides" for each major rule.
* **User Action:** User clicks "Eligibility Rules".
* **System Response:** Sees a bulleted "Plain English" summary of R277-709 with a "Read Full Law" link at the bottom.
* **Benefit:** Democratizes access to compliance information.

---

## 5. Monitoring (The "Invisible Data")

**Current Flow (Friction):**

* Monitoring reports and compliance statuses are not visible on the main tabs.
* Users must search the main USBE site to find monitoring results.

**Proposed Flow (The "Transparency Hub"):**

* **Change:** Add a "Monitoring & Outcomes" section.
* **User Action:** User views a "Program Status" traffic light (Green/Yellow/Red) for their LEA.
* **Benefit:** Drives accountability and helps LEAs self-correct before formal sanctions.

---

## Technical Roadmap

1. **Frontend**: Build the Map (Directory) and Dashboards (Allocations) using the existing `app.js` structure.
2. **Data**: Convert PDFs to JSON/CSV sources.
3. **Navigation**: Refactor tabs to group by *User Intent* (Getting Funding, Submitting Forms, Finding People) rather than *Administrative Category*.
