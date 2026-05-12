const menuBtn = document.getElementById('menuBtn');
const navDropdown = document.getElementById('navDropdown');

menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();

    navDropdown.classList.toggle('is-active');
    menuBtn.classList.toggle('is-open');
});

document.addEventListener('click', (e) => {

    const clickedInsideMenu =
        navDropdown.contains(e.target) ||
        menuBtn.contains(e.target);

    if (!clickedInsideMenu) {

        navDropdown.classList.remove('is-active');
        menuBtn.classList.remove('is-open');

    }

});