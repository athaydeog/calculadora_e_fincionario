export  class Aluno {

    //Atributo Privado
    //Para inserir ou consultar um atributo privado é necessário encapsular
    _cpf

    constructor(n1,n2){
        this.nome = n1;
        this.sobreNome = n2;
}

    //para atribuir um valor a um metodo privado utilizamos o metodo SET    
    set inserircpf(cpf){
        this._cpf = cpf;
    }

    //para visualizar um atributo privado utilizo o get 
    get inserircpf(){
        return this._cpf
    }
        


    
        //Nossos metodos(comuns)
        falarNome(){
        return this.nome
    }
}