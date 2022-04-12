$ = (q) => {
    const element = document.querySelectorAll(q);
    if (element.length > 1) return element;
    else if (element.length === 1) return element[0];
}

// NAVIGATION TOGGLER
$('#menu-btn').addEventListener('click', () => {
    $('.nav').classList.toggle('active');
    $('#menu-btn').classList.toggle('fa-xmark');
});