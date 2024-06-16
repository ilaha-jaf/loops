// Piramida şəklinin yaradılması

let n=5;

for (let i = 1; i <= n; i++) {
const a= '*';
const b=' ';
console.log(b.repeat(n-i)+a.repeat(2*i-1));    // n-i ümumi saydan i nin sayını cıxaraq boşluqlar yaradır. // 2*i-1 yalniz tek sayda *-un tekrarlanmasi ucun qeyd olunur yeni(1,3,5,7...)
}