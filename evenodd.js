// function evenodd(a){
//     if(a%2==0){
//         console.log("Even..");
//     }
//     else{
//         console.log("Odd..");
//     }
// }

// export default evenodd;

// export default function Max(b,c){

//     if(b>c)
//     {
//         return b+" is max.";
//     }
//     else{
//         return c+" is max.";
//     }
// }



// export default function lp(a){
//     if(a%4==0){
//         return a+" is a leap year..";
//     }
//     else{
//          return a+" not a leap year..";
//     }
// }


// export default function fourth(a){
//     let sum=0;
//     for(let i=0;i<=a;i++)
//     {
        
//         sum+=i;
//     }    
//     return sum+" is the sum";
// }



// export default function five(a)
// {
//         let fact=1;
//         for(let i=1;i<=a;i++)
//         {
//             fact*=i;
//         }
//         return fact;
// }


// export default function six(a)
// {
//     console.log("\n");
//     for(let i=1;i<=10;i++)
//     {
//         console.log(`${a} X ${i} = ${a*i}`);
//     }
// }


// export default function seven(a)
// {
//     while(a>=0)
//     {
//         r=a%10;
//         re=r*10+a;
//         a/=10;
//     }

// }


//7
// function seven(a) { 
//     return Number(a.toString().split('').reverse().join(''));
// }
// export default seven;

//8
// function eight(num) {
//     const str = num.toString();
//     const reversed = str.split('').reverse().join('');
//     if (str === reversed) {
//       return 'Palindrome';
//     } else {
//       return 'Not Palindrome';
//     }
//   }
// export default eight;




// 9
// export default function nine(a){
//     if(a<=1)
//     {
//         return "not a Prime Number.";
//     }

//         for(let i=2;i<a;i++)
//         {
//             if(a % i === 0)
//             {
//                 return "not a Prime number";
//             }           
//         }
//         return "Prime Number.";
// }


//10
export default function ten(a)
{
    
}































// console.log("program.10 count digits in a number")
// var n=5023
// var count=0
// if(n==0)
// {
//     count=1;
// }
// else
// {
//     if(n<0)
//     {
//         n+=n
//     }
//     else(n!=0)
//     {
//         count++
//     }
// }
// console.log("number of digits:",n)

// console.log("program.11 sum of digits")
// var n=123
// var sum=0
// var digit=0

// while(n)
// {
//     digit=n%10
//     sum+=digit
//     n=(n-digit)/10
// }
// console.log("sum of digits:",n)

// console.log("program.12 check armstrong number")
// let n = 153;
// let num = n.toString(); 
// let count = num.length;

// let sum = 0;

// for (let digit of num) {
//     sum += Math.pow(Number(digit), count); 
// }

// if (sum === n) {
//     console.log("Number is Armstrong");
// } else {
//     console.log("Number is Not Armstrong");
// }

console.log("program.13 Generate Fibonacci Series")

console.log("program.14 Check Vowel or Consonant")

// console.log("program.15 Simple Calculator")
// var a=4
// var b=2
// console.log(`${a} + ${b} = ${a+b}`)
// console.log(`${a} - ${b} = ${a-b}`)
// console.log(`${a} * ${b} = ${a*b}`)
// console.log(`${a} / ${b} = ${a/b}`)

// console.log("program.16 Find GCD (HCF)")
// var a = 20, b = 28, gcd;
// for (i = 1; i <= a && i <= b; i++)
// {
//     if (a % i == 0 && b % i == 0) 
//     {
//         gcd = i;
//     }
// }
// console.log(gcd);  
   
// console.log("program.17 check perfect number")
// var n=28
// var sum=0
// for(i=1;i<n;i++)
// {
//     if(n%i==0)
//     {
//         sum+=i
//     }
// }
// if(sum==n)
// {
//     console.log("number is perfect")
// }
// else
// {
//     console.log("number is not perfect")
// }

// console.log("program.18 print all divisors")
// var n=10
// for(i=1;i<=n;i++)
// {
//     if(n%i==0)
//     {
//         console.log(i)
//     }
// }

// console.log("program.19 number is positive,negative or zero")
// var n=-5
// if(n>0)
// {
//     console.log("number is positive")
// }
// else if(n<0)
// {
//     console.log("number is negative")
// }
// else
// {
//     console.log("number is zero")
// }

// console.log("program.20 find power(Exponentiation)")
// var a=2
// var b=3
// var result=1
// for(i=0;i<b;i++)
// {
//     result*=a
// }
// console.log("power:",result)





