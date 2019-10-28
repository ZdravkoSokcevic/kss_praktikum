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

let array= [5,12,3,55,123];

maxArrayElement(array);