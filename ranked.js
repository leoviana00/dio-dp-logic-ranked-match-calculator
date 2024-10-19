
// Matriz de heros com suas vitorias e derrotas
let listHeros = [ 
    ["Arqueiro", 34, 56],
    ["Elfo Negro", 45, 100],
    ["Berserk", 102, 21],
    ["Gon", 302, 44],
    ["Takemishi", 23, 0],
    ["Rocky",15, 1 ]
]

// Laço para processamento dos heróis utilizando a função que calcula o level do hero baseado no saldo de partidades (vitorias - derrotas)
for (let heroXp = 0; heroXp < listHeros.length; heroXp ++){
    let nameHero = listHeros[heroXp][0]
    let victoryHero = listHeros[heroXp][1]
    let defeatHero = listHeros[heroXp][2]

    let saldoMatchs = victoryHero - defeatHero
    let levelHero = calcLevelHero(saldoMatchs)

    console.log(`O Herói de nome ${nameHero} está no nível ${levelHero}`);

}

// Calcular o level com base no saldo de vitórias
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
            return level;
        }
    }
}