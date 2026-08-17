console.log('app.js connected - 17-08-2026 - 13:53');

// Enhanced tooltip functionality for live clock
document.addEventListener('DOMContentLoaded', function() {

    //select live clock element
    const clockElement = document.querySelector('.live---clock');
    const themeOptionsElement = document.querySelector('.theme---selector--inner');
    const welcomeMessageElement = document.querySelector('.welcome---message--container');
    const toDoDashboardElement = document.querySelector('#js---dashboard--todo');
    const notesDashboardElement = document.querySelector('#js---dashboard--notes');
    const linksDashboardElement = document.querySelector('#js---dashboard--shortcuts');
    const weatherDashboardElement = document.querySelector('#js----dashboard--weather');
    const dailyQuoteElement = document.querySelector('.welcome---message--container');
    
    
    // Function to prevent tooltip overflow
    function adjustTooltipPosition(element) {
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        
        // Check if element is too close to right edge
        if (rect.right > viewportWidth - 100) {
            element.setAttribute('data-position', 'left');
        }
        // Check if element is too close to left edge
        else if (rect.left < 100) {
            element.setAttribute('data-position', 'right');
        }
        else {
            element.removeAttribute('data-position');
        }
    }
    
    // Apply responsive tooltip positioning
    function handleResponsiveTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        
        tooltipElements.forEach(element => {
            // Add event listeners for hover
            element.addEventListener('mouseenter', function() {
                adjustTooltipPosition(this);
            });
            
            // Adjust on window resize
            window.addEventListener('resize', function() {
                adjustTooltipPosition(element);
            });
        });
    }
    
    // Live Clock Functionality - Updates GMT time in real-time
    function updateLiveClock() {

        if (clockElement) {

            // Get current GMT time
            const now = new Date();
            const gmtTime = now.toUTCString();
            
            // Extract time portion (HH:MM:SS) from GMT string
            // Format: "Day, DD MMM YYYY HH:MM:SS GMT"
            const timeMatch = gmtTime.match(/(\d{2}:\d{2}:\d{2})/);
            const timeString = timeMatch ? timeMatch[1] : now.toUTCString().split(' ')[4];
            
            // Update the clock element text content
            clockElement.textContent = timeString + ' GMT';
        }
    }
    
    // Initialize and update live clock
    if (clockElement) {
        // Update immediately on page load
        updateLiveClock();
        
        // Update every second (1000ms)
        setInterval(updateLiveClock, 1000);
    }

    if (themeOptionsElement) {
        // Ensure theme options tooltip doesn't overflow
        themeOptionsElement.addEventListener('mouseenter', function() {
            adjustTooltipPosition(this);
        });
    }

    if (welcomeMessageElement) {
        // Ensure theme options tooltip doesn't overflow
        welcomeMessageElement.addEventListener('mouseenter', function() {
            adjustTooltipPosition(this);
        });
    }


    if (toDoDashboardElement) {
        console.log('ToDo dashboard element found:', toDoDashboardElement);
        console.log('Tooltip text:', toDoDashboardElement.getAttribute('data-tooltip'));
        
        // Ensure tooltip doesn't overflow
        toDoDashboardElement.addEventListener('mouseenter', function() {
            console.log('ToDo dashboard hovered');
            adjustTooltipPosition(this);
        });
    } else {
        console.log('ToDo dashboard element not found');
    }


    if (notesDashboardElement) {
        console.log('ToDo dashboard element found:', notesDashboardElement);
        console.log('Tooltip text:', notesDashboardElement.getAttribute('data-tooltip'));
        
        // Ensure tooltip doesn't overflow
        notesDashboardElement.addEventListener('mouseenter', function() {
            console.log('notes dashboard hovered');
            adjustTooltipPosition(this);
        });
    } else {
        console.log('notes dashboard element not found');
    }


    if (linksDashboardElement) {
        console.log('ToDo dashboard element found:', linksDashboardElement);
        console.log('Tooltip text:', linksDashboardElement.getAttribute('data-tooltip'));
        
        // Ensure tooltip doesn't overflow
        linksDashboardElement.addEventListener('mouseenter', function() {
            console.log('links dashboard hovered');
            adjustTooltipPosition(this);
        });
    } else {
        console.log('links dashboard element not found');
    }


    if (weatherDashboardElement) {
        console.log('weather dashboard element found:', weatherDashboardElement);
        console.log('Tooltip text:', weatherDashboardElement.getAttribute('data-tooltip'));
        
        // Ensure tooltip doesn't overflow
        weatherDashboardElement.addEventListener('mouseenter', function() {
            console.log('links dashboard hovered');
            adjustTooltipPosition(this);
        });
    } else {
        console.log('weather dashboard element not found');
    }


    if (dailyQuoteElement) {
        console.log('daily quote dashboard element found:', dailyQuoteElement);
        console.log('Tooltip text:', dailyQuoteElement.getAttribute('data-tooltip'));
        
        // Ensure tooltip doesn't overflow
        dailyQuoteElement.addEventListener('mouseenter', function() {
            console.log('links dashboard hovered');
            adjustTooltipPosition(this);
        });
    } else {
        console.log('daily quote dashboard element not found');
    }

    // Function Calls - initialise dashboard features
    
    // Initialise responsive tooltip handling
    handleResponsiveTooltips();
    
    // Load random quote
    getRandomQuote();
    
    // Initialise Welcome Message Feature
    initializeWelcomeMessage();
    
    // Initialise Dashboard Toggle Functionality
    initializeDashboardToggles();

    // Initialise To Do List Feature
    initializeTodoList();

});

