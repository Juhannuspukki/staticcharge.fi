+++
author = "Jere Laine"
day = 2
draft = true
layout = "single"
month = 9
tags = ["Alkeet aloittelijoille"]
title = "Kolme tapaa jäädä toimittajaloukkuun ja kuinka vältät ne"
type = "articles"
year = 2020

+++
Toimittajaloukuksi (vendor lock-in) kutsutaan tilannetta, jossa jokin taho tilaa ohjelmistoa jonka kaikki muutostyöt on pakko ostaa samalta toimittajalta. Toimittajaloukkua pidetään yleisesti huonona asiana siksi, että toimittaja pystyy tämän jälkeen veloittamaan muutoksista ihan mitä haluaa ja lisäksi toimitettavien muutosten laatu voi olla mitä sattuu. On olemassa erilaisia tapoja joutua toimittajaloukkuun, joista muutamia käsitellään tässä artikkelissa.

## 1. Juridinen toimittajaloukku

Joskus saattaa käydä niin, että asiakas erehtyy tekemään tilauksen jossa hän luulee ostavansa ohjelmiston, mutta todellisuudessa asiakas ostaakin vain käyttöoikeuden ohjelmistoon. Tällöin itse ohjelmisto jää palveluntarjoajan omaisuudeksi, eikä asiakkaalla ole luonnollisesti mitään oikeutta tehdä muutoksia ohjelmistoon joka ei ole hänen omaisuuttaan. Alkuperäinen toimittaja on näin ainoa taho, jolla on oikeus tehdä muutoksia tuotteeseen. Ei ole välttämätöntä, että koko järjestelmä jää toimittajan omaisuudeksi. Riittää, että osa ohjelmistosta on patenttitavaraa johon kukaan muu kuin toimittaja ei saa koskea.

Esimerkki: VR ja Accenture

Vuonna 2011 otettiin käyttöön VR:n uusi lipunmyyntijärjestelmä, jonka toimittajaksi valikoitui julkisen kilpailutuksen jälkeen Accenture. Järjestelmä paljastui heti kättelyssä epäluotettavaksi ja siinä oli outoja puutteita kuten se, että lippuja ei voinut ostaa palvelusta yöaikaan. Tietojärjestelmä jäi ilmeisesti Accenturen omistukseen, koska myöhemmin VR oli useiden sanomalehtien raporttien mukaan pakotettu ostamaan järjestelmän jatkokehitys lähes kolmella miljoonalla Accenturelta eikä muita toimijoita voitu edes harkita. Alkuperäisessä kilpailutuksessa VR:lle ei tarjottu yhtään avointa järjestelmää.

Nykyinen, vuodesta 2019 käytössä ollut uusi lipunmyyntijärjestelmä on herättänyt kummastusta siksi, että liput ovat joskus eri hintaisia uudessa ja edelleen käytössä olevassa vanhassa palvelussa. Selitys on yksinkertainen: uusi järjestelmä on kokonaan vanhasta erillinen, koska uutta järjestelmää ei voi Accenturen rajoitteista johtuen kytkeä vanhaan järjestelmään niin että edes lippujen olisivat keskenään synkronissa.

Uuden lipunmyyntijärjestelmänsä VR on viisaasti toteuttanut itse.

Varmista siis aina ohjelmistoa tilatessasi, että omistat tilaamasi tuotteen ja voit teettää siihen halutessasi muutoksia.

