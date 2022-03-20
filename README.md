`Çöpçü Balığı` projesinin amacı başta `Pardus` olmak üzere yaygın kullanılan Linux dağıtımları, macOS ve Windows işletim sistemlerinde biriken işletim sistemi kalıntıları, kullandığımız programların kalıntıları ve diğer gereksiz kalıntıları temizlemektir.

Proje `Electron.js`, `Vue.js` ve `Go` birleşiminden oluşmaktadır. Arayüz tamamen `HTML` ve `CSS` ile oluşturulmuştur.

    Not: Doküman güncellenecektir. 

## Nasıl Katkı Sağlarım?
- Projenin arayüzünü tasarlayabilirsiniz.
- Kod katkısında bulunabilirsiniz.
- Farklı sistemlerde test ederek hataları bildirebilirsiniz.

## Nasıl Test Edebilirim?
Projeyi kendi bilgisayarınızda çalıştırmak veya test etmek için aşağıdaki adımları izleyebilirsiniz.

    git clone https://github.com/sustartx/copcu-baligi

Projeyi kopyaladıktan sonra çalıştırmak için;

```
yarn install
yarn electron:serve
```
    
veya
    
```
npm install
npm electron:serve
```

komutlarını çalıştırabilirsiniz.

## Yapılacaklar
- [ ] Uygulama simgesi oluşturulacak.
- [ ] Tüm işletim sistemlerinde masaüstüne kısayol eklemek için geliştirme yapılacak.
- [ ] Go dosyalarını derleyen node komutu yazılacak.
- [x] Yenileme sonrası oluşan rota sorunu giderilecek.
- [ ] Menü filtre sorunu giderilecek.
- [ ] Menü butonunun durumu kaydedilecek.
- [ ] Auth sayfalarındaki hata giderilecek.
