const burger = document.querySelector('.burger')
const container = document.querySelector('.container')
const haveClass = container.classList.contains("active")



burger.addEventListener('click', () =>{
    container.classList.toggle('active')
})


function replaceBg(id) {
    const bg = document.getElementById(id)
    screens.forEach( screen => {
        screen.style.display = 'none'
    })
    bg.style.display = 'block'
}

function changeBg() {
    const links = document.querySelectorAll('.link')

    links.forEach((link, index) =>{
        link.addEventListener('click', e => {
            e.preventDefault()
            replaceBg(e.target.dataset.link)
        })
        container.classList.toggle('active')
    })

    screens.forEach(screen => {
        screen.style.display = 'none'
        screens[0].style.display = 'block'
    })
}
changeBg()
