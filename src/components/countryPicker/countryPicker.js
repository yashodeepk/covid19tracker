import React, {useState, useEffect} from 'react';
import {NativeSelect, FormControl} from '@material-ui/core';

import styles from './countryPicker.module.css';

import { fetchCountries } from '../../api/api';
const CountryPicker = ({ handleChangeCountry }) => {
	const [fetchedCountries, setFetchedCountries] = useState([]);

	useEffect(() => {
		const fetchCountriesAPI = async () => {
			setFetchedCountries(await fetchCountries())
		}

		fetchCountriesAPI();
	}, [setFetchedCountries]);

	return (
		<FormControl className={styles.formControl}>
			<NativeSelect defaultValue = "" onChange = {(e) => handleChangeCountry(e.target.value)}>
				<option value="">Global</option>
				{fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
			</NativeSelect>
		</FormControl>
	)
}

export default CountryPicker;