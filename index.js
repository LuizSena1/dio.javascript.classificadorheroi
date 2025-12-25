const readline = require('readline');
const {stdin: input, stdout: output} = require('node:process');
const rl = readline.createInterface({input,output});
let username = '';
let XP = 0;
let RANK;
rl.question('Bem Vindo Aventureiro. Porfavor, me diga seu nome! ', (name) => {
    username = name;
        rl.question(`Certo. ${username}, agora, me diga quantos pontos de Experiencia você tem. `, (points) => {
            XP = Number(points);
            switch (true) {
                case (XP < 1000):
                    RANK = 'Ferro';
                    break;
                case (XP <= 2000):
                    RANK = 'Bronze';
                    break;
                case (XP <= 5000):
                    RANK = 'Prata';
                    break;
                case (XP <= 7000):
                    RANK = 'Ouro';
                    break;
                case (XP <= 8000):
                    RANK = 'Platina';
                    break;
                case (XP <= 9000):
                    RANK = 'Ascendente';
                    break;
                case (XP <= 10000):
                    RANK = 'Imortal';
                    break;
                default:
                    RANK = 'Radiante';
                    break;
            }
            console.log(`O Herói de nome ${username} esta no nível de ${RANK}`)
            rl.close();
        });
});


