console.log("Hello")

var todoListArray = []
var count = 0

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
        todoListArray.push({
            id: ++count,
            todo: todoInput.value,
            completed: false
        })
        console.log(todoListArray)
    }
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    for(let index = 0; index<todoListArray.length; index++)
    {
        // todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
        todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'/><label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
        
    }
}