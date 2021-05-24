import './App.css';
import Denglou from "./pages/denglou/denglou";
import Home from "./pages/home/home"
import ZhuCe from "./pages/ZhuCe/zhuce"
import Zhaohuimima from './pages/Zhaohuimima/Zhaohuimima'
import Mimagenggai from './pages/mimagenggai/mimagenggai'
import Huiyi from './pages/huiyi/huiyi'
import Qiandao from './pages/qiandao/qiandao'
import Xiaoxi from './pages/xiaoxi/xiaoxi'
import {HashRouter,Route,Switch} from 'react-router-dom'
import createHashHistory from 'history/createHashHistory';
const hashHistory=createHashHistory();
function App() {
  return (
    <HashRouter history={hashHistory}>
      
         <Switch>
                     <Route path="/"  exact component={Denglou}></Route>
                     <Route path="/home" exact component={Home}></Route>
                     <Route path="/ZhuCe" exact component={ZhuCe}></Route> 
                     <Route path='/Zhaohuimima' exact component={Zhaohuimima}></Route>
                     <Route path='/Zhaohuimima/genggai' exact component={Mimagenggai}></Route>
                     <Route path='/home/huiyi' exact component={Huiyi}></Route>
                     <Route path='/home/qiandao' exact component={Qiandao}></Route>
                     <Route path='/home/xiaoxi' exact component={Xiaoxi}></Route>
         </Switch>
      

    </HashRouter>
  );
}

export default App;
