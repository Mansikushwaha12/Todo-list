import React, { useState } from 'react'

function Todo() {
    const [activity,setActivity] = useState("");
    const [allTodos, setAllTodos] = useState([]);

    function addActivity() {
        // 
        if (activity.trim() !== "") {
            setAllTodos([activity, ...allTodos]);
            setActivity("");
            console.log(allTodos);
          }
        
      }
function handleTodoRemove(i){
    const updateList = allTodos.filter((todo, id)=> id !== i)
    setAllTodos(updateList);
}
function removeAll(){
    setAllTodos([])
}
      
  return (
    <div className='container'>
      <div className='header'>TODO LIST</div>
      <input type='text' placeholder='Add Activity' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
      <button onClick={addActivity}>Add</button>
      {allTodos.length > 0 && allTodos.map((data, i)=>{
        return(
           
            <p key={i}>
                <div className='listData'>{data}</div>
              
                <div className='btn-position'><button onClick={()=> handleTodoRemove(i)}>remove</button></div>
                
                
            </p>
            
        )
      })}
      {allTodos.length >= 1 &&
       <button onClick={removeAll}>Remove All</button>}
      
    </div>
  )
}

export default Todo
