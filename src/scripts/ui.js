const uiFunc = (function () {

    class Ui {
        constructor() {
            this.table_body = document.querySelector('.table .table-body');
            this.messageArea = document.querySelector('#message');
            this.textArea = document.querySelector('#textarea');
        }

        addNote(text, date) {
            let output = '';

            output = `
            <tr>
                <td>${text}</td>
                <td>${date}</td>
                <td class="remove-item">&times;</td>
            </tr>
            `

            this.table_body.innerHTML += output;
        }

        showMessage(text, color) {
            let div = document.createElement('div');
            div.textContent = text;
            div.classList = `alert alert-${color} mt-4 alert-item`;

            if (!document.querySelector('.alert-item')) {
                this.messageArea.appendChild(div);
            }

            setTimeout(() => {
                document.querySelector('.alert-item').remove();
                this.textArea.style.borderColor = '#ced4da';
            }, 3000);
        }

        deleteFunc(e) {
            if (e.target.classList.contains('remove-item')) {  // event delegation to find and click on remove button.
                if (confirm('Are you sure you want to delete this item?')) {
                    e.target.parentElement.remove();
                    this.showMessage('Note Deleted !', 'warning');
                }

                let noteText = e.target.parentElement.children[0].textContent;

                this.deleteFromLocalStorage(noteText);
            }
        }

        getFromLocalStorage() {
            let array = JSON.parse(localStorage.getItem('Notes'));

            array.forEach(item => {
                let tr = document.createElement('tr');
                tr.innerHTML = `
                    <td>${item[0]}</td>
                    <td>${item[1]}</td>
                    <td class="remove-item">&times;</td>
                `

                this.table_body.appendChild(tr);
            });
        }

        deleteFromLocalStorage(noteText) {
            let array = JSON.parse(localStorage.getItem('Notes'));

            array.forEach((item , index) => {
                if(noteText === item[0]) {
                    array.splice(index , 1);  // delete note as the same as note in local storage.
                }
            });
            localStorage.setItem('Notes' , JSON.stringify(array));
        }
    }

    // instance
    let ui = new Ui();

    // return methods
    return {
        addNote: function (text, date) {
            return ui.addNote(text, date);
        },
        deleteFunc: function (e) {
            return ui.deleteFunc(e);
        },
        showMessage: function (text, color) {
            return ui.showMessage(text, color);
        },
        getFromLocalStorage: function () {
            return ui.getFromLocalStorage();
        }
    }

})()

export default uiFunc; // export main function to use return object.