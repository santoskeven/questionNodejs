const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require ('fs')
var _ = require('underscore'); 

operation()

function operation(){

    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: 'qual conteúdo voce deseja estudar?',
            choices: [
                'anti inflamatórios não esteroidais',
                'corticoides',
                'anti depressivos'
            ]
        }
    ]).then((resposta => {

        const action = resposta['action'];

        switch(action){
            case 'anti inflamatórios não esteroidais':
                AIE();
                break;
            
            case 'corticoides':
                corticoides();
                break;
            
            case 'anti depressivos':
                AD();
                break;

            case 'Sair':
                Sair();
                break;

        }

    })).catch(
        err => console.log(err)
    )

}


// FUNÇÃO PARA anti inflamatórios não esteroidais 

function AIE(){

    console.log(chalk.bgGreen.white(`olá Kássia, vamos iniciar seus estudos no tema anti inflamatórios não esteroidais`))

    let perguntas = GetPerguntasGlobal()
    let getResp = PegarResposta()
    
    AieInit()
    function AieInit(){

        let objSize = Object.keys(perguntas).length;

        // console.log('tamanho ' + objSize)
        // console.log(perguntas)

        if(objSize == 0){
            console.log('fim das perguntas');
            return operation()
        }

        let max = Math.floor(objSize);
        let min =  Math.ceil(0);

        var indice = Math.floor(Math.random() * (max - min + min) + min);
        let objIndice = Object.entries(perguntas)[indice]

        // console.log(objIndice)

        let valor = objIndice[0]

        // console.log('valor ' + valor)

        var pergunta = perguntas[valor]

        // console.log(pergunta)

        delete perguntas[valor];

        inquirer.prompt([
            {
                name: 'pergunta',
                message: pergunta
                
            }
        ]).then(() => {

            inquirer.prompt([
                {
                    name: 'Meresposta',
                    message: 'digite sua resposta'
                }
            ]).then((resposta) => {

                const Resposta = resposta['Meresposta']

                let objIndiceR = Object.entries(getResp)[indice]
                console.log('indiceR ' + objIndiceR)

                let valorR = objIndiceR[0]
                // console.log('valor ' + valorR)

                // console.log(getResp)
                // console.log(getResp[valorR])

                if(Resposta === getResp[valorR]){
                    console.log('resposta correta')
                    delete getResp[valorR];
                    return AieInit()
                }else{
                    console.log('resposta incorreta. tente novamente')
                    delete getResp[valorR];
                    return AieInit()
                }

            }).catch(
                err => console.log(err)
            )

        }) 

    }

}


//  FUNÇÃO PARA PEGAR PERGUNTAS 

// function GetPerguntas(NomeConta){


// }

function GetPerguntasGlobal(){

    const contaJSON = fs.readFileSync(`perguntas/AIE/AIEPer.json`, {
        encoding: 'utf8',
        flag: 'r'
    });

    return JSON.parse(contaJSON);
}

function PegarResposta(){

    const contaJSON = fs.readFileSync(`respostas/AIE.json`, {
        encoding: 'utf8',
        flag: 'r'
    });

    return JSON.parse(contaJSON);

}



// ESCREVER DADOS NO BANCO DE DADOS

// function EscreverBanco(banco, data){

//     fs.appendFile(
//         `indices/${banco}.json`,
//         JSON.stringify(data),
//         function(err){
//             console.log(err)
//         }
//     )

// }

//FUNÇÃO PARA ADICIONAR INDICE

// function ADDINDICE(valor){

//     // let indice:

//     // console.log(indice)

//     // return indice.push(valor)

    

// }