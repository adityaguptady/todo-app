$(document).ready(function() 
{
    updateFrontend()
});
// console.log("Hello")
var count = 0
var todoListArray = [
    {
        id: ++count,
        todo: "Todo 1",
        completed: false
    }, 
    {
        id: ++count,
        todo: "Todo 2",
        completed: false
    },
    {
        id: ++count,
        todo: "Todo 3",
        completed: false
    },
    {
        id: ++count,
        todo: "Todo 4",
        completed: false
    }
]

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
    updateFrontend()
}

function updateFrontend()
{
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    for(let index = 0; index<todoListArray.length; index++)
    {
        // todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
        if(todoListArray[index].completed)
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")' checked/><label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
        else
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox'  onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><label>"+todoListArray[index].todo+"</label><button>Edit</button><button>Delete</button></li>"
    }
}

function onTodoComplete(checkbox, todoID)
{
    // console.log("Checked change!", checkbox.checked)
    // console.log("Todo ID:", todoID)
    //find the correct object from the array based on id
    //update the object to change the checked property
    //update the array
    console.log(todoListArray)
    todoListArray = todoListArray.map((todoObj)=>
    {
        if(todoObj.id == todoID)
        {
            //console.log("Found!!!", todoObj.todo)
            // if(checkbox.checked)
            //     todoObj.checked = true
            // else
            //     todoObj.checked = false

            todoObj.completed = checkbox.checked
        }
        return todoObj
    })
    console.log(todoListArray)
    //update the Frontend
    updateFrontend()
}