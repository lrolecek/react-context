import CartItem from "../CartItem";
import {useSettings} from './../../context/settings-context';

function CartContent() {
	const {cartItems} = useSettings();

	return (
		<div className="cart-content">
			{cartItems.map(
				item => <CartItem key={item.name} name={item.name} price={item.price} />
			)}
		</div>
	);
}

export default CartContent;