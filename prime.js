var num = 13;
var i = 1;
var count = 0
while(i<=13){
    if(num%i==0){
        count++
    }
    i++;
}

if(count>2){
    console.log("yes")
}
else{
    console.log("no");
}