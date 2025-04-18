words = document.querySelectorAll(".word")
transcriptions = document.querySelectorAll(".transcription")
meanings = document.querySelectorAll(".meaning")
movi = document.querySelector(".movi")

class Language{
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

        if(movi.value == "angl"){
            this.words = this.english
        }
        
    }
    table(){
        for (let i=0;i<words.length; i++){
            words[i].innerHTML = this.words[i][0]
            transcriptions[i].innerHTML = this.words[i][1]
            meanings[i].innerHTML = this.words[i][2]
        }
    }
}

let test = new Language()

movi.addEventListener("change", function(){
    test.table()
}, false)
