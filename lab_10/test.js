const expect= require('chai').expect;
const Mocha=require('./node_modules/.bin/mocha');
const converter= require('./converter');

describe('Color Code Converter',()=> {
    describe('RgB to Hex conversion',()=> {
        let redHex= converter.rgbToHex(255,0,0);
        let green= converter.rgbToHex(0,255,0);
        let blue= converter.rgbToHex(0,0,255);
        // console.log(redHex);
        expect(redHex).to.equal('ff00');
        expect(blue).to.equal('00ff');
        expect(green).to.equal('0ff0');
    });
});