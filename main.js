let userName = '';

 (userName === 'Jane') ? console.log(`Hello, ${userName}!`) : console.log('Hello!');

 (userName === 'Jane' || userName === '') ? console.log(`Hello ${userName}!`) :  console.log('Hello!');

let userQuestion = 'What is my name?';
console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);
//console.log(randomNumber);
 
 let eightBall = '';

 switch (randomNumber){
   case 0:
   eightBall = 'Your name is John';
   break;
   case 1 :
   eightBall ='Your name is Matthew';
   break;
   case 2 :
   eightBall ='Your name is Elle';
   break;
   case 3 :
   eightBall ='Your name is Jason';
   break;
   case 4 : 
   eightBall = 'Your name is Solomon';
   break;
   case 5 :
   eightBall = 'Your name is Josh';
   break;
   case 6 :
   eightBall = 'Your name is Grayson';
   break;
   case 7 : 
   eightBall = 'Your name is Hazel';
   break;
   eightBall ='Your name is George';
   break;
   case 8 :
   eightBall = "Your name is Penelope"
   break;
   default:
   eightBall ='No reading to deliver';
   break;
 }
 console.log(`The answer is : ${eightBall}`)

 //An alternative to this solution.

//  if (randomNumber === 0){
//    eightBall = 'Your name is John'
//    console.log(eightBall)
//  }
//  else if (randomNumber === 1){
//    eightBall = 'Your name is Matthew'
//    console.log(eightBall)
//  }
//  else if (randomNumber === 2){
//     eightBall = 'Your name is Elle'
//    console.log(eightBall)
//  }
// else if (randomNumber === 3){
//   eightBall = 'Your name is Josh'
//   console.log(eightBall)
// }
// else if (randomNumber === 4){
//    eightBall = 'Your name is Solomon'
//   console.log(eightball)
// }
// else if (randomNumber === 5){
//   eightBall = 'Your name is Grayson'
//   console.log(eightBall)
// }
// else if ( randomNumber === 6){
//   eightBall = 'Your name is Hazel' '
//   console.log(eightBall)
// }
// else if(randomNumber === 7){
//  eightBall = 'Your name is George'
//   console.log(eightBall)
// }
// else if (randomNumber === 8){
//   eightBall = 'Your name is Penelope'
//   console.log(eightBall)
// }
// else{
//   console.log('No prediction Here')
// }