var reader = require('readline-sync');
var Repositorio = /** @class */ (function () {
    function Repositorio() {
        this.commit = [];
        this.branch = [];
        this.historico = [];
    }
    Repositorio.prototype.index = function () {
        var verificar = reader.question('quer adicionar o arquivo? Sim ou Nao');
        if (verificar.toLowerCase() == 'sim') {
            return true;
        }
        else if (verificar.toLowerCase() == 'nao') {
            return false;
        }
        else {
            throw new Error('precisa responder algo');
        }
    };
    Repositorio.prototype.setCommit = function () {
        var frase = reader.question('quer adicionar algo dentro do arquivo? ');
        this.commit.push(frase);
        if (this.index()) {
            this.branch.push(this.commit);
            this.historico.push(this.branch);
        }
    };
    Repositorio.prototype.uploadBranch = function () {
        var newRepositorio = new Repositorio();
        newRepositorio.commit = this.commit;
        newRepositorio.branch = this.branch;
        newRepositorio.historico = this.historico;
    };
    Repositorio.prototype.merge = function () {
        var somaCommit = this.branch[this.branch.length - 1] + this.branch[this.branch.length - 2];
        console.log('Você somou os commits');
        this.branch.push(somaCommit);
        this.historico.push(this.branch);
    };
    Repositorio.prototype.head = function () {
        console.log(this.commit[this.commit.length - 1]);
    };
    Repositorio.prototype.removerBlob = function () {
        console.log(this.commit);
        var escolha = reader.questionInt('Qual arquivo quer remover? ');
        this.commit.slice((escolha - 1), 1);
    };
    Repositorio.prototype.setBlob = function () {
        console.log(this.commit);
        var pergunta = reader.questionINT("Digite o número do arquivo que quer modificar:");
        var mudar = reader.question('Quer modificar o que?');
        this.commit[pergunta - 1] = mudar;
    };
    Repositorio.prototype.getBlod = function () {
        var pergunta = reader.question('Qual  o blob você quer olhar?');
        console.log(this.commit[pergunta - 1]);
    };
    Repositorio.prototype.getCommit = function () {
        console.log(this.commit);
    };
    return Repositorio;
}());
