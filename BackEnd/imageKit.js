
const express = require("express");
const multer = require("multer");
const ImageKit = require("imagekit");

const app = express();
const PORT = 3000;

// Multer: rasmni faqat xotirada saqlaydi (diskda emas)
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// ImageKit konfiguratsiyasi

const imagekit = new ImageKit({
    publicKey: "public_rAybsQad4S9MYw+BKkmoRhSqD/I=",
    privateKey: "private_TSz93gxCDXt8uvllKTuxKwJL7a4=",
    urlEndpoint: "https://ik.imagekit.io/qk82mhvi8"
  });
  

// API: Rasmni to‘g‘ridan-to‘g‘ri yuborish (diskga yozmasdan)
app.post("/upload", upload.single("image"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ error: "Rasm yuborilmadi" });
  }

  imagekit.upload(
    {
      file: req.file.buffer, // 💡 buffer — xotiradagi fayl
      fileName: req.file.originalname,
    },
    function (error, result) {
      if (error) {
        console.error("❌ Yuklash xatosi:", error);
        res.status(500).json({ error: "Rasm yuklashda xatolik" });
      } else {
        console.log("✅ Rasm yuklandi:", result.url);
        res.status(200).json({ imageUrl: result.url });
      }
    }
  );
});

app.listen(PORT, () => {
  console.log(`🚀 Server ishlayapti: http://localhost:${PORT}`);
});
