import React, { Component } from "react";

class AddNinja extends Component{
    state={
        name:null,
        id:null
    }
    qbSubmitFun=(event)=>{
        event.preventDefault();
        this.props.addNinja(this.state);
    }

    qbChangeFun=(event) =>{
        this.setState({
            [event.target.id]:event.target.value
        })
    };
    render(){
        return(
            <div>
                <form onSubmit={this.qbSubmitFun}>
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" onChange={this.qbChangeFun}/>

                    <button>Submit</button>
                </form>
            </div>
        );
    }
};

export default AddNinja;