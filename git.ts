var reader = require('readline-sync')

class Repositorio{
    commit: Array<string> = []
    branch: Array<any> = []
    historico: Array<any> = []  
         index(): boolean{
        let verificacao = reader.question('quer adicionar o arquivo? Sim ou Nao')
        if(verificacao.toLowerCase() == 'sim'){
            return true
        }else if(verificacao.toLowerCase() == 'nao'){
            return false
        }else{
            throw new Error('precisa responder algo')
        }
    }
    setCommit(): void {
        let frase = reader.question('quer adicionar algo dentro do arquivo? ')
        this.commit.push(frase)
        if(this.index()){
                this.branch.push(this.commit)
                this.historico.push(this.branch)
        }
    }
    uploadBranch(): void{
        let newRepositorio = new Repositorio()
    
        newRepositorio.commit = this.commit
        newRepositorio.branch = this.branch
        newRepositorio.historico = this.historico
    }
    merge(): void{

        let somaCommit: Array<any> = this.branch[this.branch.length - 1] + this.branch[this.branch.length - 2]
        console.log('Você somou os commits');

        this.branch.push(somaCommit)
        this.historico.push(this.branch)
         
    }
    head(): void{
        console.log(this.commit[this.commit.length - 1]);
        
    }
    removerBlob(): void{
        
        console.log(this.commit);
        
        let escolha = reader.questionInt('Qual arquivo quer remover? ')

        this.commit.slice((escolha - 1),1)
    }
    setBlob(): void{
        
        console.log(this.commit);
        
        let escolha = reader.questionINT("Digite o número do arquivo que quer modificar:")
        let frase = reader.question('Quer modificar o que?')
        this.commit[escolha - 1] = frase
    }
    getBlod(): void{
        let escolha = reader.question('Qual  o blob você quer olhar?')
        console.log(this.commit[escolha - 1])
    } 
    getCommit(): void{
        console.log(this.commit);        
    }
}