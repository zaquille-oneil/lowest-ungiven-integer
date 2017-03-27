function compare (a,b) {return a>b? a:b}
var lowerBound = 0;
var saveBuffer = []
var solution = null
var checkSol2 = function(x) {
  var i;
  var size = x.length
  for (i = 0; i < size; ++i) {
    if (Math.abs(x[i]) - 1 < size + lowerBound && x[Math.abs(x[i]) - 1] > 0 + lowerBound)
      x[Math.abs(x[i]) - 1] = -x[Math.abs(x[i]) - 1];
  }
  for (i = 0; i < size; ++i) {
    if (x[i] > 0 + lowerBound)
      return i+1;
  }
  return size+1
}
var checkSol = function(x) {
  if (x.length === 0) { return 0 }
  var fakei = 0
  for (var i = 0; i < x.length; ++i) {
    if (x[i] > fakei + lowerBound + 1){
      return fakei + lowerBound + 1
    }
    //do not increment if you passed the incrementor
    //fakei only increments when x[i] == fakei + lowerBound
    if (x[i] >= fakei + lowerBound + 1){++fakei}
  }
  //ARE THERE ANY GAPS?
  return null
}
var sortMerge = function(currentSet) {
    if (saveBuffer.length <= 0) {
      saveBuffer = currentSet
      return
    }
    currentSet.sort(function(a,b) {return a-b})
    while(currentSet[0] <= lowerBound && lowerBound != 0)
    {currentSet.shift()}

    saveBuffer.sort(function(a,b) {return a-b})
    while(saveBuffer[0] <= lowerBound && lowerBound != 0)
    {saveBuffer.shift()}

    saveBuffer = saveBuffer.concat(currentSet);
    console.log('saveBuffer merged with currSet:',saveBuffer)
    saveBuffer.sort(function(a,b) {return a-b})
    console.log('saveBuffer sorted post-merge:',saveBuffer)
    saveBuffer = saveBuffer.slice(0,saveBuffer.length/2)
    console.log('saveBuffer sorted sliced post-merge:',saveBuffer)
}


  //16 values in my array
  //how many n.length till i need to split? well.. i can't handle more than 1GB
  //so how many integers in 1GB? that will mean i only split if n.length is greater
  //268435456

  //call my function 4 times on each fourth of the input.
//if (n.length > INTEGERS_IN_1GB)
//console.log(d[0])
var rl = require('readline')
var prompts = rl.createInterface(process.stdin, process.stdout)
prompts.question('Enter up to 2147483648 non-negative integer inputs, separated by commas: ', function(askUser) {
  var n = askUser.split(',');
  for(var i=0; i<n.length;i++) n[i] = +n[i];
  if (n.length < 64) {
    n.sort(function(a,b){return a-b})
    console.log(n)
    solution = checkSol2(n)
    console.log(solution)
  }
  else {
    var n1 = n.slice(0, n.length / 32)
    var n2 = n.slice(n.length * 1 / 32, n.length * 2 / 32)
    var n3 = n.slice(n.length * 2 / 32, n.length * 3 / 32)
    var n4 = n.slice(n.length * 3 / 32, n.length * 4 / 32)
    var n5 = n.slice(n.length * 4 / 32, n.length * 5 / 32)
    var n6 = n.slice(n.length * 5 / 32, n.length * 6 / 32)
    var n7 = n.slice(n.length * 6 / 32, n.length * 7 / 32)
    var n8 = n.slice(n.length * 7 / 32, n.length * 8 / 32)
    var n9 = n.slice(n.length * 8 / 32, n.length * 9 / 32)
    var n10 = n.slice(n.length * 9 / 32, n.length * 10 / 32)
    var n11 = n.slice(n.length * 10 / 32, n.length * 11 / 32)
    var n12 = n.slice(n.length * 11 / 32, n.length * 12 / 32)
    var n13 = n.slice(n.length * 12 / 32, n.length * 13 / 32)
    var n14 = n.slice(n.length * 13 / 32, n.length * 14 / 32)
    var n15 = n.slice(n.length * 14 / 32, n.length * 15 / 32)
    var n16 = n.slice(n.length * 15 / 32, n.length * 16 / 32)
    var n17 = n.slice(n.length * 16 / 32, n.length * 17 / 32)
    var n18 = n.slice(n.length * 17 / 32, n.length * 18 / 32)
    var n19 = n.slice(n.length * 18 / 32, n.length * 19 / 32)
    var n20 = n.slice(n.length * 19 / 32, n.length * 20 / 32)
    var n21 = n.slice(n.length * 20 / 32, n.length * 21 / 32)
    var n22 = n.slice(n.length * 21 / 32, n.length * 22 / 32)
    var n23 = n.slice(n.length * 22 / 32, n.length * 23 / 32)
    var n24 = n.slice(n.length * 23 / 32, n.length * 24 / 32)
    var n25 = n.slice(n.length * 24 / 32, n.length * 25 / 32)
    var n26 = n.slice(n.length * 25 / 32, n.length * 26 / 32)
    var n27 = n.slice(n.length * 26 / 32, n.length * 27 / 32)
    var n28 = n.slice(n.length * 27 / 32, n.length * 28 / 32)
    var n29 = n.slice(n.length * 28 / 32, n.length * 29 / 32)
    var n30 = n.slice(n.length * 29 / 32, n.length * 30 / 32)
    var n31 = n.slice(n.length * 30 / 32, n.length * 31 / 32)
    var n32 = n.slice(n.length * 31 / 32, n.length)
    var d = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10, n11, n12, n13, n14, n15, n16,
           n17, n18, n19, n20, n21, n22, n23, n24, n25, n26, n27, n28, n29, n30,
           n31, n32]
     while (!solution) {
       for (var i = 0; i < 32; ++i) {
         //console.log(d[i])
         sortMerge(d[i])
       }
       //check for solution, noSolution. is there a
       solution = checkSol2(saveBuffer)
       lowerBound = saveBuffer[saveBuffer.length-1]
       //console.log('saveBuffer:',saveBuffer)
     }
  }
  process.exit()
})




//console.log('solution',solution)
