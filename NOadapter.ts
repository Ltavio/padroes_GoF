// 1. Sistema antigo com uma interface diferente
class LegacyPaymentSystem {
    oldMakePayment(amount: number, currency: string): void {
        console.log(`Pagamento de ${amount} ${currency} realizado com o sistema legado.`);
    }
}

// 2. Cliente que usa o sistema antigo diretamente
class Client {
    private legacyPaymentSystem: LegacyPaymentSystem;

    constructor(legacyPaymentSystem: LegacyPaymentSystem) {
        this.legacyPaymentSystem = legacyPaymentSystem;
    }

    processPayment(amount: number): void {
        console.log("Processando pagamento...");
        this.legacyPaymentSystem.oldMakePayment(amount, "BRL");
    }
}


// Sistema antigo
const legacyPaymentSystem = new LegacyPaymentSystem();

// Cliente que usa o sistema antigo diretamente
const client = new Client(legacyPaymentSystem);

// O cliente agora pode realizar pagamentos usando o sistema legado diretamente
client.processPayment(100);
