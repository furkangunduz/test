const express = require('express');
const { appGetFunction } = require('./appGetFunction');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  appGetFunction(res);
});

app.get('/josef', (req, res) => {
  res.json({
    josef: 'karaburun',
  });
});

app.listen(PORT, () => {
  console.log(`Sunucu çalışıyor: http://localhost:${PORT}`);
});
