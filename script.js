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
    const cartButtons = document.querySelectorAll(".btn");


    cartButtons.forEach(button => {
        button.addEventListener("click", () => {
            alert("GET NOW 🙂‍↔️ !");
        });
    });

});
