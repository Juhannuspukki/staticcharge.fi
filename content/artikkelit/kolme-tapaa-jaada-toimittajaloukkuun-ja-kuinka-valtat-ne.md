---
type: "articles"
layout: "single"
title: Kolme tapaa jäädä toimittajaloukkuun ja kuinka vältät ne
tags: Alkeet aloittelijoille
author: Jere Laine
date: 2020-09-04
---

Toimittajaloukuksi (vendor lock-in) kutsutaan tilannetta, jossa jokin taho tilaa ohjelmistoa jonka kaikki muutostyöt on pakko ostaa samalta toimittajalta. Toimittajaloukkua pidetään yleisesti huonona asiana siksi, että toimittaja pystyy tämän jälkeen veloittamaan muutoksista ihan mitä haluaa ja toimittaa mitä sattuu. On olemassa erilaisia tapoja joutua toimittajaloukkuun, joista muutamia käsitellään tässä artikkelissa.

## 1. Sopimuksellinen toimittajaloukku

Joskus saattaa käydä niin, että asiakas erehtyy tekemään tilauksen jossa hän luulee ostavansa ohjelmiston, mutta todellisuudessa asiakas ostaakin vain käyttöoikeuden ohjelmistoon. Tällöin itse ohjelmisto jää palveluntarjoajan omaisuudeksi, eikä asiakkaalla ole luonnollisesti mitään oikeutta tehdä muutoksia ohjelmistoon joka ei ole hänen omaisuuttaan. Alkuperäinen toimittaja on näin ainoa taho, jolla on oikeus tehdä muutoksia tuotteeseen. Ei ole välttämätöntä, että koko järjestelmä jää toimittajan omaisuudeksi. Riittää, että osa ohjelmistosta on patenttitavaraa johon kukaan muu kuin toimittaja ei saa koskea.

### Esimerkki: VR ja Accenture

Vuonna 2011 otettiin käyttöön VR:n uusi lipunmyyntijärjestelmä, jonka toimittajaksi valikoitui julkisen kilpailutuksen jälkeen Accenture. Järjestelmä paljastui heti kättelyssä epäluotettavaksi ja siinä oli outoja puutteita kuten se, että lippuja ei voinut ostaa palvelusta yöaikaan. Tietojärjestelmä jäi ilmeisesti Accenturen omistukseen, koska myöhemmin VR oli useiden sanomalehtien raporttien mukaan pakotettu ostamaan järjestelmän jatkokehitys lähes kolmella miljoonalla Accenturelta eikä muita toimijoita voitu edes harkita. Alkuperäisessä kilpailutuksessa VR:lle ei tarjottu yhtään avointa järjestelmää.

Nykyinen, vuodesta 2019 käytössä ollut uusi lipunmyyntijärjestelmä on herättänyt kummastusta siksi, että liput ovat joskus eri hintaisia uudessa ja edelleen käytössä olevassa vanhassa palvelussa. Selitys on yksinkertainen: uusi järjestelmä on kokonaan vanhasta erillinen, koska uutta järjestelmää ei voi Accenturen rajoitteista johtuen kytkeä vanhaan järjestelmään niin, että edes lippujen olisivat keskenään synkronissa.

Uuden lipunmyyntijärjestelmänsä VR on viisaasti toteuttanut itse. Konsultointia
kyllä ostetaan edelleen talon ulkopuolelta, mutta massiivisten monoliittien sijaan  hankitaan asiantuntija-osaamista vain tarkoin määriteltyjen 

Varmista siis aina ohjelmistoa tilatessasi, että omistat tilaamasi tuotteen ja voit teettää siihen halutessasi muutoksia.

Lisää VR:n seikkailuista:
https://www.is.fi/taloussanomat/art-2000001872193.html


## 2. Teknologialoukku

Oikeudesta teettää muutoksia ohjelmistoonsa ei ole hyötyä, jos kukaan ei osaa tehdä muutoksia kyseiseen ohjelmistoon. Koodarit toki opettelevat uusia asioita jatkuvasti eli käytetyn teknologian ei tarvitse olla yleisintä mahdollista, mutta jossain se raja tulee vastaan.

### Esimerkki: Epic Systems, MUMPS ja Apotti

HUS tilasi noin puolella miljardilla eurolla potilastietojärjestelmän yhdysvaltalaiselta Epic Systemsiltä. Hanke on ollut vastatuulessa muun muassa siksi, että se on hankalasti käytettävä, hidastaa työntekoa  ja vaarantaa potilastiedot, tiedot eivät ole siirtyneet sinne oikein ja järjestelmän vaikeaselkoisuus on johtanut ainakin yhden potilaan kuolemaan. Toimittajaa ei voida kuitenkaan vaihtaa siinäkään tapauksessa, että HUSilla olisi siihen oikeus.

Apotti-järjestelmä on koodattu MUMPS-nimisellä kielellä (lyhenne sanoista Massachusetts General Hospital Utility Multi-Programming System) joka kehitettiin 1960-luvulla. MUMPS on täydellisesti dokumentoitu ja sitä voi periaatteessa opetella itse internetistä. Ongelma on kuitenkin siinä, että MUMPS näyttää tältä:

