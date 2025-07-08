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

async function getRandonBlock() {

    let randon = Math.random();

    let result = ""

    switch (true) {
        case randon < 0.166:
            result = "CONFRONTO";
            break;
        case randon < 0.333:
            result = "RETA";
            break;
        case randon < 0.666:
            result = "CURVA";
            break;
        case randon < 1:
            result = "PIT STOP";
            break;
        default:
            result = "RETA";
            break;
    }
    
    return result;
}

async function playerRacerEngineer(player1, player2) {
    for (let round = 1; round <= 6; round++) {
        console.log(`🏁 Round ${round}`);
       
        let block = await getRandonBlock()
        console.log("Bloco: "+block)

        let dicePlayer1 = await rollDice()
        let dicePlayer2 = await rollDice()
        
        let testSkill1 = 0
        let testSkill2 = 0
    
        if(block === "RETA"){
            testSkill1 = dicePlayer1 +player1.VELOCIDADE 
            testSkill2 = dicePlayer2 +player2.VELOCIDADE 
            
            logRollResult(player1, block, dicePlayer1, "Velocidade");
            logRollResult(player2, block, dicePlayer2, "Velocidade");
        }if(block === "CURVA"){
            testSkill1 = dicePlayer1 +player1.MANOBRABILIDADE
            testSkill2 = dicePlayer2 +player2.MANOBRABILIDADE
            
            logRollResult(player1, block, dicePlayer1, "Manobrabilidade");
            logRollResult(player2, block, dicePlayer2, "Manobrabilidade");
        }if(block === "PIT STOP"){
            testSkill1 = dicePlayer1 +player1.PODER
            testSkill2 = dicePlayer2 +player2.PODER 
            
            logRollResult(player1, block, dicePlayer1, "Poder");
            logRollResult(player2, block, dicePlayer2, "Poder");
        }if(block === "CONFRONTO"){
            testSkill1 = dicePlayer1 +player1.PODER
            testSkill2 = dicePlayer2 +player2.PODER 
            

            console.log(`${player1.NOME} ⚔️ ${player2.NOME} em ${block}`); 
                
            

        }
        
        
        //verificando o vencedor
        if(testSkill1 > testSkill2){
        console.log(player1.NOME + " venceu o round!");
        player1.PONTOS++
        }else if(testSkill2 > testSkill1){
        console.log(player2.NOME + " venceu o round!");
        player2.PONTOS++
        }



        console.log("-------------------------")

    }

   

}

async function logRollResult(player, block, diceResult, atribute) {
    
    console.log(`${player.NOME} 🎲 rolou um dado de ${block} 
        e obteve ${diceResult} em ${atribute} = ${diceResult + atribute}`);
}

(async function main() {
    console.log("Jogo de Mario Kart");
    console.log("🏁 Corrida entre " 
        + player1.NOME + " e " + player2.NOME
    +"começando...\n");
    //Espera a função executar para continuar o codigo
    await playerRacerEngineer(player1, player2);

})()