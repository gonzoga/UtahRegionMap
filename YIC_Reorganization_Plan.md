# YIC Page Reorganization Plan

This document outlines a strategy to restructure the [Youth-In-Care (YIC)](https://schools.utah.gov/yic) website content to improve usability, findability, and visual hierarchy.

## Existing Problems

- **"Resources" is a catch-all**: It contains everything from critical forms to external partner links, making it hard to find specific tools.
- **Fragmented Contact Info**: "Directory" (external lists) and "Contact Us" (internal staff) are at opposite ends of the structure.
- **Hidden High-Value Items**: Critical operational documents (Forms, Budgets) are buried in sub-sections.
- **Mixed Audiences**: Content for LEA Directors is mixed with general info for the public.

## Proposed New Structure

The new layout proposes organizing content by **User Intent** (what the user is trying to *do*) rather than broad generic buckets.

### 1. Program Overview (Hero Section)

*Keep the existing mission statement and overview text to ground the user.*

- **Content**: "Youth-In-Care education services..."

### 2. Operational Toolkit (For Directors & Treasurers)

*Group the daily operational tools that LEAs need to do their jobs. This combines "Financial" and specific "Resources".*

| Link Name | Current Location | New Category |
| :--- | :--- | :--- |
| **Forms & Reporting** | | |
| FY24 YIC Budget Adjustment Form | Financial | **Forms & Reporting** |
| Youth Education Coordinating Form | Resources | **Forms & Reporting** |
| Student Information Form | Resources | **Forms & Reporting** |
| YIC School and Annexes Listing | Resources | **Forms & Reporting** |
| **Finance & Grants** | | |
| Statewide Approved Indirect Cost Rates | Financial | **Finance & Grants** |
| Utah Grants (System Link) | Financial | **Finance & Grants** |
| Utah School District Directory | Financial | **Finance & Grants** |

### 3. Policy, Regulation & Compliance

*Centralize all legal and compliance definitions.*

| Link Name | Current Location | New Category |
| :--- | :--- | :--- |
| R277-709: Education Programs... | Regulation | **Board Rules** |
| Title R547: Human Services | Regulation | **Board Rules** |
| Title 53E-3-503: Education of... | Regulation | **Utah Code** |
| Educational Stability for Children in Foster Care | Resources | **Federal & State Guidance** |
| Individuals with Disabilities Education Act (IDEA) Letter | Resources (Best Practices) | **Federal & State Guidance** |
| Title I Part D: Neglected and Delinquent | Resources (Best Practices) | **Federal & State Guidance** |

### 4. Training & Professional Development

*Combine calendars, webinars, and meeting schedules.*

| Link Name | Current Location | New Category |
| :--- | :--- | :--- |
| Youth in Care Meetings 2025-2026 | YIC Director Calendar | **Events Calendar** |
| USBE YIC Attendance Webinars | Utah Mentoring | **Webinars & Training** |
| USBE YIC YouTube Channel | Utah Mentoring | **Webinars & Training** |
| Check & Connect Mentor Roles | Utah Mentoring | **Webinars & Training** |

### 5. Directories & Contacts

*Merge the internal USBE team with the external LEA directories for a single "Who do I call?" source.*

- **Subsection: USBE YIC Team** (Benji Carrier, Morgan Taylor, etc.) - *Display openly on page.*
- **Subsection: LEA & Partner Directories** (Downloadable Lists)

| Link Name | Current Location | New Category |
| :--- | :--- | :--- |
| YIC Directors 2025-2026 | Directory | **Statewide Contacts** |
| Foster Care Point of Contact (FCPOC) | Directory | **Statewide Contacts** |
| K-12 Check and Connect Personnel | Directory | **Statewide Contacts** |
| ETCA Contact List | Directory | **Statewide Contacts** |
| YIC Student Information Form Contacts | Directory | **Statewide Contacts** |

### 6. Partners & Initiatives

*Group external agencies, initiatives, and broad resources here. This cleans up the "Resources" clutter.*

- **Initiatives**: First Star, Renaissance Learning, YouScience, Check & Connect (Program Description).
- **State Partners**: DCFS, JJYS, DJJS, DSPD, Workforce Services.
- **National Partners**: BreakFree, CJJ, CEA, NDTAC.
- **Scholarships**: Education Resources.

## Visual Recommendations

1. **Quick Links Sidebar/Bar**: Place the "Forms" and "Budget" links in a high-visibility "Quick Links" area, as these are likely the most accessed items for power users.
2. **Contact Cards**: Instead of just lists, format the USBE team as visual cards.
3. **Accordion for Partners**: The "Collaborating Agencies" list is long; put it inside an accordion or dropdown to save vertical space.

## Summary of Moves

- **MOVED** "Financial" -> Merged into **Operational Toolkit**.
- **MOVED** "Student Information Form" (from Resources) -> **Operational Toolkit**.
- **MOVED** "Calendar" -> **Training & PD**.
- **MOVED** "Mentoring Materials" (Webinars) -> **Training & PD**.
- **CONSOLIDATED** "Directory" and "Contact Us" -> **Directories & Contacts**.

## Navigation Strategy (User Feedback Integration)

Based on the complexity of the new structure and USBE design patterns, we will implement an **Expandable Side Navigation** (Vertical) instead of a top bar.

### Why Side Nav?

1. **Scalability**: Vertical lists accommodate more categories (Toolkit, Policy, Training, etc.) without cramping the layout like a horizontal bar would.
2. **Depth**: The "Application/Dashboard" feel of a side bar supports deep hierarchies (e.g., clicking "Operational Toolkit" expands to show "Forms" and "Finance") without hiding content in hover menus.
3. **Consistency**: Matches the standard USBE sidebar (as seen in "Teach in Utah" and "ULEAD" pages), reducing cognitive load for users familiar with the ecosystem.

### Proposed Sidebar Structure

The sidebar will be on the **Left**.

- **USBE Home** (Standard Back link)
- **Youth In Care (Home)**
- **Operational Toolkit** `[+] (Expands)`
  - Forms & Reporting
  - Finance & Grants
- **Policy & Compliance** `[+] (Expands)`
  - Board Rules
  - Utah Code
  - Federal Guidance
- **Training & Events** `[+] (Expands)`
  - Calendar
  - Webinars
- **Directories**
- **Partners & Initiatives**
