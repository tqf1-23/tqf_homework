import React,{Component} from 'react';
import Listitem from './Listitem';
import Newitem from './Newitem';
import './Listitem.css'

class TodoList extends Component{

    constructor(props){
        super(props);
        this.state={
            todoList:[
                {content:'React practice',done:true},
                {content:'game time',done:false}
            ]
        }
    }

    addNewitem=(newItemContent)=>{
        const newlist=[...this.state.todoList,{content:newItemContent,done:false}];
        this.setState({
            todoList:newlist
        })
    }

    Change=(newItemContent)=>{
        this.state.todoList.map(item=>{
            if(item.content==newItemContent){
                item.done=true
            }
            if(item.done==true)
            {
                return <p className="done-item">{item.content}</p>
            }
        })
        this.setState({
            todoList:this.state.todoList
        })
    }

    
        render(){
            return (
                <div>{
                this.state.todoList.map(item=><Listitem item={item}/>)
                }
                <Newitem addItem={this.addNewitem} Change={this.Change}/> 
               
                </div>
            );
        }
}
export default TodoList;