
// Json com heros, suas vitorias e derrotas
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

// Laço para processamento dos heróis utilizando a função que calcula o level do hero baseado no saldo de partidades (vitorias - derrotas)
for (hero in listHeros.name){
    let heroName = listHeros.name[hero]
    let [victoryHero, defeatHero] = listHeros.matchs[hero]
    let balanceMatchs = victoryHero - defeatHero
    let levelHero = calcLevelHero(balanceMatchs)

    console.log(`O Herói de nome ${heroName} está no nível ${levelHero}`);
}

// Laço para processamento dos heróis utilizando a função que calcula o level do hero baseado no saldo de partidades (vitorias - derrotas)
function calcLevelHero(saldoMatchs) {
    const levels = {
      Ferro: { min: 0, max: 10 },
      Bronze: { min: 11, max: 20 },
      Prata: { min: 21, max: 50 },
      Ouro: { min: 51, max: 80 },
      Diamante: { min: 81, max: 90 },
      Lendário: { min: 91, max: 100 },
      Imortal: { min: 101, max: Infinity }
    };

    for (level in levels){

        if(saldoMatchs >= levels[level].min && saldoMatchs <= levels[level].max || saldoMatchs <= 10) {
            return level ;
        } 
    }
}