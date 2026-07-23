/* ======================================================
   DK ATOVITT - VERSION 8 COMPLETE JS
   FILE: js/main.js
====================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    // Elements select kar rahe hain
    const menuBtn = document.getElementById('menuBtn');
    const closeMenuBtn = document.getElementById('closeMenu');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const menuLinks = sideMenu.querySelectorAll('a');

    // Menu Open karne ka function
    function openMenu() {
        sideMenu.classList.add('active');
        overlay.classList.add('active');
        // Background scroll rokne ke liye
        document.body.style.overflow = 'hidden'; 
    }

    // Menu Close karne ka function
    function closeMenu() {
        sideMenu.classList.remove('active');
        overlay.classList.remove('active');
        // Background scroll wapas chalu karne ke liye
        document.body.style.overflow = 'auto'; 
    }

    // ☰ Button click par menu open hoga
    menuBtn.addEventListener('click', openMenu);

    // ✕ Button click par menu close hoga
    closeMenuBtn.addEventListener('click', closeMenu);

    // Dark background (overlay) par click karne se bhi menu close hoga
    overlay.addEventListener('click', closeMenu);

    // Kisi bhi menu link par click karne se menu automatically band ho jayega
    menuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

});
