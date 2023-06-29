class Calculadora {
  constructor (n1,n2) {
    this.n1 = n1;
    this.n2 = n2;
    
  }

    soma(){
     return this.n1 + this.n2;
    }
    sub(){
      return this.n1 - this.n2;
    }
    div(){
      return this.n1 / this.n2;
     }
     mult(){
      return this.n1 * this.n2;
     }
  }
  
  const valores = new Calculadora (10, 5);
  
    console.log("Soma:", valores.soma());
    console.log("subtracao:", valores.sub());
    console.log("divisao:", valores.div());
    console.log("multiplicacao:", valores.mult());

