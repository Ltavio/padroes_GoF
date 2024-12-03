// 1. Interface que o sistema moderno espera
interface PaymentGateway {
    makePayment(amount: number): void;
}

// 2. Sistema antigo com uma interface diferente
class LegacyPaymentS {
    oldMakePayment(amount: number, currency: string): void {
        console.log(`Pagamento de ${amount} ${currency} realizado com o sistema legado.`);
    }
}

// 3. Adaptador que adapta a interface do sistema antigo para o novo
class PaymentAdapter implements PaymentGateway {
    private legacyPaymentSystem: LegacyPaymentSystem;

    constructor(legacyPaymentSystem: LegacyPaymentSystem) {
        this.legacyPaymentSystem = legacyPaymentSystem;
    }

    makePayment(amount: number): void {
        // Adaptando a chamada do método do sistema antigo para o novo
        this.legacyPaymentSystem.oldMakePayment(amount, "BRL");
    }
}

//  interface moderna
 class PaymentClient {
    private paymentGateway: PaymentGateway;

    constructor(paymentGateway: PaymentGateway) {
        this.paymentGateway = paymentGateway;
    }

    processPayment(amount: number): void {
        console.log("Processando pagamento...");
        this.paymentGateway.makePayment(amount);
    }
}

// Exemplo de uso:

// Sistema antigo
const LegacyPayment = new LegacyPaymentS();


// Adaptador que adapta o sistema antigo para o novo
const paymentAdapter = new PaymentAdapter(legacyPaymentSystem);

// sistema novo
const paymentClient = new PaymentClient(paymentAdapter);

// O cliente agora pode realizar pagamentos usando a interface moderna
client.processPayment(100);
