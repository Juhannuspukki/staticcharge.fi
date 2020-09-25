---
type: "articles"
layout: "single"
title: Näin ostat domainin kymmenessä minuutissa
tags: Alkeet aloittelijoille
author: Jere Laine
date: 2020-09-25
---

Domain-nimen eli _verkko-osoitteen_ tai _verkkotunnuksen_ hankinta on asia, joka lähes jokaiselle yritykselle tulee jossain vaiheessa vastaan. Tässä artikkelissa käydään läpi mikä se on, mihin sitä käytetään ja kuinka hankit sellaisen. Hintaa useimmille domaineille tulee kymmenestä kahteenkymmeneen euroa vuodessa.

## Onko domain välttämätön verkkosivun toiminnan kannalta?

Teknisesti verkkosivu ei tarvitse domainia toimiakseen, koska liikennettä ei reititetä internetissä domainin vaan IP-osoitteen perusteella. Reaalimaailmassa IP-osoitetta voisi verrata GPS-koordinaatteihin: GPS-koordinaatit kertovat yksiselitteisesti vaikkapa talosi sijainnin. Sijainnille on kuitenkin myös toinen abstraktio eli katuosoite, esimerkiksi Sypressikuja 3 joka on huomattavasti helpompi muistaa kun koordinaatit. Domain on siis vähän kuin katuosoite. Niin verkkosivusi kuin talosi voivat olla olemassa, vaikka niillä ei olisikaan osoitetta. Niiden löytäminen saattaa kuitenkin olla tällöin hankalaa.

Tosielämässä meillä on myös navigaattoreita: laitteita, jotka osaavat muuttaa osoitteet GPS-koordinaateiksi ja sitten ohjata sinut oikeaan paikkaan. Internetissä navigaattoreita vastaa DNS eli Domain Name System, joka kääntää domain-nimet IP-osoitteiksi ja ohjaa liikenteen oikeaan paikkaan. Puhutaan DNS:stä kuitenkin myöhemmin.

## Nimen valinta

Selvitys saatavilla olevista osoitteista on suositeltavaa tehdä jo yrityksen perustamisvaiheessa. Ei siis kannata ensin perustaa firmaa ja alkaa tutkia osoitteita vasta sitten. Haluamasi osoite voi olla tässä vaiheessa jo varattu. Kannattaa myös harkita useita eri päätteitä: yrityksesinimi.com on usein varattu, mutta vaikkapa yrityksesinimi.pro voi olla saatavilla. Päätteestä käytetään nimeä TLD eli Top-Level Domain.

## Kuinka siis käytännössä toimin?

### Muut kuin .fi-päätteiset domainit

Korkeimmalla tasolla useampia domaineja hallinnoi ICANN-niminen organisaatio. Se ei myy domaineja, vaan oikeutta myydä domaineja. Käytännössä domainia ostaessasi asioit aina ICANNin sertifioiman domain-välittäjän kanssa, joita on olemassa lukuisia. Esimerkiksi Google, Amazon, Namecheap ja GoDaddy ovat esimerkkejä firmoista joilla on vaadittavat luvat.

Kuinka sitten löydät hyvän domain-välittäjän? Osa toimijoista käyttää hyvin epäselviä hinnoittelumalleja, joissa luvataan domain ensimmäiseksi vuodeksi 78% alennuksella normaalihinnasta ja toiseksi vuodeksi 14% alennuksella sitoutuessasi kolmen vuoden sopimukseen. Jos firmat olisivat Suomen lainsäädännön alaisia, tällaiset ikuiset alennusmyynnit olisivat taatusti laittomia. Ne on kuitenkin kaikki rekisteröity johonkin Bermudalle. Lisäksi sopimukseen on kirjattu pienellä präntillä kaikenlaisia lisäkuluja. Domainin hallinnan voi siirtää välittäjältä toiselle, mutta usein nämä firmat tekevät siitäkin niin hankalaa ja kallista kuin ICANNin sääntöjen puitteissa on ikinä mahdollista. Lisäksi ne saattavat julkaista yhteystietosi julkisesti internetissä josta saattaa seurata esimerkiksi roskapostia.

Läpinäkyvä hinnoittelu on merkki luotettavasta toimijasta. Itse suosin Verceliä (aiemmin ZEIT) josta minulla on pelkästään hyviä kokemuksia. Domainin pääset varaamaan tästä (vaatii käyttäjätunnuksen luomisen): https://vercel.com/domains

<br>
<figure>
<img src="/images/vercel-domain-list.png" alt="Voit valita listasta mieleisesi vaihtoehdon">
<figcaption>Kun sopiva nimi on löytynyt, voi domainin ostaa muutamalla klikkauksella.</figcaption>
</figure>
<br>

Jos haluat vain tarkistaa onko joku osoite saatavilla rekisteröitymättä mihinkään, niin siihen on niin ikään olemassa valtavasti palveluita. Esimerkkinä toimikoon vaikkapa https://instantdomainsearch.com.

