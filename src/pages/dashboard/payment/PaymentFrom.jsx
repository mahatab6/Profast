import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';

const PaymentFrom = () => {

    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) =>{
        e.preventDefault()
        if(!stripe || !elements){
            return;
        }

        const card = elements.getElement(CardElement);

        if(card == null){
            return;
        }

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card
        })

        if(error){
            console.log(error)
        }
        else{
            console.log(paymentMethod)
        }
    }


    return (
        <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 bg-white rounded-xl shadow-md space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Payment Details</h2>

            <div className="p-3 border rounded-md shadow-inner bg-gray-50">
                <CardElement className="p-2" />
            </div>

            <button
                type="submit"
                disabled={!stripe}
                className="w-full py-2 px-4 bg-amber-500 text-white font-semibold rounded hover:bg-amber-600 transition disabled:opacity-50"
            >
                Pay for Parcel
            </button>
        </form>

    );
};

export default PaymentFrom;