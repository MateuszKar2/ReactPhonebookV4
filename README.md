# ReactPhonebookV4

**ReactPhonebookV4** is the fourth version of a React-based phonebook application. It builds upon the previous versions, introducing even more features such as the ability to categorize contacts, enhanced state management, better error handling, and optimized performance.

## New Features and Improvements in Version 4:
- **Categorization of Contacts**: Users can categorize contacts (e.g., family, friends, work) and filter them based on the category.
- **Error Handling**: Improved error handling for better user feedback and validation.
- **Performance Optimization**: Further performance optimizations to handle larger datasets with minimal lag.
- **UI Enhancements**: Enhanced design for better user interaction, especially on mobile devices.
- **State Management**: Utilized context API and hooks to better manage global state across the app.

## Features
- **Add Contacts**: Add new contacts with name, phone number, category, and notes.
- **Edit Contacts**: Edit existing contact details, including category and additional notes.
- **Delete Contacts**: Remove contacts from your phonebook.
- **Search and Filter**: Search contacts and filter them by name or category.
- **Category Management**: Categorize contacts into groups like "Family", "Friends", "Work", etc.
- **Responsive Design**: Optimized for both mobile and desktop devices.
- **Local Storage**: Stores contacts in `localStorage` so data is preserved across sessions.
- **Error Handling**: Improved error handling during form submissions and other interactions.
- **Sorting Contacts**: Sort contacts by name, category, or creation date.

## Technologies Used
- **React**: JavaScript library for building user interfaces.
- **React Context API**: Used for managing global state.
- **localStorage**: For storing contacts and persisting data across sessions.
- **CSS**: Styling to ensure a clean, modern, and responsive user interface.
- **React Hooks**: `useState`, `useEffect`, `useContext`, etc., for managing component state and lifecycle.

## How to Use

1. **Add a Contact**: Fill out the form with contact details, including category and notes, then click "Add".
2. **Edit a Contact**: Click on a contact to edit their details, including category and notes.
3. **Search Contacts**: Use the search bar to filter contacts by name or category.
4. **Categorize Contacts**: Assign categories to your contacts, such as "Family", "Friends", or "Work".
5. **Delete a Contact**: Remove a contact by clicking the "Delete" button.
6. **Sort Contacts**: Sort your contacts alphabetically or by creation date.

### Tabela porównawcza **ReactPhonebookV3** vs **ReactPhonebookV4**:

```markdown
# Comparison: ReactPhonebookV3 vs ReactPhonebookV4

Below is a comparison between **ReactPhonebookV3** and **ReactPhonebookV4**, highlighting the key differences and new features introduced in version 4.

| **Feature**                    | **ReactPhonebookV3 (v3)**                                      | **ReactPhonebookV4 (v4)**                                           |
|---------------------------------|---------------------------------------------------------------|---------------------------------------------------------------------|
| **Add Contacts**                | Allows adding new contacts with basic details.                | Same functionality with the addition of a category and notes field. |
| **Edit Contacts**               | Allows editing existing contacts.                             | Same functionality, but with the ability to edit categories and notes. |
| **Delete Contacts**             | Allows deleting individual contacts.                          | Same functionality with improved UI for deleting contacts.          |
| **Search and Filter**           | Real-time search by name.                                    | Enhanced search functionality with the ability to filter by category as well. |
| **Local Storage**               | Stores contacts in `localStorage`, persisting data.           | Same functionality, but performance and handling have been optimized. |
| **Data Validation**             | Basic form validation for phone number format.                | Improved validation for phone number, name, category, and other fields. |
| **Sorting Contacts**            | Sorting by name or creation date is not available.            | Sorting by name, category, or creation date.                        |
| **Responsive Design**           | Optimized for mobile and desktop.                             | Improved responsiveness with design enhancements for all devices.   |
| **UI / UX**                     | Basic user interface with minimal styling.                    | Enhanced UI with modern design, dynamic forms, and better feedback. |
| **Category Management**         | No category management.                                      | Ability to categorize contacts into groups like "Family", "Work", etc. |
| **State Management**            | Managed using React hooks (`useState`, `useEffect`) and props. | Utilizes React Context API for global state management.             |
| **Error Handling**              | No explicit error handling.                                  | Enhanced error handling for user actions (e.g., form submission).  |
| **Performance**                 | Basic performance optimized for small datasets.              | Optimized for larger datasets and complex state management.        |
| **Components**                  | Basic components for adding, editing, and displaying contacts. | More modular components, including categorization and improved state management. |
| **User Instructions (README)**  | Basic instructions with minimal details.                      | More detailed README, with step-by-step usage and new features explained. |


### Key Differences and New Features in Version 4:
- **Category Management**: Version 4 introduces the ability to categorize contacts (e.g., Family, Friends, Work), which can be used to filter and organize your contacts.
- **Error Handling**: Version 4 includes better error handling and user feedback when adding or editing contacts.
- **Enhanced Search**: Search functionality is enhanced with the ability to filter contacts by name or category.
- **Improved UI/UX**: The UI has been further enhanced with better responsiveness and a modern design for improved user interaction.
- **State Management**: React Context API has been introduced for managing global state across the app, allowing for better performance and scalability.
- **Performance Improvements**: Further optimizations ensure the app performs well with large datasets, minimizing lag.
- **Sorting Contacts**: Contacts can now be sorted by name, category, or creation date for easier management.

### Summary:
**ReactPhonebookV4** introduces several significant enhancements over **ReactPhonebookV3**, including category management, improved error handling, enhanced UI, and better performance. The use of React Context API for global state management and new features like contact sorting and categorization make this version even more powerful and user-friendly.
