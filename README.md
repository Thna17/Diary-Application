
# Diary Application

## Project Overview

The Diary Web Application project aims to develop a functional web application for personal diary management. It focuses on implementing CRUD operations (Create, Read, Update, Delete) for diary entries without a backend or database. The project will be evaluated based on adherence to specified deliverables and standards outlined in this convention guide.

## Project Objectives

- **Create Prototype:**
  - Develop wireframes, UI screens, and mockups to visualize the website's layout and functionality before actual development.

- **Implement CRUD Functionality:**
  - Develop robust Create, Read, Update, and Delete operations for diary entries.

- **Design Customization:**
  - Create a unique and visually appealing design tailored to user preferences.

- **Enhance Front-end Skills:**
  - Improve proficiency in HTML, CSS, JavaScript, and responsive design techniques.

- **Portfolio Development:**
  - Build a polished project for showcasing in a professional portfolio.

## Scope

The Diary Web Application will include the following features and pages:

- List page
- View page
- Write page
- Edit page

## Timeline

1. **Planning and Research (Convention Guide):** 14 June, 2024 - 15 June, 2024
   - Define project requirements and conduct user research.
   - Create wireframes and finalize design concepts.

2. **Design:** 16 June, 2024 - 20 June, 2024
   - Develop UI/UX mockups and refine visual design elements.
   - Ensure cohesive branding and aesthetic appeal.

3. **Development:** 21 June, 2024 - 23 June, 2024
   - Implement front-end functionality using HTML, CSS, and JavaScript.
   - Integrate CRUD operations and local storage for data persistence.

4. **Deployment:** 24 June, 2024
   - Prepare documentation and deploy the application to a live server.
   - Perform final checks and optimizations before launch.

## Resources Required

### Development Tools:

- HTML
- CSS (including a CSS framework like Bootstrap or Tailwind CSS)
- JavaScript (ECMAScript)
- Local Storage (for data management)

### Design Tools:

- Figma (for wireframing and mockups)

### Hosting:

- GitHub Pages

## Folder Structure

```
diary-app/
│
├── assets/
│   └── images/
│
├── pages/
│   ├── homepage.html
│   ├── journal.html
│   └── settings.html
│
├── src/
│   ├── components/
│   │   ├── header.html
│   │   └── footer.js
│   ├── css/
│   │   └── styles.css
│   └── js/
│       ├── script.js
│       └── local-storage.js
│
├── index.html
├── README.md
└── .gitignore
```

## Folder Naming Convention

- Use lowercase letters.
- Separate words with hyphens (`-`).
- Be descriptive and use meaningful names that indicate the contents or purpose of the folder.

## Folder and File Description

