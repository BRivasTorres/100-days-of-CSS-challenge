const searchBtn = document.querySelector(".nav__search-btn")
const labelSerach = document.querySelector(".nav__search")
const menuBtn = document.querySelector(".nav__menu-btn")
const navTitle = document.querySelector(".nav__title")

const menuNavBtn = document.querySelector(".nav__menu-btn")

searchBtn.addEventListener("click", () => {
    if(labelSerach.style.display === "none") {
        labelSerach.style.display = "block"
        menuBtn.style.display = "none"
        navTitle.style.display = "none"
    } else {
        labelSerach.style.display = "none"
        menuBtn.style.display = "block"
        navTitle.style.display = "block"
    }
})

menuNavBtn.addEventListener("click", () => {
      
})