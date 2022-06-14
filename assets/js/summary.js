"use strict";

function fillSummary(e) {

}


function fillTbody(parent) {
    let i= 0
    while( i < listNamePage1.length){
        document.querySelector(".tbody").insertAdjacentHTML("beforeend", `<tr>
        <td>${listSemesterPage1[i]}</td>
        <td>${listNamePage1[i]}</td>
        <td>${listEctsPage1[i]}</td>
        <td>${listSemesterPage2[i]}</td>
        <td>${listNamePage2[i]}</td>
        <td>${listEctsPage2[i]}</td>
        </tr>`)
        i+= 1
    }

}

function filltfoot(parent) {

}