// Welcome Message Functionality - Time-based salutation and name persistence
function initializeWelcomeMessage() {

    const salutationElement = document.querySelector('#morning---or--evening');
    const nameInputElement = document.querySelector('#js--name_input');
    const localStorageKey = 'dashboard_user_name';
    
    // Function to get time-based salutation
    function getTimeBasedSalutation() {
        const now = new Date();
        const hour = now.getHours();
        
        // Morning: 5:00 AM - 11:59 AM
        if (hour >= 5 && hour < 12) {
            return 'Good Morning';
        }
        // Afternoon: 12:00 PM - 4:59 PM
        else if (hour >= 12 && hour < 17) {
            return 'Good Afternoon';
        }
        // Evening: 5:00 PM - 4:59 AM
        else {
            return 'Good Evening';
        }
    }
    
    // Update salutation based on time of day
    function updateSalutation() {
        if (salutationElement) {
            salutationElement.textContent = getTimeBasedSalutation();
        }
    }
    
    // Load saved name from localStorage
    function loadSavedName() {
        if (nameInputElement) {
            const savedName = localStorage.getItem(localStorageKey);
            if (savedName) {
                nameInputElement.value = savedName;
            }
        }
    }
    
    // Save name to localStorage or remove if empty
    function saveNameToLocalStorage() {
        if (nameInputElement) {
            const nameValue = nameInputElement.value.trim();
            
            if (nameValue === '') {
                // Remove from localStorage if input is empty
                localStorage.removeItem(localStorageKey);
            } else {
                // Save to localStorage
                localStorage.setItem(localStorageKey, nameValue);
            }
        }
    }
    
    // Initialize on page load
    if (salutationElement) {
        updateSalutation();
    }
    
    if (nameInputElement) {
        // Load saved name on page load
        loadSavedName();
        
        // Save name on blur (when input loses focus)
        nameInputElement.addEventListener('blur', saveNameToLocalStorage);
        
        // Also save on mouseout (as specified in requirements)
        nameInputElement.addEventListener('mouseout', saveNameToLocalStorage);
        
        // Optional: Also handle Enter key to save
        nameInputElement.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                nameInputElement.blur(); // This will trigger the blur event
            }
        });
    }
}

