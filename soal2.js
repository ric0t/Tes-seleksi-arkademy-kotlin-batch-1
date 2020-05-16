function cek_kata(jumlahkata){

    let kataToArr = jumlahkata.split(' ');
    let arrInt = [];

    for(let a = 0; a < kataToArr.length; a++){
        if (!isNaN(parseInt(kataToArr[a]))) {
            arrInt.push(parseInt(kataToArr[a]));
        }
    }
    let result = kataToArr.length - arrInt.length + "/" + kataToArr.length;
    console.log(result);
    return;
}
cek_kata('ini adalah sebuah kata');
cek_kata('2 pasang sandal hilang');