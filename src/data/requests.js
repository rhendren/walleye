import axios from 'axios';

async function customerData() {
  const response = await axios.get(
    'https://gm6wtfezgd.execute-api.us-east-2.amazonaws.com/test/bigshotzcustomers'
  )
  return response.data;
}

export default {
  customerData
};