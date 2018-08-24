import React,{Component} from 'react'
import './input.css'
import '../../static/css/font_806542_87l9m3khf1b/iconfont.css'
export default class Input extends Component {
	render(){
		return (
			<div className="search">
				<p className="position">北京<span className="iconfont">&#xe731;</span></p>
				<div className="ipt">
					<span className="iconfont sear_btn">&#xe62f;</span>
					<input type="text" value="搜索明星,演出,场馆" />
				</div>
				<p className="iconfont login">&#xe60c;</p>
			</div>
		)
	}
}