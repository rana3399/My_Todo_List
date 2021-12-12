import React, { useState,useEffect } from 'react';
import Footer from './Footer';
import myImagee from "./todo-app-img.jpg"

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


//   -------------  adding local storage----------
    useEffect(( )=> {
       return localStorage.setItem("inputKey", JSON.stringify(addedItems))

    }, [addedItems])

    const handleOnChange = (event)=>{
        setInputItem(event.target.value); 
    }
    
    //ON KEY PRESS-------------------------------------
    const handleKeyPress =(e)=>{
        if(e.key === 'Enter'){
            let newlyAddedItems = {
                id: Math.random()*1000,
                name: inputItem
            }
            setAddedItems([...addedItems, newlyAddedItems]);
            setInputItem("");
        }
    }

    //Add the items - ON BUITTON CLICK -------------------------------------
    const handleOnClick =()=>{
        if(!inputItem){
            alert("Please write something");
        }
        else if(editing){

            const itemNeedToEdit = addedItems.map((curElem)=>{
                if(curElem.id === editItems){
                    
                    return {...curElem, name: inputItem}
                    
                } else{
                    return curElem;
                }         
             })          
             setAddedItems(itemNeedToEdit);
             setInputItem("");
             setEditing(false);
        }       
        else{
            let newlyAddedItems = {
                id: Math.random()*1000 ,
                name: inputItem
            }
            setAddedItems([...addedItems, newlyAddedItems]);
            setInputItem("");
        }
    }

    // -------------Edited Items Handler----------------
    const editItemFunc= (index)=>{
        const filteredEditItems = addedItems.find((item)=>{
            return  item.id === index              
        })
        console.log(filteredEditItems);

        setInputItem(filteredEditItems.name);
        setEditItems(index);
        setEditing(true);
    }
    
    // -------------Delete Selected Items Handle----------------
    const handleDelete = (id) =>{
       const filterItem = addedItems.filter((eachItem)=> {
            return eachItem.id !== id
        })
        setAddedItems(filterItem);
    }

    // -------------Delete All Items Handle----------------
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

                {editing ? <button onClick = {handleOnClick} className="add-btn" >EDIT items <i className="far fa-edit"></i></button> :
                    <button className="add-btn" onClick = {handleOnClick} >
                        Add more items <i className="fas fa-plus"></i> 
                    </button>
                }
                   
                    <button className="delete-btn" onClick = {handleDeleteAll}>
                        Delete All <i class="fas fa-minus-circle"></i> 
                    </button>
                </div>


                {addedItems.length > 0 && 
                    <div className="added-items-list">
                    {
                        addedItems.map((item)=> {
                            return(
                                <>
                                <div className="items" key={item.id}>
                                    <p className = "todo-item">{item.name} </p>                                  
                                    <div className="icon-container">
                                    <span className="edit-icon"><i onClick={()=> editItemFunc(item.id)} className="far fa-edit"></i></span>
                                    <span className="delete-icon"><i onClick={()=> handleDelete(item.id) } className="fas fa-trash-alt"></i> </span>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div> 
                
                }
                
            </div>
        </div>
        <Footer/>


        </>
    )
}

export default Todo;
