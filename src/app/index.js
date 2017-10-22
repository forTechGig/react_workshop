import React from "react";
import { render } from "react-dom";

import {Header} from "./components/Header"
import {Home} from "./components/Home"

class App extends React.Component{
    constructor(){
        super();
        this.state={
            Home: 'Home'
        };
    }
    onGreet(name){
        alert('Hi' + name)
    }

    onLinkNameChange(newName){
        this.setState({
            Home: newName
        });
    }
    render(){
      return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Header Home = {this.state.Home}></Header>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xs-10 col-xs-offset-1">
                        <Home name={"Max"} initialAge={28} nameChage={this.onLinkNameChange.bind(this)} Home = {this.state.Home}>
                            <p>This is a children</p>
                        </Home>
                    </div>
                </div>
            </div>
        );
    }
}

render(<App/>, window.document.getElementById("app"));