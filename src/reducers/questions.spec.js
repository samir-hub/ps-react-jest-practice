import { questions } from './questions'; 

describe("The questions reducer", () => {
    it("should work", ()=>{
        console.log("Testing questions");
        const state = ["foo", "bar"]
        const newState = questions(state, {type: "UNRECOGNIZED_ACTION"});

        expect(newState).toEqual(state); 
    })
})