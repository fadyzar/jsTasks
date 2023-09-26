//1.1
// function boolian(val){
//     val
//     if(val == true) {
        
//         return `Yes`
//     }else{
//         return `No`
//     }
// }
// boolian(true);
// boolian(false);
//________________________________________________

//2.1
// function sum(arr){
//     let num1=Math.min(...arr);
//     let num2 =arr[0];
//     let result = 0;
//     for(let i=0;i<arr.length;i++){
//         for(j=0;j<arr.length;j++){
//           if(arr[i] <num2 && arr[i] != num1 ){
//             num2 = arr[i];
          
//           }
          
//         }
        
//     }
    
//     result = num1 + num2;
//      return result;
// }
// let arr = [33,40,2222,7,90];
// sum(arr);
//------------------------------------------------------
//2.4 to get back  ************************

// function findUniq(arr){
//     let result= arr[0];
//     let counter = 0;
//     for(let i=0;i<arr.length;i++){
//       counter = 0;
        
//         for(let j=0;j<arr.length;j++){
           
//             if(arr[j]=== arr[i]){
//                 counter++;
//              counter
               
//             }else if(counter < 1){
//                 result = arr[i];
                
               
//             }
//             result
//         }
//     }
//     result
//     return result
// }
// let arr = [1,2,1,1,1,1,1,1,1];
// findUniq(arr);
//_____________________________________________________
//2.5

// function summation(val){
//    let counter = 0;
//     for(let i=1;i<=val;i++){
//         counter += i;
//     }
//     return counter
// }
// summation(8)
//_______________________________________________________
//2.6
// function centuryFromYear(year){
//     let result = 0;
//     result = ((year - 1) / 100) + 1 
//     result = Math.floor(result);
//     return result

// }

// centuryFromYear(2000)
//_______________________________________________________________
//2.7
// function basicOp(operation,val1,val2){
//    let result = 0;
// switch (operation) {
//   case '+':
//     result = val1 + val2;
//     break;
//   case '-':
//     result = val1 - val2;
//     break;
//   case '*':
//   result = val1 * val2;
//   break;
//   case '/':
//    result = (val1 / val2);
//   break;

//   default:
//     console.log(`Sorry, we are out of ${operation}.`);
// }

// return result
// }
// basicOp('*',3,5);
//________________________________________________________________
//4.1 ************************

// function fibonacci(number) {
//     let n1 = 0, n2 = 1, nextTerm;

//     for (let i = 1; i <= number; i++) {
        
//         nextTerm = n1 + n2;
//         n1 = n2;
//         n2 = nextTerm;
//     }
// 
// return nextTerm;
// }

// fibonacci(5)

//-------------------------------------------------------

//5.1

// function string(par){
// let newString=[];

// for(let i=1;i<par.length-1;i++){
//     for(let j=0;j<1;j++){
      
//         newString[i-1]=par[i];
        
//     }

   
// }
// return newString;
// }
// string("fady");

//---------------------------------------------------
//5.2//back
// function repeatStr(val,str){
// let newStr = [];
// let repeat = (str.length) * val;
// repeat
// for(let i=0;i<repeat;i++){
//         newStr[i]=str[i]
        
       
// }

// newStr
// }
// repeatStr(3,"hr")

//----------------------------------------------------
//5.2
// function repeatStr(val,str){
//     let newStr = [];
    
//     newStr = str.repeat(val)
            
//     newStr   
//     }
    
    
    
//     repeatStr(3,"fady!")
 //----------------------------------------------------

//____________________________________________________________
//5.3
// function camelCase(str){
// let newStr = str.replace(/_/g," ");
//  newStr = newStr.replace(/-/g," ");
// newStr = newStr.toLowerCase();//lower case all the atring

// newStr = newStr.replace(/\s(.)/g, function (str) {
//                 return str.toUpperCase();
//             }) 

//             newStr = newStr.replace(/\s/g, "") 



// newStr
// return newStr;

// }
// let str = "Fady-zarka-programmer"
// camelCase(str);
//----------------------------------------------------------
//5.4 Extra back*******************************

// function toWeirdCase(str){
//     let newStr = str;
//     newStr = newStr.replace(/\s/g, "") 
//     newStr = newStr.toLowerCase();
// for(let i=0;i<str.length;i++){
//    if((i%2)===0){
//     newStr= newStr.replace(newStr[i], newStr[i].toUpperCase())
// }

// }
// newStr= newStr.replace(newStr[0], newStr[0].toUpperCase())
// newStr= newStr.replace(newStr[1], newStr[1].toLowerCase())

// newStr
// }


// toWeirdCase("fady zarka")
//---------------------------------------------------------
//5.5

// function abbreviate(string){
//    let newStr1,newStr2,abbreviate;
//    newStr1 = string[0] + ".";
//    newStr1 = newStr1.toUpperCase();

//    newStr1

   
// //get the first letter in second word
// newStr2 = string.slice(string.indexOf(' ') + 1);
// newStr2 = newStr2[0];
// newStr2 = newStr2.toUpperCase();
// newStr2

// abbreviate = newStr1 + newStr2;
//    abbreviate
//    return abbreviate;
   
// }

// abbreviate("fady zarka")
//----------------------------------------------------
//5.6
// function mask(string){
//     let newStr = string;
//     let len= string.length - 4
   
//     for(let i=0;i<len;i++){
//     newStr= newStr.replace(newStr[i],"#")
//     }
//     newStr
//     return newStr;
// }
// mask("Fzarka&+#$$$$$$$$$^97")
//5.7

// function shortest(str){
//     let newArr =  str.split(' ');
//     newArr
//     let len=newArr[0].length;
   
// for(let i=0; i< newArr.length ; i++){
    
//     if(newArr[i].length < len){
//         len = newArr[i].length
//     }

// }
// len
// return len 
// }

// shortest("fady zarka programmer C_language")

//----------------------------------------------------------------
//6.1 back ****************************uppercase the first letter

// function accum(str){
//     let newArr =  str.split('');

//     newArr



// for(let i=0;i<newArr.length;i++){
//    newArr[i] = newArr[i].repeat(i+1) + "-";
  
//    if(i==newArr.length -1){
//     newArr[i] = newArr[i].replace("-","")//delete the last "-"
//    }
// }
// newArr


// let newString = newArr.toString();
// newString
//  newString = newString.replace(/,/g,"");
 
 

//  newString
// }
// accum("abcd")

//---------------------------------------------------------------
// //6.2
// function duplicates(str){
//     let newArr =  str.split('');
//     str = str.toLowerCase();
//     let counter = 0;
//     newArr
//     str
//     for(let i=0;i<str.length;i++){
//         if(counter > 1){
//             console.log(`${str[i-1]} occurs ${counter} times`)
            
//         }
//         counter = 0;
        
//         for(let j=0;j<newArr.length;j++){
//           if(str[i]==newArr[j] ){
//             counter++;
//           }

//         }
        
        
//     }
// }
//  duplicates("fffadddy")
//---------------------------------------------------

//6.4

// function isIsogram(str) {
//     //if empty return true.
//     if (str.isEmpty) {
//       return true;
//     } else {
//       // All lower case.
//       str = str.toLowerCase();
//     }
//     //split string into individual characters. 
//     let array = str.split('');
//     let sortedArr = array.slice().sort();
  
//     for (let i = 0; i < array.length; i++) {
//       //if duplicate is found return false.
//       if (sortedArr[i + 1] == sortedArr[i]) {
//         return console.log("false");
//       }else
//       return console.log("true");
//     }
    
    
//   }
//   isIsogram("aba")
//   isIsogram("Dermatoglyphics")

