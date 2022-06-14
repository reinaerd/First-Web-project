"use strict";

function processPersonalData(e) {
    e.preventDefault();
    const submissionButton = document.querySelector('#submitje');
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const ects = document.querySelector('#ECTS').value;
    const person = {name:name,email:email,ects:ects};
    validateData(person,submissionButton);
}

function validateData(person, submissionButton){
    if ((person.name).length < 2){
        alert("your name needs to be longer than two characters.")
    }
    else if((person.email).length < 1){
        alert("your email is not valid.")
    }
    else if((person.ects) < 3 || (person.ects) > 60){
        alert("please select between 3 and 60 ects.")
    }
    else{
        let previousPage = "#" + submissionButton.getAttribute("data-target");
        let nextPage = submissionButton.closest("section");
        switchPage(previousPage, nextPage)
        savePersonalData(person)
    }


}

function savePersonalData(person){
    localStorage.setItem("person", JSON.stringify(person))
}





