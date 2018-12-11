import reddit from './redditapi';
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', e => {
    const searchTerm = searchInput.nodeValue;
    const sortBy = document.querySelector('input [name="sortby"]:checked');
    console.log(sortBy);

    const searchLimit = document.getElementById('limit').value;
    console.log(searchLimit);   

    if(searchTerm === '') {
        // Show message
        showMessage('Please add a search term', 'alert-danger');
    }
    searchInput.value = '';


    // Search Reddit
    reddit.search(searchTerm, searchLimit, sortBy).then()

    e.preventDefault();
});

function showMessage(message, className)
{
    // Create div
    const div = document.createElement('div');
    // Add classes
    div.className = `alert alert-${className}`;

    // Add text
    div.appendChild(document.createTextNode(message));
    // Get parent
    const searchContainer = document.getElementById('search-container');
    const search = document.getElementById('search');

    // Insert message
    searchContainer.insertBefore(div, search);

    // Timeout alert
    setTimeout( () => document.querySelector('.alert').remove(), 3000);
}