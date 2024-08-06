import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
	//useSelector will take a state and in that state cartvalues var is there in reducer and for that we want length
	const cartCount = useSelector((state) => state.cartReducer.cartValues.length)
	const cartPrice = useSelector((state) => state.cartReducer.totalPrice)
  return (
	<div>
		<nav className='navbar navabr-dark bg-dark'>
			<div className='d-inline p-2 navbar-nav mx-auto'>           
				<span className='btn btn-primary me-3'>Cart Items : {cartCount}</span>
				<span className='btn btn-primary '>Total Price : {cartPrice}</span>
			</div>
		</nav>
	</div>
  )
}

export default Navbar