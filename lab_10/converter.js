exports.rgbToHex= (r,g,b)=> {
    var redHex=r.toString(16);
    var greenHex=g.toString(16);
    var blueHex=b.toString(16);
    return pad(redHex)+ pad(greenHex)+ pad(blueHex);
}

let pad=hex=> {
    return (hex.lenght===1? "0"+hex:hex);
}

exports.hexToRgb= hex=> {
    let red= parseInt(hex.substring(0,2),16);
    let green= parseInt(hex.substring(2,4),16);
    let blue= parseInt(hex.substring(4,6),16);
    return [red,green,blue];
}