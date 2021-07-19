class Trivia
{

  constructor({correct_answer, incorrect_answers, type }){
  this.correct = correct_answer
  this.answers = ["True", "False"]

  //Correct if not true or false
  if(type == 'multiple') {
    this.answers = incorrect_answers
    let randIndex = MAth.floor(Math.random()*3)
    this.answers.splice(randIndex, 0, this.correct)
  }
  }


 /**{
{
"response_code": 0,

"results": [

{
"category": "Politics",
"type": "multiple",
"difficulty": "hard",
"question": "&quot;Yes, America Can!&quot; was this United States politician&#039;s de facto campaign slogan in 2004.",
"correct_answer": "George W. Bush",

"incorrect_answers": [
"John Kerry",
"Barack Obama",
"Al Gore"
]
}
]
}
} */
}