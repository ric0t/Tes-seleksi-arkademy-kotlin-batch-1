function triangle(dataAngka) {
    if(dataAngka % 3 === 0){
        console.log('Parameter harus angka dan positif!');
        return;
    }
    
    let segitiga = '';
    
    for (let i = 1; i <= dataAngka; i++) {
        for (let j = 0; j < i; j++) {
            segitiga += '# ';
        }
        segitiga += '\n';
    }
    console.log(segitiga);
};
triangle(1);
triangle(5);
triangle(3);