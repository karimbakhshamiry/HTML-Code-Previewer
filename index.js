const navItems = Array.from(document.getElementsByClassName("nav__item"))
document.querySelector('.HTML_code').value = "<h1>This is HTML Heading1</h1>"

navItems.forEach(element => {
    element.addEventListener('click', () => {
        document.querySelector('.visible').classList.remove('visible')
        document.querySelector('.selected').classList.remove('selected')

        document.querySelector(`.${element.dataset.section}`).classList.add('visible')
        element.classList.add('selected')

        if (element.textContent.toLowerCase() === 'preview') {
            console.log('clicked')
            document.querySelector('.preview__container').innerHTML = document.querySelector('.HTML_code').value
        }
    })
});