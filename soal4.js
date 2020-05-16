function findDuplicates(String){

    let Arr = []
    for(let i = 0; i < String.length; i++) {
        let check = false
        for(let j = 0; j < Arr.length; j++) {
            if(String[i] == Arr[j][0] && String[i] !== ' ') {
                Arr[j][1] += 1
                check = true
            }
        }
        if(check == false) {
            Arr.push([String[i], 1])
        }
    }

    let obj = {}
    for(let i = 0; i < Arr.length; i++) {
        if(Arr[i][1] > 1) {
            obj[Arr[i][0]] = Arr[i][1]
        }
    }

    let count = Object.keys(obj).length;

    if(count == 0) {
        return 'Tidak ada karakter yang berulang!'
    } else {
        return obj
    }
}
console.log(findDuplicates("hari apa saja saya bisa!"))
console.log(findDuplicates("cepat kerjakan!!!"))
console.log(findDuplicates("adobe"))