import React from 'react'

import myImagee from "./todo-app-img.jpg";

export default function Header() {
    return (
        <>
            <div className= "main-header-container">
                <h3 className = "app-main-header">My Todo List</h3>
            </div>
         
            <div className="container">
                <figure>
                    <img 
                    className="todo-img"
                    src={myImagee} 
                    alt="todo-app" 
                    />
                    <figcaption>Add your list here ✌ </figcaption>                   
                </figure>
            </div>           
        </>
    )
}
