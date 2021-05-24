const mongoose=require('mongoose')
mongoose.connect('mongodb://localhost/express-db',{
    useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true,  //必需加否则报错！
    autoIndex: false   //被禁用，因为索引创建可能会导致显著性能影响
},function(err){
    if(err){
        console.log('链接数据库失败：'+err);
    }else{
        console.log('数据库连接成功！');
    }
})
const UserSchema=new mongoose.Schema({
   username:{
       type:String,
       unique:true   //字段唯一
   },
   password:{
       type:String,
       set(val){    //set()是SchemaType.prototype.set()功能是将设置器添加到此框架类型中，设置器使您可以在数据转换到原始mongodb文档或查询之前进行转换！
           return require('bcryptjs').hashSync(val,10);   //通过bcryptjs对密码进行加密（该加密方式是bcrypt的同步加密，还有异步加密此处没用！）  参数一表示返回值， 参数二表示密码强度(例如此处的10表示最高的加密强度！)    
       }
   },
   email:{
       type:String,
       unique:true
   }


})





module.exports=mongoose.model('User',UserSchema);
