// if ...else...
//True or False
let a= '1';
if (a==2) {
    console.log('it is ture')
} else{
    console.log('it is false')
}
// for ....
for(var i=0;i<10;i++){
    console.log("i",i)
}

//do....while...
var j = 0;
do{
    console.log("j",j)
    j+=1
}while(j<100);


//swtich
let today='周日'
switch(today){
    case'周日':
    console.log('周日好！')
    break;
    case'周一':
    console.log('周一好！')
    break;
    default:
    console.log('请输入正确的日期')
    break;
}