function izracunaj(pod1,pod2,tip)
{
    switch(tip)
    {
        case 'sum':{return pod1+pod2};break;
        case 'sub':{return pod1-pod2};break;
        case 'div':{return pod1/pod2};break;
        case 'mul':{return pod1*pod2};break;
    }
}
let x=3;
let y= izracunaj(izracunaj(izracunaj(2,x,'mul'),3,'sum'),4,'div');
console.log(y);