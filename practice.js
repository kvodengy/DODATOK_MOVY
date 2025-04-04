let question = document.querySelector(".question")
let options = document.querySelectorAll(".options")

class Question {
    constructor(){
        this.questions = [["1", "2", "3"],["4", "5", "6"],["7", "8", "9"]]
        this.correct_answer
        for(let i = 0; i < this.questions.length; i++){
            this.question = this.questions[i][0]
            this.correct_answer = this.questions[i][2]
            while(this.randint(0,this.questions.length-1) == i){
                this.answers = [
                    correct_answer,
                    this.questions[this.randint(0,this.questions.length-1)][2],
                    this.questions[this.randint(0,this.questions.length-1)][2],
                ]
            
            }

            

            /*if (this.randint(0,this.questions.length-1) == i){
                this.answers.push(this.questions[this.randint(0,this.questions.length-1)[2]])
                this.answers.push(this.questions[this.randint(0,this.questions.length-1)[2]])
            }*/
        console.log(this.answers)
        this.shuffle(this.answers)
        }
    }
    display(){
        question.innerHTML = this.question
        for(let i = 0; i < this.answers.length; i++){
            options[i].innerHTML = this.answers[i]
        }
    }
    shuffle(array){
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); 
            [array[i], array[j]] = [array[j], array[i]]
        } 
    }
    randint(max, min){
        return Math.round(Math.random() * (max-min) + min)
    }
}

let current_question
let question_counter
let correct_answers_given

current_question = new Question()
current_question.display()
question_counter = 0

for(let i = 0; i < options.length; i++){
    options[i].addEventListener("click", function(){
        if(options[i].innerHTML == current_question.correct_answer){
            correct_answers_given += 1
            anime({
                targets: options[i],
                backgroundColor: ["rgb(0, 255, 0)" ,"#f73868"],
                easing: 'easeOutQuad',
                duration:600
            })
        }else{
            anime({
                targets: options[i],
                backgroundColor: ["rgb(255, 0, 0)" ,"#f73868"],
                easing: 'easeOutQuad',
                duration:600
            })
        }
        question_counter += 1
        current_question = new Question
        current_question.display()
    })
}