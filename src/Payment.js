import React,{useState,useEffect} from 'react';
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import {Link, useHistory } from 'react-router-dom';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();

    const stripe = useStripe();
    const elements = useElements();
    const history = useHistory();
    
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true); 
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [basket])

    console.log('THE SECRET IS >>>', clientSecret)
    console.log('👱', user)

    const handleSubmit = async(event) =>{
        //do all stripe fancy
        event.preventDefault();
        setProcessing(true);

        //const payload = await stripe 
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            // paymentIntent = payment confirmation
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            dispatch({
                type: 'EMPTY_BASKET'
            })

            history.replace('/orders')
        })
    }
    const handleChange = event =>{
        //listen for changes in elements
        setDisabled(event.empty);
        setError(event.error?error.message : "");
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>    Checkout {<Link to="/checkout">{basket?.length}</Link>}

                </h1>
                {/*Payment section delivery address*/}
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>delivery address</h3>
                    </div>
                    <div className="payment_address">
                        <p>{user?.email}</p>
                        <p>123 first street</p>
                        <p>San Francisco CA 94531</p>
                        <p></p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>review items</h3>
                    </div>
                    <div className="payment_items">
                    {basket.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment payment</h3>                        
                    </div>
                    <div className="payment_details">

                        {/*payment stripe */}
                        <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_priceContainer">
                            <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                            />
                            <button disabled={processing || disabled || succeeded}> 
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>            
                            </button>
                        </div>
                        {/* Errors */}
                        {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
                  
            </div>
        </div>
    )
}

export default Payment
