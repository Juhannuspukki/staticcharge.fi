---
type: "articles"
layout: "single"
title: "Kun valon nopeus ei riitä: kuinka CDN nopeuttaa verkkosivujasi"
tags: Nopeus
author: Jere Laine
date: 2020-09-11
---

Kuinka pitkä matka on Helsingistä Wellingtoniin?

Googlen mukaan etäisyyttä on linnuntietä noin 17 000 kilometriä.

Valon nopeus tyhjiössä on noin 299 792 kilometriä sekunnissa. Tästä saamme jakolaskulla selville, että signaalilta kestää ainakin 56,71 millisekuntia matkustaa Helsingistä Wellingtoniin. Koska valo liikkuu valokuidussa eikä tyhjiössä ja matkalla on vähän kuparikaapeliakin niin voidaan olettaa, että matkassa kuluu kolme kertaa kauemmin, noin 170 millisekuntia. Koska signaali joutuu kulkemaan ensin Wellingtoniin ja sitten takaisin, tämä tulee tuplata eli hommassa menee 340 millisekuntia. Lisäksi Suomen ja Wellingtonin välillä ei ole suoraa kaapelia, vaan signaalit joutuvat kulkemaan useammankin reitittimen läpi joka hidastaa matkantekoa.

Summa summarum: aikaa kuluu sekuntitolkulla ja modernilta Homo Sapiensilta loppuu kärsivällisyys.

Mitä asialle voi sitten tehdä? Maailman parhaat tietoliikenneinsinöörit laitettiin asialle, ja kattavien selvitysten jälkeen todettiin että on vain kaksi mahdollista ratkaisua.

1. Valon nopeuden kasvattaminen
2. Välimatkojen lyhentäminen

Valon nopeuden kasvattaminen todettiin haastavaksi, joten katseet kohdistuivat välimatkojen lyhentämiseen. Niin sai alkunsa ensimmäinen CDN.

## Mikä on CDN?

Lyhenne tulee sanoista Content Delivery Network. Suomeksi siitä käytetään joskus nimitystä sisällönjakeluverkko. Käytännössä se tarkoittaa sitä, että yhden palvelimen sijaan n kappaletta palvelimia on ripoteltu ympäri maapalloa. Tällöin käyttäjän pyytäessä verkkosivua se tarjotaan aina käyttäjää lähinnä olevalta CDN-palvelimelta. Nykyään CDN-palveluntarjoajia ja -tuotteita on runsaasti, kuten esimerkiksi Google Cloud CDN, AWS CloudFront sekä CloudFlare.

<figure>
<img src="/images/cloudfront.png" alt="Cloudfront-palvelimien sijainnit">
<figcaption>AWS:n CloudFront-palvelimien sijainnit. Kuva: Amazon</figcaption>
</figure>


Nopeushyötyjen lisäksi CDN:llä saavutetaan hyvä vikasietoisuus. Vaikka yksi konesali tuhoutuisi tulipalossa, liikenne voidaan yksinkertaisesti ohjata johonkin muuhun sijaintiin. Lisäksi tietoliikenneyhteydet kuormittuvat vähemmän, kun kaikkien pyyntöjen ei tarvitse kiertää puolta maapalloa.

CDN-palvelimille ei voi kuitenkaan käyttää ihan mitä tahansa. Muistatteko, kun puhuimme [dynaamisen ja staattisen verkkosivun](/artikkelit/mika-on-verkkosivu-osa-1) eroista? CDN:ien tehtävä on  sisällön mahdollisimman nopea ja tehokas jakelu ja siksi ne eivät suorita palvelinpuolen koodia.* 

Jos käytössä on staattinen sivu, koko sivusto voidaan palvella CDN:stä erittäin helposti. Jos käytössä on dynaaminen sivu, niin joissain tapauksista sivustosta voidaan tehdä säännöllisesti päivitettävä staattinen kopio ja kopio palvella CDN:stä. Tämä tulee kyseeseen esimerkiksi WordPress-kotisivujen tapauksessa. Jos sivuston sisältö päivittyy liian nopeasti tätä lähestymistapaa varten (esim. YouTube), CDN:ään varastoidaan yleensä sivustolla olevat kuvat ja videot, kenties myös JS- ja CSS-tiedostot. Jos kyseessä on SPA [josta niin ikään puhuttiin aiemmin](/artikkelit/mika-on-verkkosivu-osa-2), voidaan frontend palvella kokonaan CDN:stä. Nopeasti muuttuva sisältö voidaan siis tarjota perinteisellä mallilla ja staattinen sisältö CDN:n kautta.

Mitä tämä lysti sitten maksaa? No eihän se maksa yhtikäs mitään. Monet palveluntarjoajat tarjoavat CDN:ää ilmaiseksi ja se sisältyy myös StaticChargen ilmaiseen hosting-vaihtoehtoon. Vielä kattavamman sisällönjakeluverkon saa kympillä kuussa: verkkosivusi varastoidaan samanaikaisesti 84 kaupunkiin 42 maassa.

Ei siis tarvitse paljon latausindikaattoreita tuijotella.
<br>
<br>
<br>
*Poikkeuksena Lambda@Edge ja vastaavat teknologiat.