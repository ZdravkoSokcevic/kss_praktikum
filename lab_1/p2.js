let izracunaj=(x,y,type)=> {
    switch(type) {
        case 'sum': return x+y;break;
        case 'sub': return x-y;break;
        case 'mul': return x*y;break;
        case 'div': return x/y;break;
    }
}

let x=10;
let y= izracunaj( izracunaj( izracunaj(2,x,'mul') ,3,'sum' ),4,'div' );

console.log(y);