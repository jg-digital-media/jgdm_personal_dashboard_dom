console.log('app.js connected - 19-08-2026 - 14:58');

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
    
    // Initialise Theme Options Feature
    const themeOptionsFeature = initializeThemeOptions();

    // Initialise Welcome Message Feature
    const welcomeMessageFeature = initializeWelcomeMessage();

    // Initialise To Do List Feature
    const todoListFeature = initializeTodoList();

    // Initialise Notes Feature
    const notesFeature = initializeNotes();

    // Initialise Shortcut Links Feature
    const shortcutLinksFeature = initializeShortcutLinks();

    // Initialise Fetch Weather Feature
    const weatherFeature = initializeWeather();
    
    // Initialise Dashboard Toggle Functionality
    initializeDashboardToggles({
        resetPersistedContent: function() {
            if (welcomeMessageFeature && typeof welcomeMessageFeature.reset === 'function') {
                welcomeMessageFeature.reset();
            }

            if (todoListFeature && typeof todoListFeature.reset === 'function') {
                todoListFeature.reset();
            }

            if (notesFeature && typeof notesFeature.reset === 'function') {
                notesFeature.reset();
            }

            if (shortcutLinksFeature && typeof shortcutLinksFeature.reset === 'function') {
                shortcutLinksFeature.reset();
            }

            if (weatherFeature && typeof weatherFeature.reset === 'function') {
                weatherFeature.reset();
            }

            if (themeOptionsFeature && typeof themeOptionsFeature.reset === 'function') {
                themeOptionsFeature.reset();
            }
        }
    });

});

// Theme Options Functionality - Switch palettes via CSS custom properties
function initializeThemeOptions() {

    const themeButtons = document.querySelectorAll('.theme---selector');
    const localStorageKey = 'dashboard_theme';
    const defaultTheme = 'theme-one';
    const validThemes = {
        'theme-one': true,
        'theme-two': true,
        'theme-three': true,
        'theme-four': true
    };

    function applyTheme(themeId) {

        const theme = validThemes[themeId] ? themeId : defaultTheme;

        document.body.setAttribute('data-theme', theme);

        themeButtons.forEach(function(button) {
            button.classList.toggle('theme---selector--active', button.id === theme);
        });
    }

    function saveTheme(themeId) {
        localStorage.setItem(localStorageKey, themeId);
    }

    function selectTheme(themeId) {
        applyTheme(themeId);
        saveTheme(themeId);
    }

    themeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            selectTheme(button.id);
        });

        button.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                selectTheme(button.id);
            }
        });
    });

    const savedTheme = localStorage.getItem(localStorageKey);
    applyTheme(savedTheme || defaultTheme);

    return {
        reset: function() {
            localStorage.removeItem(localStorageKey);
            applyTheme(defaultTheme);
        }
    };
}

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

    return {
        reset: function() {
            if (nameInputElement) {
                nameInputElement.value = '';
            }

            localStorage.removeItem(localStorageKey);
        }
    };
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

    return {
        reset: function() {
            localStorage.removeItem(localStorageKey);
            renderTodos([]);
        }
    };
}

