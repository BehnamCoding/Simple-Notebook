// imports
import hanlde from './handle';
import uiFunc from './ui';

// variables
let btn_apply = document.querySelector('#btn-apply');
let table_body = document.querySelector('.table');


// loadAllEvents
loadAllEvents();

function loadAllEvents() {

    btn_apply.addEventListener('click' , applyNote);

    table_body.addEventListener('click' , deleteFunc);

    document.addEventListener('DOMContentLoaded' , loadFromLs);

}

// functions
function applyNote() {
    hanlde.applyNote();
}

// deleteFunc
function deleteFunc(e) {
    uiFunc.deleteFunc(e);
}

// loadFromLs
function loadFromLs() {
    uiFunc.getFromLocalStorage();
}