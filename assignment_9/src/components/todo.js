import React,{useState} from "react";
import './todo.css';
import List from './list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus} from '@fortawesome/free-solid-svg-icons'

const Todo = (props) =>
{
    window.addEventListener('keypress',(e)=>{
        if(e.key==='Enter')
        {
            Add();
        }
    });
    const [item, setItem] = useState('');
    const [items,setItems] = useState([]);
    const Add = (event)=>
    {
        if(item!=="")
        {
            setItems((prevState)=>
            {
                return [...prevState, item]
            })
            document.querySelector('#input').value='';
            setItem('');
        }   
    }
    const Delete = (index)=>
    {  
        setItems((prevState)=>
        {
                let arr = [...prevState];
                arr.splice(index,1)
                return arr;
        })
    }
    const Up = (index) =>
    {
        if(index>0)
        {
            setItems((prevState)=>
            {
                let arr = [...prevState];
                let temp = arr[index];
                arr[index] = arr[index-1];
                arr[index-1] = temp;
                return arr;
            })
        }
    }
    const Down = (index) =>
    {
        if(index<items.length-1)
        {
            setItems((prevState)=>
            {
                let arr = [...prevState];
                let temp = arr[index];
                arr[index] = arr[index+1];
                arr[index+1] = temp;
                return arr;
            })
        }
        
    }
    var itemList = items.map((newitem,idx)=>{
        // console.log('in item list');
        return <List name={newitem} key={idx} index={idx} Delete={Delete} Up={Up} Down={Down}/>
    });
    return(
        <div className="container">
            <div className="body">
                <h1>ToDo APP</h1>
                <div className="inputField">
                    <input id="input" type="text" placeholder="Add Here..!!!!"
                    onChange={(e)=>setItem(e.target.value)}/>
                    <button onClick={Add}><FontAwesomeIcon icon={faPlus}/></button>
                </div>
                {itemList}     
            </div>
        </div>
    )
}

export default Todo;


//rfc rcc