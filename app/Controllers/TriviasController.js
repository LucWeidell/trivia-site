import { ProxyState } from "../AppState.js";
import { triviasService } from "../Services/TriviasService.js";



function _draw(){
  let template = ProxyState.correct + ' / ' + ProxyState.totalQuest
  document.getElementById('score').innerHTML = template
  template = ProxyState.trivia[0].getTemplate()
  document.getElementById('trivia').innerHTML = template
}



export default class TriviasController {

  constructor(){
    ProxyState.on('trivia', _draw)
    ProxyState.on('totalQuest', this.getTrivia)

    this.getTrivia()

  }

    async getTrivia(){
      try{
         await triviasService.getTrivia();
      } catch (error){
        window.alert('Failed to get trivia: ' + error)
      }
    }

    isCorrect(answer){
      let result = triviasService.isCorrect(answer)
      this.updateScore(result)
    }

    updateScore(isCorrect){
      triviasService.updateScore(isCorrect)
      if(isCorrect){
        window.alert("You are correct!")
      } else {
        window.alert('Incorrect! (correct: ' + ProxyState.trivia[0].getCorrect())
      }
    }
}