const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const MyTable = require('./models/MyTable');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const sequelize = require('./database');

app.get('/products', async (req, res) => {
  try {
    const products = await MyTable.findAll();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi lấy danh sách sản phẩm.' });
  }
});

app.post('/warranty-request', async (req, res) => {
  try {
    const { productId, customerName, issueDescription } = req.body;

    const newWarrantyRequest = await MyTable.create({
      name: customerName,
      description: issueDescription,
      productId,
    });

    res.json(newWarrantyRequest);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Lỗi khi tạo yêu cầu bảo hành.' });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server hệ thống chạy qua link: http:/localhost:${port}`);
});
