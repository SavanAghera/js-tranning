const a = {
    b:10
}

console.log(a);
a.b = 11;
console.log(a);






let c = 0;
function fun(x) {
    return function(y) {
        return x+y
      }
  }

const newFun = fun(5);
console.log(newFun);
c+=newFun(4);

console.log(c)
  
  