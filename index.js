
var quotes =[
    {author: '--Frank Sinatra', quote: `"The best revenge is massive success."`},
    {author: '--Wayne Gretzy', quote: `"You miss 100% of the shots you don't take."`},
    {author: '--Nelson Mandela', quote: `"Resentment is like drinking poison and waiting for your enemies to die."`},
    {author: '--Elbert Hubbard', quote: `"Do not take life too seriously. You will not get out alive."`}
]

var currentIndex = 0

function newQuote(){
 var quote = quotes[currentIndex]

 document.getElementById('quote').innerHTML=`${quote.quote}`
 document.getElementById('author').innerHTML=`${quote.author}`

 currentIndex++

 if(currentIndex>=quotes.length){
   currentIndex = 0;
 }
}



