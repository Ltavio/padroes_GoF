// Definição da interface de estratégia
interface FreteStrategy {
    frete(peso: number, distancia: number): number;
  }
  
  // Estratégia Correios
  class CorreioStrategy implements FreteStrategy {
    frete(peso: number, distancia: number): number {
      return peso * 0.5 + distancia * 0.3; // Exemplo de cálculo
    }
  }
  
  // Estratégia Transportadora 1
  class Transp1Strategy implements FreteStrategy {
    frete(peso: number, distancia: number): number {
      return peso * 0.4 + distancia * 0.35; // Exemplo de cálculo
    }
  }
  
  // Estratégia Transportadora 2
  class Transp2Strategy implements FreteStrategy {
    frete(peso: number, distancia: number): number {
      return peso * 0.3 + distancia * 0.4; // Exemplo de cálculo
    }
  }
  
  // Calculadora de custo de envio
  class calculaFrete {
    private freteStrategy: FreteStrategy;
  
    constructor(freteStrategy: FreteStrategy) {
      this.freteStrategy = freteStrategy;
    }
  
    setStrategy(freteStrategy: FreteStrategy): void {
      this.freteStrategy = freteStrategy; // Permite alterar a estratégia
    }
  
    frete(peso: number, distancia: number): number {
      return this.freteStrategy.frete(peso, distancia);
    }
  }
  
  // Uso do código
  const correioStrategy = new CorreioStrategy();
  const transp1Strategy = new Transp1Strategy();
  const transp2Strategy = new Transp2Strategy();
  
  const calculadora = new calculaFrete(correioStrategy);
  
  let custo = calculadora.frete(10, 100); // Usando Correios
  console.log("Correios Cost:", custo); // Saída: Custo calculado pela Correios
  
  calculadora.setStrategy(transp1Strategy); // Alterando a estratégia para Transportadora 1
  custo = calculadora.frete(10, 100); // Usando Transportadora 1
  console.log("Transportadora 1 Cost:", custo); // Saída: Custo calculado pela Transportadora 1
  
  calculadora.setStrategy(transp2Strategy); // Alterando a estratégia para Transportadora 2
  custo = calculadora.frete(10, 100); // Usando Transportadora 2
  console.log("Transportadora 2 Cost:", custo); // Saída: Custo calculado pelo Transportadora 2
  