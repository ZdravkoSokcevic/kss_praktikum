import { request } from "http";
import {mocha} from 'mocha';
import {chai} from 'chai';
describe("Color code Converter API",()=>{
    describe("RGB to hex conversion! ",()=> {
        let url= 'https://localhost:4000&rgbToHex?red=255&green=255&blue=255';

        it("return status 200",done=> {
            request(url,(err,res,body)=> {
                expect(res.statusCode).to.equal(200);
                done();
            });
        });
        it('return the color in hex',done=> {
            request(url,(err,res,body)=> {
                expect(body).to.equal('ffffff');
                done();
            });
        });
    });
});