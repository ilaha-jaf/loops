// Kvadrat şəkilinin yaradılması

let n=9
    for (let i = 1; i <= n; i++) { 
    let a=''
        for (let j = 1; j <= n; j++) { 
           a=a+'*';     // j loopunda her a dan sonra * elave edir
        } 
        console.log(a); 
    } 