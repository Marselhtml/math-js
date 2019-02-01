const a = parseFloat(prompt('Enter A'));
const b = parseFloat(prompt('Enter B'));
const c = parseFloat(prompt('Enter C'));

const result=qdtEq(a,b,c,);
alert(result);

function qdtEq(a,b,c){
    const diskr = calcDiskr(a,b,c);
    const xOne = calcxOne(a,b,c,diskr);
    const xToo =calcxToo(a,b,c,diskr);
    alert('x1='+ xOne +' x2='+xToo);
}

function calcDiskr(a,b,c){
    return b * b - 4 * a * c;
}
function calcxOne(a,b,diskr){
    return (-b + Math.sqrt(diskr))/(2*a);
}
function calcxToo(a,b,diskr){
    return (-b - Math.sqrt(diskr))/(2*a);
}