
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


## Colors Scheme

The Diary Application uses a cohesive color scheme to enhance its visual appeal and user experience:

- **Primary Color**: `#2F4858`
  - *Usage*: Main text color and accents.

- **Background Color**: `#F7F9FB`
  - *Usage*: Background of the application.

- **Accent Color**: `#E93636`
  - *Usage*: Highlighted elements and interactive states.

- **Secondary Color**: `#A0B181`
  - *Usage*: Borders and subtle accents.

## Color Integration

### CSS Usage

Apply the colors to relevant elements in your CSS file (`list.css`):

```css
body {
    color: #2F4858;
    background-color: #F7F9FB;
    /* Additional styles */
}

.header {
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Additional styles */
}

.nav-bar {
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Additional styles */
}

.tab-bar {
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Additional styles */
}

.calender {
    background-color: #FFFFFF;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    /* Additional styles */
}

.dates div:hover {
    background-color: #BDBDBD;
    /* Additional styles */
}

.list-container {
    background-color: #F7F9FB;
    /* Additional styles */
}

.body-text span {
    color: #E93636;
    /* Additional styles */
}

.body-text span:hover {
    color: #B70000;
    /* Additional styles */
}

.footer-container {
    background-color: #FFFFFF;
    /* Additional styles */
}
```

### Additional Notes

- Ensure consistent use of colors across different components and sections of the application.
- Use the color values provided to maintain visual harmony and user interface coherence.
- Test the application on various devices and screen sizes to ensure colors appear as intended.
- For accessibility considerations, ensure sufficient color contrast for text and interactive elements.

---

This documentation provides clarity on the color palette used in your Diary Application, along with practical instructions on how to implement and maintain color styles in your CSS files. Adjust the headings and content as per your project's specific requirements and conventions.

## Fonts Used

The Diary Application utilizes the following fonts to enhance its visual presentation:

- **Open Sans**
  - *Usage*: General text throughout the application.
  
- **Merriweather**
  - *Usage*: Date display in the calendar section.
  
- **Lato**
  - *Usage*: Days of the week in the calendar section.
  
- **Playfair Display**
  - *Usage*: Headers and titles in various sections.

## Font Integration
```

### CSS Usage


```css
body {
    font-family: 'Open Sans', sans-serif;
    /* Additional styles */
}

.calender {
    font-family: 'Merriweather', serif;
    /* Additional styles */
}

.days div, .dates div {
    font-family: 'Lato', sans-serif;
    /* Additional styles */
}

.header h1 {
    font-family: 'Playfair Display', serif;
    /* Additional styles */
}
```

### Fallback Mechanism

Ensure your CSS provides fallback fonts or relies on browser defaults in case Google Fonts are not loaded or unavailable.

## Additional Notes

- Make sure to test the application on different devices and browsers to ensure consistent typography and layout.
- Refer to the `list.css` file for specific styles and adjustments related to typography and fonts.
- For any issues with font loading or display, debug using browser developer tools and verify the network requests for font files.

---

This organized documentation provides a clear structure for understanding how fonts are integrated into your Diary Application, ensuring readability and maintainability for future updates or modifications. Adjust the headings and content as per your project's specific needs.

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