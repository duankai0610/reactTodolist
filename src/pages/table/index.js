import React, { Component } from "react";
import {Link} from "react-router-dom";
class Table extends Component {
    constructor() {
        super()
        this.state = {
            username: "",
            age: "",
            signature: '',
            arr: [],
            flag: true,
            id:-1,
        }
    }
    render() {
        let { arr, username, age, signature, flag } = this.state;
        // console.log(arr);
        return (
            <div>
                <label>
                    姓名: <input type="text" value={username} onChange={this.userchangeHandle.bind(this)} />
                </label><br />
                <label>
                    年龄: <input type="text" value={age} onChange={this.agechangeHandle.bind(this)} />
                </label><br />
                <label>
                    签名: <input type="text" value={signature} onChange={this.signchangeHandle.bind(this)} />
                </label><br />
                <button onClick={this.clickHandleAdd.bind(this)}>{flag ? '添加' : '修改'}</button>
                <button>取消</button>

                <div>
                    {
                        arr.map((item, index) => (
                            <ul key={index}>
                                <li>{item.username} </li>
                                <li>{item.age}</li>
                                <li>{item.signature}</li>
                                <button onClick={this.modifyhandle.bind(this,index)}>修改</button>
                                <button onClick={this.delethandle.bind(this, index)}>删除</button>
                            </ul>
                        ))
                    }

                </div>
                <div>
                    <Link to="/todolist">图一 </Link>
                    <Link to="/todolist">图二 </Link>
                </div>
            </div>
        )
    };
    modifyhandle(index){
        let{username,age,signature,arr,id}=this.state;
        this.setState({
            flag: false,
            username:arr[index].username,
            age:arr[index].age,
            signature:arr[index].signature,
            id:index,
        })
    }
    delethandle(index) {
        this.state.arr.splice(index, 1);
        this.setState({
            arr: this.state.arr
        })

    }
    clickHandleAdd(e) {
        let flag = this.state.flag;
        if (flag) {
            let { arr, username, age, signature } = this.state;
            let obj = { username: username, age: age, signature: signature }
            arr.push(obj);
            this.setState({
                arr: arr
            })
        } else {
            let {arr,id,username,age,signature}=this.state;
            arr[id].username=username;
            arr[id].age=age;
            arr[id].signature;
            this.setState({
                flag:true,
                arr:arr,
            })
        }
    }
    userchangeHandle(e) {
        this.setState({
            username: e.target.value,
        })
    }
    agechangeHandle(e) {
        this.setState({
            age: e.target.value,
        })
    };
    signchangeHandle(e) {
        this.setState({
            signature: e.target.value,
        })
    }
}
export default Table;