import React from 'react'

export default function Item ({eachitem, onItemEdit, onItemDelete}) {

    return (
        <div className="items" key={eachitem.id}>
            <p className = "todo-item">{eachitem.name} </p>                                  
            
            <div className="icon-container">
                <span className="edit-icon"><i onClick={onItemEdit} className="far fa-edit"></i></span>
                <span className="delete-icon"><i onClick={onItemDelete} className="fas fa-trash-alt"></i> </span>
            </div>
        </div>
    )
}
