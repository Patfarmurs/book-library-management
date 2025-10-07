# 📚 Book Library Management System

![Version](https://img.shields.io/badge/version-1.0.0-green.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?logo=tailwind-css&logoColor=white)

A modern, responsive library management system built with vanilla JavaScript and Tailwind CSS. Perfect for small to medium-sized libraries, schools, or personal book collections.

## ✨ Features

- 🔐 **User Authentication** - Secure sign-in system with persistent user sessions
- 📖 **Book Management** - Add, edit, delete, and organize your book collection
- 🔍 **Advanced Search** - Search by title, author, topic, or filter by borrower
- 📋 **Checkout System** - Track book loans with borrower information and dates
- 📊 **Statistics Dashboard** - Real-time stats on total, available, and checked-out books
- 🖨️ **Print Reports** - Generate printable reports for all books, search results, or checkouts
- 📱 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- 💾 **Local Storage** - No database required, data persists in browser

## 🚀 Quick Start

### Installation

No installation required! This is a single HTML file that runs directly in your browser.

```bash
# Clone the repository
git clone https://github.com/Patfarmurs/book-library-management.git

# Navigate to the project directory
cd book-library-management

# Open index.html in your browser
open index.html

First Time Setup
Open index.html in any modern web browser
Sign in with your username and email address
The system comes pre-loaded with sample books for demonstration
Start managing your library immediately!
📖 Usage Guide
Managing Books
Add Books: Click "Add Book" button and fill in the required information (Title, Author, Topic, Shelf Location, Quantity)
View Details: Click on any book card to see detailed information
Edit Quantity: Use "Adjust Qty" button to modify book quantities
Delete Books: Remove books permanently from the library
Checkout Process
Click on a book to view its details
Click "Check Out" button (only available for available books)
Enter the borrower's name
Confirm the checkout
Use "Check In" to return books
Search & Filter
Text Search: Search by book title, author, or topic using the search bar
Filter by Borrower: View all books borrowed by a specific person
Clear Filters: Return to viewing all books by clicking the home button
Print Reports
Access the "Print Options" dropdown to generate reports:

Print All Books: Complete library inventory
Print Search Results: Current filtered/searched books
Print Checked Out Books: Books currently on loan with borrower details
🛠️ Technical Specifications
Frontend Technologies
✅ HTML5 with semantic markup
✅ Vanilla JavaScript (ES6+)
✅ Tailwind CSS for styling
✅ Custom CSS for enhanced styling
✅ Responsive design principles
✅ Local Storage for data persistence
Browser Compatibility
✅ Chrome 60+
✅ Firefox 55+
✅ Safari 12+
✅ Edge 79+
✅ Mobile browsers
File Structure
book-library-management/
├── index.html              # Main HTML structure
├── app.js                  # JavaScript functionality
├── styles.css              # Custom CSS styles
├── README.md              # This file
└── screenshots/           # Application screenshots (optional)

Architecture
index.html: Contains the HTML structure and layout
app.js: Handles all JavaScript functionality including:
User authentication
Book management operations
Search and filtering
Local storage operations
Print functionality
styles.css: Custom CSS styles and responsive design rules
💾 Data Storage
This application uses browser Local Storage to persist data. All information is stored locally on your device.

Key Points:

Data persists between browser sessions
No external database required
Data is private to your browser
Clearing browser data will reset the library
Storage Keys:

libraryBooks - Contains all book data
currentUser - Stores signed-in user information
🎨 Customization
Styling
The application uses a combination of Tailwind CSS and custom CSS:

Tailwind CSS: Utility classes for rapid styling
Custom CSS (styles.css): Additional styles and animations
Responsive Design: Mobile-first approach with breakpoints
Functionality
Extend the application by modifying app.js:

Add new book fields (ISBN, publication date, etc.)
Implement due date tracking and overdue notifications
Add book categories or tags
Create advanced reporting features
Integrate with external APIs for book information
Add barcode scanning functionality
Styling Customization
Modify styles.css to:

Change color schemes and themes
Add custom animations
Modify layout and spacing
Create custom components
🆘 Troubleshooting
Common Issues
Data Not Saving

Ensure your browser allows Local Storage
Check that you're not in private/incognito mode
Verify browser storage isn't full
Print Not Working

Check your browser's print settings
Ensure pop-ups are allowed for the site
Try using Ctrl+P (Cmd+P on Mac) as an alternative
Layout Issues

Ensure stable internet connection to load Tailwind CSS from CDN
Check that all files (HTML, CSS, JS) are in the same directory
Try refreshing the page
Check browser console for any JavaScript errors
JavaScript Not Working

Ensure app.js is properly linked in index.html
Check browser console for JavaScript errors
Verify file paths are correct
Reset Application
To reset the application and clear all data:

// Open browser console (F12) and run:
localStorage.removeItem('libraryBooks');
localStorage.removeItem('currentUser');
location.reload();

🤝 Contributing
Contributions are welcome! Here's how you can help:

Fork the repository
Create a feature branch (git checkout -b feature/AmazingFeature)
Commit your changes (git commit -m 'Add some AmazingFeature')
Push to the branch (git push origin feature/AmazingFeature)
Open a Pull Request
Development Guidelines
Follow existing code style and conventions
Test thoroughly across different browsers
Update documentation for new features
Keep the modular file structure intact
Add comments for complex functionality
Code Organization
HTML: Semantic markup in index.html
JavaScript: All functionality in app.js with clear function separation
CSS: Custom styles in styles.css, utility classes via Tailwind CDN
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
https://tailwindcss.com/ - Utility-first CSS framework
https://fonts.google.com/ - Poppins and Inter font families
Icons and emojis for enhanced user experience
📞 Support
If you encounter any issues or have questions:

Check the #-troubleshooting section
Search existing https://github.com/Patfarmurs/book-library-management/issues
Create a new issue with detailed information
🔧 Development Setup
For developers who want to contribute:

Clone the repository
Open the project in your preferred code editor
Make changes to the appropriate files:
HTML structure: index.html
JavaScript functionality: app.js
Custom styling: styles.css
Test in multiple browsers
Submit a pull request
📈 Future Enhancements
Planned features for future releases:

[ ] Due date tracking and overdue notifications
[ ] Book reservation system
[ ] Advanced reporting with charts
[ ] Export data to CSV/PDF
[ ] Multi-user support with roles
[ ] Book cover image support
[ ] Barcode scanning integration
[ ] Email notifications
[ ] Dark mode theme
[ ] Offline functionality with service workers
Made with ❤️ for libraries everywhere