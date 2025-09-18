document.addEventListener('DOMContentLoaded', () => {
    const searchIcon = document.querySelector('.search-icon');

    searchIcon.addEventListener('click', () => {
        let searchBox = document.createElement('input');
        searchBox.setAttribute('type', 'text');
        searchBox.setAttribute('placeholder', 'Search...');
        searchBox.classList.add('search-box');
        
        if (!document.querySelector('.search-box')) {
            searchIcon.insertAdjacentElement('afterend', searchBox);
            searchBox.focus();
            
            searchBox.addEventListener('blur', () => {
                searchBox.remove();
            });
        }
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const readMoreButtons = document.querySelectorAll(".read-more");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            alert("Redirecting to the full blog post! 🚀");
        });
    });
});