// Get Random Quote Functionality - Fetches and displays a random quote
async function getRandomQuote() {
    const quoteElement = document.querySelector('#js---random_quote');

    if (!quoteElement) {
        console.log('Random quote element not found');
        return;
    }

    try {
        // Fetch the quotes JSON file
        const response = await fetch('assets/data/quotes_list.json');
        
        // Check if response is ok
        if (!response.ok) {
            throw new Error('Failed to fetch quotes');
        }
        
        // Parse JSON data
        const quotesData = await response.json();
        
        // Get random quote from the quotes array
        const randomIndex = Math.floor(Math.random() * quotesData.quotes.length);
        const randomQuote = quotesData.quotes[randomIndex];
        
        // Update the DOM element with the random quote
        quoteElement.textContent = randomQuote;
        
    } catch (error) {
        console.error('Error fetching quotes:', error);
        // Optionally set a fallback quote
        quoteElement.textContent = "The only way to do great work is to love what you do.";
    }
}

// To Do List Functionality - Add, toggle complete, delete, and persist tasks
function initializeTodoList() {

    const todoDashboardElement = document.querySelector('#js---dashboard--todo');
    const todoListElement = document.querySelector('#js---todo--list');
    const todoContainerElement = todoDashboardElement
        ? todoDashboardElement.querySelector('.todo---dashboard--container')
        : null;
    const emptyStateElement = document.querySelector('#js---todo--empty');
    const addTodoButton = todoDashboardElement
        ? todoDashboardElement.querySelector('#add---todo--item')
        : null;
    const localStorageKey = 'dashboard_todos';

    if (!todoListElement) {
        console.log('To Do list element not found');
        return;
    }

    // Create a single list item in either the open (editable) or completed state
    function createTodoListItem(text, completed) {

        const listItem = document.createElement('li');

        const closeIcon = document.createElement('span');
        closeIcon.className = 'icon---close';
        closeIcon.textContent = '\u00D7';

        const editIcon = document.createElement('span');
        editIcon.className = 'icon---edit';
        editIcon.innerHTML = '&nbsp;';

        const textSpan = document.createElement('span');
        textSpan.className = 'todo---item--text';
        textSpan.textContent = text;

        applyTodoItemState(editIcon, textSpan, completed);

        listItem.appendChild(closeIcon);
        listItem.appendChild(editIcon);
        listItem.appendChild(textSpan);

        return listItem;
    }

    // Apply open (red/editable) or completed (green/locked) visual and edit state
    function applyTodoItemState(editIcon, textSpan, completed) {

        if (completed) {
            editIcon.classList.add('edit---state--icon');
            textSpan.classList.add('text---edit--state');
            textSpan.setAttribute('contenteditable', 'false');
        } else {
            editIcon.classList.remove('edit---state--icon');
            textSpan.classList.remove('text---edit--state');
            textSpan.setAttribute('contenteditable', 'true');
        }
    }

    function isTodoItemCompleted(listItem) {
        const editIcon = listItem.querySelector('.icon---edit');
        return editIcon ? editIcon.classList.contains('edit---state--icon') : false;
    }

    // Read current list items from the DOM
    function getTodosFromDOM() {

        const todos = [];
        const listItems = todoListElement.querySelectorAll('li');

        listItems.forEach(function(listItem) {
            const textSpan = listItem.querySelector('.todo---item--text');
            todos.push({
                text: textSpan ? textSpan.textContent : '',
                completed: isTodoItemCompleted(listItem)
            });
        });

        return todos;
    }

    // Persist current list state to localStorage
    function saveTodosToLocalStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(getTodosFromDOM()));
        updateEmptyState();
    }

    // Show the empty-state message when the list has no tasks
    function updateEmptyState() {

        const isEmpty = getTodosFromDOM().length === 0;

        if (todoContainerElement) {
            todoContainerElement.classList.toggle('todo---list--empty', isEmpty);
        }

        if (emptyStateElement) {
            emptyStateElement.hidden = !isEmpty;
        }
    }

    function renderTodos(todos) {

        todoListElement.innerHTML = '';

        todos.forEach(function(todo) {
            const listItem = createTodoListItem(todo.text, todo.completed);
            todoListElement.appendChild(listItem);
        });

        updateEmptyState();
    }

    // Restore saved tasks, or show the empty state when nothing is persisted
    function loadTodosFromLocalStorage() {

        const savedTodos = localStorage.getItem(localStorageKey);

        if (savedTodos === null) {
            renderTodos([]);
            return;
        }

        try {
            const todos = JSON.parse(savedTodos);

            if (Array.isArray(todos)) {
                renderTodos(todos);
                return;
            }
        } catch (error) {
            console.error('Error loading to-do items from localStorage:', error);
        }

        renderTodos([]);
    }

    function toggleTodoItemState(listItem) {

        const editIcon = listItem.querySelector('.icon---edit');
        const textSpan = listItem.querySelector('.todo---item--text');

        if (!editIcon || !textSpan) {
            return;
        }

        const completed = !editIcon.classList.contains('edit---state--icon');
        applyTodoItemState(editIcon, textSpan, completed);

        if (completed) {
            textSpan.blur();
        }

        saveTodosToLocalStorage();
    }

    function deleteTodoItem(listItem) {
        listItem.remove();
        saveTodosToLocalStorage();
    }

    function addTodoItem() {

        const listItem = createTodoListItem('New Task', false);
        todoListElement.appendChild(listItem);
        saveTodosToLocalStorage();

        const textSpan = listItem.querySelector('.todo---item--text');
        if (textSpan) {
            textSpan.focus();

            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(textSpan);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    // Event delegation for toggle, delete, and text edits on dynamic list items
    todoListElement.addEventListener('click', function(event) {

        const closeIcon = event.target.closest('.icon---close');
        const editIcon = event.target.closest('.icon---edit');

        if (closeIcon) {
            const listItem = closeIcon.closest('li');
            if (listItem) {
                deleteTodoItem(listItem);
            }
            return;
        }

        if (editIcon) {
            const listItem = editIcon.closest('li');
            if (listItem) {
                toggleTodoItemState(listItem);
            }
        }
    });

    // contenteditable blur does not bubble, so listen in the capture phase
    todoListElement.addEventListener('blur', function(event) {

        if (event.target.classList.contains('todo---item--text')) {
            saveTodosToLocalStorage();
        }
    }, true);

    todoListElement.addEventListener('keydown', function(event) {

        if (event.key === 'Enter' && event.target.classList.contains('todo---item--text')) {
            event.preventDefault();
            event.target.blur();
        }
    });

    if (addTodoButton) {
        addTodoButton.addEventListener('click', function(event) {
            event.preventDefault();
            addTodoItem();
        });
    }

    loadTodosFromLocalStorage();
}

// Dashboard Toggle Functionality - Toggle visibility of dashboard sections
function initializeDashboardToggles() {
    
    // Map button IDs to their corresponding dashboard section IDs
    const dashboardMap = {
        'js---btn_todos': 'js---dashboard--todo',
        'js---btn_notes': 'js---dashboard--notes',
        'js---btn_links': 'js---dashboard--shortcuts',
        'js---btn_weather': 'js----dashboard--weather'
    };
    
    // Get all toggle buttons
    const toggleButtons = {};
    Object.keys(dashboardMap).forEach(buttonId => {
        toggleButtons[buttonId] = document.querySelector(`#${buttonId}`);
    });
    
    // Get all dashboard sections
    const dashboardSections = {};
    Object.values(dashboardMap).forEach(sectionId => {
        dashboardSections[sectionId] = document.querySelector(`#${sectionId}`);
    });
    
    // Function to toggle a dashboard section
    function toggleDashboardSection(buttonId, sectionId) {
        const button = toggleButtons[buttonId];
        const section = dashboardSections[sectionId];
        
        if (!button || !section) {
            console.warn(`Button ${buttonId} or section ${sectionId} not found`);
            return;
        }
        
        // Check if section is currently minimized
        const isMinimized = section.classList.contains('dashboard---minimized');
        
        if (isMinimized) {
            // Expand the section
            section.classList.remove('dashboard---minimized');
            button.classList.remove('toggled---inactive');
        } else {
            // Minimize the section
            section.classList.add('dashboard---minimized');
            button.classList.add('toggled---inactive');
        }
    }
    
    // Add click event listeners to all toggle buttons
    Object.keys(dashboardMap).forEach(buttonId => {
        const button = toggleButtons[buttonId];
        if (button) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const sectionId = dashboardMap[buttonId];
                toggleDashboardSection(buttonId, sectionId);
            });
        }
    });
    
    // Handle Reset button with modal confirmation
    const resetButton = document.querySelector('#js---btn_reset');
    if (resetButton) {
        // Remove disabled attribute to enable the button
        resetButton.removeAttribute('disabled');
        
        resetButton.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Show confirmation modal
            showResetConfirmationModal(function(confirmed) {
                if (confirmed) {
                    // Reset all sections to visible state
                    Object.values(dashboardMap).forEach(sectionId => {
                        const section = dashboardSections[sectionId];
                        if (section) {
                            section.classList.remove('dashboard---minimized');
                        }
                    });
                    
                    // Reset all buttons to active state (remove toggled---inactive)
                    Object.keys(dashboardMap).forEach(buttonId => {
                        const button = toggleButtons[buttonId];
                        if (button) {
                            button.classList.remove('toggled---inactive');
                        }
                    });
                }
            });
        });
    }

    // Initialize default state based on button classes
    // If a button has 'toggled---inactive' class, minimize its corresponding section
    Object.keys(dashboardMap).forEach(buttonId => {
        const button = toggleButtons[buttonId];
        const sectionId = dashboardMap[buttonId];
        const section = dashboardSections[sectionId];
        
        if (button && section && button.classList.contains('toggled---inactive')) {
            section.classList.add('dashboard---minimized');
        }
    });
}

