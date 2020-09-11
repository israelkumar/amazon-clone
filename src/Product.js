import React from 'react'
import "./product.css"
import { useStateValue } from './StateProvider';
function Product({id,title,image,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    //console.log("this is the basked for",basket);
    const addToBasket = () =>{
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,

            },
        });
    };
    return (
        <div className="product">
            <div className="product_info">
                <input type="hidden" value={id} />
                <p>{title}</p>
                <p className="product_price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                   {Array(rating).fill()
                    .map((_, i)=>(
                    <p>⭐</p>
                   ))}

                </div>
            </div>
            <img alt="product coming soon" 
                src={image}
            />
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
export default Product 

