import React from "react";

export class Home extends React.Component{
    constructor(props){
        super();
        this.state = {
            age: props.initialAge,
            status: 0,
            nameChage: "new Name"
        };
        setTimeout(()=> {
            this.setState({
            status: this.state.status+1
        });
    },30);
    }
    bumpTheAge(){
        this.setState({
            age: this.state.age+3
        });
        console.log(this.state.age);
    }

    onNameChange(){
        this.props.nameChage(this.state.nameChage);
    }

    setValue(event){
        this.state.nameChage = event.target.value;
        this.props.nameChage(this.state.nameChage);
    }

    render(){
        return(
            <div>
                <p>In a new Component</p>
               <p>Hello {this.props.name}</p>
               <p>{this.props.name} age is {this.state.age}</p>
               <hr/>
               <button onClick={() => this.bumpTheAge()} className="btn btn-primary">Change the age</button>
               <p>status {this.state.status}</p>
               <button onClick={this.onNameChange.bind(this)} className="btn btn-primary">Greet</button>
               <input name="homename" id="homename" cols="30" rows="10" value={this.props.Home} onChange={(event) => this.setValue(event)} ></input>
            </div>
        );
    }
}

Home.propTypes = {
    name: React.PropTypes.string,
    age: React.PropTypes.number,
    nameChage: React.PropTypes.func
};