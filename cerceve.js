// Çərçivə şəkilinin yaradılması

let n=8;
    for (let i = 1; i <= n-1; i++) { 
    let a='';
        for (let j = 1; j <= n; j++) { 
            if (i==1 || i==n-1) {    // ilk ve sonuncu setirlere her a dan sonra * elave edir.
                a=a+'*';
            }
            else if(j==1 || j==n){  // ilk ve sonuncu sutunlara * elave edir.
                a=a+'*';
            }
            else{
                a=a+' ';
            }
        } 
        console.log(a); 
    } 