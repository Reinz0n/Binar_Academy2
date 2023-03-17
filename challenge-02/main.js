const readLine = require('readline');

const interface = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

function question(q) {
    return new Promise(resolve => {
        interface.question(q, (data) => {
            resolve(data);
        });
    });
}

class Program{
    constructor(props){
        this.array = props.array;
    }

    // nilai tertinggi & terendah
    maxMinValue(arr){
        console.log("Nilai tertinggi : " + Math.max(...arr));
        console.log("Nilai terendah : " + Math.min(...arr));
    }

    // nilai rata-rata
    meanValue(arr){
        let mean = 0;
        for(let i = 0; i < arr.length; i++){
            arr[i] = parseInt(arr[i]);
            mean = mean + arr[i];
        }
        mean = mean / 2;
        console.log("Nilai rata-rata : " + mean);
    }

    // lulus & tidak lulus
    passNotPass(arr){
        let lulus = 0;
        let tidakLulus = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] >= 60){
                lulus++;
            } else{
                tidakLulus++;
            }
        }
        console.log("Siswa yang lulus : " + lulus);
        console.log("Siswa yang tidak lulus : " + tidakLulus);
    }

    // urutkan nilai
    sortArray(arr){
        for(let i = arr.length; i >= 0; i--){
            for(let j = 1; j < i; j++){
                if(arr[j - 1] > arr[j]){
                    var temp = arr[j - 1];
                    arr[j - 1] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log("Urutan nilai dari terkecil ke terbesar :");
        console.log(arr);
    }

    // cari nilai
    findValue(arr){
        let arrTemp = [];
        let a = 0, b = 0;
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == 90){
                arrTemp.push(arr[i]);
                a++;
            }
        }
        if(a == 0){
            arrTemp.push('tidak ada');
        }
        for(let i = 0; i < arr.length; i++){
            if(arr[i] == 100){
                arrTemp.push(arr[i]);
                b++;
            }
        }
        if(b == 0){
            arrTemp.push('tidak ada');
        }
        console.log("Cari nilai 90 dan 100 : " + arrTemp);
    }
}

let arr = [];

async function main(){
    // input nilai
    let i = 0;
    console.log("Selamat datang di program Input Nilai Siswa!");
    console.log("Silahkan input nilai siswa!");
    do{
        arr[i] = await question("input nilai : ");
        i++;
    } while(arr[i - 1] != 'q');
    arr.pop();
    console.log('Hasil :');

    let mulai = new Program({
        array: arr,
    });

    console.log(mulai.array);
    mulai.maxMinValue(arr);
    mulai.meanValue(arr);
    mulai.passNotPass(arr);
    mulai.sortArray(arr);
    mulai.findValue(arr);
    interface.close();
    console.log("Terima kasih sudah menggunakan program ini!");
}

main();