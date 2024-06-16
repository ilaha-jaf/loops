// Herflerle olan piramidanın yaradılması

let n=5;
for (let i = 0; i <= n; i++) {
    let b=' ';
    let space=b.repeat(n-i);
    for (let j = 0; j < i; j++) {
        space+=String.fromCharCode(65+j);    // unicode deyerlerini ardicil qaytaran metod
    }
    for (let j = i-2; j >=0; j--) {
        space+=String.fromCharCode(65+j)  //eyni kod sadece, dovr ikinci setden yazir herfleri ilk setrde bos olur ve tersine yazir.
    }
    console.log(space);
}