// Notes Functionality - Add, edit, delete, and persist notes
function initializeNotes() {

    const notesDashboardElement = document.querySelector('#js---dashboard--notes');
    const notesListElement = document.querySelector('#js---notes--list');
    const notesContainerElement = notesDashboardElement
        ? notesDashboardElement.querySelector('.notes---dashboard--container')
        : null;
    const emptyStateElement = document.querySelector('#js---notes--empty');
    const addNoteButton = notesDashboardElement
        ? notesDashboardElement.querySelector('#add---note--item')
        : null;
    const localStorageKey = 'dashboard_notes';

    if (!notesListElement) {
        console.log('Notes list element not found');
        return;
    }

    function createNoteItem(text) {

        const noteItem = document.createElement('div');
        noteItem.className = 'note---dashboard--item';

        const closeIcon = document.createElement('span');
        closeIcon.className = 'icon---close';
        closeIcon.textContent = '\u00D7';

        const content = document.createElement('div');
        content.className = 'note---dashboard--content';
        content.setAttribute('contenteditable', 'true');
        content.innerText = text;

        noteItem.appendChild(closeIcon);
        noteItem.appendChild(content);

        return noteItem;
    }

    function getNotesFromDOM() {

        const notes = [];
        const noteItems = notesListElement.querySelectorAll('.note---dashboard--item');

        noteItems.forEach(function(noteItem) {
            const content = noteItem.querySelector('.note---dashboard--content');
            notes.push({
                text: content ? content.innerText : ''
            });
        });

        return notes;
    }

    function saveNotesToLocalStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(getNotesFromDOM()));
        updateEmptyState();
    }

    function updateEmptyState() {

        const isEmpty = getNotesFromDOM().length === 0;

        if (notesContainerElement) {
            notesContainerElement.classList.toggle('notes---list--empty', isEmpty);
        }

        if (emptyStateElement) {
            emptyStateElement.hidden = !isEmpty;
        }
    }

    function renderNotes(notes) {

        notesListElement.innerHTML = '';

        notes.forEach(function(note) {
            const noteItem = createNoteItem(note.text);
            notesListElement.appendChild(noteItem);
        });

        updateEmptyState();
    }

    function loadNotesFromLocalStorage() {

        const savedNotes = localStorage.getItem(localStorageKey);

        if (savedNotes === null) {
            renderNotes([]);
            return;
        }

        try {
            const notes = JSON.parse(savedNotes);

            if (Array.isArray(notes)) {
                renderNotes(notes);
                return;
            }
        } catch (error) {
            console.error('Error loading notes from localStorage:', error);
        }

        renderNotes([]);
    }

    function deleteNoteItem(noteItem) {
        noteItem.remove();
        saveNotesToLocalStorage();
    }

    function addNoteItem() {

        const noteItem = createNoteItem('New Note');
        notesListElement.appendChild(noteItem);
        saveNotesToLocalStorage();

        const content = noteItem.querySelector('.note---dashboard--content');
        if (content) {
            content.focus();

            const selection = window.getSelection();
            const range = document.createRange();
            range.selectNodeContents(content);
            selection.removeAllRanges();
            selection.addRange(range);
        }
    }

    notesListElement.addEventListener('click', function(event) {

        const closeIcon = event.target.closest('.icon---close');

        if (closeIcon) {
            const noteItem = closeIcon.closest('.note---dashboard--item');
            if (noteItem) {
                deleteNoteItem(noteItem);
            }
        }
    });

    notesListElement.addEventListener('blur', function(event) {

        if (event.target.classList.contains('note---dashboard--content')) {
            saveNotesToLocalStorage();
        }
    }, true);

    if (addNoteButton) {
        addNoteButton.addEventListener('click', function(event) {
            event.preventDefault();
            addNoteItem();
        });
    }

    loadNotesFromLocalStorage();

    return {
        reset: function() {
            localStorage.removeItem(localStorageKey);
            renderNotes([]);
        }
    };
}