- **assets/**: Contains images and CSS files for styling.
- **pages/**: Directory containing individual HTML files for each major page of the application.
  - **homepage.html**: HTML file for the homepage.
  - **journal.html**: HTML file for the journal page.
  - **settings.html**: HTML file for the settings page.
- **src/**: Contains source code for the application organized by components and scripts.
  - **components/**: Directory for reusable HTML components.
    - **header.html**: HTML file for the header component.
    - **footer.js**: JavaScript file for the footer component.
  - **css/**: Directory for CSS stylesheets.
    - **styles.css**: Main CSS stylesheet for styling.
  - **js/**: Directory for JavaScript files.
    - **script.js**: Main JavaScript file for functional logic.
    - **local-storage.js**: Manages interaction with local storage for data persistence.
- **index.html**: Main entry point for your application.
- **README.md**: Project documentation and instructions.
- **.gitignore**: Specifies files and directories that should be ignored by Git.

## File Naming Convention

### HTML Files

- Use lowercase letters.
- Separate words with hyphens (`-`).

### CSS Files

- Use lowercase letters.
- Separate words with hyphens (`-`).

### JavaScript Files

- Use camelCase.

## Style Guides

### Color Scheme

- **Primary Colors:**
  - **diary-soft-blue**: #EEF5FF (Soft Blue)
  - **diary-light-azure**: #B4D4FF (Light Azure)

- **Background Colors:**
  - **diary-sky-blue**: #86B6F6 (Sky Blue)
  - **diary-deep-teal**: #176B87 (Deep Teal)

- **Text Colors:**
  - **diary-text-white**: #FFFFFF (White)
  - **diary-text-gray**: #757575 (Warm Gray)

### Fonts

- **Google Font:** Lora ([Link](https://fonts.google.com/specimen/Lora))
- **Adobe Font:** Raleway ([Link](https://fonts.google.com/specimen/Raleway))

#### Font Usage

- **Headings:** Lora, 700 weight
- **Subheadings:** Lora, 400 weight
- **Body Text:** Raleway, 400 weight
- **Quotes and Special Text:** Raleway, 400 italic

### Space

- **Desktop (min-width: 1024px):**
  - **Spacing Variables:**
    - `-spacing-small-desktop`: 10px
    - `-spacing-medium-desktop`: 20px
    - `-spacing-large-desktop`: 30px

- **Tablet (min-width: 768px) and (max-width: 1023px):**
  - **Spacing Variables:**
    - `-spacing-small-tablet`: 8px
    - `-spacing-medium-tablet`: 16px
    - `-spacing-large-tablet`: 24px

- **Mobile (max-width: 767px):**
  - **Spacing Variables:**
    - `-spacing-small-mobile`: 6px
    - `-spacing-medium-mobile`: 12px
    - `-spacing-large-mobile`: 18px

## Commenting Guidelines

### General Principles

1. **Be Clear:** Explain what the code does.
2. **Be Brief:** Keep comments short and to the point.
3. **Be Relevant:** Only comment on code that needs explanation.
4. **Keep Updated:** Update comments when code changes.

### HTML Comments

- **Section Headers:** Label major sections.

```html
<!-- Main Navigation Bar -->
<nav>...</nav>
```

- **Descriptive Comments:** Explain complex code.

```html
<!-- Search form with autocomplete -->
<form>...</form>
```

- **TODO Comments:** Indicate work in progress.

```html
<!-- TODO: Add more footer links -->
<footer>...</footer>
```

### CSS Comments

- **Section Headers:** Group related styles.

```css
/* Header Styles */
header { ... }

/* Navigation Styles */
nav { ... }
```

- **Specific Styles:** Explain specific styles.

```css
/* Flexbox layout for centering */
.container {
    display: flex;
    justify-content: center;
    align-items: center;
}
```

### JavaScript Comments

- **Function and Module Comments:** Describe functions and modules.

```javascript
/**
 * Initialize the app
 */
function initializeApp() { ... }
```

- **Inline Comments:** Explain complex logic.

```javascript
// Check if the user is authenticated
if (user.isAuthenticated()) {
    window.location.href = '/dashboard';
}
```

- **TODO Comments:** Indicate further work needed.

```javascript
// TODO: Add error handling
function fetchData(url) { ... }
```

## Semantic HTML

- Use semantic HTML elements to improve accessibility and SEO.
  - `<header>`: Represents the introductory content or a set of navigational links.
  - `<nav>`: Defines a set of navigation links.
  - `<main>`: Specifies the main content of the document.
  - `<section>`: Defines sections in a document.
  - `<article>`: Represents a self-contained piece of content.
  - `<footer>`: Represents the footer of a document or section.
  - `<aside>`: Defines content aside from the content it is placed in.

## Version Control

![Git Flow Diagram](https://prod-files-secure.s3.us-west-2.amazonaws.com/d35120b4-4385-4ff8-8cd8-b8821e052c53/ccf151d1-d3bf-4209-bbf8-d41168579922/git_flow_diagram.png)
![alt text](./assets/images/CyberNexus%20GitFlow%20Diagram.png)
### Issue Naming Convention

- **Issue Naming**: Use a descriptive title followed by a concise description. Example: `bug: Unable to delete entries on mobile`.

### Commit Message

- **Commit Prefixes**:
  - **Init**: When initializing the workspace on a new branch. Example: `Init: setup project structure`
  - **Add**: When adding new functionality. Example: `Add: homepage layout and styling`
  - **Update**: When updating existing functionality. Example: `Update: enhance responsive design for homepage`
  - **Fix**: When fixing something. Example: `Fix: correct navigation bar alignment`
  - **Remove**: When removing something. Example: `Remove: deprecated code for old layout`
  - **Merge**: When merging your branch into a parent branch. Example: `Merge: feature