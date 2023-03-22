import React from "react";
import './Card.css';
import { Todo } from "../models/todo";

interface Props {
    todo: Todo,
    removeClick: () => void
}

// userId: number;
// id: number;
// title: string;
// completed: boolean;

export default function Card({todo, removeClick}: Props) {
    return (
        <div className="card">
            {!todo.completed ?
                <div className="status" style={{backgroundColor: 'rgb(255, 41, 95)'}}>
                    <i className="fa fa-times"></i> 
                </div> :
                <div className="status" style={{backgroundColor: 'green'}}>
                    <i className="fa fa-check"></i>      
                </div>
            }
            <div className="content">
                <h2 className="title">{todo.title}</h2>
            </div>
            <div className="remove">
                <button onClick={removeClick}><i className="fa fa-trash"></i></button>
            </div>
        </div>
    )
}