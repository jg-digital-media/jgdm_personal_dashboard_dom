console.log('app.js connected - 19-11-2025 - 15:00');

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
    
    // Initialize responsive tooltip handling
    handleResponsiveTooltips();

});

