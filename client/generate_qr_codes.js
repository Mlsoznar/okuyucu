import QRCode from 'qrcode';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bwipjs from 'bwip-js';

// ESM modülünde __dirname işlevselliğini elde etme
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const codes = [
  {
    code: "345676",
    name: "Süt",
    type: "barcode",
    price: "4.25",
    stock: "30"
},
{
    code: "456789",
    name: "Ekmek",
    type: "barcode",
    price: "1.25",
    stock: "100"
},
{
    code: "901234",
    name: "Pirinç",
    type: "barcode",
    price: "3.0",
    stock: "65"
},
{
    code: "778865",
    name: "Makarna",
    type: "barcode",
    price: "2.0",
    stock: "85"
},
{
    code: "667788",
    name: "Çikolata",
    type: "barcode",
    price: "4.0",
    stock: "50"
},
{
    code: "009957",
    name: "Mayonez",
    type: "barcode",
    price: "2.5",
    stock: "40"
},
{
    code: "012017",
    name: "Ayçiçek Yağı",
    type: "barcode",
    price: "7.5",
    stock: "35"
},
{
    code: "021020",
    name: "Yulaf Ezmesi",
    type: "barcode",
    price: "3.0",
    stock: "50"
},
{
    code: "022028",
    name: "Kırmızı Mercimek",
    type: "barcode",
    price: "2.5",
    stock: "80"
},

  {
      code: "A1B2C3D4E5F6G7",
      name: "Klavye",
      price: "150.0",
      stock: "20",
      type: "qrcode"
  },
  {
      code: "H8I9J0K1L2M3N4",
      name: "Fare",
      price: "80.0",
      stock: "30",
      type: "qrcode"
  },
  {
      code: "O5P6Q7R8S9T0U1",
      name: "Monitör",
      price: "800.0",
      stock: "10",
      type: "qrcode"
  },
  {
      code: "V2W3X4Y5Z6A1B2",
      name: "Laptop",
      price: "3000.0",
      stock: "5",
      type: "qrcode"
  },
  {
      code: "C3D4E5F6G7H8I9",
      name: "Yazıcı",
      price: "500.0",
      stock: "15",
      type: "qrcode"
  },
  {
      code: "J0K1L2M3N4O5P6",
      name: "Router",
      price: "200.0",
      stock: "25",
      type: "qrcode"
  },
  {
      code: "Q7R8S9T0U1V2W3",
      name: "Tablet",
      price: "1200.0",
      stock: "8",
      type: "qrcode"
  },
  {
      code: "X4Y5Z6A1B2C3D4",
      name: "Harici Disk",
      price: "250.0",
      stock: "20",
      type: "qrcode"
  },
  {
      code: "E5F6G7H8I9J0K1",
      name: "Kulaklık",
      price: "100.0",
      stock: "40",
      type: "qrcode"
  },
  {
      code: "L2M3N4O5P6Q7R8",
      name: "Webcam",
      price: "120.0",
      stock: "12",
      type: "qrcode"
  },
  {
      code: "S9T0U1V2W3X4Y5",
      name: "Powerbank",
      price: "80.0",
      stock: "18",
      type: "qrcode"
  },
  {
      code: "Z6A1B2C3D4E5F6",
      name: "Hoparlör",
      price: "150.0",
      stock: "15",
      type: "qrcode"
  },
  {
      code: "G7H8I9J0K1L2M3",
      name: "Görüntü Kartı",
      price: "1000.0",
      stock: "6",
      type: "qrcode"
  },
  {
      code: "N4O5P6Q7R8S9T0",
      name: "CPU",
      price: "1200.0",
      stock: "4",
      type: "qrcode"
  },
  {
      code: "U1V2W3X4Y5Z6A1",
      name: "SSD",
      price: "400.0",
      stock: "10",
      type: "qrcode"
  },
  {
      code: "B2C3D4E5F6G7H8",
      name: "RAM",
      price: "300.0",
      stock: "8",
      type: "qrcode"
  },
  {
      code: "I9J0K1L2M3N4O5",
      name: "Klavye Mouse Seti",
      price: "200.0",
      stock: "20",
      type: "qrcode"
  },
  {
      code: "P6Q7R8S9T0U1V2",
      name: "Network Switch",
      price: "150.0",
      stock: "15",
      type: "qrcode"
  },
  {
      code: "W3X4Y5Z6A1B2C3",
      name: "Bluetooth Adaptör",
      price: "50.0",
      stock: "25",
      type: "qrcode"
  },
  {
      code: "D4E5F6G7H8I9J0",
      name: "Gaming Mouse",
      price: "250.0",
      stock: "10",
      type: "qrcode"
  },
  {
      code: "K1L2M3N4O5P6Q7",
      name: "Ekran Kartı",
      price: "1500.0",
      stock: "5",
      type: "qrcode"
  },
  {
    code: "R1S2T3U4V5W6X7Y8Z9A0B1",
    name: "Çocuklar İçin Masallar",
    price: "25.0",
    stock: "50",
    type: "qrcode"
},
{
    code: "C2D3E4F5G6H7I8J9K0L1M2",
    name: "Beyaz Diş",
    price: "30.0",
    stock: "40",
    type: "qrcode"
},
{
    code: "N3O4P5Q6R7S8T9U0V1W2",
    name: "Harry Potter ve Felsefe Taşı",
    price: "45.0",
    stock: "30",
    type: "qrcode"
},
{
    code: "X4Y5Z6A1B2C3D4E5F6G7",
    name: "Nutuk",
    price: "50.0",
    stock: "20",
    type: "qrcode"
},
{
    code: "H8I9J0K1L2M3N4O5P6Q7",
    name: "Sefiller",
    price: "35.0",
    stock: "25",
    type: "qrcode"
},
{
    code: "R8S9T0U1V2W3X4Y5Z6A1",
    name: "1984",
    price: "40.0",
    stock: "15",
    type: "qrcode"
},
{
    code: "B2C3D4E5F6G7H8I9J0K1",
    name: "İstanbul Hatırası",
    price: "55.0",
    stock: "10",
    type: "qrcode"
},
{
    code: "L2M3N4O5P6Q7R8S9T0U1",
    name: "Suç ve Ceza",
    price: "60.0",
    stock: "8",
    type: "qrcode"
},
{
    code: "V2W3X4Y5Z6A1B2C3D4E5",
    name: "İnce Memed",
    price: "30.0",
    stock: "12",
    type: "qrcode"
},
{
    code: "F6G7H8I9J0K1L2M3N4O5",
    name: "Kürk Mantolu Madonna",
    price: "35.0",
    stock: "18",
    type: "qrcode"
}


];

const outputDir = path.join(__dirname, '../client/codes');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

codes.forEach(product => {
  const filePath = path.join(outputDir, `${product.code}.png`);

  if (product.type === 'qrcode') {
    QRCode.toFile(filePath, product.code, (err) => {
      if (err) {
        console.error(`QR kod oluşturulamadı: ${product.code}`, err);
      } else {
        console.log(`QR kod başarıyla oluşturuldu: ${filePath}`);
      }
    });
  } else if (product.type === 'barcode') {
    bwipjs.toBuffer({
      bcid: 'code128', // Barkod türü
      text: product.code, // Barkod metni
      scale: 3, // Ölçek (birim kare boyutu)
      height: 10, // Barkod yüksekliği (birim kare cinsinden)
      includetext: true, // Metni dahil et
      textxalign: 'center', // Metin hizalaması
    }, (err, png) => {
      if (err) {
        console.error(`Barkod oluşturulamadı: ${product.code}`, err);
      } else {
        fs.writeFile(filePath, png, (err) => {
          if (err) {
            console.error(`Barkod dosyası yazılamadı: ${product.code}`, err);
          } else {
            console.log(`Barkod başarıyla oluşturuldu: ${filePath}`);
          }
        });
      }
    });
  }
});


