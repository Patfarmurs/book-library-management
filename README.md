<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Book Library Management - README</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <style>
        body {
            box-sizing: border-box;
            font-family: 'Inter', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }
        .code-block {
            background: #1a1a1a;
            color: #e5e5e5;
            border-radius: 8px;
            padding: 1rem;
            font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
            font-size: 0.875rem;
            overflow-x: auto;
        }
        .feature-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
        }
        .feature-card:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        .badge {
            display: inline-block;
            padding: 0.25rem 0.75rem;
            border-radius: 9999px;
            font-size: 0.75rem;
            font-weight: 500;
        }
        .tech-badge {
            background: #e0f2fe;
            color: #0277bd;
        }
        .version-badge {
            background: #e8f5e8;
            color: #2e7d32;
        }
        .status-badge {
            background: #fff3e0;
            color: #f57c00;
        }
    </style>
</head>
<body>
    <div class="min-h-screen py-12 px-4">
        <div class="max-w-4xl mx-auto">
            <!-- Header -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <div class="text-center mb-6">
                    <h1 class="text-4xl font-bold text-gray-900 mb-2">📚 Book Library Management System</h1>
                    <p class="text-xl text-gray-600">A comprehensive web-based library management solution</p>
                </div>
                
                <div class="flex flex-wrap justify-center gap-2 mb-6">
                    <span class="badge version-badge">v1.0.0</span>
                    <span class="badge tech-badge">HTML5</span>
                    <span class="badge tech-badge">JavaScript</span>
                    <span class="badge tech-badge">Tailwind CSS</span>
                    <span class="badge status-badge">Production Ready</span>
                </div>
                
                <div class="text-center">
                    <p class="text-gray-700 leading-relaxed">
                        A modern, responsive library management system built with vanilla JavaScript and Tailwind CSS. 
                        Perfect for small to medium-sized libraries, schools, or personal book collections.
                    </p>
                </div>
            </div>

            <!-- Quick Start -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">🚀 Quick Start</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Installation</h3>
                        <div class="code-block">
# Clone or download the HTML file
# No installation required - runs directly in browser

