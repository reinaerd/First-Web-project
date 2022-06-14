"use strict";
let value = "ascending"
let versch_sem = ["S1", "S2", "S3", "S4", "S5", "S6"]

versch_sem.sort()

function changeFilter(e) {
    value = e.target.value
    let sorteerModules = modules.sort(sorter)

    if(e.target.parentElement.parentElement.parentElement.parentElement.getAttribute("id") === "completedcourses"){
        fillModules(document.querySelector("#comp"), sorteerModules, `completed`)
    }
    else{
        fillModules(document.querySelector("#take"), sorteerModules, `take course`)
    }
}

function filterAndSortModules(e) {
    e.preventDefault()

    e.target.classList.toggle("check")
    e.target.parentElement.classList.toggle("filter")
}


function sortModules(filteredModules) {}

function sorter(module1, module2){

    if(module1.module > module2.module){
        if(value === "ascending"){
            return 1
    }
        else{
        return -1
        }
    }
    else{
        if(value === "ascending"){
            return -1
        }
        else{
            return 1
        }
    }
}