const express = require('express');
const app = express();

// Mengirim file statis dari folder 'public'
app.use(express.static('public'));

// Jalankan server pada port tertentu
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});
