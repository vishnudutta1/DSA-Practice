var arr = 356;
arr = arr.toString();

var str = "";

for(var i = arr.length-1;i >=0;i--){
    str = str +arr[i]
}
console.log(arr)
console.log(str);
if(str == arr){
    console.log("Yes")
}
else{console.log("no");}