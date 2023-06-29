import { Aluno } from './aluno.js';

const aluno1 = new Aluno("mateus", "Alves");

/*podemos acessar atributo comuns de forma direta
aluno1.nome = "Spider";
aluno1.sobreNome = "man";*/

/*Forma errada de acessar o atributo privado
aluno1._cpf = 15494556184;*/
//Forma correta de acessar o atributo privado
aluno1.inserircpf = 1542915484415


console.log(aluno1.inserircpf());