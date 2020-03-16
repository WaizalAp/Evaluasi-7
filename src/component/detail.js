import React from 'react';
import axios from 'axios'
import Header from './navbar';
import '../component/style/ditail.css'

class Detail extends React.Component{
	constructor(props){
		super(props);
		this.state = { datas:[] }
	}

componentDidMount(){
	const index = this.props.match.params.index
		axios.get('https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Frss.detik.com%2F')
		.then(res => {
			this.setState({
				datas: res.data.items[index]
			})
		})
	}

//tombol untuk kembali ke Home
handleKlik = () => {
    	this.props.history.push(`/home/`)
    }

render(){
	const { datas } = this.state
	return(
			<div>
			<div className="awl-1">
			<Header />
				<h4>{datas.title}</h4>
				<img src={datas.thumbnail}/>
				<p>{datas.pubDate}</p>
				<br/>
				<a href={datas.link}>lihat Info lebih jelas</a>
				<br/>
				<br/>
				<a className="btn" onClick={() => this.handleKlik()} >home</a><br/>
			</div>
			</div>
		)
	}
}
export default Detail;