# Simply open the HTML file in any modern web browser
open book-library-management.html
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">First Time Setup</h3>
                        <ol class="list-decimal list-inside space-y-2 text-gray-700">
                            <li>Open the application in your web browser</li>
                            <li>Sign in with your username and email address</li>
                            <li>The system comes pre-loaded with sample books for demonstration</li>
                            <li>Start managing your library immediately!</li>
                        </ol>
                    </div>
                </div>
            </div>

            <!-- Features -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">✨ Features</h2>
                <div class="grid md:grid-cols-2 gap-6">
                    <div class="feature-card bg-blue-50 p-6 rounded-lg border border-blue-100">
                        <div class="flex items-center mb-3">
                            <div class="bg-blue-500 text-white p-2 rounded-lg mr-3">
                                🔐
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800">User Authentication</h3>
                        </div>
                        <p class="text-gray-600">Secure sign-in system with persistent user sessions</p>
                    </div>
                    
                    <div class="feature-card bg-green-50 p-6 rounded-lg border border-green-100">
                        <div class="flex items-center mb-3">
                            <div class="bg-green-500 text-white p-2 rounded-lg mr-3">
                                📖
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800">Book Management</h3>
                        </div>
                        <p class="text-gray-600">Add, edit, delete, and organize your book collection</p>
                    </div>
                    
                    <div class="feature-card bg-purple-50 p-6 rounded-lg border border-purple-100">
                        <div class="flex items-center mb-3">
                            <div class="bg-purple-500 text-white p-2 rounded-lg mr-3">
                                🔍
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800">Advanced Search</h3>
                        </div>
                        <p class="text-gray-600">Search by title, author, topic, or filter by borrower</p>
                    </div>
                    
                    <div class="feature-card bg-amber-50 p-6 rounded-lg border border-amber-100">
                        <div class="flex items-center mb-3">
                            <div class="bg-amber-500 text-white p-2 rounded-lg mr-3">
                                📋
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800">Checkout System</h3>
                        </div>
                        <p class="text-gray-600">Track book loans with borrower information and dates</p>
                    </div>
                    
                    <div class="feature-card bg-red-50 p-6 rounded-lg border border-red-100">
                        <div class="flex items-center mb-3">
                            <div class="bg-red-500 text-white p-2 rounded-lg mr-3">
                                📊
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800">Statistics Dashboard</h3>
                        </div>
                        <p class="text-gray-600">Real-time stats on total, available, and checked-out books</p>
                    </div>
                    
                    <div class="feature-card bg-indigo-50 p-6 rounded-lg border border-indigo-100">
                        <div class="flex items-center mb-3">
                            <div class="bg-indigo-500 text-white p-2 rounded-lg mr-3">
                                🖨️
                            </div>
                            <h3 class="text-lg font-semibold text-gray-800">Print Reports</h3>
                        </div>
                        <p class="text-gray-600">Generate printable reports for all books, search results, or checkouts</p>
                    </div>
                </div>
            </div>

            <!-- Technical Specifications -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🛠️ Technical Specifications</h2>
                <div class="grid md:grid-cols-2 gap-8">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Frontend Technologies</h3>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> HTML5 with semantic markup</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Vanilla JavaScript (ES6+)</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Tailwind CSS for styling</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Responsive design principles</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Local Storage for data persistence</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Browser Compatibility</h3>
                        <ul class="space-y-2 text-gray-700">
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Chrome 60+</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Firefox 55+</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Safari 12+</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Edge 79+</li>
                            <li class="flex items-center"><span class="text-green-500 mr-2">✓</span> Mobile browsers</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Usage Guide -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">📖 Usage Guide</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Managing Books</h3>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <ul class="space-y-2 text-gray-700">
                                <li><strong>Add Books:</strong> Click "Add Book" button and fill in the required information</li>
                                <li><strong>View Details:</strong> Click on any book card to see detailed information</li>
                                <li><strong>Edit Quantity:</strong> Use "Adjust Qty" button to modify book quantities</li>
                                <li><strong>Delete Books:</strong> Remove books permanently from the library</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Checkout Process</h3>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <ol class="list-decimal list-inside space-y-2 text-gray-700">
                                <li>Click on a book to view its details</li>
                                <li>Click "Check Out" button (only available for available books)</li>
                                <li>Enter the borrower's name</li>
                                <li>Confirm the checkout</li>
                                <li>Use "Check In" to return books</li>
                            </ol>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Search & Filter</h3>
                        <div class="bg-gray-50 p-4 rounded-lg">
                            <ul class="space-y-2 text-gray-700">
                                <li><strong>Text Search:</strong> Search by book title, author, or topic</li>
                                <li><strong>Filter by Borrower:</strong> View all books borrowed by a specific person</li>
                                <li><strong>Clear Filters:</strong> Return to viewing all books</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Data Storage -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">💾 Data Storage</h2>
                <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
                    <div class="flex items-start">
                        <div class="bg-blue-500 text-white p-2 rounded-lg mr-4 mt-1">
                            ℹ️
                        </div>
                        <div>
                            <h3 class="text-lg font-semibold text-blue-900 mb-2">Local Storage</h3>
                            <p class="text-blue-800 mb-3">
                                This application uses browser Local Storage to persist data. All information is stored locally on your device.
                            </p>
                            <ul class="space-y-1 text-blue-700">
                                <li>• Data persists between browser sessions</li>
                                <li>• No external database required</li>
                                <li>• Data is private to your browser</li>
                                <li>• Clearing browser data will reset the library</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Customization -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🎨 Customization</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Styling</h3>
                        <p class="text-gray-700 mb-3">The application uses Tailwind CSS classes for styling. You can customize:</p>
                        <ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
                            <li>Color schemes by modifying Tailwind color classes</li>
                            <li>Layout and spacing using Tailwind utility classes</li>
                            <li>Typography by changing font families and sizes</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Functionality</h3>
                        <p class="text-gray-700 mb-3">Extend the application by modifying the JavaScript:</p>
                        <ul class="list-disc list-inside space-y-1 text-gray-600 ml-4">
                            <li>Add new book fields (ISBN, publication date, etc.)</li>
                            <li>Implement due date tracking</li>
                            <li>Add book categories or tags</li>
                            <li>Create advanced reporting features</li>
                        </ul>
                    </div>
                </div>
            </div>

            <!-- Support -->
            <div class="bg-white rounded-lg shadow-xl p-8 mb-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-6">🆘 Support & Troubleshooting</h2>
                <div class="space-y-6">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Common Issues</h3>
                        <div class="space-y-4">
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-gray-800 mb-2">Data Not Saving</h4>
                                <p class="text-gray-700">Ensure your browser allows Local Storage and isn't in private/incognito mode.</p>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-gray-800 mb-2">Print Not Working</h4>
                                <p class="text-gray-700">Check your browser's print settings and ensure pop-ups are allowed.</p>
                            </div>
                            
                            <div class="bg-gray-50 p-4 rounded-lg">
                                <h4 class="font-semibold text-gray-800 mb-2">Layout Issues</h4>
                                <p class="text-gray-700">Ensure you have a stable internet connection to load Tailwind CSS from CDN.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-3">Reset Application</h3>
                        <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                            <p class="text-yellow-800 mb-2">To reset the application and clear all data:</p>
                            <div class="code-block">
// Open browser console (F12) and run:
localStorage.removeItem('libraryBooks');
localStorage.removeItem('currentUser');
location.reload();
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- License -->
            <div class="bg-white rounded-lg shadow-xl p-8">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">📄 License & Credits</h2>
                <div class="space-y-4">
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Open Source</h3>
                        <p class="text-gray-700">
                            This project is open source and free to use, modify, and distribute. 
                            Perfect for educational purposes, small libraries, or as a starting point for larger projects.
                        </p>
                    </div>
                    
                    <div>
                        <h3 class="text-lg font-semibold text-gray-800 mb-2">Technologies Used</h3>
                        <ul class="list-disc list-inside space-y-1 text-gray-600">
                            <li><a href="https://tailwindcss.com/" class="text-blue-600 hover:underline" target="_blank">Tailwind CSS</a> - Utility-first CSS framework</li>
                            <li><a href="https://fonts.google.com/" class="text-blue-600 hover:underline" target="_blank">Google Fonts</a> - Web fonts</li>
                            <li>Vanilla JavaScript - No external dependencies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'98acdb3fe29841e2',t:'MTc1OTgzNDQyNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>
</html>
