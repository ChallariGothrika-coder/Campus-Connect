# CampusConnect — Smart Campus Companion

CampusConnect is a student-friendly single-page website that brings campus announcements, class timetables, college events, lost-and-found notices, and campus locations into one place. It is built as a static site suitable for a college CSE project demonstration.

## Features

- Dashboard with welcome message, summary cards, latest announcements, upcoming events, and quick actions.
- Interactive weekly timetable (Monday–Saturday) with sample data.
- Filterable announcements by category (Academics, Examinations, Events, General) with search.
- Campus events with categories, search/filter, local "Register interest" button, confirmation feedback, and duplicate prevention.
- Lost & Found: add, view, search, filter, and delete user posts; validation; localStorage persistence.
- Campus guide directory of common locations with search and category filter.
- Global search across announcements, events, lost-and-found posts, and campus locations.
- About section with project details, technologies, and future improvements.
- Responsive layout, mobile navigation, accessibility features.
- Reset demonstration data with confirmation.

## File structure

```
CampusConnect/
├── index.html    # Page structure and sections
├── style.css     # Complete responsive styling
├── script.js     # Application logic and data
└── README.md     # Project documentation
```

## Local setup

1. Download or clone the project folder.
2. Open `index.html` directly in a modern browser (Chrome, Edge, Firefox, Safari), or
3. Run a simple static server, e.g. `python -m http.server 8000` inside the folder, then visit `http://localhost:8000`.

No build step, package manager, or backend is required.

## Deploy to GitHub Pages

1. Create a new repository on GitHub.
2. Upload `index.html`, `style.css`, `script.js`, and `README.md` (or push via Git).
3. In the repository, go to **Settings → Pages**.
4. Under "Source", select the branch (usually `main`) and root folder.
5. Save. Your site will be published at `https://<username>.github.io/<repo>/`.

## Data and limitations

- All announcements, events, timetable entries, and sample lost-and-found posts are **demonstration data**.
- User-created lost-and-found posts and event registrations are stored in the browser's `localStorage`. They belong to the **current browser and device** and are not shared between users or devices.
- Registration for events is a local demonstration feature, not an official college registration system.
- No personal contact information is included in sample data.

## Features requiring a real backend

Before these can be shared across different users, a backend and database would be required:

- Shared announcements/events posted by administrators.
- Real student authentication and accounts.
- Centralised lost-and-found shared across all students.
- Official event registration with capacity management.
- Real campus maps with verified coordinates.
- Notifications and messaging.

## Accessibility

Semantic HTML, labelled form fields, keyboard navigation, visible focus styles, and responsive layouts are included. Tested manually on desktop and mobile viewports.
