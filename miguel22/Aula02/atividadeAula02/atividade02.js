class Funcionario {
    constructor(nome, salario) {
      this.nome = nome;
      this._salario = salario;
    }
  
    get salario() {
      return this._salario;
    }
  
    set salario(novoSalario) {
      this._salario = novoSalario;
    }
  
    aumentarSalario(meta) {
      if (meta) {
        this.salario *= 1.1;
      }
    }
  
    exibirInformacoes() {
      console.log("Nome:", this.nome);
      console.log("Salário:", this.salario);
    }
  }
  

  const funcionario = new Funcionario("João", 5000);
  
  const atingiuMeta = true;
  
  funcionario.aumentarSalario(atingiuMeta);
  funcionario.exibirInformacoes();