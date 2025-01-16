
const todoForm=document.getElementById(`todo-form`);
const todoInput=document.getElementById(`todo-input`);
const todoList=document.getElementById(`todo-list`);

todoForm.addEventListener('submit',(e)=>{

    e.preventDefault();
    addTask(todoInput.value);
    todoInput.value=``;
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);
  }

  function addDeleteButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      li.remove();
    });
    li.appendChild(deleteButton);
  }
  
  // Adding tasks to the list
  function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    todoList.appendChild(li);
    addDeleteButton(li);
  }
