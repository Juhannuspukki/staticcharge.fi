---
type: "articles"
layout: "single"
title: Mikä on verkkosivu? (osa 2)
tags: Alkeet aloittelijoille
author: Jere Laine
year: 2020
month: 8
day: 28
---

Kun yritykset tarvitsivat yhä monipuolisempia toiminnallisuuksia, kasvoi verkkosivustojen tekninen monimutkaisuus eksponentiaalisesti. Ensin suoritettiin palvelimella oleva ohjelmakoodi, joka kasasi käyttäjälle lähetettävän HTML-sivun. HTML:n mukana tuli Javascriptiä, jolla toteutettiin lisää toiminnallisuuksia. Ohjelmalogiikkaa oli kahdessa kerroksessa ja hyvin pian oltiin tilanteessa, jossa sivu oli niin monimutkainen että sen päivittäminen oli mahdotonta. Pienenkin uuden toiminnallisuuden lisääminen rikkoi kymmenen vanhaa.

## Adobe Flash ja kumppanit

Ongelmaa yritettiin korjata monella tavoin. Muistatte ehkä, kun joka toinen sivu vaati liitännäisen kuten Adobe Flash. Esimerkiksi suurin osa internetin videoista vaati Flash-selainliitännäisen toimiakseen. Flash mahdollisti huomattavasti monipuolisemmat interaktiiviset verkkosivustot ja nettipelit kuin lapsenkengissään ollut Javascript ja vanhat HTML-versiot. Se kuitenkin vaati ylimääräisen selainlaajennuksen asentamisen, oli jokseenkin epäluotettava ja hidas, kärsi tietoturvaongelmista ja lisäksi se oli täysin Adoben kontrollissa.

Applen toimitusjohtaja Steve Jobs ei ollut suuri Flashin ystävä ja kieltäytyi lisäämästä Flash-tukea iPhoneen. Kun häneltä tiedusteltiin aiheesta, hän julkaisi internetissä avoimen kirjeen otsikolla “Thoughts on Flash” jossa hän tylytti kyseisen teknologian maan rakoon. Flashin sijaan hän kertoi Applen luottavan uuteen HTML:n versioon nimeltään HTML5. Adobe kuoppasi mobiili-Flashin pian tämän jälkeen. Pöytätietokoneilla Flash poistuu lopullisesti käytössä vuoden 2020 lopussa. Monet muut samantyyppiset teknologiat ovat poistuneet käytöstä jo aiemmin.

## AJAX

Samaan aikaa toisaalla propellipäät alkoivat pohtia, että saisiko staattisten ja dynaamisten sivujen hyviä puolia yhdistettyä jotenkin. Kehitettiin AJAX, joka on lyhenne sanoista Asynchronous Javascript And XML. Käytännössä se tarkoitti sitä, että Javascriptiä alettiin käyttää tiedon hakemiseen palvelimilta jokseenkin tähän tapaan:

1. Käyttäjä menee haluamaansa verkko-osoitteeseen.
2. Palvelin lähettää paluupostissa HTML-tiedoston ja Javascriptiä.
3. Selain suorittaa Javascriptin, joka hakee palvelimelta lisää tietoja.
4. Javascript muokkaa sivun HTML-koodia niin, että haetut tiedot tulevat näkyviin.

Tällä tavalla sivustoa saatiin nopeutettua, kun jokaista pientä muutosta varten ei tarvinnut ladata sivua kokonaan uudestaan. Riitti, että pieni osa sivusta päivitetään. Siitä ei toisaalta ollut juurikaan apua sivustojen monimutkaisuusongelmaan, pikemminkin päinvastoin.

<figure>
<img src="/images/youtube.jpg" alt="Youtube">
<figcaption>Esimerkiksi Youtube lähettää vierailijalle ensin tämän näköisen sivun. Placeholderit korvataan Javascriptin avulla oikealla sisällöllä heti, kun se on saatu haettua palvelimelta.</figcaption>
</figure>

## Moderni web-kehitys ja SPA:n käsite

Miten siis voimme kirjoittaa web-applikaation ilman että siitä tulee sellainen rytökärpänpesä että sitä ei kuukauden päästä käyttöönotosta ymmärrä kukaan, ei edes tekijä itse? Vajaat kymmenen vuotta sitten kehitettiin _ohjelmistokirjastoja_ jotka mahdollistavat Javascriptin kirjoittamisen uudella tavalla siten, että jopa monimutkaisen interaktiivisen sivuston koodi säilyy helposti ymmärrettävänä ja laajennettavana. Tällaisia kirjastoja ovat esimerkiksi React, Vue.js ja Angular.

Kyseisiä teknologioita voi myös käyttää helposti niin sanotun SPA:n (Single Page Application) valmistamiseen. Termi tarkoittaa, että koko verkkosivusto koostuu yhdestä ainoasta HTML-tiedostosta ja Javascriptistä. Käyttäjän liikkuessa sivustolla sivu ei siis todellisuudessa koskaan vaihdu, vaan yhden ja saman sivun sisältöä muokataan ohjelmallisesti ja tietoa haetaan palvelimelta AJAX-tyyppisesti kun sitä tarvitaan. Sivuston sisällä navigointi tapahtuu käytännössä ilman viivettä. Näin palvelimet eivät enää koosta HTML-dokumentteja, vaan logiikka on siirretty lähes kokonaan käyttäjän tietokoneelle.

Mitä hyötyjä ja haittoja näillä moderneilla sivuilla sitten on? Hyötyihin lukeutuvat seuraavat:

1. Vaikka sivusto olisi monimutkainen, sen koodi säilyy ymmärrettävänä ja sitä on helppo kehittää.
2. Sivu on perinteistä dynaamista sivua nopeampi.
3. Sivustolla käytetty sisällönhallintäjärjestelmä (ns. headless CMS) voi aivan hyvin toimia tietolähteenä myös vaikkapa mobiilisovellukselle.
4. Frontend ja backend ovat täysin toisistaan erillisiä. Kumpikin järjestelmä voidaan tarvittaessa korvata toisella.

Ongelmattomia ne eivät kuitenkaan ole. Heikkouksiin lukeutuvat seuraavat:

1. Javascript vanhenee nopeasti ja sivustoa on ylläpidettävä aktiivisesti. Jos näin ei tehdä, kolme vuotta vanha sivu on antiikkia josta kukaan ymmärrä enää yhtään mitään.
2. Teknisesti monimutkaisempi kuin perinteinen staattinen sivu, jossa Javascriptin määrä on minimissä.
3. Javascriptin suorittaminen selaimessa voi olla hidasta hommaa, etenkin jos käyttäjän päätelaite on halpahallin alelaarista.
4. Hakukone joutuu suorittamaan sivustolla olevan Javascriptin saadakseen selville, mitä sisältöä sivulla on. Google osaa sen kyllä tehdä, mutta sivuston indeksointi saattaa olla hitaampaa kuin perinteisen sivun.

Summa summarum: jos sivustosi sisältää runsaasti interaktiivista toiminnallisuutta tai haluat päivittää mobiilisovellusta samalla sisällönhallintajärjestelmällä, kannattaa suosia moderneja ohjelmistokirjastoja. Jos taas sivusto ei sisällä juurikaan interaktiivisia toiminnallisuuksia, kannattanee pitäytyä perinteisessä Javascriptittömässä sivussa koska se ei vaadi minkäänlaista aktiivista ylläpitoa ja on erittäin nopea.
