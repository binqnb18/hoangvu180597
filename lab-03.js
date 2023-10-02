arr = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]

//cau c Tìm phần tử lớn nhất, phần tử nhỏ nhất trong mảng

// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let max = dodaimang[0];
// let min = dodaimang[0];

// for(let i = 1; i < dodaimang.length; i++) {
//     if (dodaimang[i] > max) {
//         max = dodaimang[i];
//     }
//     if(dodaimang[i] < min) {
//         min =dodaimang[i];
//     }
// }
// console.log("so lon nhat la: " + max);
// console.log("so nho nhat la: " + min);

//cau d Tính trung bình cộng các phần tử trong mảng

// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4]; 
// let sum = 0;
// for(let i = 0; i < dodaimang.length; i++){
//     sum += dodaimang[i];
// }
// let average = sum / dodaimang.length;
// console.log("trung binh cong la: " + average);

//e. Đảo ngược thứ tự các phần tử trong mảng
// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let length = dodaimang.length;

// for( let i = 0; i < length / 2; i++) {
//     let daonguoc = dodaimang[i];
//     dodaimang[i] = dodaimang[length - 1 - i];
//     dodaimang[length - 1 - i] = daonguoc;
// }
// console.log("mang sau khi dao nguoc la: " + dodaimang);


//f. Tìm số lần xuất hiện của mỗi phần tử trong mảng
// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let count = {};

// for(let i = 0; i < dodaimang.length; i++) {
//     let element = dodaimang[i];
//     if (count[element] === undefined) {
//         count[element] = 1;
//     }else {
//         count[element]++;
//     }
// }
// for( let key in count) {
//     console.log( key + " xuat hien " + count[key] + " lan " );

//g. Chèn phần tử 117 vào đầu mảng
// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let chenso = 117;

// let saukhichenso = [chenso];
// for( let i = 0 ; i < dodaimang.length; i++ ) {
//     saukhichenso.push(dodaimang[i]);
// }
// console.log("sau khi chen so la: " + saukhichenso);


//h. Kiểm tra xem mảng có phải là mỗi dãy số tăng dần hay không

// let dodaimang = [1, 2, 3, 4, 5, 6];
// let kiemtratangdan = true;

// for(let i = 0; i < dodaimang.length - 1; i++) {
//     if(dodaimang[i] > dodaimang[i + 1]) {
//         kiemtratangdan = false;
//         break;
//     }
// }
// if(kiemtratangdan) {
//     console.log("nay la mang tang dan");
// }else{
//     console.log("nay la mang khong tang dan");
// }


//i. Sắp xếp mảng theo thứ tự tăng dần

// let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
// let tangdan = dodaimang.length;

// for(let i = 0; i < tangdan - 1; i++) {
//     for( let j = 0; j < tangdan - i - 1; j++) {
//         if(dodaimang[j] > dodaimang[j+1]) {
//             let daonguoc = dodaimang[j];
//             dodaimang[j] = dodaimang[j + 1];
//             dodaimang[j + 1] = daonguoc;
//         }
//     }
// }
// console.log("mang sau khi tang dan la: " + dodaimang);


let dodaimang = [3, 451, 5, 2, 6, 76, 3, 5, 1, 243, 6, 4];
let giamdan = dodaimang.length;

for(let i = 0; i < giamdan - 1; i++) {
    for(let j = 0; j < giamdan - i - 1; j++) {
        if(dodaimang[j] < dodaimang[ j + 1]) {
            let daonguoc = dodaimang[j];
            dodaimang[j] = dodaimang[j + 1];
            dodaimang[j + 1] = daonguoc;
        }
    }
}
console.log("mang sau khi giam dan la: " + dodaimang);