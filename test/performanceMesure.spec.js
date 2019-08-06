const assert = require("assert");
var performanceMesure = require("../fns/performanceMesure");

describe("Unit Test for performance mesure for a given function",()=>{
    it("This should return a string in milliseconds after executing a function",()=>{
        function iterateArray (arr){
            for(let i=0;i<=arr.length;i++){
                let j = i ** i;
            }
        }
        var result = performanceMesure.mesurePerformance(iterateArray, [3,4,5,5,5,5,545,44,434,455])
        assert.strictEqual(typeof result == "string")

    })
})