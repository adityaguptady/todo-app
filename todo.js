console.log("Hello")

var todoListArray = []

function addTodo()
{
    console.log("Add Todo!!")
    let todoInput = document.getElementById("todoInput")
    console.log(todoInput)
    console.log(todoInput.value)
    if(todoInput.value.trim() == "")
    {
        alert("Todo title cannot be blank!!!")
    }
    else
    {
        console.log(todoListArray)
        todoListArray.push(todoInput.value)
        console.log(todoListArray)
    }
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    for(let index = 0; index<todoListArray.length; index++)
    {
        todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
    }
}