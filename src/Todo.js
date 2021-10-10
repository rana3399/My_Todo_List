import React, { useState } from 'react'

const Todo =()=> {
    const [inputItem, setInputItem] = useState("");
    const [addedItem, setAddedItem] = useState([]);


    const handleOnChange = (event)=>{
        console.log(event.target.value)
        setInputItem(event.target.value)
        
    }
    //setInputItem("")

    const handleOnClick =(e)=>{
        if(!inputItem){
            alert("Please enter some item")
        }else{
            let newlyAddedItems = {
                id: Math.random()*1000 ,
                name: inputItem
            }
            setAddedItem([...addedItem, newlyAddedItems])
            setInputItem("")
        }


      
    }
    console.log(addedItem);
    
    

    const handleDelete = (id) =>{
       const filterItem = addedItem.filter((eachItem)=> {
            return eachItem.id !== id
        })
        setAddedItem(filterItem)

    }

    return (
        <div className="main-container">
            <div className="child-container">
                <figure>
                <img 
                className="todo-img"
                src="../img/todo-app-img.jpg" 
                alt="todo-app" 
                />

                <figcaption>Add your list here ✌ </figcaption>
                
                <input
                className = "myInput"
                type="text" 
                placeholder=" 🎁 Write your list"
                onChange={handleOnChange}
                value= {inputItem}
                />
                </figure>
                
                <div className="button-container">
                    <button onClick = {handleOnClick}>
                        Add more items <i className="fas fa-plus"></i> 
                    </button>
                </div>

                <div className="added-items-list">
                    {
                        addedItem.map((item)=> {
                            return(
                                <div className="items" key={item.id}>
                                    <h4>{item.name} <span> <i onClick={()=> handleDelete(item.id) } className="fas fa-trash-alt"></i> </span> </h4>
                                    
                                </div>
                            )
                        })
                    }

                </div>
                
            </div>
        </div>
    )
}

export default Todo
