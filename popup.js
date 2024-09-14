document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.bottom-nav a');
    const contentDiv = document.querySelector('.content');

    // Function to load the content
    const loadContent = (page) => {
        fetch(page)
            .then(response => response.text())
            .then(html => {
                contentDiv.innerHTML = html;
            })
            .catch(error => {
                console.error('Error loading page:', error);
                contentDiv.innerHTML = '<p>Sorry, there was an error loading the page.</p>';
            });
    };

    // Add click event listeners to navigation links
    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const page = link.getAttribute('data-page');
            loadContent(page);
        });
    });

    // Load default content (e.g., home.html) when the popup is opened
    loadContent('pages/home.html');
});



    