import { Component, ViewChild } from '@angular/core';
import { ModalDirective } from 'ngx-bootstrap/modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  

  isQuestionCardShow: boolean = false;

    totalAnswered: number = 0;
    rightAnswer: number;
    //questionObj = new QuestionClass();
    @ViewChild('submitModal') submitModal: ModalDirective;
    @ViewChild('addQuestionModal') addQuestionModal : ModalDirective;
    @ViewChild('answerModal') answerModal : ModalDirective;
    @ViewChild('questionForm') questionForm: any;
    @ViewChild('questionTest') questionTest : any;


    allQuestions: any = [{
      "id": 1,
      "question": "What is the capital of Belgium?",
      "a": "Vienna",
      "b": "Berlin",
      "c": "Brussels",
      "d": "Prague",
      "answer": "c"
  },
  {
      "id": 2,
      "question": "What is the capital of Australia?",
      "a": "Vienna",
      "b": "Canberra",
      "c": "Brussels",
      "d": "Prague",
      "answer": "b"
  },
  {
      "id": 3,
      "question": "What is the capital of Bulgaria?",
      "a": "Vienna",
      "b": "Sofia",
      "c": "Brussels",
      "d": "Prague",
      "answer": "b"
  },
  {
      "id": 4,
      "question": "What is the capital of India?",
      "a": "Bangalore",
      "b": "Daman",
      "c": "Delhi",
      "d": "Mumbai",
      "answer": "c"
}
  ];

  onAnswerSelected(event){
    console.log("app component answer: ",event);
  }

}
