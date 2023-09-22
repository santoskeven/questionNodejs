const inquirer = require('inquirer');
const chalk = require('chalk');
const fs = require ('fs')
// var _ = require('underscore'); 

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
                'anti depressivos',
                'Sair'
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

   
    let perguntas = GetPerguntasGlobal('AIE', 'AIEPer')
    let getResp = PegarResposta('AIE')

    AieInit()
   
    function AieInit(){

        AllGetQuestion(perguntas, getResp, func);

        // let objSize = Object.keys(perguntas).length;

        // if(objSize == 0){
        //     console.log('fim das perguntas');
        //     return operation()
        // }

        // let max = Math.floor(objSize);
        // let min =  Math.ceil(0);

        // var indice = Math.floor(Math.random() * (max - min + min) + min);
        // let objIndice = Object.entries(perguntas)[indice]

        // let valor = objIndice[0]

        // var pergunta = perguntas[valor]

        // delete perguntas[valor];

        // inquirer.prompt([
        //     {
        //         name: 'pergunta',
        //         // message: pergunta
                
        //     }
        // ]).then(() => {

        //     inquirer.prompt([
        //         {
        //             name: 'Meresposta',
        //             message: 'digite sua resposta'
        //         }
        //     ]).then((resposta) => {

        //         const Resposta = resposta['Meresposta']

        //         let objIndiceR = Object.entries(getResp)[indice]
        //         console.log('indiceR ' + objIndiceR)

        //         let valorR = objIndiceR[0]

        //         if(Resposta === getResp[valorR]){
        //             console.log('resposta correta')
        //             delete getResp[valorR];
        //             return AieInit()
        //         }else{
        //             console.log('resposta incorreta. tente novamente')
        //             delete getResp[valorR];
        //             return AieInit()
        //         }

        //     }).catch(
        //         err => console.log(err)
        //     )

        // }) 

    }

}


//FUNÇÃO PARA CORTICOIDES 

function corticoides(){

    console.log('dentro da func de corticoides  ')

    let perguntas = GetPerguntasGlobal('corticoides', 'cort')
    let getResp = PegarResposta('cort')
    
    cortInit()
    function cortInit(){

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
                    return cortInit()
                }else{
                    console.log('resposta incorreta. tente novamente')
                    delete getResp[valorR];
                    return cortInit()
                }

            }).catch(
                err => console.log(err)
            )

        }) 

    }

}


// FUNÇÃO PARA ANTI DEPRESIVOS

function AD(){

    console.log('dentro da func de anti depresivos  ')

    let perguntas = GetPerguntasGlobal('antidep', 'AD')
    let getResp = PegarResposta('AD')
    
    ADinit()
    function ADinit(){

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
                    return ADinit()
                }else{
                    console.log('resposta incorreta. tente novamente')
                    delete getResp[valorR];
                    return ADinit()
                }

            }).catch(
                err => console.log(err)
            )

        }) 

    }

}

//  FUNÇÃO PARA PEGAR PERGUNTAS 

function GetPerguntasGlobal(pasta, arquivo ){

    const contaJSON = fs.readFileSync(`perguntas/${pasta}/${arquivo}.json`, {
        encoding: 'utf8',
        flag: 'r'
    });

    return JSON.parse(contaJSON);
}


// FUNÇÃO PARA PEGAR RESPOSTAS

function PegarResposta(arquivo){

    const contaJSON = fs.readFileSync(`respostas/${arquivo}.json`, {
        encoding: 'utf8',
        flag: 'r'
    });

    return JSON.parse(contaJSON);

}

// FUNÇÃO PARA OTIMIZAR PARTE REPETITIVA DE PERGUNTAS

function AllGetQuestion(perguntas, getResp, ReturnFunc){

    let objSize = Object.keys(perguntas).length;

        if(objSize == 0){
            console.log('fim das perguntas');
            return operation()
        }

        let max = Math.floor(objSize);
        let min =  Math.ceil(0);

        var indice = Math.floor(Math.random() * (max - min + min) + min);
        let objIndice = Object.entries(perguntas)[indice]

        let valor = objIndice[0]

        var pergunta = perguntas[valor]

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

                if(Resposta === getResp[valorR]){
                    console.log('resposta correta')
                    delete getResp[valorR];
                    return ReturnFunc
                }else{
                    console.log('resposta incorreta. tente novamente')
                    delete getResp[valorR];
                    return ReturnFunc
                }

            }).catch(
                err => console.log(err)
            )

        }) 

}