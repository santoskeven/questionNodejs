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


// FUNÇÃO PARA SAIR 

function Sair(){
    console.log(chalk.bgBlue.white('Fechando terminal de perguntas!!'));

    inquirer.prompt([
        {
           type: 'list',
           name: 'action',
           message: 'deseja limpar o registro de ação?',
           choices: [
                'Sim',
                'Não'
           ]

        }
    ]).then((resposta => {
        const action = resposta['action']

        if(action === 'Sim'){
            console.clear();
            process.exit();
        }
        else if(action === 'Não'){
            process.exit();
        }

    })).catch(err => console.log(err))  
}

// FUNÇÃO PARA anti inflamatórios não esteroidais 

function AIE(){

    console.log(chalk.bgGreen.white(`olá Kássia, vamos iniciar seus estudos no tema anti inflamatórios não esteroidais`))
   
    const perguntas = GetPerguntasGlobal('AIE', 'AIEPer')
    const getResp = PegarResposta('AIE')
    const func = AieInit

    AieInit()

    function AieInit(){
        AllGetQuestion(perguntas, getResp, func);
    }

}


//FUNÇÃO PARA CORTICOIDES 

function corticoides(){

    console.log('dentro da func de corticoides  ')

    const perguntas = GetPerguntasGlobal('corticoides', 'cort')
    const getResp = PegarResposta('cort')
    const func = cortInit
    
    cortInit()

    function cortInit(){
        AllGetQuestion(perguntas, getResp, func);
    }

}


// FUNÇÃO PARA ANTI DEPRESIVOS

function AD(){

    console.log('dentro da func de anti depresivos  ')

    const perguntas = GetPerguntasGlobal('antidep', 'AD')
    const getResp = PegarResposta('AD')
    const func = ADinit
    
    ADinit()
    function ADinit(){
        AllGetQuestion(perguntas, getResp, func);
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

function AllGetQuestion(perguntas, getResp, func){

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
                    return (func)();
                    
                }else{
                    console.log('resposta incorreta. tente novamente')
                    delete getResp[valorR];
                    return (func)();
                }

            }).catch(
                err => console.log(err)
            )

        }) 

}