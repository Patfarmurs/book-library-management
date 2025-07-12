
        document.addEventListener('DOMContentLoaded', function() {
            // Check if user is signed in
            const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
            const signInOverlay = document.getElementById('sign-in-overlay');
            const userDisplay = document.getElementById('user-display');
            const signOutBtn = document.getElementById('sign-out-btn');
            
            // Show/hide sign-in overlay based on authentication status
            if (!currentUser) {
                signInOverlay.classList.remove('hidden');
                document.getElementById('user-info').classList.add('hidden');
            } else {
                signInOverlay.classList.add('hidden');
                document.getElementById('user-info').classList.remove('hidden');
                userDisplay.textContent = currentUser.username;
            }
            
            // Sign in form submission
            document.getElementById('sign-in-form').addEventListener('submit', function(e) {
                e.preventDefault();
                const username = document.getElementById('username').value.trim();
                const email = document.getElementById('email').value.trim();
                
                if (username && email) {
                    const user = { username, email };
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    signInOverlay.classList.add('hidden');
                    document.getElementById('user-info').classList.remove('hidden');
                    userDisplay.textContent = username;
                }
            });
            
            // Sign out functionality
            signOutBtn.addEventListener('click', function() {
                localStorage.removeItem('currentUser');
                signInOverlay.classList.remove('hidden');
                document.getElementById('user-info').classList.add('hidden');
            });
            
            // Initialize the library with sample data if empty
            if (!localStorage.getItem('libraryBooks')) {
                const sampleBooks = [
                    {
                        id: 1,
                        title: "1984",
                        author: "George Orwell",
                        topic: "Dystopian Fiction",
                        shelf: "A1",
                        quantity: 3,
                        checkedOut: 1,
                        checkouts: [
                            {
                                borrower: "John Smith",
                                date: "2023-05-10"
                            }
                        ]
                    },
                    {
                        id: 2,
                        title: "To Kill a Mockingbird",
                        author: "Harper Lee",
                        topic: "Classic Fiction",
                        shelf: "B2",
                        quantity: 2,
                        checkedOut: 0,
                        checkouts: []
                    },
                    {
                        id: 3,
                        title: "The Great Gatsby",
                        author: "F. Scott Fitzgerald",
                        topic: "Classic Fiction",
                        shelf: "B3",
                        quantity: 1,
                        checkedOut: 1,
                        checkouts: [
                            {
                                borrower: "Jane Doe",
                                date: "2023-05-15"
                            }
                        ]
                    },
                    {
                        id: 4,
                        title: "Pride and Prejudice",
                        author: "Jane Austen",
                        topic: "Romance",
                        shelf: "C1",
                        quantity: 2,
                        checkedOut: 0,
                        checkouts: []
                    },
                    {
                        id: 5,
                        title: "The Hobbit",
                        author: "J.R.R. Tolkien",
                        topic: "Fantasy",
                        shelf: "D2",
                        quantity: 3,
                        checkedOut: 2,
                        checkouts: [
                            {
                                borrower: "Mike Johnson",
                                date: "2023-05-12"
                            },
                            {
                                borrower: "Sarah Williams",
                                date: "2023-05-18"
                            }
                        ]
                    }
                ];
                localStorage.setItem('libraryBooks', JSON.stringify(sampleBooks));
            }

            // Global variables
            let books = JSON.parse(localStorage.getItem('libraryBooks')) || [];
            let currentBookId = null;
            let currentSearchResults = null;

            // DOM Elements
            const booksContainer = document.getElementById('books-container');
            const noBookMessage = document.getElementById('no-books-message');
            const bookListTitle = document.getElementById('book-list-title');
            const totalBooksEl = document.getElementById('total-books');
            const availableBooksEl = document.getElementById('available-books');
            const checkedOutBooksEl = document.getElementById('checked-out-books');
            
            // Modals
            const addBookModal = document.getElementById('add-book-modal');
            const bookDetailsModal = document.getElementById('book-details-modal');
            const checkoutModal = document.getElementById('checkout-modal');
            const adjustQuantityModal = document.getElementById('adjust-quantity-modal');
            const confirmDeleteModal = document.getElementById('confirm-delete-modal');
            const printDropdown = document.getElementById('print-dropdown');

            // Initialize the library
            displayBooks(books);
            updateStats();

            // Event Listeners
            document.getElementById('home-button').addEventListener('click', function() {
                displayBooks(books);
                bookListTitle.textContent = 'All Books';
                currentSearchResults = null;
            });

            document.getElementById('add-book-btn').addEventListener('click', function() {
                addBookModal.classList.remove('hidden');
            });

            document.getElementById('close-add-modal').addEventListener('click', function() {
                addBookModal.classList.add('hidden');
            });

            document.getElementById('add-book-form').addEventListener('submit', function(e) {
                e.preventDefault();
                addNewBook();
            });

            document.getElementById('search-btn').addEventListener('click', function() {
                searchBooks();
            });

            document.getElementById('search-input').addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    searchBooks();
                }
            });

            document.getElementById('close-details-modal').addEventListener('click', function() {
                bookDetailsModal.classList.add('hidden');
            });

            document.getElementById('checkout-btn').addEventListener('click', function() {
                bookDetailsModal.classList.add('hidden');
                checkoutModal.classList.remove('hidden');
                document.getElementById('checkout-title').textContent = books.find(book => book.id === currentBookId).title;
            });

            document.getElementById('close-checkout-modal').addEventListener('click', function() {
                checkoutModal.classList.add('hidden');
            });

            document.getElementById('checkout-form').addEventListener('submit', function(e) {
                e.preventDefault();
                checkoutBook();
            });

            document.getElementById('checkin-btn').addEventListener('click', function() {
                checkinBook();
            });

            document.getElementById('adjust-quantity-btn').addEventListener('click', function() {
                const book = books.find(book => book.id === currentBookId);
                bookDetailsModal.classList.add('hidden');
                adjustQuantityModal.classList.remove('hidden');
                document.getElementById('adjust-title').textContent = book.title;
                document.getElementById('current-quantity').textContent = book.quantity;
                document.getElementById('new-quantity').value = book.quantity;
            });

            document.getElementById('close-adjust-modal').addEventListener('click', function() {
                adjustQuantityModal.classList.add('hidden');
            });

            document.getElementById('adjust-quantity-form').addEventListener('submit', function(e) {
                e.preventDefault();
                adjustBookQuantity();
            });

            document.getElementById('delete-book-btn').addEventListener('click', function() {
                const book = books.find(book => book.id === currentBookId);
                bookDetailsModal.classList.add('hidden');
                confirmDeleteModal.classList.remove('hidden');
                document.getElementById('delete-title').textContent = book.title;
            });

            document.getElementById('close-delete-modal').addEventListener('click', function() {
                confirmDeleteModal.classList.add('hidden');
            });

            document.getElementById('cancel-delete').addEventListener('click', function() {
                confirmDeleteModal.classList.add('hidden');
            });

            document.getElementById('confirm-delete').addEventListener('click', function() {
                deleteBook();
            });

            document.getElementById('print-menu-btn').addEventListener('click', function() {
                printDropdown.classList.toggle('hidden');
            });
            
            document.getElementById('filter-by-borrower-btn').addEventListener('click', function() {
                populateBorrowerSelect();
                document.getElementById('filter-borrower-modal').classList.remove('hidden');
            });
            
            document.getElementById('close-filter-modal').addEventListener('click', function() {
                document.getElementById('filter-borrower-modal').classList.add('hidden');
            });
            
            document.getElementById('apply-filter').addEventListener('click', function() {
                filterByBorrower();
            });
            
            document.getElementById('clear-filter').addEventListener('click', function() {
                document.getElementById('borrower-select').value = '';
                displayBooks(books);
                bookListTitle.textContent = 'All Books';
                currentSearchResults = null;
                document.getElementById('filter-borrower-modal').classList.add('hidden');
            });
            
            document.getElementById('borrower-sort').addEventListener('change', function() {
                updateBorrowersList();
            });
            
            document.getElementById('refresh-borrowers').addEventListener('click', function() {
                updateBorrowersList();
            });

            // Close dropdown when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('#print-menu-btn') && !e.target.closest('#print-dropdown')) {
                    printDropdown.classList.add('hidden');
                }
            });

            document.getElementById('print-all').addEventListener('click', function() {
                printBooks(books, 'All Books in Library');
            });

            document.getElementById('print-search').addEventListener('click', function() {
                if (currentSearchResults) {
                    printBooks(currentSearchResults, 'Search Results');
                } else {
                    alert('Please perform a search first.');
                }
            });

            document.getElementById('print-checked-out').addEventListener('click', function() {
                const checkedOutBooks = books.filter(book => book.checkedOut > 0);
                printBooks(checkedOutBooks, 'Checked Out Books');
            });

            // Functions
            function displayBooks(booksToDisplay) {
                booksContainer.innerHTML = '';
                
                if (booksToDisplay.length === 0) {
                    noBookMessage.classList.remove('hidden');
                } else {
                    noBookMessage.classList.add('hidden');
                    
                    // Sort books alphabetically by title
                    const sortedBooks = [...booksToDisplay].sort((a, b) => a.title.localeCompare(b.title));
                    
                    sortedBooks.forEach(book => {
                        const bookCard = document.createElement('div');
                        bookCard.className = 'book-card bg-white border border-gray-200 rounded-lg shadow-sm p-4 hover:shadow-md';
                        bookCard.dataset.id = book.id;
                        
                        const availableCount = book.quantity - book.checkedOut;
                        const statusClass = availableCount > 0 ? 'bg-green-500' : 'bg-red-500';
                        
                        bookCard.innerHTML = `
                            <h3 class="text-lg font-semibold text-gray-800 mb-2">${book.title}</h3>
                            <p class="text-gray-600 mb-1">${book.author}</p>
                            <p class="text-gray-500 text-sm mb-3">${book.topic}</p>
                            <div class="flex justify-between items-center">
                                <div class="flex items-center">
                                    <span class="inline-block w-2 h-2 rounded-full ${statusClass} mr-2"></span>
                                    <span class="text-sm ${availableCount > 0 ? 'text-green-600' : 'text-red-600'}">
                                        ${availableCount > 0 ? `${availableCount} available` : 'Not available'}
                                    </span>
                                </div>
                                <span class="text-sm text-gray-500">Shelf: ${book.shelf}</span>
                            </div>
                        `;
                        
                        bookCard.addEventListener('click', function() {
                            showBookDetails(book.id);
                        });
                        
                        booksContainer.appendChild(bookCard);
                    });
                }
            }

            function updateStats() {
                const totalBooks = books.reduce((sum, book) => sum + book.quantity, 0);
                const checkedOutBooks = books.reduce((sum, book) => sum + book.checkedOut, 0);
                const availableBooks = totalBooks - checkedOutBooks;
                
                totalBooksEl.textContent = totalBooks;
                availableBooksEl.textContent = availableBooks;
                checkedOutBooksEl.textContent = checkedOutBooks;
                
                // Update borrowers list
                updateBorrowersList();
            }
            
            function updateBorrowersList() {
                const borrowersTableBody = document.getElementById('borrowers-table-body');
                const noBorrowersMessage = document.getElementById('no-borrowers-message');
                const borrowersList = document.getElementById('borrowers-list');
                const sortBy = document.getElementById('borrower-sort').value;
                
                // Clear previous content
                borrowersTableBody.innerHTML = '';
                
                // Create a list of all checkouts
                const allCheckouts = [];
                books.forEach(book => {
                    if (book.checkouts && book.checkouts.length > 0) {
                        book.checkouts.forEach(checkout => {
                            allCheckouts.push({
                                bookId: book.id,
                                bookTitle: book.title,
                                borrower: checkout.borrower,
                                date: checkout.date
                            });
                        });
                    }
                });
                
                if (allCheckouts.length === 0) {
                    noBorrowersMessage.classList.remove('hidden');
                    borrowersList.classList.add('hidden');
                } else {
                    noBorrowersMessage.classList.add('hidden');
                    borrowersList.classList.remove('hidden');
                    
                    // Sort based on selected option
                    switch(sortBy) {
                        case 'name':
                            allCheckouts.sort((a, b) => a.borrower.localeCompare(b.borrower));
                            break;
                        case 'date':
                            allCheckouts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Most recent first
                            break;
                        case 'title':
                            allCheckouts.sort((a, b) => a.bookTitle.localeCompare(b.bookTitle));
                            break;
                        default:
                            allCheckouts.sort((a, b) => a.borrower.localeCompare(b.borrower));
                    }
                    
                    allCheckouts.forEach(checkout => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${checkout.borrower}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${checkout.bookTitle}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${checkout.date}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <button class="text-indigo-600 hover:text-indigo-900 quick-return-btn" 
                                    data-book-id="${checkout.bookId}" data-borrower="${checkout.borrower}">
                                    Return Book
                                </button>
                            </td>
                        `;
                        borrowersTableBody.appendChild(row);
                    });
                    
                    // Add event listeners to quick return buttons
                    document.querySelectorAll('.quick-return-btn').forEach(btn => {
                        btn.addEventListener('click', function() {
                            const bookId = parseInt(this.dataset.bookId);
                            const borrower = this.dataset.borrower;
                            quickReturnBook(bookId, borrower);
                        });
                    });
                }
            }

            function addNewBook() {
                const title = document.getElementById('title').value.trim();
                const author = document.getElementById('author').value.trim();
                const topic = document.getElementById('topic').value.trim();
                const shelf = document.getElementById('shelf').value.trim();
                const quantity = parseInt(document.getElementById('quantity').value);
                
                const newBook = {
                    id: Date.now(),
                    title,
                    author,
                    topic,
                    shelf,
                    quantity,
                    checkedOut: 0,
                    checkouts: []
                };
                
                books.push(newBook);
                saveBooks();
                displayBooks(books);
                updateStats();
                
                // Reset form and close modal
                document.getElementById('add-book-form').reset();
                addBookModal.classList.add('hidden');
            }

            function searchBooks() {
                const searchTerm = document.getElementById('search-input').value.trim().toLowerCase();
                
                if (searchTerm === '') {
                    displayBooks(books);
                    bookListTitle.textContent = 'All Books';
                    currentSearchResults = null;
                    return;
                }
                
                const results = books.filter(book => 
                    book.title.toLowerCase().includes(searchTerm) || 
                    book.author.toLowerCase().includes(searchTerm) || 
                    book.topic.toLowerCase().includes(searchTerm)
                );
                
                currentSearchResults = results;
                displayBooks(results);
                bookListTitle.textContent = `Search Results (${results.length})`;
            }

            function showBookDetails(bookId) {
                currentBookId = bookId;
                const book = books.find(book => book.id === bookId);
                
                document.getElementById('book-detail-title').textContent = book.title;
                document.getElementById('detail-author').textContent = book.author;
                document.getElementById('detail-topic').textContent = book.topic;
                document.getElementById('detail-shelf').textContent = book.shelf;
                
                const availableCount = book.quantity - book.checkedOut;
                document.getElementById('detail-quantity').textContent = `${book.quantity} ${book.quantity === 1 ? 'copy' : 'copies'}`;
                document.getElementById('detail-available').textContent = `(${availableCount} available)`;
                
                const statusEl = document.getElementById('detail-status');
                if (availableCount > 0) {
                    statusEl.innerHTML = `<span class="inline-block w-3 h-3 rounded-full bg-green-500 mr-2"></span><span>Available</span>`;
                    document.getElementById('checkout-btn').classList.remove('hidden');
                    document.getElementById('checkin-btn').classList.add('hidden');
                    document.getElementById('checkout-details').classList.add('hidden');
                } else {
                    statusEl.innerHTML = `<span class="inline-block w-3 h-3 rounded-full bg-red-500 mr-2"></span><span>Not Available</span>`;
                    document.getElementById('checkout-btn').classList.add('hidden');
                    
                    if (book.checkedOut > 0) {
                        document.getElementById('checkin-btn').classList.remove('hidden');
                        document.getElementById('checkout-details').classList.remove('hidden');
                        
                        // Show the first checkout for simplicity
                        // In a real app, you might want to show all checkouts or let the user select which to check in
                        const checkout = book.checkouts[0];
                        document.getElementById('detail-borrower').textContent = checkout.borrower;
                        document.getElementById('detail-checkout-date').textContent = checkout.date;
                    }
                }
                
                bookDetailsModal.classList.remove('hidden');
            }

            function checkoutBook() {
                const book = books.find(book => book.id === currentBookId);
                const borrowerName = document.getElementById('borrower-name').value.trim();
                
                if (book.checkedOut < book.quantity) {
                    book.checkedOut++;
                    book.checkouts.push({
                        borrower: borrowerName,
                        date: new Date().toISOString().split('T')[0]
                    });
                    
                    saveBooks();
                    updateStats();
                    displayBooks(currentSearchResults || books);
                    
                    checkoutModal.classList.add('hidden');
                    document.getElementById('checkout-form').reset();
                }
            }

            function checkinBook() {
                const book = books.find(book => book.id === currentBookId);
                
                if (book.checkedOut > 0) {
                    book.checkedOut--;
                    book.checkouts.shift(); // Remove the first checkout for simplicity
                    
                    saveBooks();
                    updateStats();
                    displayBooks(currentSearchResults || books);
                    
                    bookDetailsModal.classList.add('hidden');
                }
            }
            
            function quickReturnBook(bookId, borrowerName) {
                const book = books.find(book => book.id === bookId);
                
                if (book && book.checkedOut > 0) {
                    // Find the index of the checkout by this borrower
                    const checkoutIndex = book.checkouts.findIndex(checkout => checkout.borrower === borrowerName);
                    
                    if (checkoutIndex !== -1) {
                        // Remove this specific checkout
                        book.checkouts.splice(checkoutIndex, 1);
                        book.checkedOut--;
                        
                        saveBooks();
                        updateStats();
                        displayBooks(currentSearchResults || books);
                    }
                }
            }

            function adjustBookQuantity() {
                const book = books.find(book => book.id === currentBookId);
                const newQuantity = parseInt(document.getElementById('new-quantity').value);
                
                if (newQuantity < book.checkedOut) {
                    alert('New quantity cannot be less than the number of books currently checked out.');
                    return;
                }
                
                book.quantity = newQuantity;
                
                saveBooks();
                updateStats();
                displayBooks(currentSearchResults || books);
                
                adjustQuantityModal.classList.add('hidden');
            }

            function deleteBook() {
                books = books.filter(book => book.id !== currentBookId);
                
                saveBooks();
                updateStats();
                displayBooks(currentSearchResults || books);
                
                confirmDeleteModal.classList.add('hidden');
            }

            function saveBooks() {
                localStorage.setItem('libraryBooks', JSON.stringify(books));
            }
            
            function populateBorrowerSelect() {
                const borrowerSelect = document.getElementById('borrower-select');
                borrowerSelect.innerHTML = '<option value="">Select a borrower...</option>';
                
                // Get unique borrowers
                const borrowers = new Set();
                books.forEach(book => {
                    if (book.checkouts && book.checkouts.length > 0) {
                        book.checkouts.forEach(checkout => {
                            borrowers.add(checkout.borrower);
                        });
                    }
                });
                
                // Sort borrowers alphabetically
                const sortedBorrowers = Array.from(borrowers).sort();
                
                // Add to select
                sortedBorrowers.forEach(borrower => {
                    const option = document.createElement('option');
                    option.value = borrower;
                    option.textContent = borrower;
                    borrowerSelect.appendChild(option);
                });
            }
            
            function filterByBorrower() {
                const selectedBorrower = document.getElementById('borrower-select').value;
                
                if (!selectedBorrower) {
                    return;
                }
                
                // Find books checked out by this borrower
                const filteredBooks = books.filter(book => {
                    if (book.checkouts && book.checkouts.length > 0) {
                        return book.checkouts.some(checkout => checkout.borrower === selectedBorrower);
                    }
                    return false;
                });
                
                currentSearchResults = filteredBooks;
                displayBooks(filteredBooks);
                bookListTitle.textContent = `Books Borrowed by ${selectedBorrower} (${filteredBooks.length})`;
                document.getElementById('filter-borrower-modal').classList.add('hidden');
            }

            function printBooks(booksToPrint, title) {
                // Set up print content
                document.getElementById('print-title').textContent = title;
                document.getElementById('print-date').textContent = `Printed on ${new Date().toLocaleDateString()}`;
                
                // Display books for printing
                displayBooks(booksToPrint);
                
                // If printing checked out books, make sure borrowers section is visible
                if (title === 'Checked Out Books') {
                    // Force update borrowers list to match the filtered books
                    const borrowersTableBody = document.getElementById('borrowers-table-body');
                    borrowersTableBody.innerHTML = '';
                    
                    const allCheckouts = [];
                    booksToPrint.forEach(book => {
                        if (book.checkouts && book.checkouts.length > 0) {
                            book.checkouts.forEach(checkout => {
                                allCheckouts.push({
                                    bookTitle: book.title,
                                    borrower: checkout.borrower,
                                    date: checkout.date
                                });
                            });
                        }
                    });
                    
                    allCheckouts.forEach(checkout => {
                        const row = document.createElement('tr');
                        row.innerHTML = `
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">${checkout.borrower}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${checkout.bookTitle}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${checkout.date}</td>
                            <td class="px-6 py-4 whitespace-nowrap text-sm font-medium"></td>
                        `;
                        borrowersTableBody.appendChild(row);
                    });
                    
                    document.getElementById('no-borrowers-message').classList.add('hidden');
                    document.getElementById('borrowers-list').classList.remove('hidden');
                }
                
                // Close dropdown
                printDropdown.classList.add('hidden');
                
                // Print
                window.print();
                
                // Restore original display
                displayBooks(currentSearchResults || books);
                updateStats(); // This will also update the borrowers list
            }
        });
(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF$cv$params={r:'95d9fdabe0781b23',t:'MTc1MjI1NDYzMC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();