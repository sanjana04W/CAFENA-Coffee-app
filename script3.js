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
    const cartItems = [];

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", (event) => {
            const itemName = event.target.parentElement.querySelector("h3").textContent;
            const itemPrice = event.target.parentElement.querySelector(".price").textContent;

            cartItems.push({ name: itemName, price: itemPrice });
            alert(`${itemName} added to cart!`);
            console.log("Cart:", cartItems);
        });
    });
});

