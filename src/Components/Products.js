import React from 'react'
import JsonData from '../Data/JsonData.json';
import { useDispatch } from 'react-redux';
import { decrementcart, incrementcart } from '../Redux/Reducer/cartReducer';

const Products = () => {
	const dispatch = useDispatch();
	return (
		<div>
			<div className='container'>
				<div className='row'>
					{/* Hydrate in Row and print in Col by add the Styling to it  and col will take the key of a specific product*/}
					{JsonData.products.map(product =>
						<div className='col' key={product.id}>
							<div className='card shadow m-1' style={{ "width": "18rem", "height": "25rem", "textAlign": "center" }}>
								<img className='card-image-top' src={product.src} style={{ "width": "15rem", "height": "19rem" ,margin:"15px 0px 0px 15px" , borderRadius:"5px"}} alt='' />
								<p className='card-title font-weight-bold'>{product.name} | Rs.{product.price}</p>
								<div className='card-body p-2'>
									<button className='btn btn-primary ml-auto'
										onClick={() => dispatch(incrementcart(
											{
												ProductName: product.name,
												ProductPrice: product.price
											}))}>Add</button> &nbsp;
									<button className='btn btn-primary ml-auto'
										onClick={() => dispatch(decrementcart(
											{
												ProductName: product.name,
												ProductPrice: product.price
											}))}>Remove</button>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	)
}

export default Products
