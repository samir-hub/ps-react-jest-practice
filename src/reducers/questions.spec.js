import { questions } from './questions'; 

describe("The questions reducer", () => {
    it("should work", ()=>{
        console.log("Testing questions");
        const state = ["foo", "bar"]
        const newState = questions(state, {type: "UNRECOGNIZED_ACTION"});

        expect(newState).toEqual(state); 
    })

    it("should add new questions", () => {
        const state = [{question_id: "foo"}, {question_id: "bar"}]
        const newQuestion = {question_id: "baz"}
        const newState = questions(state, {type: 'FETCHED_QUESTION', question: newQuestion})

        console.log(newState)
    })

})