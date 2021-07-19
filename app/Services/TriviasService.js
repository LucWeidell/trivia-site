import { ProxyState } from "../AppState.js"
import { api } from "./AxiosService.js"
import Trivia from "../Models/Trivia.js"

class TriviasService {

  constructor(){}

  async getTrivia(){
    let res = await api.get()
    console.log(res.data)
    ProxyState.trivia = res.data.results.map(t => new Trivia(t))
  }

  isCorrect(answer){
    let foundTrivia = ProxyState.trivia.find(t => {
       let realAnswer = (t.answers.find(a => a == answer))
      if(realAnswer){
        return t
      }
     })
    return foundTrivia.correct == answer
  }

  updateScore(iscorrect){
    if(iscorrect){
      ProxyState.correct++
      ProxyState.totalQuest++
    } else {
      ProxyState.totalQuest++
    }
    ProxyState.trivia = ProxyState.trivia
  }

}

export const triviasService = new TriviasService()