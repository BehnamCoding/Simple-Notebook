// imports
import ui from './ui';

const handleFunc = (function () {

    class Handle {
        constructor() {
            this.textArea = document.querySelector('#textarea');
        }

        applyNote() {
            let textValue = this.textArea.value;
            let date = new Date().toLocaleString(); // current date and time

            if (textValue === '') {
                ui.showMessage('you must write something in input text.', 'danger');
                this.textArea.style.borderColor = '#ff9090';
            } else {
                ui.addNote(textValue, date); // add new note
                ui.showMessage('note successfully added.', 'success');

                this.storeInLocalStorage(textValue, date); // add note to local storage
            }

            this.textArea.value = '';
        }

        storeInLocalStorage(note, date) { // adding local storage method
            let array;

            if (localStorage.getItem('Notes') === null) {
                array = [];
                array.push([note , date]);
                localStorage.setItem('Notes', JSON.stringify(array));
            } else {
                array = JSON.parse(localStorage.getItem('Notes'));
                array.push([note , date]);
                localStorage.setItem('Notes', JSON.stringify(array));
            }
        }

    }

    // instance
    let handle = new Handle();

    // return methods
    return {  // object to return methods in this class.
        applyNote: function () {
            return handle.applyNote();
        },
    }

})()

export default handleFunc; // export main function to use return object.