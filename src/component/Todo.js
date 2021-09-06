<div className="app">
<div className="mainHeading">
  <h1>ToDo List</h1>
</div>
<div className="subHeading">
  <br />
  <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
</div>
<div className="input">
  <input value ={toDo} onChange ={(e)=>setTodo(e.target.value)}  type="text" placeholder="🖊️ Add item..." />
  <i onClick={()=>setTodos([...toDos,{id:Date.now(),text:toDo,status:false}])} className="fas fa-plus"></i>
</div>
<div className="todos">
{toDos.map((obj)=>
{
  return(
    <div className="todo">
      <div className="left">
        <input onChange ={
          (e)=>{
            console.log(e.target.value);
            console.log(obj)
          }
        } value={obj.status} type="checkbox" name="" id="" />
        <p>{obj.text}</p>
      </div>
      <div className="right">
        <i className="fas fa-times"></i>
      </div>
    </div>
)})}

</div>
</div>