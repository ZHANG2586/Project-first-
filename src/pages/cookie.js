import cookie from 'react-cookies'
//此处对cookie操作的进行的封装

//获取当前用户cookie
export const loginUser=()=>{
    return cookie.load('mt_token');
}

//用户登录，保存cookie（此处用不上，因为已经使用后端的res.setHeader()的方法来把token的值传到前端浏览器的同时保存到了前端浏览器的cookie中了）
export const onLogin=(user)=>{
    cookie.save('userInfo',user,{path:'/'});
}
//用户登出，删除cookie
export const logout=()=>{
    cookie.remove('mt_token');
    window.location.href='http://localhost:3000/';
}