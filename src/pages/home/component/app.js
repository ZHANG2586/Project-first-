import '../../home/home.css'
import React,{Component} from 'react'
import cookie from 'react-cookies';
import {loginUser} from '../../cookie'     
import axios from 'axios';
import getQueryString from '../../geturl'
export default class s extends Component{
   constructor(props){
       super(props);
       this.state={
           code:''
       }
       this.onsubmit=this.onsubmit.bind(this);
       this.onsubmit2=this.onsubmit2.bind(this);
       this.getUser=this.getUser.bind(this);
   }
   //获取url参数
 

   componentDidMount(){      //查看当前网页中的cookie里存储了些什么，以及cookie中有没有名叫mt_token的coookie.
       let userId=loginUser();
        console.log(userId);
         console.log(cookie.loadAll());
          
         const code = getQueryString('code');
         console.log(code);
         if (code) {
           this.setState(
             {
               code:code
             },
             () => {
               if (!this.state.code) {
                 return;
               }
               console.log(this.state.code);
               this.getUser(this.state.code);
             }
           );
         }else{
           console.log('code获取失败！');
         } 
     
   }
   
// componentWillReceiveProps(nextProps) {
//     const code = getQueryStringByName('code')
//     if (code) {
//       this.setState(
//         {
//           code
//         },
//         () => {
//           if (!this.state.code) {
//             return;
//           }
//           this.getUser(this.state.code);
//         },
//       );
//     }
//   }
  getUser(code) {
       let t={
           code:code
       };
       
      axios.post(
        'http://localhost:3016/github/callback',
         t,
        { withCredentials: true }
      )
      .then(res => {
        console.log('res :', res);
        var params={
            client_id:res.data.client_id,
            client_secret:res.data.client_secret,
            code:res.data.code
        }
        // axios.post('https://github.com/login/oauth/access_token', params).then((res)=>{
        //     console.log(res);
        //     const access_token = JSON.parse(res.data).access_token
        //     console.log(access_token);    
        // }).catch((err)=>{
        //     console.log(err);
        // });
        
        // if (res.status === 200 && res.data.code === 0) {
        //   this.props.loginSuccess(res.data);
        //   let userInfo = {
        //     _id: res.data.data._id,
        //     name: res.data.data.name,
        //   };
        //   window.sessionStorage.userInfo = JSON.stringify(userInfo);
        //   message.success(res.data.message, 1);
        //   this.handleLoginCancel();
        //   // 跳转到之前授权前的页面
        //   const href = window.localStorage.preventHref
        //   if(href){
        //     window.location.href = href 
        //   }
        // } else {
        //   this.props.loginFailure(res.data.message);
        //   message.error(res.data.message, 1);
        // }
      })
      .catch(err => {
        console.log(err);
      });
  }





    onsubmit(e){
        e.preventDefault();
        window.location.href='http://localhost:3000/#/home/huiyi';    
    }
    onsubmit2(e){
         e.preventDefault();
         window.location.href='http://localhost:3000/#/home/qiandao';
    }
    render(){
    return(
        <div className='kk'>
            <div id='id' style={{position:'relative'}}>
             <h2 className='server'>业务区</h2>
             {/* <h2 className='infrom' style={{width:'400px',height:'80px',display:'inline-block',margin:'0 0 0 0'}}><a>消息区</a></h2> */}
             <a href='#/home/xiaoxi' style={{color:'black',position:'absolute',right:0,width:'400px',height:'80px'}}><h2 style={{display:'inline-block'}}>消息区</h2></a>
             </div>
             <li className='h'>会议室
                 <button className='b' onClick={this.onsubmit}>预约</button>
             </li>
             <li>位置签到
                 <button className='b' onClick={this.onsubmit2}>签到</button>
             </li>
        </div>
    );
    }
}