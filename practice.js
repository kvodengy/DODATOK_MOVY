let question = document.querySelector(".question")
let options = document.querySelectorAll(".options")


class Question {
    constructor(){
        this.questions = [
            ["coffe", "coffe", "кава"],
            ["tea", "ti", "чай"],
            ["croissant", "kwasɒŋ", "круасан"],
            ["education", "ˌɛʤʊˈkeɪʃᵊn", "освіта"],
            ["snake", "sneɪk", "змія"],
            ["frame", "freɪm", "рамка"],
            ["inflatable ball", "ɪnˈfleɪtəbᵊl bɔl", "надувна кулька"],
            ["ceiling", "ˈsiːlɪŋ", "стеля"],
            ["battery", "ˈbætᵊri", "батарея"],
            ["pencil", "ˈpɛnsᵊl", "олівець"],
            ["glass", "ɡlɑːs", "стакан"],
            ["flower", "flaʊə", "квітка"],
            ["plaster", "ˈplɑːstə", "штукатурка"],
            ["brush", "brʌʃ", "пензель"],
            ["bucket", "ˈbʌkɪt", "відро"]
        ]
    this.i = 0 
    this.answers=[]
    this.new_question()
    }

    new_question(){
        this.question = this.questions[this.i][0]
        this.correct_answer = this.questions[this.i][2]
        this.answers = [
            this.correct_answer,
            this.questions[this.randint(0,this.questions.length-1)][2],
            this.questions[this.randint(0,this.questions.length-1)][2],
        ]
        while(this.randint(0,this.questions.length-1) == this.i){
            this.answers = [
                this.correct_answer,
                this.questions[this.randint(0,this.questions.length-1)][2],
                this.questions[this.randint(0,this.questions.length-1)][2],
            ]
        }
        this.shuffle(this.answers)
        console.log(this.answers)
    }
    check_question (){
        if(this.i < this.questions.length-1){
            this.new_question()
            this.i += 1
            return true
        }
        else{
            return false
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
                backgroundColor: ["rgb(0, 255, 0)" ,"#EEFF00"],
                easing: 'easeOutQuad',
                duration:600
            })
        }else{
            anime({
                targets: options[i],
                backgroundColor: ["rgb(255, 0, 0)" ,"#EEFF00"],
                easing: 'easeOutQuad',
                duration:600
            })
        }
        if (current_question.check_question() == true){
            question_counter += 1
            current_question.new_question()
            current_question.display()
        }
        else{
            question.innerHTML = "Тест пройдено"
            for(let i; i<options.length; i++){
                options[i].style.display = "none"
            }
        }
    })
}