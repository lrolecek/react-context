import CartContent from "../CartContent";
import CartSummary from "../CartSummary";


function Cart() {
	return (
		<div className="cart">
			Košík

			<div className="cart-wrapper">
				<CartContent />
				<CartSummary />
			</div>

		</div>
	);
}

export default Cart;