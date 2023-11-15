import {useSettings} from './../../context/settings-context';

function CartSummary() {

	const {currency, cartItems} = useSettings();

	return (
		<div className="cart-summary">
			<h2>Součet košíku</h2>
			<p>Celkem položek: {cartItems.length}</p>
			<p>Cena celkem: { cartItems.reduce( (sum, item) => sum + item.price , 0) } {currency}</p>
		</div>
	);
}

export default CartSummary;