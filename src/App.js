import React from "react";
import {HashRouter as Router ,Route, LInk,NavLink,Redirect,Switch} from "react-router-dom"
import Table from "./pages/table";
import Todolist from "./pages/todolist";
import TodolistTwo from "./pages/todolisttwo";
export default class App extends React.Component{
    render(){
        return(
            <Router>
                <Redirect  from="/" to="/todolisttwo" exact/>
                <Route  path="/table" component={Table}/>
                <Route path="/todolist" component={Todolist} />
                <Route path="/todolisttwo" component={TodolistTwo} />
            </Router>
        )
    }
}