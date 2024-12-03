class calculaFrete {
    // Método centralizado para calcular custos
    custo(peso: number, distancia: number, transportadora: string): number {
      if (transportadora === "Correio") {
        return peso * 0.5 + distancia * 0.3; // Cálculo Correio
      } else if (transportadora === "Transportadora 1") {
        return peso * 0.4 + distancia * 0.35; // Cálculo Transportadora 1
      } else if (transportadora === "Transportadora 2") {
        return peso * 0.3 + distancia * 0.4; // Cálculo Transportadora 2
      } else {
        throw new Error("Transportadora desconhecida!"); // Tratamento para erro
      }
    }
  }
  
  // Uso do código
  const calculator = new calculaFrete();
  
  const peso = 10;
  const distancia = 100;
  
  let cost = calculator.custo(peso, distancia, "Correio");
  console.log("Correio Cost:", cost); // Saída: Custo calculado pela Correio
  
  cost = calculator.custo(peso, distancia, "Transportadora 1");
  console.log("Transportadora 1 Cost:", cost); // Saída: Custo calculado pela Transportadora 1
  
  cost = calculator.custo(peso, distancia, "Transportadora 2");
  console.log("Transportadora 2 Cost:", cost); // Saída: Custo calculado pelo Transportadora 2
  