let capi: any = [];

let URLApi = "./assets/json/Abbigliamento.json";
let promiseJSON = fetch(URLApi).then((res) => res.json());
promiseJSON.then((json) => {
  for (let i = 0; i < json.length; i++) {
    let capo = json[i];
    capi[json[i].capo] = new Abbigliamento(capo.id, capo.codprod, capo.collezione, capo.capo, capo.modello, capo.quantita, capo.colore, capo.prezzoIVAEsclusa, capo.prezzoIVAInclusa, capo.disponibile, capo.saldo);
  }
});
console.log(capi);

class Abbigliamento {
  private id: number;
  private codprod: number;
  private collezione: string;
  private capo: string;
  private modello: number;
  private quantita: number;
  private colore: string;
  private prezzoIVAEsclusa: number;
  private prezzoIVAInclusa: number;
  private disponibile: string;
  private saldo: number;

  constructor(id: number, codprod: number, collezione: string, capo: string, modello: number, quantita: number, colore: string, prezzoIVAEsclusa: number, prezzoIVAInclusa: number, disponibile: string, saldo: number) {
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

  getSaldoCapo(): number {
    return this.saldo - this.prezzoIVAInclusa;
  }
  getAcquistoCapo(): number {
    return this.prezzoIVAInclusa;
  }
}
