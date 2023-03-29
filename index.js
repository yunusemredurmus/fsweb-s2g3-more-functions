// Aşağıdaki görevleri tamamlayın

/*
  GÖREV 1
  - Input:  Bir dosya yolunu (path) parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon, verilen bir dosya adresideki(path) dosyanın adını vermeli.
  * İpucu:  Dosya adresinin / işaretleri ile bölümlendiğine dikkat et.

  örnek input:  "C:/Users/johnsmith/Music/Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  "Beethoven_5.mp3"
  örnek output: "Beethoven_5.mp3"

  örnek input:  ""
  örnek output: ""
*/

function dosyaAdiniBul(path) {
  const ayirma = path.split("/");
  const dosyaAdi = ayirma[ayirma.length - 1];
  return dosyaAdi
}

console.log(dosyaAdiniBul("C:/Users/PC/Desktop/1x"));
/*
  GÖREV 2
  - Input:  Bir sayı arrayini parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasını dönmeli.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: 46

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: 104
*/

const numbers2 = [109, 216, 288, 143, 71, 185, -278, 194, 5];
function ortalamaBul(numbers) {
  const sumNumbers = numbers.reduce((sayi, toplam) => sayi + toplam, 0);
  const ortNumbers = sumNumbers / numbers.length;
  const ortNumbers1 = Math.ceil(ortNumbers);
  return ortNumbers1;
} console.log(ortalamaBul(numbers2))

// const numbers2 = [109, 216, 288, 143, 71, 185, -278, 194, 5];
// function ortalamaBul(numbers) {
//   let toplam = 0;
//   for (let i = 0; i < numbers2.length; i++) {
//     toplam += numbers2[i];
//   }
//   let ortalama0 = toplam / numbers.length;

//   return Math.ceil(ortalama0);
// }
// console.log(ortalamaBul(numbers2));
/*
  GÖREV 3
  - Input:  Bir sayı arrayini ve ortalama bulmaya yarayacak bir fonksiyonu parametre olarak alacak bir fonksiyon oluştur.
  - Output: Yazacağın fonksiyon input olarak aldığı sayı arrayinin aritmetik ortalamasından büyük ya da eşit elemanlardan oluşan bir array dönmeli.
  * Çağırırken kendi ortalama fonksiyonunla çağırabilirsin, ama parametrenin tanımlama aşamasında soyut bir ifade olduğunu unutma.
  * f(x) = 2x+5 içerisindeki x değeri gibi.

  örnek input:  []
  örnek output: null

  örnek input:  [4]
  örnek output: 4
  
  örnek input:  [50, -26, 153, 7]
  örnek output: [50, 153]

  örnek input:  [109, 216, 288, 143, 71, 185, -278, 194, 5]
  örnek output: [109, 216, 288, 143, 185, 194]
*/
const sayiArry = [50, -26, 153, 7]
function ortalamadanBuyukleriBul(sdize, callback) {
  const ortalama1 = callback(sdize);
  // const newSayi2 = sdize.filter((sayi) => sayi >= ortalama1);

  // for (let i = 0; i < sdize.length; i++) {
  //   if (sdize[i] >= ortalama1) {
  //     newSayi2.push(sdize[i])
  //   }
  // }
  return sdize.filter((sayi) => sayi >= ortalama1);
}
console.log(ortalamadanBuyukleriBul(sayiArry, ortalamaBul));







/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as() {
  console.log("Kodlar sorunsuz çalışıyor!");
  return "sa";
}
as();
export { dosyaAdiniBul, ortalamaBul, ortalamadanBuyukleriBul, as };
