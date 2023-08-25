const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function(valor){
        this.saldo += valor;
        let historico = {
            tipo: "Depósito",
            valor: valor
        };
        this.historicos.push(historico);
        console.log(`Deposito de R$${(valor/100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`)
    },
    sacar: function(valor){
        if(valor > this.saldo){
            console.log(`Saldo insuficiente para o saque de ${this.nome}`)
        }else{
            this.saldo -= valor;
            let historico = {
                tipo: "Saque",
                valor: valor
            }
            this.historicos.push(historico);
            console.log(`Saque de R$${(valor/100).toFixed(2)} realizado para o(a) cliente: ${this.nome}`)
        }
    },
    extrato: function(){
        console.log(`Extrato de ${this.nome} - Saldo: R$${(this.saldo/100).toFixed(2)}`);
        console.log(`Histórico:`)
        for(let historico of this.historicos){
            console.log(`${historico.tipo} de R$${(historico.valor/100).toFixed(2)}`)
        }
    }
}

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();