class Medicamentos {
    private static instance: Medicamentos;
    private medicamentosLists: string[] = [];
  
    private constructor() {}
  
    public static iniciar(): Medicamentos {
      if (!Medicamentos.instance) {
        Medicamentos.instance = new Medicamentos();
      }
      return Medicamentos.instance;
    }
  
    public adicionarMedicamento(nome: string): void {
      this.medicamentosLists.push(nome);
      console.log(`Medicamento "${nome}" adicionado.`);
    }
  
    public listarMedicamentos(): void {
      console.log("Medicamentos cadastrados:", this.medicamentosLists);
    }
}

const farmacia1 = Medicamentos.iniciar();
farmacia1.adicionarMedicamento("Paracetamol");
farmacia1.adicionarMedicamento("Ibuprofeno");

const farmacia2 = Medicamentos.iniciar();
farmacia2.listarMedicamentos();

console.log(farmacia1 === farmacia2); // true