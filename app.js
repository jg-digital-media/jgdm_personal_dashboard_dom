console.log('app.js connected - 14-10-2025 - 08:40');

// Enhanced tooltip functionality for live clock
document.addEventListener('DOMContentLoaded', function() {

    //select live clock element
    const clockElement = document.querySelector('.live---clock');
    const themeOptionsElement = document.querySelector('.theme---selector--inner');
    const welcomeMessageElement = document.querySelector('.welcome---message--container');
    const toDoDashboardElement = document.querySelector('#js---dashboard--todo');

    
    
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
    
    // if live clock element exists
    if (clockElement) {
        // Add subtle hover effect
        clockElement.addEventListener('mouseenter', function() {
            //this.style.transform = 'scale(1.02)';
            //this.style.transition = 'transform 0.2s ease';
        });
        
        clockElement.addEventListener('mouseleave', function() {
            //this.style.transform = 'scale(1)';
        });
        
        // Optional: Update tooltip text dynamically if needed
        // clockElement.setAttribute('data-tooltip', 'Current GMT time: ' + new Date().toUTCString().split(' ')[4]);
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
    
    // Initialize responsive tooltip handling
    handleResponsiveTooltips();

});

