"use strict";

let listNamePage1 = []
let listSemesterPage1 = []
let listEctsPage1 = []
let listNamePage2 = []
let listSemesterPage2 = []
let listEctsPage2 = []

function delegateModuleAction(e) {
    e.preventDefault()


    if (e.target.tagName === 'BUTTON') {
        if(e.target.parentElement.parentElement.parentElement.getAttribute("id") === "completedcourses"){
            listNamePage1.push(e.target.dataset.moduleNaam)
            listSemesterPage1.push(e.target.dataset.moduleSemester)
            listEctsPage1.push(e.target.dataset.moduleEcts)
        }
        else{
            listNamePage2.push(e.target.dataset.moduleNaam)
            listSemesterPage2.push(e.target.dataset.moduleSemester)
            listEctsPage2.push(e.target.dataset.moduleEcts)
        }

        e.target.classList.toggle("compbutton")

    }

}
function fillModules(selector, modules, buttonText) {
    selector.innerHTML = modules.map(div => `<div>
        <h2>${div.module}</h2>
        <div class="${div.randomKleur}">
        ${div.module.split(/\s/).reduce((response,word)=> response+=word.slice(0,1), ``)}</div>
        <p>${div.ects} ECTS</p>
        <h3>${div.lecturer}</h3>
        <button data-module-naam="${div.module}" data-module-semester="${div.semester}" data-module-ects="${div.ects}">${buttonText}</button>
        </div>`).join(``)
}



