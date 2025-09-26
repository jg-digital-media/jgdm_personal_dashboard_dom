console.log('app.js connected - 26-09-2025 - 14:18');

// Enhanced tooltip functionality for live clock
document.addEventListener('DOMContentLoaded', function() {

    //select live clock element
    const clockElement = document.querySelector('.live---clock');
    
    // if live clock element exists
    if (clockElement) {

        // Add subtle hover effect
        /* clockElement.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'transform 0.2s ease';
        });
        
        clockElement.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        }) */;
        
        // Optional: Update tooltip text dynamically if needed
        // clockElement.setAttribute('data-tooltip', 'Current GMT time: ' + new Date().toUTCString().split(' ')[4]);
    }
});

