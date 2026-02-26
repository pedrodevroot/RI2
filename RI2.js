function TelefoneCelular (ddd, numero){
    this.ddd = ddd;
    this.numero = numero;

    this.getDdd = () => this.ddd;
    this.getNumero = () => this.numero;

    this.setDdd = (ddd) => this.ddd = ddd;
    this.setNumero = (numero) => this.numero = numero;

    this.getDddMaiusculo = () => this.ddd.toString().toUpperCase();
    this.getDddMinusculo = () => this.ddd.toString().toLowerCase();

    this.getNumeroMaiusculo = () => this.numero.toString().toUpperCase();
    this.getNumeroMinusculo = () => this.numero.toString().toLowerCase();

    this.descricao = () => {
        return `
        Telefone:
        DDD : ${this.ddd}
        Número : ${this.numero}
        `;
    }

}

function Endereco (rua, numero, cidade, estado){
    this.rua = rua;
    this.numero = numero;
    this.cidade = cidade;
    this.estado = estado;

    this.getRua = () => this.rua;
    this.getNumero = () => this.numero;
    this.getCidade = () => this.cidade;
    this.getEstado = () => this.estado;

    this.setRua = (rua) => this.rua = rua;
    this.setNumero = (numero) => this.numero = numero;
    this.setCidade = (cidade) => this.cidade = cidade;
    this.setEstado = (estado) => this.estado = estado;

    this.getRuaMaiusculo = () => this.rua.toUpperCase();
    this.getRuaMinusculo = () => this.rua.toLowerCase();
    this.getCidadeMaiusculo = () => this.cidade.toUpperCase();
    this.getCidadeMinusculo = () => this.cidade.toLowerCase();
    this.getEstadoMaiusculo = () => this.estado.toUpperCase();
    this.getEstadoMinusculo = () => this.estado.toLowerCase();

    this.descricao = () => {
        return `Rua : ${this.rua}
        Numero : ${this.numero}
        Cidade : ${this.cidade}
        Estado : ${this.estado}`;
    }
}


function Cliente (nome, telefoneCelular, email, endereco){
    this.nome = nome;
    this.TelefoneCelular = telefoneCelular;
    this.email = email;
    this.Endereco = endereco;

    this.getNome = () => this.nome;
    this.getTelefoneCelular = () => this.telefoneCelular;
    this.getEmail = () => this.email;
    this.getEndereco = () => this.endereco;

    this.setNome = (nome) => this.nome = nome;
    this.setTelefoneCelular = (telefoneCelular) => this.telefoneCelular = telefoneCelular; 
    this.setEmail = (email) => this.email = email;
    this.setEndereco = (endereco) => this.Endereco = endereco;

    this.getNomeMaiusculo = () => this.nome.toUpperCase();
    this.getNomeMinusculo = () => this.nome.toLowerCase();

    this.getEmailMaiusculo = () => this.email.toUpperCase();
    this.getEmailMinusculo = () => this.email.toLowerCase();

    this.descricao = () => {
        return `
        --------------------------
        Dados do Cliente: 
        --------------------------        
        ${this.nome}
        ${this.TelefoneCelular.descricao()}
        E-mail: ${this.email}
        ${this.Endereco.descricao()}`
    }
}

let telefone1 = new TelefoneCelular('12', '40028922');
let telefone2 = new TelefoneCelular('99', '99999999');
let telefone3 = new TelefoneCelular('99', '99999999');

let endereco1 = new Endereco('Rua do Japão','92', 'Tokyo', 'JP');
let endereco2 = new Endereco('Rua onde judas perdeu a bota', '78', 'moçambique', 'AC');
let endereco3 = new Endereco('Rua Nascimento', '77', 'Sorocaba', 'SC');

let cliente1 = new Cliente('Yudi Tamashiro', telefone1, 'bomdiaecompanhia@sbt.com.br', endereco1);
let cliente2 = new Cliente('Priscila', telefone2, 'seila@email.com', endereco2);
let cliente3 = new Cliente('Jacinto', telefone3, 'estoumorrendodesono@agoraemeianoite.com', endereco3);

console.log(cliente1.descricao());
console.log(cliente2.descricao());
console.log(cliente3.descricao());

console.log('----------------------------------------')
console.log("Clientes ordenados por ordem alfabética:")

function ordemAlfabetica(clientes){
    return [...clientes].sort((a, b) =>
        a.getNome().localeCompare(b.getNome())
    );
}

let lista = [cliente1, cliente2, cliente3];
let ordenados = ordemAlfabetica(lista);

ordenados.forEach(cliente => {
    console.log(cliente.descricao());
}); 