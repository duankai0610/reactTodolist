import React from "react";
import List from "./list"
import "./index.css";

export default class TodoliatTwo extends React.Component {
    constructor(){
        super()
        this.state={
            bg:"1",
            title:"",
            url:"",
            type:"新闻",
            list:[]
        }
    }
    render() {
        let {bg,list}=this.state;
        return (
            <div className="maxbox">
                <label>
                    新闻标题 :<input type="text" onChange={this.titlehandle.bind(this)} />
                </label><br />
                <label>
                    新闻标题 :<input type="text" onChange={this.urlhandle.bind(this)} />
                </label><br />
                新闻类别 :<select onChange={this.typehandle.bind(this)}>
                    <option>新闻</option>
                    <option>科技</option>
                    <option>娱乐</option>
                </select><br />
                <label>
                    是否标红: <input type="radio" name='rid' value="1" checked={bg == "1"} onChange={this.bghandle.bind(this)} />是
                <input type="radio" name='rid' value="0" checked={bg == "0"} onChange={this.bghandle.bind(this)} />否
            </label><br />
                <button onClick={this.btnClickhandle.bind(this)}>提交</button>
                <div>
                    <List  list={list}/>
                </div>
            </div>
        )
    }
    btnClickhandle(){
        let {type,title,url,bg,list}=this.state
        let obj={type:type,title:title,url:url,bg:bg,time:this.gettime()}
        list.push(obj)
        this.setState({
            list:list,    
        })
    }
    titlehandle(e){
        this.setState({
            title:e.target.value,
        })
    }
    urlhandle(e){
        this.setState({
            url:e.target.value,
        })
    }
    typehandle(e){
        this.setState({
            type:e.target.value,
        })
    }
    bghandle(e){
            this.setState({
                bg:e.target.value,
            })
    }
    gettime(){
        let data=new Date();
        let year=data.getFullYear();
        let month=data.getMonth()+1;
        let day=data.getDay();
        let houer=data.getHours();
        let minutes=data.getMinutes();
        let second=data.getSeconds();
        return year+'/'+String(month).padStart(2,"0")+'/'+String(day).padStart(2,"0")+' '+String(houer).padStart(2,"0")+":"+String(minutes).padStart(2,"0")+":"+String(second).padStart(2,"0")
    }

}