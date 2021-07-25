var buch_c1 = new warenkorb_artikel(
   "3-89842-149-X",
   "Wenz: JavaScript-Rezepte",
   "Christian Wenz: JavaScript-Rezepte. 2001 Galileo Press, Bonn",
   "Christian Wenz: JavaScript-Rezepte. Galileo Press, Bonn. 1. Auflage 2001. Lektorat: Judith Stevens-Lemoine. Korrektorat: Friederike Daenecke. Einbandgestaltung: Barbara Thoben.",
   "holder.js/210x270?random=yes",
   35.74,
   );
var buch_c2 = new warenkorb_artikel(
   "3-89842-132-5",
   "Wenz: JavaScript",
   "Christian Wenz: JavaScript - Browserübergreifende Lösungen. 2001 Galileo Press, Bonn",
   "Christian Wenz: JavaScript - Browserübergreifende Lösungen. Galileo Press, Bonn. 3. Auflage 2001. Lektorat: Judith Stevens-Lemoine. Korrektorat: Friederike Daenecke. Einbandgestaltung: Barbara Thoben.",
   "holder.js/210x270?random=yes",
   // 40.85
   10
   );
var buch_c3 = new warenkorb_artikel(
   "3-934358-29-2",
   "Williamson: Dynamic HTML browserübergreifend",
   "Heather Williamson: Dynamic HTML browserübergreifend. 2001 Galileo Press, Bonn",
   "Heather Williamson: Dynamic HTML browserübergreifend. Galileo Press, Bonn. 1. Auflage 2001. Übersetzung: Roman Impertro. Lektorat: Judith Stevens-Lemoine. Korrektorat: Claudia Falk/Holger Schmidt. Einbandgestaltung: Barbara Thoben.",
   "holder.js/210x270?random=yes",
   35.74);
var buch_d1 = new warenkorb_artikel(
   "3-934358-05-5",
   "Wolter: Flash 4",
   "Sascha Wolter: Flash 4. 1999 Galileo Press, Bonn",
   "Sascha Wolter: Flash 4, mit CD. Galileo Press, Bonn. 1. Auflage 1999. Lektorat: Ruth Wasserscheid. Korrektorat: Marcus Pfitzenreuter. Einbandgestaltung: Helmut Kraus.",
   "holder.js/210x270?random=yes",
   40.85);
var buch_d2 = new warenkorb_artikel(
   "3-89842-XXX-X",
   "Leske/Biedorf/Möller: Director 8 för Profis",
   "Christophe Leske/Thomas Biedorf/Regina Möller: Director 8 för Profis. 2000 Galileo Press, Bonn",
   "Christophe Leske/Thomas Biedorf/Regina Möller: Director 8 för Profis. Galileo Press, Bonn. 1. Auflage 2000. Lektorat: Ruth Wasserscheid. Korrektorat: Sandra Gottmann/Marcus Pfitzenreuter. Einbandgestaltung: Helmut Kraus.",
   "holder.js/210x270?random=yes",
   51.08);
var gutschein_j1 = new warenkorb_artikel(
   "11-22-333-10",
   "Geschenkgutschein 10",
   "Schöner schenken mit dem DotSource-Shop-Geschenkgutschein.",
   "Geschenkgutschein im Wert von 10 Euro.",
   "holder.js/210x270?random=yes",
   -10);
var gutschein_j2 = new warenkorb_artikel(
   "11-22-333-25",
   "Geschenkgutschein 25",
   "Schöner schenken mit dem DotSource-Shop-Geschenkgutschein.",
   "Geschenkgutschein im Wert von 25 Euro.",
   "holder.js/210x270?random=yes",
   -25);
var rabattaktion_Jul1 = new warenkorb_artikel(
   "00-00-00-00",
   "10% Rabatt Aktion",
   "Sommer Aktion von DotSource",
   "10 off",
   "holder.js/210x270?random=yes",
   0,
   '10off',
   10);

var gutschein =  new warenkorb_kategorie(
   "Gutscheine",
   new Array(gutschein_j1, gutschein_j2));

var computing = new warenkorb_kategorie(
   "Galileo Computing",
   new Array(buch_c1, buch_c2, buch_c3));

var design = new warenkorb_kategorie(
   "Galileo Design",
   new Array(buch_d1, buch_d2));

var voucher = new warenkorb_kategorie(
   "Rabattaktionen",
   new Array(rabattaktion_Jul1));

var kategorie = new Array(computing, design, gutschein,voucher);
