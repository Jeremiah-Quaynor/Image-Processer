import {validateInput} from "../../util/validateInput";

// building an interface for the req
interface req {
    query:  {
        width: string | undefined,
        height: string | undefined,
    }
    
}

// testing validate input method
describe("Testing validInput function", ()=> {
    const req1:req = {
    query: {
        width: "90",
        height: "100"
        }
    }
    // testing when giving standard inputs
    it('should be true', ()=> {
        // console.log(req1)
        expect(validateInput(req1)).toBeTrue()
    })
    
    // testing if iputs are string
    const req2:req = {
        query: {
            width: "adshjsjd",
            height: "100"
            }
        }
    it('should be false', ()=> {
        // console.log(req2)
        expect(validateInput(req2)).toBeFalsy()
    })

    // testing if one value is negative
    const req3:req = {
        query: {
            width: "-1",
            height: "2000"
            }
        }
    it('should be false', ()=> {
        // console.log(req3)
        expect(validateInput(req3)).toBeFalsy()
    })

        // testing if both inputs are wrong
        const req4:req = {
            query: {
                width: "-1",
                height: "adkdsak"
                }
            }
        it('should be false', ()=> {
            // console.log(req4)
            expect(validateInput(req4)).toBeFalsy()
        })

})