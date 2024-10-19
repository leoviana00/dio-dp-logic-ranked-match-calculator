
// Matriz com informações dos heros
let report = [ 
    ["Arqueiro", 34, 56],
    ["Elfo Negro", 45, 100],
    ["Berserk", 102, 21],
    ["Gon", 302, 44],
    ["Takemishi", 23, 0],
    ["Rocky", , ]
]


//Função principal
getListHero(report)

// Função para estruturação dos dados dos heros pegos na matriz e chama outras funções para calculo de saldo de vitorias e classificar o hero.
function getListHero(report){
    for (i in report){

        let player = report[i][0]
        let victory = report[i][1]
        let defeat = report[i][2]

        let ranked = calculateRankedMatche(victory, defeat)
        let level = getClassRanked(ranked)
        
        console.log("Herói " + player + " de saldo de " + ranked + ", está no nível de " + level)
        
    }
    return getListHero
    
}


//Função para calcular o saldo de vitorias
function calculateRankedMatche(victory, defeat){
    let winningBalance = victory - defeat
    return winningBalance
}

//Função que classificar o hero de acordo com o saldo de vitorias
function getClassRanked(ranked){
   
    if (ranked < 10){
        level = "Ferro"
    } else if (ranked >= 11 && ranked <=20){
        level = "Bronze"
    } else if (ranked >= 21 && ranked <=50){
        level = "Prata"
    } else if (ranked >= 51 && ranked <=80){
        level = "Ouro"
    } else if (ranked >= 81 && ranked <=90){
        level = "Diamante"
    } else if (ranked >= 91 && ranked <=100){
        level = "Lendário"
    } else if (ranked >= 101){
        level = "Imortal"
    } else {
        level = "Undefined"
    }
    return level
}


