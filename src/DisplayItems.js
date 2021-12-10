import React from 'react';
import DeleteItems from './DeleteItems';

export default function DisplayItems({addedItems}) {
    
    

       // -------------Delete Selected Items Handle----------
    //    const handleDelete = (id) =>{
    //     const filterItem = addedItems.filter((eachItem)=> {
    //          return eachItem.id !== id
    //      })
    //      setAddedItems(filterItem)
    //  }

    return (  
            <div className="added-items-list">
                {
                    addedItems.map((item)=> {
                        return(
                            <>
                            <div className="items" key={item.id}>
                                <p className = "todo-item">{item.name} </p>  

                                <div className="icon-container">
                                    {/* <span className="edit-icon"><i onClick={()=> editItemFunc(item.id)} className="far fa-edit"></i></span> */}
                                    {/* <span className="delete-icon"><i onClick={()=> handleDelete(item.id) } className="fas fa-trash-alt"></i> </span> */}
                                    <DeleteItems addedItems={addedItems}  />
                                
                                </div>
                            </div>
                            </>
                        )
                    })
                }
            </div> 
            
    )
}
