let maxArrayElement= arr=> {
    let max={
        element  : arr[0],
        index       : 0
    }
    for( let x=1;x<arr.length;x++ ) 
    {
        if(max.element<arr[x]) {
            max.element= arr[x];
            max.index= x;
        }
    }
    console.log(`Maksimalni element niza je: ${max.index+1}-i element: ${max.element} `);
}

let niz= [1,2,12,true,"s",17,false];
let niz2=[];
niz.forEach(elem=> {
    (typeof elem=='number')?niz2.push(elem):1;
});

maxArrayElement(niz2);