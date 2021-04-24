var expect = chai.expect;

describe('MyFunctions', function(){
    describe('#doSomething', function() {
        it('should check the deck to make sure it still contains 52 cards after the shuffle', function() {
            var x = shuffles(cardNumbs);
            expect(x).to.have.length(52);
            
        });
        
    });
});
