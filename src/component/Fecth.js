import React from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import Header from './navbar';
import '../component/style/fecth.css';


class FecthX extends React.Component {
	constructor(props){
		super(props);	
		this.state = {
			judul : [],
			loading : true,
			to:false
		};
	}

	//*
	componentDidMount(){
		axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F')
		.then(res=> {
			this.setState ({
				judul: res.data.items,
				loading : false
			})
		})
	}

	handleRemove =() => {
        localStorage.removeItem('api_token')
       	this.setState({
       		to:true
       	})
    }

    handleKlik = (index) => {
    	this.props.history.push(`/home/${index}`)
    }

	render(){
		 console.log(this.props)

		if (this.state.to) {
			return <Redirect to="/" />
		}
		if (localStorage.getItem('api_token') === null){
			return <Redirect to="/" />
		}
		/*loading*/
		if (this.state.loading === true){
			return(
				<div className="loading">
				<img src="https://media.giphy.com/media/10h1BGkwYiIydi/giphy.gif" />
				</div>
				)
		}

		return(
			<div>
			<Header />
			<br/>
			<a className="btn logout" onClick={this.handleRemove}>log out</a>
			<div className="box-1">
			<div className="section"></div>
			<div className="judul">INFO TERKINI</div>
			{
				this.state.judul.map((pram, index) =>{
					return(
						<div className="box-2">
						<br/>
						<h5>{pram.title}</h5><br/>
						<img className="ga "src={pram.thumbnail} alt="" /><br/>
						<a className="btn" onClick={() => this.handleKlik(index)} >View</a><br/>
						<br/>
						</div>
						)
				})
			}
			</div>
			</div>
			);
	}
}

export default FecthX;