"use strict";

function fillQuickview(){
    document.querySelector('aside').insertAdjacentHTML('beforeend', `
            <h3>quickview</h3>
            <p>${ects}</p>
            <p>ECTS</p>

            <p><strong>${desiredECTS}</strong> ECTS left</p>
            <div class="black">
                <div class=" progress">

                </div>
            </div>
            <p>10% desired ects allocated</p>
            <ul>
                <li>3 courses in S3</li>
                <li>4 courses in S4</li>
                <li>6 courses in S5</li>
            </ul>
    `)
}

function ects() {
ects = 5

}

function progressBar(desiredECTS, totalECTS){

}

function ectsPerSemester(){

}
/*
let arrarOfSelectedEtcs = []

for(let i in arrarOfSelectedEtcs.lengths){
    ects += arrarOfSelectedEtcs[i]
}*/
let desiredECTS = ects