// Definição da classe Hero
class hero{

    // Construtor que recebe todos os atributos referente ao hero:
        constructor(name, victory, defeat, level){
            this.name = name;
            this.victory = victory;
            this.defeat = defeat
            this.level = level
    
        }
        
    //Funcao para calcular o nivel do heroi baseado no saldo de partidas (vitorias - derrotas)
        levelCalculate(params) {
            const levels = {
              Ferro: { min: 0, max: 10 },
              Bronze: { min: 11, max: 20 },
              Prata: { min: 21, max: 50 },
              Ouro: { min: 51, max: 80 },
              Diamante: { min: 81, max: 90 },
              Lendário: { min: 91, max: 100 },
              Imortal: { min: 101, max: Infinity }
            };
        
            let balanceMatchs = this.victory - this.defeat
    
            for (this.level  in levels){
                if(balanceMatchs >= levels[this.level ].min && balanceMatchs <= levels[this.level ].max || balanceMatchs <= 10) {
                    return this.level  ;
                } 
            }
        }
    }
    
    // Objeto contendo uma lista de heros e suas respectivas derrotas e vitorias
    let listHeros = {
        name: ["Arqueiro", "Elfo Negro", "Berserk", "Kakarotto", "Kurama"],
        matchs: {
            0: [34, 56],
            1: [45, 100],
            2: [102, 21],
            3: [307, 100],
            4: [58, 4]
        }
    }
    
    // Processamento da lista de heros
    for (i in listHeros.name){
        const nameHero = listHeros.name[i]
        const [victoryHero, defeatHero ] = listHeros.matchs[i]
    
    // Criando um objeto hero 
        const heroNew = new hero(nameHero, victoryHero, defeatHero)
    
    // Calcula e imprime o objeto criado junto do seu nível
        const levelHero = heroNew.levelCalculate();
        console.log(`O Herói de nome ${heroNew.name} está no nível ${levelHero}`);
    
    }    