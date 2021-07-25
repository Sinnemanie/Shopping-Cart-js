function warenkorb_artikel(nr, name, kurz, lang, grafik, preis,code,prozente) {
   this.nr = nr;
   this.name = name;
   this.kurz = kurz;
   this.lang = lang;
   this.grafik = grafik;
   this.preis = preis;
   this.anzahl = 0;
   this.code = code;
   this.prozente = prozente;
   
   return this;
}

function warenkorb_kategorie(name, artikel) {
   this.name = name;
   this.artikel = artikel;

   return this;
}
