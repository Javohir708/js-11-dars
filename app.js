const methodsLink = document.querySelector('a[href="#methodsID"]');

methodsLink.addEventListener('click', function(event) {
    event.preventDefault();

    const targetElement = document.getElementById('methodsID');
    const offsetTop = targetElement.offsetTop;

    window.scrollTo({
        top: offsetTop - 60,
        behavior: 'smooth'
    });
});

const arrowLink = document.querySelector('a[href="#arrowID"]');

arrowLink.addEventListener('click', function(event) {
    event.preventDefault();

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});