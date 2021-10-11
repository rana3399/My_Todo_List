import React, { useState,useEffect } from 'react'

const localDataFunc=()=>{
    let localData = localStorage.getItem("inputKey")
    if(localData){
        return JSON.parse(localData)
    }else{
        return [];
    }
 }

const Todo =()=> {
    const [inputItem, setInputItem] = useState("");
    const [addedItem, setAddedItem] = useState(localDataFunc());
    const [editItems, setEditItems] = useState("");

//   -------------  adding local storage----------
    useEffect(( )=> {
       return localStorage.setItem("inputKey", JSON.stringify(addedItem))

    }, [addedItem])

    const handleOnChange = (event)=>{
        console.log(event.target.value)
        setInputItem(event.target.value)
        
    }

    // -------------Edited Items Handler----------------
    const editItemFunc= (index)=>{
        const filteredEditItems = addedItem.find((item)=>{
            return  item.id === index
                
        })
        //console.log(index);
        //console.log(filteredEditItems.name);

        setInputItem(filteredEditItems.name)
        setEditItems(index)
    
    }
    

    const handleOnClick =(e)=>{
        if(!inputItem){
            alert("Please write something")
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



    // -------------Delete Selected Items Handle----------------
    const handleDelete = (id) =>{
       const filterItem = addedItem.filter((eachItem)=> {
            return eachItem.id !== id
        })
        setAddedItem(filterItem)
    }

    // -------------Delete All Items Handle----------------
    const handleDeleteAll =()=> {
        if(addedItem.length >=1){
            return setAddedItem([])
        }else{
           return alert("Nothing to delete!")
        }
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
                    <button onClick = {handleDeleteAll}>
                        Delete All <i class="fas fa-minus-circle"></i> 
                    </button>

                </div>

                <div className="added-items-list">
                    {
                        addedItem.map((item)=> {
                            return(
                                <div className="items" key={item.id}>
                                    <h4>{item.name} 
                                    <span> <i onClick={()=> handleDelete(item.id) } className="fas fa-trash-alt"></i> </span> 
                                    <span><i onClick={()=> editItemFunc(item.id)} className="far fa-edit"></i></span>
                                    </h4>
                                    
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
