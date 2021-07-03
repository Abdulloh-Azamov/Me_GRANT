$('.tr').counterUp({
    delay: 10,
    time: 1900
});

// title effect

window.addEventListener('load', () => {
    const h1 = document.querySelector('.banner__title');
    let txt = h1.innerHTML;
    h1.innerHTML = '';
    let x = 0;


    function str() {
        h1.innerHTML = h1.innerHTML + txt[x];
        x++
        if (x < txt.length) {
            setTimeout(() => {
                str()
            }, 100);
        }
    }
    str();
})


window.addEventListener('scroll', function() {
    const header = document.querySelector('.services');
    const pad = document.querySelector('.plane');
    header.classList.toggle('sticky', window.scrollY = pad);
});




// nav