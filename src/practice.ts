// =========== TypeScript optional chaninging

/* 

let message: HTMLElement | null = document.querySelector("h1");

message?.addEventListener("click", () => message && (message.style.color = 'red'));

message?.addEventListener('mouseleave', () => message && (message.style.color = ''));


*/




// let header: HTMLElement | null = document.querySelector('h1');

// header?.addEventListener('click', function(){
// if(header){
//     header.textContent = "This is red color!";
//     header.style.color = "red";
// }
// });

/* let numbers: HTMLElement | null = document.querySelector('.number');
let score: HTMLElement | null = document.querySelector('.score');
 
if(numbers && score){
    numbers.textContent = '20';
    score.textContent = '100';
} */

/* 

let guess: HTMLInputElement = document.querySelector('.guess')!; // here '!' replaces null type.

if(guess){
    guess.value = '23';
} 

*/

// ========= javascript, handling click events ======== //
 
/* 



let check: HTMLInputElement = document.querySelector('.check')!;

check.addEventListener('click', () => {
const guessElement: HTMLInputElement = document.querySelector('.guess')!;
if(guessElement){
    const guessValue: number = Number(guessElement.value);
    console.log(guessValue, typeof guessValue);
}
});

 

*/

// ============= best use of unary operator with typescript ============ //

/* 



const check: HTMLInputElement = document.querySelector('.check')!;
const message: HTMLParagraphElement = document.querySelector('.message')!;
const guessElement: HTMLInputElement = document.querySelector('.guess')!;


check.addEventListener('click', () => {
 const guessValue = +guessElement?.value; // instead of const guestv: number = Number(guessElement.value) to
                                         //  given using '+' unary plus for converting string to a number
 console.log(guessValue, typeof guessValue);

 message.textContent = guessValue ? '' : 'no number';
 

});

 

*/