// Shortcut Links Functionality - Add via modal, delete, and persist links
function initializeShortcutLinks() {

    const linksDashboardElement = document.querySelector('#js---dashboard--shortcuts');
    const linksListElement = document.querySelector('#js---links--list');
    const linksContainerElement = linksDashboardElement
        ? linksDashboardElement.querySelector('.links---dashboard--container')
        : null;
    const emptyStateElement = document.querySelector('#js---links--empty');
    const addLinkButton = linksDashboardElement
        ? linksDashboardElement.querySelector('#add---link--item')
        : null;
    const localStorageKey = 'dashboard_links';

    if (!linksListElement) {
        console.log('Shortcut links list element not found');
        return;
    }

    function createShortcutLinkItem(text, url) {

        const linkItem = document.createElement('div');
        linkItem.className = 'links---dashboard--item';

        const closeIcon = document.createElement('span');
        closeIcon.className = 'icon---close';
        closeIcon.textContent = '\u00D7';

        const linkWrap = document.createElement('span');
        linkWrap.className = 'dashboard---link';

        const anchor = document.createElement('a');
        anchor.setAttribute('href', url);
        anchor.setAttribute('target', '_blank');
        anchor.setAttribute('rel', 'noopener noreferrer');
        anchor.textContent = text;

        linkWrap.appendChild(anchor);
        linkItem.appendChild(closeIcon);
        linkItem.appendChild(linkWrap);

        return linkItem;
    }

    function getLinksFromDOM() {

        const links = [];
        const linkItems = linksListElement.querySelectorAll('.links---dashboard--item');

        linkItems.forEach(function(linkItem) {
            const anchor = linkItem.querySelector('.dashboard---link a');
            links.push({
                text: anchor ? anchor.textContent : '',
                url: anchor ? anchor.getAttribute('href') : ''
            });
        });

        return links;
    }

    function saveLinksToLocalStorage() {
        localStorage.setItem(localStorageKey, JSON.stringify(getLinksFromDOM()));
        updateEmptyState();
    }

    function updateEmptyState() {

        const isEmpty = getLinksFromDOM().length === 0;

        if (linksContainerElement) {
            linksContainerElement.classList.toggle('links---list--empty', isEmpty);
        }

        if (emptyStateElement) {
            emptyStateElement.hidden = !isEmpty;
        }
    }

    function renderLinks(links) {

        linksListElement.innerHTML = '';

        links.forEach(function(link) {
            const linkItem = createShortcutLinkItem(link.text, link.url);
            linksListElement.appendChild(linkItem);
        });

        updateEmptyState();
    }

    function loadLinksFromLocalStorage() {

        const savedLinks = localStorage.getItem(localStorageKey);

        if (savedLinks === null) {
            renderLinks([]);
            return;
        }

        try {
            const links = JSON.parse(savedLinks);

            if (Array.isArray(links)) {
                renderLinks(links);
                return;
            }
        } catch (error) {
            console.error('Error loading shortcut links from localStorage:', error);
        }

        renderLinks([]);
    }

    function deleteShortcutLink(linkItem) {
        linkItem.remove();
        saveLinksToLocalStorage();
    }

    function addShortcutLink(text, url) {

        const linkItem = createShortcutLinkItem(text, url);
        linksListElement.appendChild(linkItem);
        saveLinksToLocalStorage();
    }

    linksListElement.addEventListener('click', function(event) {

        const closeIcon = event.target.closest('.icon---close');

        if (closeIcon) {
            event.preventDefault();
            const linkItem = closeIcon.closest('.links---dashboard--item');
            if (linkItem) {
                deleteShortcutLink(linkItem);
            }
        }
    });

    if (addLinkButton) {
        addLinkButton.addEventListener('click', function(event) {
            event.preventDefault();
            showAddLinkModal(function(linkData) {
                if (linkData) {
                    addShortcutLink(linkData.text, linkData.url);
                }
            });
        });
    }

    loadLinksFromLocalStorage();

    return {
        reset: function() {
            localStorage.removeItem(localStorageKey);
            renderLinks([]);
        }
    };
}

