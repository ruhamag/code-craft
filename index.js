 //part 1
 console.log('5' + 7);      // Answer: _57_____
console.log(Boolean(0));    // Answer: ___false____
console.log('10' - '2');    // Answer: ___8____
console.log('5' == 5);      // Answer: ___true____
console.log('5' === 5);     // Answer: ___false____
console.log(Boolean(''));    // Answer: __false_____
console.log('5' + true);    // Answer: ____5true___
console.log('5' * 2);       // Answer: ___10____
console.log(0 == false);     // Answer: __true_____
console.log(Boolean(NaN));   // Answer: __false_____
let age;
age=7;  
let number;
number=-2;
//part 2
//check if a person is eligible to vote or not
if(age<18) {
    console.log("this persson is not eligible to vote because they are a minor")
}
else {
    console.log("you have the appropriate age to vote")
}
// check if a number is positive , negative or zero
if(number=0){
    console.log("the number is zero")
}
else if(number<0){
    console.log("the number is negative")
}
else {
    console.log("the number is positive")
}
//part 3
// calculating factorial
let n;
n=4;
let factorial;
factorial=1;
let i;
for (i=n; i>=1;i--){
    factorial=factorial*i
}
console.log( "the factorial is:"+factorial)
//fibonacci sequence
let a=0, b=1, c, listnum;
for (i=1;i<=listnum;i++){
    console.log(a+",");
    c=a+b;
    a=b;
    b=c;
}
//find prime numbers
let num;
if(num<=1) {
    console.log("not prime")
}
if(num===2){
    console.log("prime")
}
if(num % 2 === 0){
    console.log("not prime")
}
for (i=3; i <= 100; i += 2) {
    if (num % i === 0) {
        console.log("not prime");
        break;
    }
}
//part 4
//average
let num1, num2 , average;
function average (num1 , num2) {
   try{
    if(typeof num1 !== 'number'|| typeof num2 !== 'number'){
        throw new Error("both inputs  must be numbers ");
        
    }
     average = (num1 + num2 ) / 2;
     return average;
   }
   catch (error) {
    console.error("error:" , error.message);
    return null;
   }
   
}
//factorial 
let n1;
function fuctorial(n1){
    try{
        if(n1<=0){
            throw new Error("the number must be non-negative");
        }
       for (i=n; i>=1;i--){
    factorial=factorial*i
       }
       return factorial;
    } 
    catch (error) {
        console.error("Error:",error.message);
        return null;
    }
}
//prime numbers 
let n2;
function isprime (n2) {
    try{
       if (typeof n2 !== 'number'){
        throw new Error("the input must be a number");
       } 
       if (n2<2){
        throw new Error("number must be 2 or greater");
       }
       if(num===2){
            console.log("prime")
         }
      if(num % 2 === 0){
          console.log("not prime")
        }
      for (i=3; i <= 100; i += 2) {
            if (num % i === 0) {
                console.log("not prime");
                return false;
             }

        }
 }
  catch {
    console.error("Error:", error.message);
    return null;
  }
}
//part 5
  let numbers=[ 1,2,3,4,5,8,8,11];
  //1.foreach
  numbers.forEach((num) => {
    console.log(num)
  })
  //2.map
  let squared = numbers.map((num) => {
    return num*num
  })
  //3.filter
  let filtered = numbers.filter((num) => {
    return num%2 !== 0
  })
  //4.reduce
  let sum = numbers.reduce((total,num) => {
 return total + num;}, 0);
 //5.find
let found= numbers.find((num)=>{
    return num>10
})
//6.findindex
let firsteven = numbers.findIndex((num)=>{
    return num%2 === 0;
});
//7. inclues
let isincluded = numbers.includes(num);
//8.slice
let sliced = numbers.slice(0,4);
//9.splice
numbers.splice(numbers.length - 1, 1 , 12);
//10.sort
let sorted = numbers.sort((d,e)=>{
    return d-e;
});
//11.join
let joined = numbers.join(", ");



  

  


