var arr = [3,2,2,1,5]
var arr = [1,2,2,3,5]
var n = 4;

var count = 0;

for(var i = 0;i <arr.length;i++){
    for(var j = i+1;j<arr.length;j++){
        if((arr[i]+arr[j])%n==0)
    {
        count++
    }
    }
}

//console.log(count);

var l = 0;
var m = arr.length-1;
var coun = 0

while(l<m){
    for(var i =l+1;i<=m;i++){
        if((arr[l]+arr[i])%4==0){
            coun++
        }
    }
    l++
}

console.log(coun);

