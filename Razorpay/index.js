import express from 'express';
import Razorpay from 'razorpay';
import dotenv from 'dotenv';

dotenv.config();
const { PORT, RAZOR_KEY_ID, RAZOR_KEY_SECRET } = process.env;

const app = express();
app.use(express.static('./Razorpay/public'));
app.use(express.json());

app.post('/order', async (req, res) => {
  const { amount } = req.body;
  const instance = new Razorpay({
    key_id: RAZOR_KEY_ID,
    key_secret: RAZOR_KEY_SECRET,
  });

  const options = {
    amount: amount * 100,
    currency: 'INR',
    receipt: 'order_rcpt_1',
    payment_capture: 1,
  };
  const myOrder = await instance.orders.create(options);

  res.status(200).json({
    success: true,
    amount,
    order: myOrder,
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
