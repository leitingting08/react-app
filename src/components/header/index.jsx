import React, { Component } from 'react';
import List from './subpage/list';
import { Link } from 'react-router-dom'
import Alert from '@/components/alert'

class Header extends React.Component {
 
  constructor(props, context){
    super(props,context)
    this.state = {
      showul:false,
      showtoggletheme:false
    }
  }
  render() {
    return (
      <div className="Header">
      {this.state.showul||this.state.showtoggletheme?
        <div className="bgbody" onClick={this.hideName.bind(this)}></div>:''
      }
        <div className="title flex">
	        <div className="w50 txtleft">
          <span className="font16">{this.props.title}</span>
          </div>
	        <div className="w50 txtright pr20">
            <span className="changeTheme" onClick={this.toggleTheme.bind(this)}>更换主题</span>
            <ul className={`opeartion theme ${this.state.showtoggletheme?'show':'hide'}`}>
                <span className="trangle"></span>
                <li>
                  <input type="text" placeholder="请输入颜色值enter" onChange={this.changeTheme.bind(this)}/>
                  <button></button>
                </li>
            </ul>
          <i className="iconfont icon-xinxi mr20"></i>
             <span className="username" onClick={this.clickUserName.bind(this)}>{this.props.username}
             <i className={`iconfont mr20 font30 ${this.state.showul?'icon-arrow-up-2':'icon-arrowdropdown'}`}></i>
             </span>
          </div>
          <ul className={`opeartion ${this.state.showul?'show':'hide'}`}>
            <span className="trangle"></span>
            <li><Link to={`/hrmanage/employeefiles/detail`}><i className="iconfont icon-yonghu2"></i>查看档案</Link></li>
            <li><div onClick={this.editpass.bind(this)}><i className="iconfont icon-xiugaimima"></i>修改密码</div></li>
            <li><div onClick={this.logout.bind(this)}><i className="iconfont icon-tuichu"></i>退出</div></li>
          </ul>
        </div>
      </div>
    )
  }
  changeTheme(e){
    console.log(e)
    var event = e || window.event;
    var key = event.which || event.keyCode || event.charCode;
    if (key == 13) {
      /*Do something. 调用一些方法*/ 
      console.log(e)
    }
  }
  toggleTheme(){
    this.setState({
      showtoggletheme:!this.state.showtoggletheme
    })
  }
  clickUserName(){
    this.setState({
      showul:!this.state.showul
    })
  }
  hideName(){
    this.setState({
      showul:false
    })
  }
  editpass(){

  }
  logout(){
    Alert.open({
      content:'确认退出?',
      btn:['确定','取消'],
      yes:function(){
        console.log('确定');
        localStorage.removeItem('USERINFO')
        location.replace('#/login')
      },no:function(i){
        console.log('取消');
      }
    })
  }
}

export default Header;