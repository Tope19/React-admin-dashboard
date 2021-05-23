import axios from 'axios'


export const getSubs = () => async dispatch =>{
    const res = await axios.get('https://api.paystack.co/subscription',
  {  headers: {
        Authorization: 'Bearer sk_test_1616b2b3714c340f69c4941d92c75fc7e0b828b3',
        'Content-Type': 'application/json'
      }
    }
    );
    dispatch ({
        type : 'GET_subs',
        payload : res.data.data
    });
}