// Fetch Weather Functionality - City search via Open-Meteo (free, no API key)
function initializeWeather() {

    const weatherInput = document.querySelector('#js---weather--input');
    const weatherButton = document.querySelector('#js---weather--button');
    const weatherList = document.querySelector('#js---weather--list');
    const weatherMessage = document.querySelector('#js---weather--message');
    const weatherHeading = document.querySelector('.section---fetch--weather--output__heading');
    const localStorageKey = 'dashboard_weather_city';
    const defaultHeading = weatherHeading ? weatherHeading.textContent : 'Fetch Your latest Weather Forecast';
    const emptyMessage = 'Enter a city name and click Fetch to see a 14-day forecast.';

    if (!weatherList || !weatherInput || !weatherButton) {
        console.log('Weather elements not found');
        return;
    }

    function weatherFromCode(code) {

        if (code === 0) {
            return { word: 'Sunny', icon: 'sunny' };
        }

        if (code === 1) {
            return { word: 'Clear', icon: 'sunny' };
        }

        if (code === 2 || code === 3) {
            return { word: 'Cloudy', icon: 'cloudy' };
        }

        if (code === 45 || code === 48) {
            return { word: 'Foggy', icon: 'cloudy' };
        }

        if (code >= 51 && code <= 57) {
            return { word: 'Drizzle', icon: 'cloudy' };
        }

        if ((code >= 61 && code <= 67) || (code >= 80 && code <= 82)) {
            return { word: 'Rainy', icon: 'cloudy' };
        }

        if ((code >= 71 && code <= 77) || code === 85 || code === 86) {
            return { word: 'Snowy', icon: 'cloudy' };
        }

        if (code >= 95) {
            return { word: 'Stormy', icon: 'cloudy' };
        }

        return { word: 'Cloudy', icon: 'cloudy' };
    }

    function dayLabelFromDate(dateString) {
        const date = new Date(dateString + 'T12:00:00');
        return date.toLocaleDateString('en-GB', { weekday: 'short' });
    }

    function createForecastCard(dayLabel, description, temperature, iconName) {

        const card = document.createElement('div');
        card.className = 'day---forecast';

        const heading = document.createElement('h4');
        heading.textContent = dayLabel;

        const icon = document.createElement('img');
        icon.className = 'forecast---icon';
        icon.src = 'assets/img/icon-weather-' + iconName + '.png';
        icon.alt = 'Forecast: ' + description;
        icon.title = 'Forecast: ' + description;

        const details = document.createElement('div');
        details.className = 'forecast---details';

        const descriptionElement = document.createElement('div');
        descriptionElement.className = 'forecast---temperature';
        descriptionElement.textContent = description;

        const temperatureElement = document.createElement('div');
        temperatureElement.className = 'forecast---temperature';
        temperatureElement.textContent = temperature + '\u00B0C';

        details.appendChild(descriptionElement);
        details.appendChild(temperatureElement);
        card.appendChild(heading);
        card.appendChild(icon);
        card.appendChild(details);

        return card;
    }

    function showMessage(text) {
        weatherList.innerHTML = '';

        if (weatherMessage) {
            weatherMessage.hidden = false;
            weatherMessage.textContent = text;
        }
    }

    function renderForecast(cityName, daily) {

        weatherList.innerHTML = '';

        daily.time.forEach(function(dateString, index) {
            const condition = weatherFromCode(daily.weather_code[index]);
            const temperature = Math.round(daily.temperature_2m_max[index]);
            const card = createForecastCard(
                dayLabelFromDate(dateString),
                condition.word,
                temperature,
                condition.icon
            );
            weatherList.appendChild(card);
        });

        if (weatherMessage) {
            weatherMessage.hidden = true;
        }

        if (weatherHeading) {
            weatherHeading.textContent = 'Forecast for ' + cityName;
        }
    }

    function formatPlaceLabel(place, fallback) {

        const city = (place && place.name) ? place.name : fallback;
        let countryCode = (place && place.country_code) ? String(place.country_code).toUpperCase() : '';

        if (countryCode === 'GB') {
            countryCode = 'UK';
        }

        if (city && countryCode) {
            return city + ', ' + countryCode;
        }

        return city;
    }

    async function geocodeCity(cityName) {

        const url = 'https://geocoding-api.open-meteo.com/v1/search?name='
            + encodeURIComponent(cityName)
            + '&count=1&language=en&format=json';

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Could not look up that city.');
        }

        const data = await response.json();

        if (!data.results || data.results.length === 0) {
            throw new Error('Could not find that city.');
        }

        return data.results[0];
    }

    async function fetchForecast(latitude, longitude) {

        const url = 'https://api.open-meteo.com/v1/forecast?latitude='
            + encodeURIComponent(latitude)
            + '&longitude='
            + encodeURIComponent(longitude)
            + '&daily=weather_code,temperature_2m_max&timezone=auto&forecast_days=14';

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Could not fetch the forecast.');
        }

        const data = await response.json();

        if (!data.daily || !data.daily.time) {
            throw new Error('Could not fetch the forecast.');
        }

        return data.daily;
    }

    async function fetchWeatherForCity(cityName) {

        const query = cityName.trim();

        if (query === '') {
            showMessage(emptyMessage);
            if (weatherHeading) {
                weatherHeading.textContent = defaultHeading;
            }
            return;
        }

        weatherButton.disabled = true;
        showMessage('Fetching forecast...');

        try {
            const place = await geocodeCity(query);
            const daily = await fetchForecast(place.latitude, place.longitude);
            const displayName = formatPlaceLabel(place, query);

            renderForecast(displayName, daily);
            localStorage.setItem(localStorageKey, query);
            weatherInput.value = place.name || query;
        } catch (error) {
            console.error('Error fetching weather:', error);
            showMessage(error.message || 'Could not fetch the forecast.');
            if (weatherHeading) {
                weatherHeading.textContent = defaultHeading;
            }
        } finally {
            weatherButton.disabled = false;
        }
    }

    function loadSavedCity() {
        const savedCity = localStorage.getItem(localStorageKey);

        if (savedCity) {
            weatherInput.value = savedCity;
            fetchWeatherForCity(savedCity);
        }
    }

    weatherButton.addEventListener('click', function() {
        fetchWeatherForCity(weatherInput.value);
    });

    weatherInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            fetchWeatherForCity(weatherInput.value);
        }
    });

    loadSavedCity();

    return {
        reset: function() {
            localStorage.removeItem(localStorageKey);
            weatherInput.value = '';
            weatherButton.disabled = false;

            if (weatherHeading) {
                weatherHeading.textContent = defaultHeading;
            }

            showMessage(emptyMessage);
        }
    };
}

