import React from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom'
import '../component/style/login.css'
import Loginprops from './Loginprops'

class Unc extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			username:'wicak',
			password:'luthfi',
			loadingKlik: false
		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		},()=> console.log (this.state))
		

	}

	hendleSubmit = (e) => {
		e.preventDefault()
		this.setState({
			loadingKlik: true
		})
		const data = {
			username : this.state.username,
			password : this.state.password
		}
		axios.post('https://penjualanapp-api.herokuapp.com/api/v1/auth/login',data)
		.then(res => {
			localStorage.setItem('api_token', res.data.data.token)
			this.props.history.push('/home')
			this.setState({
				loadingKlik: false
			})
		})
	}

	render(){
		if (localStorage.getItem('api_token')){
			return <Redirect to="/home"/>
		}
		return (
			<div className="form-1">
			<div className="form-ko">
			<h1>Login
			</h1>
			<div>
			<form onSubmit={this.hendleSubmit}>
			<label className="label">Email
			<br/>
			<input
			autocomplete="off"
			name="username"
			type="text"
			placeholder="masukan Email"
			onChange={this.handleChange}
			/>
			</label>
			<br/>
			<label className="label">Password
			<br/>
			<input
			name="password"
			type="Password"
			placeholder="masukan Password"
			onChange={this.handleChange}
			/>
			<br/>
			{this.state.error && <span style={{color: "red"}} className="error-i">{this.state.error}</span>}
			</label>
				<Loginprops loadingKlik={this.state.loadingKlik}/>
			</form>
			</div>
			</div>
			</div>
			);
		}
	}

	export default Unc;