/* eslint-disable */

//import dependencies
import React, { Component } from 'react'

//import external files for tools
import './slider.css'

class FilterPanel extends Component {
	constructor(props) {
		super(props)
		this.state = {
			sensitivity: 5,
			tat: 5,
			regulatory: 5,
			score: 15
		}
	}

	setSensitivityValue(e) { this.setState({ sensitivity: e.target.value }) }
	setTATValue(e) { this.setState({ tat: e.target.value }) } 
	setRegulatoryValue(e) { this.setState({ regulatory: e.target.value }) }
	setScoreValue(e) { this.setState({ score: e.target.value }) }

	resetFilter() {
		this.setState({
			sensitivity: 5,
			tat: 5,
			regulatory: 5,
			score: 15
		})
	}

	render() {
		let { sensitivity, tat, regulatory, score } = this.state
		return (
			<div className="jumbotron">
			 	<h4 id="panel-header">Filters</h4>
				<form>
					<div className="form-group">
				 		<label>Sensitivity: {sensitivity}</label>
				 		<input type="range" min="1" max="5" value={sensitivity} className="slider form-control" id="sensitivityRange" onChange={this.setSensitivityValue.bind(this)} />
					</div>
					<div className="form-group">
				 		<label>TAT: {tat}</label>
				 		<input type="range" min="1" max="5" value={tat} className="slider form-control" id="TATRange" onChange={this.setTATValue.bind(this)} />
					</div>
					<div className="form-group">
				 		<label>Regulatory: {regulatory}</label>
				 		<input type="range" min="1" max="5" value={regulatory} className="slider form-control" id="regulatoryRange" onChange={this.setRegulatoryValue.bind(this)} />
					</div>
					<div className="form-group">
				 		<label>Score: {score}</label>
				 		<input type="range" min="1" max="15" value={score} className="slider form-control" id="scoreRange" onChange={this.setScoreValue.bind(this)}/>
					</div>
				</form>
				<button className="btn btn-outline-success" onClick={this.resetFilter.bind(this)}>Reset</button>
			</div>
		)
	}
}

export default FilterPanel