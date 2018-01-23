console.log('running')
function Multiplier(){ // capitalize first letter turns function in Construtor

    this.n = 1 // where we are storing the new numbers
    this.multiply = function(x){   // x is the number we will enter/test number

      this.n = x * this.n  // Always use     this.(pick your variable/internal property)
      return this.n
    }                   // function with open brackets is the function from line 5 to 9 is the {(function)}
    this.getCurrentValue = function(){
        return this.n
        console.log(this.n)
    }
}

var m = new Multiplier()