[https://www.is.fi/taloussanomat/art-2000001872193.html](https://www.is.fi/taloussanomat/art-2000001872193.html "https://www.is.fi/taloussanomat/art-2000001872193.html")

## 2. Teknologialoukku

Oikeudesta teettää muutoksia ohjelmistoonsa ei ole hyötyä, jos kukaan ei osaa tehdä muutoksia kyseiseen ohjelmistoon. Koodarit toki opettelevat uusia asioita jatkuvasti eli käytetyn teknologian ei tarvitse olla yleisintä mahdollista, mutta jossain se rajaa tulee vastaan.

Esimerkki: Epic Systems, MUMPS ja Apotti

HUS tilasi noin puolella miljardilla eurolla potilastietojärjestelmän yhdysvaltalaiselta Epic Systemsiltä. Hanke on ollut vastatuulessa muun muassa siksi, että se on hankalasti käytettävä, hidastaa työntekoa ja vaarantaa potilastiedot, tiedot eivät ole siirtyneet sinne oikein ja järjestelmän vaikeaselkoisuus on johtanut ainakin yhden potilaan kuolemaan. Toimittajaa ei voida kuitenkaan vaihtaa siinäkään tapauksessa, että HUSilla olisi siihen oikeus.

Apotti-järjestelmä on koodattu MUMPS-nimisellä kielellä (lyhenne sanoista Massachusetts General Hospital Utility Multi-Programming System) joka kehitettiin 1960-luvulla. MUMPS on täydellisesti dokumentoitu ja sitä voi periaatteessa opetella itse internetistä. Ongelma on kuitenkin siinä, että MUMPS näyttää tältä:

    Q N R,Q,C,D,E,W,B,G,H,S,T,U,V,F,L,P,N,J,A S N=$G(N),Q='N,F=Q+Q,P=F+F,W=$L($T(Q))
     S W=$E(W,Q),S='N_+N,W=W-F*S,L=$G(L),R=$C(Q_F_P),R(F)=$C(F+Q_F),R(P)=$C(W-F) W #
     S T=$E($T(Q+F),F,W\S)_$C(W+S+F) X T S B=$P(T,$C(P_P),F),C=B\(W*W),D=B-(C*W*W)\W
     F G=S-Q:F:S+F+Q S E=B-(C*W*W+(D*W)),H=$E($T(Q),G),@H=$S(@H<S:'Q,Q:N)_@H,T=C_D_E
     F A=Q:Q:W\S S J=$E(T,A),C(F)=$S(J>(F+Q)&(J<(S-F)):Q,Q:+N),C(P)=$S(J#F:Q,Q:+N) D
     .S C(Q)=$S(J<(S-F):+N,Q:Q),C(F+Q)=$S(J>Q&(J<(S-F))&(J'=(P+'L))&(J'=(P)):Q,Q:+N)
     .S H('L)=L F  S H(N?.E)=$O(C(H('$G(N)))) Q:H('+L)=L  S F(A,H('L))=C(H(W[(W\S)))
     F U=Q:Q:P W !,R F V=Q:Q:P+F W $S(F(V,U):'Q,Q:$C(P_(W\S))) W:'(V#F) $C('N_F_F+F)
     W !!,R(F)_C_R(P)_D_R(P)_E_R(F) X $RE($E($T(Q),Q+F,P+Q))_R(P)_'N W # G:N=L Q+F Q
    

Voi olla, että ei-koodarille kaikki koodi näyttää suunnilleen tältä. Voin kuitenkin vakuuttaa, että myöskään 99% koodareista ei ymmärrä tästä yhtään sen enempää. Muiden puutteiden ohella MUMPSin syntaksi on täysin käsittämätön, eikä sitä käytetä juuri missään muualla kuin muutamissa pankeissa ja sairaaloissa. Tällaista ei kovin moni vapaaehtoisesti opettele, ja Suomen harvat MUMPS-koodarit ovat pitkälti Epicin palkkalistoilla. Yritä siinä sitten vaihtaa toimittajaa.

Varmistu siis siitä, että tilaamassasi tuotteessa käytetty teknologia on ainakin jossain määrin yleisesti tunnettua ja mieluusti vielä avointa lähdekoodia.

## 3. Kelvottoman toteutuksen toimittajaloukku

Any fool can write code that a computer can understand. Good programmers write code that humans can understand.

Vaikka käytetty teknologia olisi yleisesti tunnettua, siitä ei ole hyötyä jos koodi on niin vaikeaselkoista että vain alkuperäinen tekijä osaa lukea sitä. Jos alkuperäinen tekijä päättää sitten lopettaa koodaushommat ja ryhtyä puutarhuriksi, on asiakas vaikeuksissa. Tämä on kuitenkin ongelma lähinnä pienen mittakaavan projekteissa, koska kaikissa itseään kunnioittavissa ohjelmistofirmoissa koodin ymmärrettävyyteen kiinnitetään erityistä huomiota.

Varmin tapa saada aikaan huonoa koodia on palkata sellainen koodari, joka ei ole koskaan saanut koodistaan palautetta toiselta koodarilta. On myös tärkeää, että koodari osaa valita tarkoituksenmukaisen teknologian. Teknologia on mitä ilmeisimmin epätarkoituksenmukaista silloin, kun koodari joutuu jatkuvasti kiertämään teknologian rajoituksia kirjoittamalla vaikeaselkoista koodia.

Kuinka siis varmistat sen, että koodarisi on saanut palautetta toiselta koodarilta ja osaa valita oikean teknologian? Hyviä merkkejä ovat esimerkiksi vähäinenkin työkokemus ohjelmistoalalta (ei siis kaupan kassalta, lentokapteenina toimimisesta tai mainostoimistosta) tai mukanaolo tunnetuissa avoimen lähdekoodin projekteissa. Lisäksi formaalista koulutuksesta on apua, koodin luettavuuteen kiinnitetään jonkin verran huomiota myös yliopisto-opintojen aikana. Yliopistoissa sekä työpaikoilla opetetaan myös käyttämään versionhallintajärjestelmää, joka on niin ikään tärkeä osa ohjelmistojen toteutusta.