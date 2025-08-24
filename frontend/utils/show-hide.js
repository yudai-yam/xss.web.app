function setupShowHide(element_id, button_id) {
    const element = document.getElementById(element_id);
    const button = document.getElementById(button_id);
    
    if (!element || !button) {
        console.error('Element or button not found');
        return;
    }

    // Initially hide the element
    element.style.display = 'none';

    // Add click event listener to the button
    button.addEventListener('click', () => {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    });
} 

setupShowHide('examples', 'toggle_examples');