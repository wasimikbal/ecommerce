import { loadStripe } from "@stripe/stripe-js";

let stripePromise;

const getStripe = () => {
    if(!stripePromise){
        stripePromise = loadStripe('pk_test_51PQ1sjEkeq4Lo3yyQXtQL79iUH0jdgBIvnVQ14cxfeOfosSuO0zPXDWvFM8lB8mzjP9bgedmdeot5sFttpqn7NvF00JUD1XYC6');
    }
    return stripePromise;
}

export default getStripe;