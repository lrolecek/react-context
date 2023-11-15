import {useSettings} from './../../context/settings-context';

function Header() {
	const {currency, setCurrency} = useSettings();

	const handleChange = (event) => {
		setCurrency(event.target.value)
	}

	return (
		<header className="header">
			Hlavička

			<select value={currency} onChange={handleChange}>
				<option value="Kč">Kč</option>
				<option value="USD">USD</option>
				<option value="EUR">EUR</option>
				<option value="GBP">GBP</option>
			</select>

		</header>
	);
}

export default Header;