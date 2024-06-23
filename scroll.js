window.onload = function () {
     // Select all elements with the class 'panel'
    const panels = document.querySelectorAll('.panel')

    // For each panel, add a click event listener
    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            // Remove the 'active' class from all panels
            removeActiveClasses()
            // Add the 'active' class to the clicked panel
            panel.classList.add('active')
        })
    })
    // Function to remove the 'active' class from all panels
    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active')
        })
    }
}

/* "let's begin "click and to the below */
//scroll to a specific anchor on the page
function scrollToAnchor(anchorId) {
    const anchorElement = document.getElementById(anchorId);
    if (anchorElement) {
        //Scroll to the anchor
        anchorElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}