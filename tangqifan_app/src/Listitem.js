import React,{Component} from 'react';
import './Listitem.css'
const Listitem=(props)=>{
    const item=props.item;
    if(item.done){
        return <p className="done-item">{item.content}</p>
    }
    else{
        return <p className="item">{item.content}</p>
    }
}

export default Listitem;