Domain-kaupoissa on tärkeää varata oma nimi ajoissa, koska jos joku toinen varaa tavoittelemasi domainin ensin niin et voi asialle oikeastaan mitään. Jotkin tahot ostelevat jopa huvikseen suosituiksi arvelemiaan domaineja ja laittavat ne sitten uudestaan myyntiin, yleensä täysin säädyttömään hintaan.

### .fi-domainit

.fi-päätteisistä osoitteista vastaa TRAFICOM eikä niitä voi sen takia ostella ihan mistä tahansa. Esimerkiksi Verceliltä ei voi ostaa .fi-päätteisiä osoitteita. Suomalaisia verkkotunnusvälittäjiä on kuitenkin paljon, ja myös StaticChargella on lupa myydä .fi-domaineja. Jos haluat sellaisen, niin [ota yhteyttä](https://staticcharge.fi)!

.fi-osoitteissa on kaksi tärkeää erityispiirrettä muihin osoitteisiin verrattuna:

Ensiksi, ne tukevat ääkkösiä. Esimerkiksi ääkköset.fi on täysin kelvollinen verkko-osoite. Sen käyttäminen ainoana osoitteena ei kuitenkaan ole välttämättä järkevää, koska läheskään kaikki eivät ole tästä tietoisia. Jos sanot sivujesi osoitteen olevan ääkköset.fi, ihmiset yrittävät silti löytää sitä kirjoittamalla osoiteriville aakkoset.fi. Lisäksi suurimmalla osalla maapallon väestöstä ei ole näppäimistöä, jolla nämä merkit pystyisi tuottamaan.

Toiseksi, TRAFICOM pystyy pakottamaan ihmiset luopumaan domain-nimestä, jos sen pitäisi kuulua jollekin toiselle. Tämä tarkoittaa sitä, että jos joku hupiveikko ostaa ennen sinua domainin yrityksesi-toiminimi.fi niin voit vaatia sitä itsellesi.

## Osaan nyt hankkia domainin, mutta kannattaako se kuitenkin jättää ammattilaiselle?

Tapauskohtaista. Jos verkkosivujen hankita ei ole ajankohtaista etkä ole ostamassa .fi-päätteistä osoitetta, niin suosittelen tekemään varauksen itse. Silloin varmistat vaivaisella muutaman kympin investoinnilla osoitteen olevan tulevaisuudessa käytössäsi. Muissa tapauksissa saattaa olla kokonaisuuden kannalta helpompaa, että jätät hankinnan verkkosivuammattilaisellesi. Esimerkiksi eräässä tapauksessa asiakas oli ostanut domainin yritykseltä, jonka tarjoamat palvelut eivät soveltuneet asiakkaan uusille sivuille. Domainin sirtämiseen ei ollut automaattista järjestelmää, joten tarvittiin kuukauden verran puhelinpalavereja ennen kuin uudet sivut saatiin viimein oikean osoitteen alle. Vertailun vuoksi itse sivujen tekemiseen kului kaksi päivää.

## Lisälukemista: IP-osoitteet ja alidomainit

### IP-osoitteet

IPv4-osoitteet merkitään muotoon 123.255.34.129 eli neljä numeroa (välillä 0-255) pisteillä erotettuna. Tämä mahdollistaa 4 294 967 296 uniikkia IP-osoitetta, joiden oletettiin internetin alkuaikoina riittävän mainiosti kaikille. Myöhemmin internetin käyttäjien määrä räjähti käsiin, joten piti keksiä jotain uutta.

Kehitettiin IPv6. Vahingosta viisastuneena insinöörit päättivät uuden osoitteen olevan muotoa

3454:0db8:238a:0000:0000:8a2e:45df:7338

eli kahdeksan neljän heksadesimaalinumeron ryhmää joka mahdollistaa 2<sup>128</sup> eli noin kolmesataaneljäkymmentä miljardia miljardia miljardia miljardia... noh, riittävästi osoitteita ainakin vähäksi aikaa.

### Alidomainit

Yksi vaihtoehto sivuston osoitteeksi on alidomainit, joita saa palveluntarjoajilta ilmaiseksi. Käytännössä sivustosi nimi laitetaan palveluntarjoajasi nimen eteen. Esimerkiksi tämä sivu löytyy myös osoitteesta https://staticcharge.now.sh. now.sh-osoite on palveluntarjoajani omaisuutta. Myös henkilönnimi.wordpress.com-osoitteet ovat esimerkkejä alidomainien käytöstä. Jos omistat itse domainin, pystyt tekemään alidomaineja myös itse. Esimerkkinä voisin perustaa vaikkapa verkkokaupan osoitteeseen store.staticcharge.fi.

Ammattimaisen vaikutelman aikaansaamiseksi ja sivuston nimen muistettavuuden parantamiseksi on kuitenkin luonnollisesti paras hankkia ihan oma osoite.