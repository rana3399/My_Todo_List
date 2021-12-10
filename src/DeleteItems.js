import React, {useState} from 'react';

export default function DeleteItems({addedItems}) {

    const [add , setAdd] = useState(addedItems)

         // -------------Delete Selected Items Handle----------
         const handleDelete = (id) =>{
            const filterItem = add.filter((eachItem)=> {
                 return eachItem.id !== id
             })
             setAdd(filterItem)
         }
    return (
        <div>     
            {
                add.map((item)=> {
                return(
                    <>                 
                    <span className="delete-icon"><i onClick={()=> handleDelete(item.id) } className="fas fa-trash-alt"></i> </span>                   
                    </>
                )
            })
            }
        </div>
    )
}