// Modal Confirmation Functionality - Creates and displays modal for reset confirmation
function showResetConfirmationModal(callback) {
    
    // Check if modal already exists
    let existingModal = document.querySelector('.modal---reset--confirmation');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Create modal HTML using template literals
    const modalHTML = `
        <div class="modal---reset--confirmation">
            <div class="modal---reset--backdrop"></div>
            <div class="modal---reset--content">
                <div class="modal---reset--header">
                    <h3 class="modal---reset--title">Reset Dashboard Settings</h3>
                    <button class="modal---reset--close" aria-label="Close modal">&times;</button>
                </div>
                <div class="modal---reset--body">
                    <p class="modal---reset--message">
                        Are you sure you want to reset all dashboard sections to their default state?
                    </p>
                    <p class="modal---reset--submessage">
                        This will expand all minimized sections and restore default settings.
                    </p>
                </div>
                <div class="modal---reset--footer">
                    <button class="modal---reset--button modal---reset--button--cancel" id="modal---reset--cancel">
                        Cancel
                    </button>
                    <button class="modal---reset--button modal---reset--button--confirm" id="modal---reset--confirm">
                        Reset
                    </button>
                </div>
            </div>
        </div>
    `;
    
    // Insert modal into body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Get modal elements
    const modal = document.querySelector('.modal---reset--confirmation');
    const backdrop = document.querySelector('.modal---reset--backdrop');
    const closeButton = document.querySelector('.modal---reset--close');
    const cancelButton = document.querySelector('#modal---reset--cancel');
    const confirmButton = document.querySelector('#modal---reset--confirm');
    
    // Function to close modal
    function closeModal() {
        if (modal) {
            modal.classList.add('modal---reset--closing');
            setTimeout(() => {
                modal.remove();
            }, 300); // Match CSS transition duration
        }
    }
    
    // Event listeners
    if (backdrop) {
        backdrop.addEventListener('click', closeModal);
    }
    
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
    
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            closeModal();
            if (callback) callback(false);
        });
    }
    
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            closeModal();
            if (callback) callback(true);
        });
    }
    
    // Close on Escape key
    function handleEscapeKey(e) {
        if (e.key === 'Escape' && modal) {
            closeModal();
            if (callback) callback(false);
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }
    
    document.addEventListener('keydown', handleEscapeKey);
    
    // Trigger animation by adding active class after a brief delay
    setTimeout(() => {
        if (modal) {
            modal.classList.add('modal---reset--active');
        }
    }, 10);
}