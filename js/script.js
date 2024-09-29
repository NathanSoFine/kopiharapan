// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu di klik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

// Toggle Active Search Button
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');

document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
};


// Toggle Class Active untuk shopping Cart
const shoppingCard = document.querySelector('.shopping-card');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCard.classList.toggle('active');
  e.preventDefault();
};
// Klick di luar elemen
const hamburger = document.querySelector
('#hamburger-menu');
const sb = document.querySelector
('#search-button');
const sc = document.querySelector
('#shopping-cart-button');



document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }

    if(!sb.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm
        .classList.remove('active');
    }
    
});

// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  btn.onclick = (e) => {
    console.log('Button clicked'); // Tambahkan log untuk debug
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  };
});


// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  itemDetailModal.style.display = 'none';
  e.preventDefault();
};

// klik di luar modal
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = 'none';
  }
};