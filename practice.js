import language from "./start.js"

let question = document.querySelector(".question")
let options = document.querySelectorAll(".options")
let translatedAs = document.querySelector(".translatedAs")
let question_counterhtml = document.querySelector(".questionCounter")

class Question {
    constructor(){
        this.english = [
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
        
        this.nimetska = [ 
            ["Kaffee", "ˈkafeː", "кава"],
            ["Tee", "ˈteː", "чай"],
            ["Croissant", "kroˈsɑ̃ː", "круасан"],
            ["Ausbildung", "ˈaʊ̯sbɪldʊŋ", "освіта"],
            ["Schlange", "ˈʃlaŋə", "змія"],
            ["Rahmen", "ʁaːmən", "рамка"],
            ["aufblasbarer Ball", "ˈaʊ̯fblazbaːʁɐ bal", "надувна кулька"],
            ["Decke", "ˈdɛkə", "стеля"],
            ["Batterie", "batəˈʁiː", "батарея"],
            ["Bleistift", "ˈblaɪ̯ʃtɪft", "олівець"],
            ["Glas", "ɡlaːs", "стакан"],
            ["Blume", "ˈbluːmə", "квітка"],
            ["Gips", "ɡɪps", "штукатурка"],
            ["Bürste", "ˈbʏʁstə", "пензель"],
            ["Eimer", "ˈaɪ̯mɐ", "відро"]
        ]
        
        this.frantsuska = [ 
            ["Café", "ka.fe", "кава"],
            ["Thé", "ˈteː", "чай"],
            ["Croissant", "kʁwa.sɑ̃", "круасан"],
            ["Éducation", "e.dy.ka.sjɔ̃", "освіта"],
            ["Serpent", "sɛʁ.pɑ̃", "змія"],
            ["Cadre", "ka.dʁə", "рамка"],
            ["Ballon gonflable", "ba.lɔ̃ ɡɔ̃.fʁa.blə", "надувна кулька"],
            ["Plafond", "pla.fɔ̃", "стеля"],
            ["Batterie", "ba.tʁi", "батарея"],
            ["Crayon", "kʁɛ.jɔ̃", "олівець"],
            ["Verre", "vɛʁ", "стакан"],
            ["Fleur", "flœʁ", "квітка"],
            ["Plâtre", "plɑtʁ", "штукатурка"],
            ["Pinceau", "pɛ̃.so", "пензель"],
            ["Seau", "so", "відро"]
        ]
        
        this.kitaiska = [ 
            ["咖啡", "kāfēi", "кава"],
            ["茶", "chá", "чай"],
            ["羊角面包", "yángjiǎo miànbāo", "круасан"],
            ["教育", "jiàoyù", "освіта"],
            ["蛇", "shé", "змія"],
            ["框架", "kuàngjià", "рамка"],
            ["充气球", "chōngqì qiú", "надувна кулька"],
            ["天花板", "tiānhuābǎn", "стеля"],
            ["电池", "diànchí", "батарея"],
            ["铅笔", "qiānbǐ", "олівець"],
            ["玻璃杯", "bōlí bēi", "стакан"],
            ["花", "huā", "квітка"],
            ["灰泥", "huīní", "штукатурка"],
            ["画笔", "huàbǐ", "пензель"],
            ["桶", "tǒng", "відро"]
        ]
        
        this.ispanska = [ 
            ["Café", "kaˈfe", "кава"], 
            ["Té", "te", "чай"],
            ["Croissant", "kroaˈsán", "круасан"],
            ["Educación", "eduˈkaθjon", "освіта"],
            ["Serpiente", "seɾˈpjen̪te", "змія"],
            ["Marco", "ˈmaɾko", "рамка"],
            ["Globo inflable", "ˈɡloβo inˈflable", "надувна кулька"],
            ["Techo", "ˈteʧo", "стеля"],
            ["Batería", "bateˈɾi.a", "батарея"],
            ["Lápiz", "ˈlapis", "олівець"],
            ["Vaso", "ˈβaθo", "стакан"],
            ["Flor", "floɾ", "квітка"],
            ["Yeso", "ˈjeθo", "штукатурка"],
            ["Pincel", "pinˈθel", "пензель"],
            ["Cubo", "ˈkuβo", "відро"]
        ]
        if(language == "english"){
            this.questions = this.english
        }
        if(language == "nimetska"){
            this.questions = this.nimetska
        }
        if(language == "frantsuska"){
            this.questions = this.frantsuska
        }
        if(language == "kitaiska"){
            this.questions = this.kitaiska
        }
        if(language == "ispanska"){
            this.questions = this.ispanska
        }
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
let question_counter = 1
let correct_answers_given = 0

current_question = new Question()
current_question.display()

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
            question_counterhtml.innerHTML = `${question_counter}/15`
        }
        else{
            question.innerHTML = "Тест пройдено"
            for(let i = 0; i<options.length; i++){
                options[i].style.display = "none"
                translatedAs.innerHTML = `Результат: ${correct_answers_given} із 15`
                
            }
        }
    })
}