document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.bottom-nav a');
    const contentDiv = document.getElementById('content');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');

            fetch(page)
                .then(response => response.text())
                .then(html => {
                    contentDiv.innerHTML = html;
                })
                .catch(error => {
                    console.error('Error loading page:', error);
                });
        });
    });

    // Load default content (home.html)
    links[0].click();
});