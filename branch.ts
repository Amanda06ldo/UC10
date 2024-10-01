var reader = require("readline-sync")

export class branch {
    public nome: string
    public dataCriacao:Date
    public commits: Array<string> = []
    public branchPai:branch

    constructor(nome:string, dataCriacao:Date){
        this.nome = nome
        this.dataCriacao = dataCriacao
    }

    public criarCommit():void{
    let adicionar = reader.question("escreva o que quer adicionar no commit: ")
    this.commits.push(adicionar)
    }

    public merge(outraBranch:branch):void{
    this.commits.concat(outraBranch.commits)
    }

    public checkout():void{
    let escolher = reader.questionInt('Qual branch voce quer escolher?')

    return escolher
    }

    public mostrarHistorico():void{
    console.log(this.commits)
    }
}

export class branchMaster extends branch {
    criarNovaBranch(nome:string,dataCriacao:Date):branch{
        let newBranch = new branch(nome,dataCriacao)
        return newBranch
    }
} 

export class branchDevelop extends branch{
    finalizarSprint(branchRelease:branchRelease):void{
    this.merge(branchRelease)
    }
}

export class branchHotfix extends branch{
    corrigirBug(descricao:string):void{
    this.commits.push(descricao)
    }
}

export class branchFeature extends branch{
    implementarFuncionalidade(descricao:string):void{
    this.commits.push(descricao)
    }
}

export class branchRelease extends branch{
    promoverParaProducao():void{
        console.log(`
        A branch nova ficou assim: 
        ${this.commits}
        A branch está pronta pra ser lancada!!`)
    }
}