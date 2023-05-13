const searchBtn = document.querySelector(".nav__search-btn")
const labelSerach = document.querySelector(".nav__search")
const menuBtn = document.querySelector(".nav__menu-btn")
const navTitle = document.querySelector(".nav__title")
const navMenuBtn = document.querySelector(".nav__menu-btn")
const navMenu = document.querySelector(".nav__menu")
const nav = document.querySelector(".nav")
const hero = document.querySelector(".hero")

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

navMenuBtn.addEventListener("click", () => {
    if(navMenu.style.display === "none") {
        navMenu.style.display = "block"
        navMenu.style.left = "0%"
        nav.style.left = "50%"
        hero.style.left = "50%"
    } else {
        navMenu.style.display = "none"
        navMenu.style.left = "5%"
        nav.style.left = "0%"
        hero.style.left = "0%"
    }    
})