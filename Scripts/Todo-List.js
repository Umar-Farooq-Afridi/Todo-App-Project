const todoList = [];
let editIndex = null;

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const { name, dueDate } = todoList[i];

        const html = `
            <div class="todo-item">
                <div>
                    <span><strong>Name: ${name}</strong></span><br>
                    <span><strong>Due: ${dueDate}</strong></span>
                </div>
                <div>
                    <button class="todo-edit-button" onclick="editTodo(${i})">Edit</button>
                    <button class="todo-delete-button" onclick="deleteTodo(${i})">Delete</button>
                </div>
            </div>
        `;

        todoListHTML += html;
    }

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}


function addTodo() {
    let inputElement = document.querySelector('.js-name-input');
    let name = inputElement.value;

    let dateInputElement = document.querySelector('.js-due-date-input');
    let dueDate = dateInputElement.value;

    if (name === '' || dueDate === '') {
        alert('Enter both name and todo due date.');
        return;
    }

    if (editIndex !== null) {
        todoList[editIndex] = { name, dueDate };
        editIndex = null;
        document.querySelector('.js-todo-add-button').innerHTML = 'Add';
    }
    else {
        todoList.push({
            // name: name,
            // dueDate: dueDate,
            name,
            dueDate
        });
    }

    inputElement.value = '';
    dateInputElement.value = '';
    renderTodoList();
}

function deleteTodo(i) {
    todoList.splice(i, 1);
    renderTodoList();
}

function editTodo(i) {
    const todo = todoList[i];
    document.querySelector('.js-name-input').value = todo.name;
    document.querySelector('.js-due-date-input').value = todo.dueDate;

    editIndex = i;
    document.querySelector('.js-todo-add-button').innerHTML = 'Save'
}