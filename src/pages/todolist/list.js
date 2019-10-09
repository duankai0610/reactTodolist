import React ,{Component} from "react";
import Observer from "../../observer"
export default class List extends Component{
    constructor(){
        super();
        this.state={
            list:[],
            arr:[],
            type:["新闻","科技","娱乐"],
            classIndex:0,

        }
      
        Observer.$on("handlist",(val)=>{
            let valindex=(val.type=='新闻'?0:(val.type=='科技'?1:2))
           
            this.setState({
                list:val.list,
                arr:val.list[val.type],
                classIndex:valindex
            })
        })
    }
    render(){
        let{arr,type,classIndex}=this.state;
        return(
            <div>
                <div className="list">
                {
                    type.map((item,index)=>(
                        <span style={{background:index==classIndex?'red':"#ccc"}} key={index} onClick={this.clickHandle.bind(this,index)}>{item}</span>
                    ))
                }
                   
                </div>
                <ul>
                        {
                          arr.map((item,index)=>(
                           <li href={'www.baidu.com'} style={{background:item.bg=='1'? 'red':'#ccc' }}key={index}>{item.title}  <span className="span">{item.time}</span></li>   
                          ))
                        }
                </ul>
            </div>
            
        )
    }
    clickHandle(index){
        let{list,arr}=this.state;
            switch (index) {
                case 0:
                    this.setState({
                        arr:(list['新闻']?list['新闻']:[{title:'你还没有添加数据'}]),
                        classIndex:index
                    })
                    break;
                case 1:
                    this.setState({
                        arr:(list['科技']?list['科技']:[{title:'你还没有添加数据'}]),
                        classIndex:index
                    })
                    break;
                case 2:
                    this.setState({
                        arr:(list['娱乐']?list['娱乐']:[{title:'你还没有添加数据'}]),
                        classIndex:index
                    })
                    break;
            
                default:
                    break;
            }
        
       
    }
}