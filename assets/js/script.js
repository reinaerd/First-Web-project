"use strict";

/* Declare any global variables below this line, but before the first function call */
const kleuren =["green", "yellow", "pink", "orange", "blue", "purple", "white"]
document.addEventListener('DOMContentLoaded', init);

function init() {
    fillQuickview()

    // Fillings
    modules.forEach(module => {
          module.randomKleur = kleuren[Math.floor(Math.random()*kleuren.length)]
         })
    fillModules(document.querySelector("#comp"), modules, `completed`)
    fillModules(document.querySelector("#take"), modules, `take course`)

    // Bindings
    document.querySelectorAll("form ol li a").forEach(a => a.addEventListener('click', filterAndSortModules));
    document.querySelectorAll('a.data_button').forEach(buttons => buttons.addEventListener('click', handleNavigation));
    document.querySelector("form").addEventListener('submit', processPersonalData)
    document.querySelectorAll("select").forEach(value => value.addEventListener("change", changeFilter))
    document.querySelector("#over").addEventListener("click", fillTbody)


    // Delegates
    document.querySelectorAll(".course").forEach(buttons => buttons.addEventListener('click', delegateModuleAction));


    // Other initialisations
   if(localStorage.getItem("person")) {
        const person = JSON.parse(localStorage.getItem("person"));
        document.querySelector("#name").value = person.name;
        document.querySelector("#email").value = person.email;
        document.querySelector("#ECTS").value = person.ects;
    }
}

function handleNavigation(e) {

    let previousPage = e.target.getAttribute("href");
    let nextPage = e.target.closest("section");

    switchPage(previousPage, nextPage)

}


function switchPage(previousPage,nextPage){
    document.querySelector(`${previousPage}`).classList.remove('nietzichtbaar')
    nextPage.classList.add('nietzichtbaar')
}

