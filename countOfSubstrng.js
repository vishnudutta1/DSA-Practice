var str = "abcab";
var count = 0;

for(var i = 0;i <str.length;i++){
    var str1 = ""
    for(var j = i;j<str.length;j++){
        str1 = str1 + str[j];
        console.log(str1)
        if(str1[0]==str1[str1.length]){
            count++
        }
    }

   
    
    
}

console.log(count)

