import React, { useState } from "react";
import './Card.css';
import { Todo } from "../models/todo";

interface Props {
    todo: Todo,
    removeClick: () => void
}

export default function Card({todo, removeClick}: Props) {
    const [myTodo, setMyTodo] = useState(todo);

    const changeStatus = () => {       
        let newTodo = {...myTodo};
        newTodo.completed = !newTodo.completed;
        setMyTodo(newTodo);
        console.log('Completed = ', myTodo.completed);
    }

    return (
        <div className="card">
            {!myTodo.completed ?
                <div className="statusRed" onClick={changeStatus}>
                    <i className="fa fa-times"></i> 
                </div> :
                <div className="statusGreen" onClick={changeStatus}>
                    <i className="fa fa-check"></i>      
                </div>
            }
            <div className="content">
                <h2 className="title">{myTodo.title}</h2>
            </div>
            <div className="remove">
                <button title="Remove" onClick={removeClick}><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}