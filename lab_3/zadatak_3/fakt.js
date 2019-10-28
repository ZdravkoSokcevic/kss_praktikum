let faktorijel=x=> {
    return (x==0)?1:x*faktorijel(x-1);
}

let input=parseInt(process.argv[2]);
// console.log(process.argv[2]);
console.log(faktorijel(input));