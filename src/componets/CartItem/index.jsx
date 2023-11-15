import {useSettings} from './../../context/settings-context';

function CartItem({name, price}) {
	const {currency} = useSettings();

	return (
		<div className="cart-item">
			<div>{name}</div>
			<div>{price} {currency}</div>
		</div>
	);
}

export default CartItem;