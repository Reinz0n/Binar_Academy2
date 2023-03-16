const {execSync} = require('child_process');
const readLine = require('readline');

const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input1 = 0, input2 = 0, hasil = 0;
let ulang = true, ulang2 = true, error = false;

function question(q) {
    return new Promise(resolve => {
        interface.question(q, (data) => {
            resolve(data);
        });
    });
}

async function penjumlahan() {
    input1 = await question('Masukkan angka pertama : ');
    input2 = await question('Masukkan angka kedua : ');
    input1 = parseInt(input1);
    input2 = parseInt(input2);

    hasil = (input1 + input2);
    console.log('Hasil dari penjumlahan adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function pengurangan() {
    input1 = await question('Masukkan angka pertama : ');
    input2 = await question('Masukkan angka kedua : ');
    input1 = parseInt(input1);
    input2 = parseInt(input2);

    hasil = (input1 - input2);
    console.log('Hasil dari pengurangan adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function perkalian() {
    input1 = await question('Masukkan angka pertama : ');
    input2 = await question('Masukkan angka kedua : ');
    input1 = parseInt(input1);
    input2 = parseInt(input2);

    hasil = (input1 * input2);
    console.log('Hasil dari perkalian adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function pembagian() {
    input1 = await question('Masukkan angka pertama : ');
    input2 = await question('Masukkan angka kedua : ');
    input1 = parseInt(input1);
    input2 = parseInt(input2);

    hasil = (input1 / input2);
    console.log('Hasil dari pembagian adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function kuadrat() {
    input1 = await question('Masukkan angka pertama : ');
    input2 = await question('Masukkan angka kedua : ');
    input1 = parseInt(input1);
    input2 = parseInt(input2);

    hasil = (input1 ** input2);
    console.log('Hasil kuadratnya adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function akarKuadrat() {
    input1 = await question('Masukkan angka yang ingin akarkan : ');
    input1 = parseInt(input1);

    hasil = Math.sqrt(input1);
    console.log('Hasil akarnya adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function luasPersegi() {
    input1 = await question('Masukkan panjang sisi : ');
    input1 = parseInt(input1);

    hasil = (input1 ** 2);
    console.log('Hasil luas perseginya adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function volumeKubus() {
    input1 = await question('Masukkan panjang rusuk : ');
    input1 = parseInt(input1);

    hasil = (input1 ** 3);
    console.log('Hasil volume kubusnya adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function volumeTabung() {
    input1 = await question('Masukkan panjang jari-jari : ');
    input2 = await question('Masukkan tinggi tabung : ');
    input1 = parseInt(input1);
    input2 = parseInt(input2);

    hasil = (input1 ** 2 * 3.14 * input2);
    console.log('Hasil volume tabungnya adalah : ' + hasil);
    console.log('');
    interface.close();
}

async function main(){
    let pilih = await question(
`
Halo pengguna!
Selamat datang dalam program kalkulator v1!

Daftar menu kalkulator yang tersedia :
1. Penambahan (+)
2. Pengurangan (-)
3. Perkalian (*)
4. Pembagian (/)
5. Kuadrat (^)
6. Akar Kuadrat
7. Luas Persegi
8. Volume Kubus
9. Volume Tabung

Masukkan menu yang akan dipilih (input berupa angka) : `);
    if(pilih == 1){
        penjumlahan();
    } else if(pilih == 2){
        pengurangan();
    } else if(pilih == 3){
        perkalian();
    } else if(pilih == 4){
        pembagian();
    } else if(pilih == 5){
        kuadrat();
    } else if(pilih == 6){
        akarKuadrat();
    } else if(pilih == 7){
        luasPersegi();
    } else if(pilih == 8){
        volumeKubus();
    } else if(pilih == 9){
        volumeTabung();
    } else{
        console.log();
        console.log('Perintah tidak diketahui. Silahkan coba lagi!');
        console.log();
        interface.close();
    } 
}

main();