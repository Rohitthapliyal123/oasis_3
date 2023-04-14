// LOGIC FOR ADDING A NEW TODO TASK

function addtoList() {

    let todoDiv = document.getElementById('myTodo')
    let taskname = document.getElementById('taskName').value;
    if (todoDiv.innerHTML == 'Please Enter a Valid Task...') {

        todoDiv.innerHTML = '';


    }

    let newTodoElem = document.createElement('div')
    let todolist_name = document.createElement('li');

    todolist_name.innerHTML = taskname;

    let deleteBtn = document.createElement('i')
    deleteBtn.classList.add('fa-solid')
    deleteBtn.classList.add('fa-trash')

    if (taskname != '') {
        newTodoElem.appendChild(todolist_name);
        newTodoElem.appendChild(deleteBtn);
        todoDiv.appendChild(newTodoElem)

    }
    else {

        todoDiv.innerHTML = 'Please Enter a Valid Task...';

    }


}

// LOGIC FOR DELETING TODO TASK 

let todo_div = document.getElementById('myTodo');

todo_div.addEventListener('click', function (e) {


    const element = e.target

    if (element.classList[0] == 'fa-solid') {

        element.parentElement.remove();

    }
})
