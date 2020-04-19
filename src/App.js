import React, {Component} from 'react';
import { Cards , Chart, CountryPicker} from './components';
import { fetchData } from './api/api';

import styles from './App.module.css';

class App extends Component {

	state = {
		data: {},
		country: '',
	}

	handleChangeCountry = async (country) => {
		const fetchedData = await fetchData(country);
		this.setState({data: fetchedData, country: country});
	}



	async componentDidMount(){
		const fetchedData = await fetchData();
		this.setState({ data: fetchedData});
	}

	render(){

		const { data, country } = this.state;

		return(
			<div>
				<div className={styles.container}>
					<h1 className = {styles.header}>COVID-19 TRACKER</h1>
					<CountryPicker handleChangeCountry ={this.handleChangeCountry}/>
					<Cards data = { data } />
					<Chart data={data} country={country}/>
				</div>
			</div>
		);
	}
}

export default App;