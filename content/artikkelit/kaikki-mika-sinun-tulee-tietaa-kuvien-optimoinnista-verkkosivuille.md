---
type: "articles"
layout: "single"
title: Kaikki, mikä sinun pitää tietää kuvien optimoinnista verkkosivuille
tags: Nopeus
author: Jere Laine
date: 2021-01-09
---

Yksi helpoimmista tavoista tuhota verkkosivuston suorituskyky täydellisesti on käyttää sivustolla vääränlaisia kuvia. Tämä artikkeli pyrkii summaamaan mahdollisimman kattavasti kaikki verkkoselainten tukemat kuvaformaatit ja neuvomaan niiden mahdollisimman tarkoituksenmukaisessa käytössä.

## Millä tavoin väärin käytetyt kuvat haittaavat sivuston toimintaa?

Keskimäärin kuvat muodostavat ylivoimaisesti suurimman osan verkkosivun koosta, ja mitä suurempi sivu on sitä kauemmin se latautuu. Kun sivun latausaika ylittää kolme sekuntia, hylkää 53% mobiilikäyttäjistä sivun. Jokainen viidensadan millisekunnin lisäys latausaikaan tarkoittaa, että käyttäjän kokema turhautumisen tunne lisäytyy 26%. Amazon ja Wallmart ovat havainneet, että jokainen 100ms joka latausajasta höylätään pois lisää verkkokaupan liikevaihtoa prosentilla. Esimerkiksi tavanomainen optimoimaton kännykkäkameralla napsaistu kuva voi olla hyvinkin 50x-100x suurempi kuin optimoitu versio. Googlen suosituksen mukaan [sivun optimaalinen koko on alle 1600 KiB](https://web.dev/total-byte-weight/).

StaticChargen valmistamat sivut osaavat optimoida kuvat automaattisesti. Optimointiin ei siis asiakkaanamme tarvitse käyttää itse aikaa eikä ole pelkoa siitä, että vahingossa ladattu suurikokoinen kuva hidastaisi sivustoa.

## Vektorigrafiikka ja rasterigrafiikka

Tietokoneet ovat vakiintuneet tukemaan laajasti kahta tapaa näyttää kuvia. Ensimmäinen tapa on esittää kuva pieninä neliöinä, joita kutsumme pikseleiksi. Pikselien määrää kuvassa kutsutaan kuvan resoluutioksi tai kuvan kooksi (dimensions) ja se ilmoitetaan useimmiten muodossa _pikselien määrä leveyssuunnassa_  × _pikselien määrä korkeussuunnassa_ eli vaikkapa 1920×1080 pikseliä. Tämä kertolasku suorittamalla saadaan pikselien kokonaismäärä eli äskeisessä tapauksessa kuvan koon voisi myös ilmoittaa olevan noin kaksi miljoonaa pikseliä eli kaksi megapikseliä. Mitä suurempi resoluutio, sitä tarkempi kuva. Tätä lähestymistapaa kutsutaan _rasterigrafiikaksi_. Verkossa käytettäviä rasterigrafiikkaformaatteja ovat JPEG, PNG, GIF sekä WebP. Soveltuvia muokkaustyökaluja näille kuville ovat esimerkiksi Affinity Photo sekä Adobe Photoshop.

Toinen tapa esittää kuvia on käyttää koordinaatistoa. Tietokoneelle voidaan kertoa esimerkiksi, että koordinaatiston pisteestä (0,0) alkaa kolmen pisteen levyinen jana jonka väri on valkoinen päättyen pisteeseen (1000, 1000). Lisäksi pisteessä (-18, -234) on sinisen suorakulmion vasen alakulma oikean yläkulman ollessa pisteessä (200, 200). Tätä lähestymistapaa kutsutaan vektorigrafiikaksi. Verkossa käytettäväksi vektorigrafiikkaformaatiksi on vakiintunut SVG. Soveltuvia muokkaustyökaluja näille kuville ovat esimerkiksi Affinity Designer sekä Adobe Illustrator.

### Määritelmät sikseen, mitä käytännön eroa näillä kahdella on?

Vektorigrafiikka 
1. vie useimmiten vähemmän tilaa ja
2. skaalautuu paremmin kuin rasterigrafiikka.

Vektorigrafiikkatiedostoihin tarvitsee tallentaa paljon vähemmän tietoa kuin rasterigrafiikkakuviin. Jos halutaan tallentaa, että kuvassa kulkee poikittain valkoinen jana jonka leveys on kolme pikseliä, voidaan vektorigrafiikkatiedostossa ilmoittaa vain janan leveys, väri, alkupiste ja loppupiste. Jos taas haluamme tallentaa tämän tiedon rasterigrafiikkamuodossa, meidän on määriteltävä kuvalle resoluutio, vaikkapa 1000×1000 pikseliä ja sitten tallentaa jokaisen pikselin väri ja läpinäkyvyys. Ja niitähän on tuon kokoisessa kuvassa miljoona. Mitä suurempi kuvasta halutaan, sitä todennäköisempää on, että kuvan vektoriversio on rasteriversiota pienempi.

Vektorigrafiikkakuvan koordinaatistoa ja siten kuvan kokoa voi skaalata rajattomasti ilman kuvan laadun heikkenemistä. Rasterigrafiikkakuvat sen sijaan muuttuvat nopeasti suttuisiksi, jos esimerkiksi kuva jonka resoluutio on 100×100 pikseliä yritetään skaalata tätä suurempaan kokoon.

### Miksi rasterigrafiikkaa sitten edes käytetään, jos vektorigrafiikka on parempaa?

Valitettavasti todellinen maailma ei koostu pelkistä geometrisistä muodoista joita voisimme vektorien keinoin kuvata. Kaikki valokuvat ovat aina rasterigrafiikkaa. Vektorigrafiikan käyttö rajoittuu lähinnä piirroskuvien (tosin myös hyvin yksityiskohtaisten sellaisten), logojen sekä tekstin esittämiseen. Tämän sivuston kaikki ikonit sekä esimerkiksi ylä- ja alapalkissa näkemäsi kuvat ovat vektorigrafiikkaa.

### Voiko rasteri- ja vektorigrafiikkaa muuttaa toisikseen?

Vektorigrafiikkatiedostoja on helppo rasteroida, vektorigrafiikkaohjelmistojen export-toiminto mahdollistaa vaikkapa png-kuvan luomisen svg-kuvasta. Mitään järkeä siinä ei kuitenkaan useimmiten ainakaan web-käytössä ole yllä mainituista syistä. Vektorigrafiikkakuvan muodostaminen rasterigrafiikkakuvasta onkin sitten huomattavasti monimutkaisempaa. On olemassa ohjelmistoja, joissa tietokone käyttää jonkinasteista tekoälyä kuvan analysoimiseen ja arvelee sitten miltä vektoriversio voisi näyttää. Tulokset saattavat vaihdella.

### Voiko rasterigrafiikkaformaatteja muuttaa toisikseen?

Kyllä, kuvia voi muuttaa helposti toisikseen vaikkapa pikaisella Google-haulla löytyvillä työkaluilla ("x to y converter"). Laatu tosin saattaa kärsiä matkalla enemmän tai vähemmän.

## Yleisimmät verkossa käytetyt tiedostomuodot

### SVG

SVG (Scalable Vector Graphics) on ollut käytössä vuodesta 2001 ja päivitetty viimeksi 2011. Sivulla olevat logot ja piirrokset tulisi parhaan lopputuloksen saamiseksi toimittaa sivuston toteuttajalle tässä muodossa. SVG-kuvat eivät käytä juurikaan tilaa, skaalautuvat täydellisesti ja lisäksi niitä pystyy animoimaan, kuten on tehty vaikkapa https://jere.pro -sivustolla ensimmäistä kertaa vierailtaessa. SVG tukee myös läpinäkyvyyttä. Jos SVG sisältää tekstiä, on se suositeltavaa muuttaa vektorigrafiikkaohjelmalla fonttiriippumattomaksi convert to curves-toiminnolla. Jos tämä jää tekemättä ja sivustovierailijan tietokoneella ei ole fonttia, jolla teksti on kirjoitettu, SVG-kuvan teksti näkyy Times New Romanina. SVG:t voivat sisältää myös rasterigrafiikkakuvia.

<br>
<div class="row">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
    <figure>
    <img src="/images/text-logo.svg" alt="StaticChargen logo">
    <figcaption>
      Tämä on SVG-versio StaticChargen logosta, kooltaan noin 8 KiB. Kuvasta voisi tehdä vaikka lakanan kokoisen ja sen tiedostokoko olisi yhä samaiset 8 KiB.
    </figcaption>
    </figure>
  </div>
  <div class="col-sm-2"></div>
</div>
<br>

### PDF

Portable Document Format, kehittäjänä toimii Adobe. Alunperin julkaistu 1993. Toinen yleisesti käytössä oleva vektorigrafiikkaformaatti (voi sisältää myös rasterigrafiikkakuvia). Ei kuitenkaan yleisessä käytössä nimenomaisesti kuvien esittämiseen sivuilla, koska se on raskas verrattuna SVG:hen. PDF-tiedostoja on mahdollista upottaa verkkosivulle kuvina seuraavanlaisesti:

<figure>
<pre>
<code>
&lt;img src="kuva.pdf"&gt;
</code>
</pre>
</figure>


### PNG

PNG eli Portable Network Graphics julkaistiin alunperin 1996. Se tukee häviötöntä pakkausta ja läpinäkyvyyttä. PNG-kuvat soveltuvat parhaiten logon tai piirrosten näyttämiseen silloin kun SVG-versiota ei ole syystä tai toisesta saatavilla. Valokuvien esittämiseen se harvemmin soveltuu, koska PNG-kuvat vievät runsaasti tilaa. PNG-kuvan optimointi tarkoittaa lähinnä kuvan skaalaamista niin, ettei sivustolla esim käytetä kuvaa jonka resoluutio on vaikkapa 1000×1000 pikseliä silloin kuin kuvaa ei todellisuudessa esitetä sivulla koskaan sataa pikseliä leveämpänä. Internetistä löytyvät PNG-pakkaussivustot pienentävät kuvia myös esimerkiksi vähentämällä värien määrää.

<br>
<div class="row">
  <div class="col-sm-6">
    <figure>
    <img src="/images/text-logo.svg" alt="StaticChargen logo">
    <figcaption>
      Tässä on SVG-versio uudelleen, vertailun vuoksi. Se on sekä pienikokoisempi että terävämpi kuin viereiset png-kuvat.
    </figcaption>
    </figure>
    <br>
  </div>
  <div class="col-sm-6">
    <figure>
    <img src="/images/logo-545.png" alt="StaticChargen logo">
    <figcaption>
      Tämä on PNG-versio, jonka leveys on 545 pikseliä. Sen koko on 9 KiB. Se voi olla tällä sivulla korkeintaan 545 pikseliä leveä, joten tämä on sille periaatteessa optimaalinen koko.
    </figcaption>
    </figure>
    <br>
  </div>
  <div class="col-sm-6">
    <figure>
    <img src="/images/logo-1090.png" alt="StaticChargen logo">
    <figcaption>
      Tämä on PNG-versio, jonka leveys on 1090 pikseliä. Sen koko on jo 19 KiB.
    </figcaption>
    </figure>
  </div>
  <div class="col-sm-6">
    <figure>
    <img src="/images/text-logo.jpg" alt="StaticChargen logo">
    <figcaption>
      Tämä on JPEG-versio, jonka leveys on 545 pikseliä, laatu 75% ja koko 9 kB. Kuvassa on pakko olla tausta, ja lisäksi tekstin reunoilla näkyy pakkaamisesta aiheutuneita artefakteja.
    </figcaption>
    </figure>
  </div>
</div>
<br>

### BMP

Microsoftin bittikarttaformaatti. Samankaltainen kuin PNG, mutta pakkaamaton eli vie enemmän tilaa.

### JPEG

Lyhenne termistä Joint Photographic Experts Group, joka oli standardin kehitelleen komitean nimi. Julkaistiin alunperin 1992. Häviöllistä pakkausta käyttävä rasterigrafiikkaformaatti, joka soveltuu valokuvien esittämiseen. Ei tue läpinäkyvyyttä. JPEG-kuvan kokoa on mahdollista kontrolloida yksinkertaisesti pakkausastetta säätämällä. Kuvaa voidaan useimmiten pienentää todella paljon niin, että laatu heikkenee vain vähän. Kuriositeettina JPEG-tiedoston tiedostopääte on useimmiten .jpg. Tämä on jäännös ajalta, jolloin Microsoft Windows osasi käsitellä vain kolmikirjaimisia tiedostopäätteitä. JPEG-kuvat tulee parhaan tuloksen saamiseksi skaalata samoin kuten PNG-kuvat, ja lisäksi on säädettävä kuvan pakkausaste sopivaksi. Mitä todennäköisimmin JPEG-kuvia ei tarvitse sivuilla esittää yli 85% laadulla.

Alla olevan esimerkkikuvan alkuperäinen resoluutio on 4032×3024 ja koko 2279 KiB.

<br>
<div class="row">
  <div class="col-sm-6">
    <figure>
    <img src="/images/shore-545-100.jpg" alt="Jäätynyt merenlahti">
    <figcaption>
      Tämä kuva on skaalattu 545 pikselin leveyteen niin, että laatu on 100%. Tiedostokoko on 216 kB, eli jo tällä keinolla kuvan koosta on saatu napsaistua pois yli 90%. Vastaavan kokoisen PNG-kuvan koko olisi Affinity Designerin luomana 278 KiB.
    </figcaption>
    </figure>
    <br>
  </div>
  <div class="col-sm-6">
    <figure>
    <img src="/images/shore-545-75.jpg" alt="Jäätynyt merenlahti">
    <figcaption>
      Sama kuva, mutta 75% laadulla. Tavallinen kuolevainen ei havaitse näiden välillä mitään eroa, mutta kuvan koko on saatu rutistettua vain 40 kibitavuun. Muista: alkuperäinen oli 2279 KiB.
    </figcaption>
    </figure>
    <br>
  </div>
  <div class="col-sm-6">
    <figure>
    <img src="/images/shore-545-50.jpg" alt="Jäätynyt merenlahti">
    <figcaption>
      Sama kuva, mutta 50% laadulla. Jos sitä nyt oikein tarkoituksenhakuisesti tarkastelee, niin kuvassa on havaittavissa jonkin verran pakkaamisesta johtuvia artefakteja. Koko 24 KiB, eli lähes 99% pienempi kuin alkuperäinen kuva!
    </figcaption>
    </figure>
    <br>
  </div>
  <div class="col-sm-6">
    <figure>
    <img src="/images/shore-545-10.jpg" alt="Jäätynyt merenlahti">
    <figcaption>
      Sama kuva, mutta 10% laadulla. Laadussa on havaittavissa selkeää heikkenemistä. Koko vaivaiset 11 KiB.
    </figcaption>
    </figure>
    <br>
  </div>
</div>
<br>

### JPEG 2000

Nimensä mukaisesti vuonna 2000 julkaistu, alkuperäisen JPEG-formaatin korvaamiseen tähdännyt spesifikaatio. Tukee häviöllistä ja häviötöntä pakkausta ja sisältää paljon parannuksia alkuperäiseen standardiin verrattuna. Kuvat käyttävät usein tiedostopäätettä .jp2 tai .jpx. Jos tämä ei kuulosta tutulta, niin se on täysin ymmärrettävää: formaatti on pitkälti kuollut ja selaimista sitä tukee vain Applen Safari. Formaatti ei siis sovellu käyttöön verkossa.

### GIF

Graphic Interchange Format on reliikki ajalta ennen World Wide Webiä. Tämän vuonna 1987 julkaistun kuvaformaatin tärkeimmäksi käyttötarkoitukseksi ovat vakiutuneet lyhyet animaatiot, vaikka GIF-formaatin [määrittelydokumentissa](https://www.w3.org/Graphics/GIF/spec-gif89a.txt) todetaan seuraavaa:

_The Graphics Interchange Format is not intended as a platform for animation, even though it can be done in a limited way._

GIF-formaattia ei tule missään tapauksessa käyttää animoitujen kuvien esittämiseen. Perunalaadun lisäksi kuvat vievät järjettömiä määriä tilaa. GIF-kuvien sijaan animaatioihin on suotavaa käyttää esimerkiksi mp4-videoita. Näin toimii muun muassa Twitter. Esimerkki tästä alla.

<br>
<div class="row">
  <div class="col-sm-5">
    <figure>
    <video autoplay muted loop playsinline>
    <source src="team-vs-freelance.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
    </figure>
    <br>
  </div>
  <div class="col-sm-7">
    <figure>
    <figcaption>HTML</figcaption>
    <pre>
<code>
&lt;!-- EI NÄIN --&gt;
&lt;img
  src="team-vs-freelance.gif"
  alt="Hauska kuva"
&gt;
<br>
&lt;!-- VAAN NÄIN --&gt;
&lt;video autoplay muted loop playsinline&gt;
  &lt;source
    src="team-vs-freelance.mp4"
    type="video/mp4"
  &gt;
&lt;/video&gt;
</code>
    </pre>
    </figure>
    <p>Alkuperäisen yhdeksän sekunnin gifin koko oli 11253 KiB. Viereisen videon koko on vain 762 KiB eikä sen käyttäytyminen eroa alkuperäisestä. GIF-kuvia pystyy muuttamaan helposti videoiksi internetistä löytyvillä konvertointiohjelmilla.
    </p>
  </div>
</div>
<br>

### WebP
Julkaistiin alunperin 2010 PNG-, JPEG- ja GIF-kuvien korvaajaksi. Tämä Googlen kehittämä formaatti tukee häviöllistä ja häviötöntä pakkausta, läpinäkyvyyttä sekä animaatioita (mutta video vie silti vähemmän tilaa). WebP-kuvat ovat JPEG- ja PNG-kuvia 20%-35% pienempiä. Kun tuki Safarille saatiin syksyllä 2020, tukevat kaikki merkittävät selaimet nyt WebP-standardia. Maailmassa on kuitenkin sen verran runsaasti WebP-standardia tukemattomia vanhoja selaimia, että sen lisäksi sivustolla on suositeltavaa käyttää ns. fallbackina jotain tavanomaisempaa kuvatyyppiä. Tulevaisuudessa etenevissä määrin käytössä.

<br>
<div class="row">
  <div class="col-sm-5">
    <figure>
    <picture>
      <source srcset="/images/shore-545-75.webp" type="image/webp">
      <source srcset="/images/shore-545-75.jpg" type="image/jpeg">
      <img src="/images/shore-545-75.jpg" alt="Jäätynyt merenlahti">
    </picture>
      <figcaption>
        Kuva rannasta 75% laadulla WebP:nä (jos selaimesi tukee sitä, muussa tapauksessa se latasi JPEG-kuvan). Kuvan koko on vain 19 KiB siinä missä vastaava JPEG oli 40 KiB. Lisäksi siinä on paljon vähemmän artefakteja.
      </figcaption>
    </figure>
    <br>
  </div>
  <div class="col-sm-7">
    <figure>
    <figcaption>HTML</figcaption>
    <pre>
<code>
&lt;!-- EI NÄIN --&gt;
&lt;img src="shore.webp"&gt;
<br>
&lt;!-- VAAN NÄIN --&gt;
&lt;picture&gt;
  &lt;source srcset="shore.webp" type="image/webp"&gt;
  &lt;source srcset="shore.jpeg" type="image/jpeg"&gt;
  &lt;img
    src="/images/shore-545-75.jpg"
    alt="Jäätynyt merenlahti"
  &gt;
&lt;/picture&gt;
</code>
    </pre>
    </figure>
  </div>
</div>
<br>

### APNG

Animated PNG. Kehitetty nimensä mukaisesti animoitujen kuvien esittämiseen. Toisin kuin GIF-kuvat, APNG-kuvat tukevat läpinäkyvyyttä (ja lisäksi tiedostokoko on pienempi kuin GIF-kuvissa). Laaja selaintuki vuodesta 2017. Ei kuitenkaan kovin yleisessä käytössä. Saavuttaa lyhytvideoissa vielä WebP:täkin pienempiä tiedostokokoja, mutta videot ovat vielä paljon pienempiä.

### AVIF

AV1 Image File Format. Uusi formaatti, jonka tarkoitus on tulevaisuudessa korvata WebP. Ainoat AVIF-formaattia tukevat selaimet ovat Chrome ja Opera, joilta tuki on löytynyt kesästä 2020 lähtien. Tarjoaa noin 50% pienemmän tiedostokoon kuin JPEG ja 20% pienemmän tiedostokoon kuin WebP.

## Metadata

Kuvat sisältävät itse kuvan lisäksi myös muuta tietoa, esimerkiksi millä kameralla kuvia on otettu ja milloin sekä millä ohjelmalla kuvaa on käsitelty. Tämä pätee kaikkiin yllä mainittuihin kuvaformaatteihin. Metadatan voi huoletta poistaa. Internet on pullollaan erilaisia metadatanpoistotyökaluja, kuten esimerkiksi [ImageOptim](https://imageoptim.com/mac). Useimmiten metadataa ei tosin ole kuvissa kovinkaan merkittävästi, osuus kuvan koosta on muutaman prosentin luokkaa.

## Lazy loading

Javascriptin avulla kuvat on mahdollista ladata vasta silloin, kun käyttäjä skrollaa niiden kohdalle (tai useimmiten vähän ennen). Tukea ominaisuudelle ollaan integroimassa myös suoraan selaimiin, mutta Safari ei toistaiseksi tue sitä. Jos kuvat on optimoitu asianmukaisesti, lazy loading ei kuitenkaan merkittävästi nopeuta sivua. Ensimmäinen bannerikuva on joka tapauksessa ladattava välittömästi, ja sen jälkeen selaimet osaavat muutenkin ladata kuvat siinä järjestyksessä missä ne näkyvät käyttäjälle. Lazy loading auttaa kuitenkin säästämään kaistaa, kun selain ei lataa sellaisia kuvia joita käyttäjä ei koskaan edes näe.
<figure>
    <pre>
<code>
&lt;img src="shore.jpeg" alt="Ranta" loading="lazy" &gt;
</code>
    </pre>
</figure>

## Responsiiviset kuvat

Oletetaan, että käyttäjä tulee sivuille puhelimella. Tällöin ei ole mitään järkeä näyttää käyttäjälle isolle tietokoneen näytölle suunniteltua kuvaa. Toisaalta jos käyttäjä tulee sivustolle tietokoneella, ei hänelle voi myöskään pientä puhelimelle suunniteltua kuvaa, koska se näyttää suttuiselta. Lisäksi tulee ottaa huomioon näytön pikselitiheys, joka saattaa olla puhelimilla hyvinkin suuri. Onneksi srcset-attribuuttia käytämällä selain osaa ladata useista vaihtoehdoista sopivan kokoisen kuvan. Tällä tavoin on mahdollista pienentää latausaikoja huomattavasti. Kuvia ei kuitenkaan kannata skaalata käsin, vaan se kannattaa jättää sivuston ohjelmiston tehtäväksi. &lt;picture&gt;-elementti taas on tarkoitettu kokonaan eri kuvan näyttämiseen käyttäjälle kontekstista riippuen. Selain voi esimerkiksi näyttää puhelimella kissan, tabletilla koiran ja tietokoneella lehmän. Käytännössä tämä on kuitenkin hyödyllisintä silloin, kun kuvan tavoiteltu rajaus leveällä näytöllä on huomattavan erilainen kuin rajaus kapealla näytöllä. Otetaan esimerkiksi tilanne, jossa näytöllä on leveä banneri jossa on maisema ja oikeassa reunassa on ihminen. Leveällä näytöllä se toimii hyvin, mutta kapealla näytöllä saattaa käydä niin että ihminen rajautuu kokonaan pois kuvasta.  &lt;picture&gt;-elementin avulla kuvasta on mahdollista näyttää tietokoneella leveä versio ja puhelimella toinen versio, jossa ihminen on rajattu kuvan keskelle ja varmasti näkyvillä.

<figure>
    <pre>
<code>
&lt;img 
   alt="Tekstiä" 
   src="medium.jpg" 
   srcset=" 
      small.jpg 640w, 
      medium.jpg 916w, 
      large.jpg 1030w" 
   sizes=" 
      (min-width: 1366px) 916px, 
      (min-width: 1536px) 1030px, 
      100vw" 
&gt;
</code>
    </pre>
</figure>

## Inline-kuvat

Silloin tällöin voi olla tarpeellista ladata kuvat HTML:n mukana eikä vasta sen jälkeen, kun HTML on ladattu. Tämä on mahdollista tehdä muuttamalla kuvat Base64-kirjainjonoksi. Tämä voi olla joskus hyödyllistä, mutta inline-kuva vie noin kolmanneksen enemmän tilaa kuin tavanomainen kuvatiedosto eikä sen käyttö ole yleensä suositeltavaa.

<figure>
    <pre>
<code>
&lt;img
  src="data:image/png;base64,
    iVBORw0KGgoAAAA&lt;!-- paljon tekstiä --&gt;"
    alt="teksti"
&gt;
</code>
    </pre>
</figure>

## Alt-tekstit

Tämän artikkelin img-tageissa on nähty sisällä alt-teksti. Alt-teksti on tekstimuotoinen kuvan sisällöstä ruudunlukuohjelmille ja hakukoneille. Alt-tekstien käyttö parantaa siis sivuston saavutettavuutta ja hakukoneoptimointia. Mitä alt-tekstiin sitten tulisi kirjoittaa? Kuvittele, että ruudunlukuohjelma lukee alt-tekstin sokealle henkilölle ja kirjoita teksti sen mukaan.

## TL;DR

Käytä logoissa ja piirroskuvissa SVG-kuvia, tai jos SVG-versiota ei ole saatavilla niin PNG:tä. Valokuvissa käytä JPEG:tä. Jos verkkosivualustasi osaa luoda kaikista sivuston kuvista WebP-version pitäen JPEG-kuvat varalla sitä tukemattomille selaimille niin se on jees. Muussa tapauksessa saavutettava hyöty jää todennäköisesti melko vähäiseksi vaivaan nähden. GIF-animaatiot tulee ehdottomasti korvata videoilla. Säädä JPEG-kuvien pakkaus sinne 75% tienoille tahi niille main. Skaalaa kuvat sen kokoisiksi kuin ne todellisuudessa verkkosivuilla ovat, ylimääräinen on tilanhaaskausta.