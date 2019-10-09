import React, { Fragment } from 'react';
export default class List extends React.Component {
    constructor(props) {
        super(props)
        console.log(this);
    }
    render() {
       
        let list = this.props.list;
        return (
            <Fragment>
                <ul>{
                   
                 list.map((item,index)=>(
                        <li key={index} style={{background:item.bg=='1'?"red":"#f5f5f5"}}>[{item.type}]
                        <a href={item.url} className="a">{item.title}</a><span className="span">{item.time}</span>
                        </li>
                    ))
                }
                </ul>
            </Fragment>
        )
    }
}