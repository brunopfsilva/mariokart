const player1 = {
    NOME: "Mario",
    VELOCIDADE: "4",
    MANOBRABILIDADE: "3",
    PODER: "5",
    PONTOS: "0"
}

const player2 = {
    NOME: "Yoshi",
    VELOCIDADE: "5",
    MANOBRABILIDADE: "2",
    PODER: "5",
    PONTOS: "0"
}

async function rollDice() {
    return Math.floor(Math.random() * 6) + 1
}

async function playerRacerEngineer(player1, player2) {
    for (let round = 1; round <= 5; round++) {
        console.log(`🏁 Volta ${round}`);
    }
}

(async function main() {
    console.log("Jogo de Mario Kart");
    console.log("🏁 Corrida entre " 
        + player1.NOME + " e " + player2.NOME
    +"começando...\n");
    //Espera a função executar para continuar o codigo
    await playerRacerEngineer(player1, player2)
    const player1Dice = await rollDice()
    const player2Dice = await rollDice()
    console.log(player1Dice)
    console.log(player2Dice)
})()