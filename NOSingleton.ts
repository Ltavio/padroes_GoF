class Medicamento {
    private medicamentos: string[] = [];
  
    constructor() {}
  
    public adicionarMedicamento(nome: string): void {
      this.medicamentos.push(nome);
      console.log(`Medicamento "${nome}" adicionado.`);
    }
  
    public listarMedicamentos(): void {
      console.log("Medicamentos cadastrados:", this.medicamentos);
    }
}

const farmaciaA = new Medicamento();
farmaciaA.adicionarMedicamento("Paracetamol");

const farmaciaB = new Medicamento();
farmaciaB.adicionarMedicamento("Ibuprofeno");

farmaciaA.listarMedicamentos();
farmaciaB.listarMedicamentos();

console.log(farmaciaA === farmaciaB); // false