// Dashboard Toggle Functionality - Toggle visibility of dashboard sections
function initializeDashboardToggles(options) {

    const resetPersistedContent = options && options.resetPersistedContent;
    
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

                    // Clear persisted name, to-do items, notes, shortcut links, and theme back to the default empty state
                    if (typeof resetPersistedContent === 'function') {
                        resetPersistedContent();
                    }
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
                        Are you sure you want to reset the dashboard to its default state?
                    </p>
                    <p class="modal---reset--submessage">
                        This will clear your name, remove all to-do items, notes and shortcut links, restore the default theme and weather, and expand any minimised sections. A page refresh will not undo this.
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

// Add Shortcut Link Modal - Collects display text and URL before adding a link
function showAddLinkModal(callback) {

    let existingModal = document.querySelector('.modal---add--link');
    if (existingModal) {
        existingModal.remove();
    }

    const modalHTML = `
        <div class="modal---add--link">
            <div class="modal---add--link--backdrop"></div>
            <div class="modal---add--link--content">
                <div class="modal---add--link--header">
                    <h3 class="modal---add--link--title">Add Shortcut Link</h3>
                    <button class="modal---add--link--close" type="button" aria-label="Close modal">&times;</button>
                </div>
                <form class="modal---add--link--form">
                    <div class="modal---add--link--body">
                        <div class="modal---add--link--field">
                            <label for="js---link--text">Display text</label>
                            <input id="js---link--text" type="text" name="link-text" placeholder="YouTube" autocomplete="off" />
                        </div>
                        <div class="modal---add--link--field">
                            <label for="js---link--url">URL</label>
                            <input id="js---link--url" type="text" name="link-url" placeholder="https://youtube.com" autocomplete="off" />
                        </div>
                    </div>
                    <div class="modal---add--link--footer">
                        <button class="modal---add--link--button modal---add--link--button--cancel" type="button" id="modal---add--link--cancel">
                            Cancel
                        </button>
                        <button class="modal---add--link--button modal---add--link--button--confirm" type="submit" id="modal---add--link--confirm">
                            Add Link
                        </button>
                    </div>
                </form>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML('beforeend', modalHTML);

    const modal = document.querySelector('.modal---add--link');
    const backdrop = document.querySelector('.modal---add--link--backdrop');
    const closeButton = document.querySelector('.modal---add--link--close');
    const cancelButton = document.querySelector('#modal---add--link--cancel');
    const form = document.querySelector('.modal---add--link--form');
    const textInput = document.querySelector('#js---link--text');
    const urlInput = document.querySelector('#js---link--url');

    function closeModal() {
        document.removeEventListener('keydown', handleEscapeKey);

        if (modal) {
            modal.classList.add('modal---add--link--closing');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    }

    function submitLink(event) {
        if (event) {
            event.preventDefault();
        }

        const text = textInput ? textInput.value : '';
        const url = urlInput ? urlInput.value : '';

        closeModal();

        if (callback) {
            callback({ text: text, url: url });
        }
    }

    if (backdrop) {
        backdrop.addEventListener('click', function() {
            closeModal();
            if (callback) callback(false);
        });
    }

    if (closeButton) {
        closeButton.addEventListener('click', function() {
            closeModal();
            if (callback) callback(false);
        });
    }

    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            closeModal();
            if (callback) callback(false);
        });
    }

    if (form) {
        form.addEventListener('submit', submitLink);
    }

    function handleEscapeKey(event) {
        if (event.key === 'Escape' && modal) {
            closeModal();
            if (callback) callback(false);
            document.removeEventListener('keydown', handleEscapeKey);
        }
    }

    document.addEventListener('keydown', handleEscapeKey);

    setTimeout(() => {
        if (modal) {
            modal.classList.add('modal---add--link--active');
        }

        if (textInput) {
            textInput.focus();
        }
    }, 10);
}