document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-bar button');
    searchButton.addEventListener('click', () => {
        const query = document.querySelector('.search-bar input').value;
        alert(`Search for: ${query}`);
    });
});
