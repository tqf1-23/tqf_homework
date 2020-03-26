import React,{Component} from 'react';

class Newitem extends Component{
    constructor(props){
        super(props);
        this.state={
            inputContent:''
        }
    }

    onInputChange=(event)=>{
        this.setState({
            inputContent:event.target.value
        })

        console.log(event.target.value)
    }
    onAddBtn=()=>{
        this.props.addItem(this.state.inputContent)
        this.setState({
            inputContent:''
        })
    }
    Change_btn=()=>{
        this.props.Change(this.state.inputContent)
        this.setState({
            inputContent:''
        })
    }
    render(){
        return(
            <div>
                <input value={this.state.inputContent}  onChange={this.onInputChange}/>
                <button onClick={this.onAddBtn}>Add</button>
                <button onClick={this.Change_btn}>Change</button>
            </div>
        )
    }
}
export default Newitem;