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

var editingTodoFlag = -1

function updateFrontend()
{
    let todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    for(let index = 0; index<todoListArray.length; index++)
    {
        // todoList.innerHTML += "<li>"+todoListArray[index]+"</li>"
        if(todoListArray[index].completed)
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox' onclick='onTodoComplete(this, "+todoListArray[index].id+")' checked/><label ><s>"+todoListArray[index].todo+"<s></label><button onclick='onEditTodo("+todoListArray[index].id+")'>Edit</button><button onclick='onDeleteTodo("+todoListArray[index].id+")'>Delete</button></li>"
        else if(editingTodoFlag == todoListArray[index].id)
        {
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox' onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><input id='editingTodo' value="+todoListArray[index].todo+"></input><button onclick='saveTodo("+todoListArray[index].id+")'>Save To-do</button><button onclick='onDeleteTodo("+todoListArray[index].id+")'>Delete</button></li>"
        }
        else
            todoList.innerHTML += "<li id="+todoListArray[index].id+"><input type='checkbox' onclick='onTodoComplete(this, "+todoListArray[index].id+")'/><label>"+todoListArray[index].todo+"</label><button onclick='onEditTodo("+todoListArray[index].id+")'>Edit</button><button onclick='onDeleteTodo("+todoListArray[index].id+")'>Delete</button></li>"
    }
}

function saveTodo(todoID)
{
    console.log("Saving this:", todoID)
    let updatedTodoText = document.getElementById("editingTodo").value
    console.log(updatedTodoText)
    todoListArray = todoListArray.map((todoObj)=>
    {
        if(todoID == todoObj.id)
        {
            todoObj.todo = updatedTodoText
        }
        return todoObj
    })
    //read updated todo text - Done
    //save it in Array's subsequent object - Done
    editingTodoFlag = -1
    updateFrontend()
    //Update frontend to stop editing this todo
}

function onEditTodo(todoID)
{
    console.log("Editing id: ", todoID)
    editingTodoFlag = todoID
    updateFrontend()
}

function onDeleteTodo(todoID)
{
    console.log("ID to be deleted: ", todoID)
    //find out the object in the array
    //delete the complete object from teh array
    todoListArray = todoListArray.filter((todoObj)=>
    {
        return !(todoID == todoObj.id)
    })
    updateFrontend()
}

function onTodoComplete(checkbox, todoID)
{
    console.log("Checked change!", checkbox.checked)
    console.log("Todo ID:", todoID)
    //find the correct object from the array based on id
    //update the object to change the checked property
    //update the array
    console.log(todoListArray)
    todoListArray = todoListArray.map((todoObj)=>
    {
        if(todoObj.id == todoID)
        {
            todoObj.completed = checkbox.checked
        }
        return todoObj
    })
    console.log(todoListArray)
    //update the Frontend
    updateFrontend()
}