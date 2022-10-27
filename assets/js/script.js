"use strict";
let capi = [];
let URLApi = "./assets/json/Abbigliamento.json";
let promiseJSON = fetch(URLApi).then((res) => res.json());
promiseJSON.then((json) => {
    for (let i = 0; i < json.length; i++) {
        let capo = json[i];
        capi[capo.capo] = new Abbigliamento(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoIVAEsclusa, capo.prezzoIVAInclusa, capo.disponibile, capo.saldo);
    }
});
console.log(capi);
class Abbigliamento {
    constructor(id, codprod, collezione, capo, modello, quantita, colore, prezzoIVAEsclusa, prezzoIVAInclusa, disponibile, saldo) {
        this.id = id;
        this.codprod = codprod;
        this.collezione = collezione;
        this.capo = capo;
        this.modello = modello;
        this.quantita = quantita;
        this.colore = colore;
        this.prezzoIVAEsclusa = prezzoIVAEsclusa;
        this.prezzoIVAInclusa = prezzoIVAInclusa;
        this.disponibile = disponibile;
        this.saldo = saldo;
    }
    getSaldoCapo() {
        return this.saldo - this.prezzoIVAInclusa;
    }
    getAcquistoCapo() {
        return this.prezzoIVAInclusa;
    }
}