<figure>
<pre>
<code>
%DTC
%DTC ; SF/XAK - DATE/TIME OPERATIONS ;1/16/92  11:36 AM
     ;;19.0;VA FileMan;;Jul 14, 1992
     D    I 'X1!'X2 S X="" Q
     S X=X1 D H S X1=%H,X=X2,X2=%Y+1 D H S X=X1-%H,%Y=%Y+1&X2
     K %H,X1,X2 Q
     ;
C    S X=X1 Q:'X  D H S %H=%H+X2 D YMD S:$P(X1,".",2) X=X_"."_$P(X1,".",2) 
K X1,X2 Q
S    S %=%#60/100+(%#3600\60)/100+(%\3600)/100 Q
     ;
H    I X&lt;1410000 S %H=0,%Y=-1 Q
     S %Y=$E(X,1,3),%M=$E(X,4,5),%D=$E(X,6,7)
     S %T=$E(X_0,9,10)*60+$E(X_"000",11,12)*60+$E(X_"00000",13,14)
TOH  S 
%H=%M&gt;2&'(%Y#4)+$P("^31^59^90^120^151^181^212^243^273^304^334","^",%M)+%D
     S %='%M!'%D,%Y=%Y-141,%H=%H+(%Y*365)+(%Y\4)-(%Y&gt;59)+%,%Y=$S(%:-
1,1:%H+4#7)
     K %M,%D,% Q
</code> 
</pre>
</figure>

MUMPSin syntaksi on täysin käsittämätön ja kielen rakenne on muutenkin sellainen, että se altistaa ohjelmointivirheille jotka uudemmat kielet eliminoivat kokonaan. Siksi sitä käytetä juuri missään. Suomen harvat MUMPS-koodarit ovat pitkälti Epicin palkkalistoilla. Yritä siinä sitten vaihtaa toimittajaa.

Varmistu siis siitä, että tilaamassasi tuotteessa käytetty teknologia on ainakin jossain määrin yleisesti tunnettua ja mieluusti vielä avointa lähdekoodia.

Lisää Apotista:

https://www.iltalehti.fi/kotimaa/a/7bccadac-21af-4ba8-a04c-d50f9d5b6747
https://suomenkuvalehti.fi/jutut/kotimaa/apotti-aiheuttaa-ongelmia-hus-maarasi-laakarit-siirtamaan-potilastietoja-kasityona-kirjaamatta-jaa-jopa-syopadiagnooseja/
https://www.hs.fi/kaupunki/helsinki/art-2000006041394.html
https://www.mediuutiset.fi/uutiset/tasta-apotin-ongelmissa-on-kyse-laakelistat-pitaa-tarkistaa-potilaiden-kotiutus-ja-siirto-hidasta/c8b7cf9f-990a-43dd-9586-00d07e79cd66
https://www.laakarilehti.fi/ajassa/ajankohtaista/apotin-kayttoonotossa-on-ongelmia-peijaksessa/
https://yle.fi/uutiset/3-10700107<br>
http://thedailywtf.com/articles/A_Case_of_the_MUMPS


## 3. Kelvottoman toteutuksen toimittajaloukku

_"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."_

Vaikka käytetty teknologia olisi yleisesti tunnettua, siitä ei ole hyötyä jos koodi on niin vaikeaselkoista että vain alkuperäinen tekijä osaa lukea sitä. (Todennäköisempi on kuitenkin tilanne jossa koodia ei ymmärrä kukaan, ei edes alkuperäinen tekijä.) Jos alkuperäinen tekijä päättää sitten lopettaa koodaushommat ja ryhtyä puutarhuriksi, on asiakas vaikeuksissa. Tämä on kuitenkin ongelma lähinnä hyvin pienen mittakaavan projekteissa joissa hommaa hoitaa yksi kehittäjä, koska kaikissa itseään kunnioittavissa ohjelmistofirmoissa koodin ymmärrettävyyteen kiinnitetään erityistä huomiota.

Miten tällaiseen tilanteeseen päätyminen siis estetään? Hyvä tapa varmistua tuotteen jatkokehitettävyydestä on palkata koodari, joka on ollut töissä ohjelmistoalan yrityksessä. On myös tärkeää, että toteuttaja osaa valita tarkoituksenmukaisen teknologian. Väärin valittu teknologia johtaa siihen, että koodari joutuu jatkuvasti kiertämään teknologian rajoituksia kirjoittamalla vaikeaselkoista koodia. Formaalista koulutuksesta on myös jonkin verran apua, koodin luettavuuteen kiinnitetään jonkin verran huomiota myös korkeakouluopintojen aikana. Korkeakouluissa sekä työpaikoilla opetetaan myös käyttämään versionhallintajärjestelmää, joka on niin ikään jokseenkin välttämätön osa helposti ylläpidettävien ohjelmistojen toteutusta.