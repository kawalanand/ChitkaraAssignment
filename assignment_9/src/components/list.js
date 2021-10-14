import React from "react";
import './list.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash,faArrowUp,faArrowDown} from '@fortawesome/free-solid-svg-icons'

const List = (props) =>
{
    
    return(
        
        <div className="list">
            <div><p>{props.name}</p></div>
            <button onClick={()=>props.Delete(props.index)}> <FontAwesomeIcon icon={faTrash}/></button>
            <button onClick={()=>props.Up(props.index)}><FontAwesomeIcon icon={faArrowUp}/></button>
            <button onClick={()=>props.Down(props.index)}><FontAwesomeIcon icon={faArrowDown}/></button>
        </div>
    )
}

export default List;
