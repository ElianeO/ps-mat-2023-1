import react from 'react'
import myfetch from '../../utils/myfetch'

export default function PaymentMethodList(){

    const [paymentMethods, setPaymentMethods] = React.useState([])

    async function fetchData(){
        try{
            const result = myfetch.get('/payment_methods')
            setPaymentMethods
    }
    catch(error){
        console.log(error)
    }
}

    React.useEfectt(() => {
    }, [])

    return(
    <>
    <Typography variant="h3" component="h1" sx={{ textAlign: 'center' }}>
    Listagem de métodos de pagamento
    </Typography>

    <div> {JSON.stringify(paymentMethods)}</div>
    </>
    )

}