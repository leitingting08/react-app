import React, { Component } from 'react';
import InterfaceServer from '../../../../axios/interface'
const interfaceServer = new InterfaceServer();
import { Button } from 'antd';

export default class EmployeeFilesDetail extends React.Component {
	constructor(props,context){
		super(props,context)
		this.state = {
			userinfo:{}
		}
	}
	render(){
		let username = JSON.parse(localStorage.getItem('USERINFO')).username;
		return(

			<div className="EmployeeFilesDetail">
			  <div className="nav col666"><span>人事管理</span>><span className="font12">员工档案</span>><span className="font12">详情</span></div>
			  <div className="flex container">
			  	<div className="l bgcon">
			  	<div className="photo"></div>
			  	<Button type="link">更换头像</Button>
			  	<div className="col333 row">{username}</div>
			  	</div>
			  	<div className="r bgcon">
				  	<table className="table filetable" border="0" cellPadding="0" cellSpacing="0" bordercolor="#eee">
					    <tbody>
					    	<tr><td>姓名</td><td>{this.state.userinfo.name}</td></tr>
					    	<tr><td>性别</td><td>{this.state.userinfo.sex?'男':'女'}</td></tr>
					    	<tr><td>员工编号</td><td>{this.state.userinfo.emId}</td></tr>
					    	<tr><td>角色职位</td><td>{this.state.userinfo.position}</td></tr>
					    </tbody>
				    </table>
			  	</div>
			  </div>
			  
			</div>
			)
	}
	componentWillMount(){
		this._sendUserinfoServer()
	}

	_sendUserinfoServer(){
		interfaceServer.sendUserinfoServer({
			// data,
			onSuccess:res=>{
				console.log(res)
				this.setState({
					userinfo:res.data
				})
			}
		})
	}

}