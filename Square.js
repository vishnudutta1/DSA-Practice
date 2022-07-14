var arr = [1,2,3]
var arra = []

for(var i = 0;i <arr.length;i++){
    arra.push(arr[i]*arr[i])
}

// console.log(arra)

arr.map(e =>2*e)
arr.forEach(e =>2*e)
console.log(arr);

var odd_numbers = arr.filter(isOdd);
console.log(odd_numbers);
