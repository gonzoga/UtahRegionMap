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
