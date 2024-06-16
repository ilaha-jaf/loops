// Nömrələnmiş piramidanın yaradılması

let n=4;
let a=1;

for (let i = 1; i <= n; i++) {
    let b=' ';
    let space=b.repeat(n-i)
for (let j = 1; j <= i; j++) {
    space= space+a+' ';     // a dan sonra da space bosluq qoyaraq sayi davam etmek ucundur, mes 2 3 arasinda olan bosluq kimi.
    a++;   
}
 console.log(space);
}