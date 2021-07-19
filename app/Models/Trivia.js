export default class Trivia{

  constructor({question, correct_answer, incorrect_answers, type }){
  this.question = question
  this.correct = correct_answer
  this.answers = ["True", "False"]

  //Correct if not true or false
  if(type == 'multiple') {
    this.answers = incorrect_answers
    let randIndex = Math.floor(Math.random()*3)
    this.answers.splice(randIndex, 0, this.correct)
  }
  }

  getCorrect() {
    return this.correct
  }


  getTemplate() {
    return /*HTML*/ `
    <div class="row text-center justify-content-center">
      <div class="col-md-12" id ="question">
          <p>'${this.question}'</p>
      </div>
      <div class="col-md-12" id = "buttons">
          '${this.getTemplateButton()}'
      </div>
    </div>
    `
  }


  getTemplateButton() {
    let template = ''
    this.answers.forEach(a => {
      template +=  `
      <button type="button" class="btn btn-primary"
      onclick = "app.triviasController.isCorrect('${a}')">${a}</button>
      `
    })
    return template;
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