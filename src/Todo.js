import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import myImagee from "./todo-app-img.jpg";
import DisplayItems from './DisplayItems';



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
    const [addedItems, setAddedItems] = useState(localDataFunc());
    const [editItems, setEditItems] = useState("");
    const [editing, setEditing] = useState(false);


//   -------------  adding local storage---------
    useEffect(( )=> {
        localStorage.setItem("inputKey", JSON.stringify(addedItems))

    }, [addedItems])

    const updateLocalStorage =()=> {
        localStorage.setItem("inputKey", JSON.stringify(addedItems));
    }

    const handleOnChange = (event)=>{
        setInputItem(event.target.value); 
    }
    
    //ON KEY PRESS---------------------------------
    const handleKeyPress =(e)=>{
        if(e.key === 'Enter'){
            handleOnClick();
        }
    }

    //Add the items - ON BUITTON CLICK ----------------
    const handleOnClick =()=>{
        if(!inputItem){
            alert("Please write something")
        }
        else if(editing){       
            const itemNeedToEdit = addedItems.map((curElem)=>{
                if(curElem.id === editItems){
                    
                    console.log(curElem.id);
                    console.log(curElem);
                    return {...curElem, name: inputItem}                
                } else{
                    return curElem;
                }         
             })     
             setAddedItems(itemNeedToEdit);
             setEditing(false);
             setInputItem("");
        }       
        else{
            let newlyAddedItems = {
                id: Math.random()*1000 ,
                name: inputItem
            }
            setAddedItems([...addedItems, newlyAddedItems])
            setInputItem("")
        }
    }

        // -------------Edited Items Handler----------------
        const editItemFunc= (index)=>{
            const filteredEditItems = addedItems.find((item)=>{
                return  item.id === index              
            })
    
            setInputItem(filteredEditItems.name);
            setEditItems(index);
            setEditing(true);
        }
        
     

    // -------------Delete All Items Handle---------------
    const handleDeleteAll =()=> {
        if(addedItems.length >=1){
            return setAddedItems([])
        }else{
           return alert("Nothing to delete!")
        }
    }

    return (
        <>
        <div className= "main-header-container">
            <h3 className = "app-main-header">My Todo List</h3>
        </div>
        <div className="main-container">
            <div className="child-container">
                <figure>
                <img 
                className="todo-img"
                src={myImagee} 
                alt="todo-app" 
                />

                <figcaption>Add your list here ✌ </figcaption>
                
                <input 
                onKeyPress={handleKeyPress}
                className = "input-field"
                type="text" 
                placeholder=" ✍ Write your list"
                onChange={handleOnChange}
                value= {inputItem}
                />
                </figure>
                
                <div className="button-container">

                {editing ?  <button onClick = {handleOnClick}  className="add-btn" >EDIT items <i className="far fa-edit"></i></button> 
                :  <button className="add-btn" onClick = {handleOnClick}>
                    Add more items <i className="fas fa-plus"></i> 
                   </button>
                }                 
                    <button className="delete-btn" onClick = {handleDeleteAll}>
                        Delete All <i class="fas fa-minus-circle"></i> 
                    </button>
                </div>

                {addedItems.length > 0 &&
                    <DisplayItems addedItems={addedItems}  />
                }
                
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default Todo
