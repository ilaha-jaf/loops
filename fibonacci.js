//Fibonacci sıralamasının yaradılması

let n=prompt("Write a number");  // terminalda sehv cixacaq deye, istenilen ededi daxil etmek ucun fibonacci.html ile live serveri acin :(
let f=[0,1];     // ilk iki reqemi dusturla elde etmek olmur deye array kimi cagiririq ve şertlerde qeyd edirik.
    if(n==0){
f=[0];
    }
    else if(n==1){
f=[0,1];
    }
    else{
for (let i=2; i <=n; i++) {
    f.push(f[i-1]+f[i-2])   // push ile dusturun neticesini arrayin sonuna elave ederek yeni eded yaziriq.
    
}}
    console.log(f.toString());
