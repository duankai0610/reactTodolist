import React,{Component} from "react"
import Formdata from "./formdata";
import List from "./list"
import "./index.css";
 export default class Todolist extends Component{
    render(){
        return(
            <div className="maxbox">
                <Formdata />
                <List/>
            </div>
        )
    }
}