import React,{Component} from 'react'
import './head_ad.css'
export default class Headad extends Component {
	render(){
		return (
		
			<div className="headad">
				<div className="logo"></div>
				<div className="slog">
					<p>下载票牛APP</p>
					<p>领188元新人礼包</p>
				</div>
				<button className="download">立即下载</button>
			</div>
		
		)
	}
}