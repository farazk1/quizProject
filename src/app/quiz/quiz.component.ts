import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  @Input() question;
  @Output() answerSelected = new EventEmitter();
  isLoaded = false;
  id;
  checked;
  disabled = false;
  name;
  tabindex;
  constructor() { }

  ngOnInit(): void {
    if(this.question){
      console.log("Quiz Question: ",this.question);
      this.isLoaded = true;
      
    }
  }

  changeAnswer(event){
    
    let answer = { id: this.question.id, selectedAnswer: event.target.value };
    console.log("Answer = ",answer);
    this.answerSelected.emit(answer);
    this.disabled = true;
  }

}
