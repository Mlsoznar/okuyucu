import mongoose from 'mongoose';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

// __dirname ve __filename'in ES modüllerinde kullanımı
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// MongoDB'ye bağlan (Data adlı veritabanına bağlanmak için bağlantı URI'sine veritabanı adı eklenmiştir)
const mongoUri = 'mongodb+srv://melisa:MeLiSa*0729@qrscanner.moqawfs.mongodb.net/?retryWrites=true&w=majority&appName=qrscanner';
mongoose.connect(mongoUri).then(() => {
        console.log('MongoDB\'ye başarıyla bağlanıldı');
    })
    .catch((error) => {
        console.error('MongoDB bağlantısı sırasında hata oluştu:', error);
    });

// Ürün şemasını ve modelini tanımla
const productSchema = new mongoose.Schema({
    code: String,
    name: String,
    price: String,
    stock: String
});

// Koleksiyon adı büyük harfle "Products" olarak değiştirilmiştir
const Product = mongoose.model('Product', productSchema, 'Products');

// JSON dosyasının yolunu belirle
const booksFilePath = path.join(__dirname, 'data', 'products.json');

// JSON dosyasını oku ve hataları yakala
try {
    if (fs.existsSync(booksFilePath)) {
        console.log('JSON dosyası bulundu, dosya okunuyor...');
        const booksData = JSON.parse(fs.readFileSync(booksFilePath, 'utf-8'));
        console.log('Dosya başarıyla okundu:', booksData);

        // Veritabanını güncelle
        async function seedDatabase() {
            try {
                // Eski verileri temizle (Eğer koleksiyonda veri varsa)
                await Product.deleteMany({});

                // Yeni verileri ekle
                await Product.insertMany(booksData);

                console.log('Veritabanı başarıyla dolduruldu!');
            } catch (error) {
                console.error('Veritabanına veri eklerken hata oluştu:', error);
            } finally {
                // MongoDB bağlantısını kapat
                mongoose.connection.close();
            }
        }

        // Veritabanını doldur
        seedDatabase();
    } else {
        console.error('JSON dosyası bulunamadı:', booksFilePath);
    }
} catch (error) {
    console.error('Dosya okuma sırasında hata oluştu:', error);
}
