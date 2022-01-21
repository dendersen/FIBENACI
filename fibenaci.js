fib = []
parseInt(fib [0] = 0+0)
parseInt(fib [1] = 1+0)

function wait(ms) {
  var start = new Date().getTime();
  var end = start;
  while (end < start + ms) {
    end = new Date().getTime();
  }
}

async function calc(){
  // try{
    if(fib.length<=90){//close to accurate up to 80, then looses accuracy until 101 where it stops calculating
      fib [fib.length] = parseInt(parseInt(fib[fib.length-1]) + parseInt(fib[fib.length-2]))
      console.log(fib.length-1, fib[fib.length-1])
      wait (1)
      calc()
      return
    }
    console.log(fib.length + " numbers of fibonaci sequence calculated")
    console.log("scroll up to see them numbered")
    console.log(fib)
// }catch(err){
//     console.log(fib.length + " numbers of fibonaci sequence calculated")
//     console.log("scroll up to see them numbered")
//     console.log(fib)
//   }
}

calc()
calc()
calc()
calc()
calc()
calc()
calc()
calc()
calc()
calc()
