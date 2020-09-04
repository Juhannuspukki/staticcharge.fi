---
type: "articles"
layout: "single"
title: Mikä on verkkosivu? (osa 1)
tags: Alkeet aloittelijoille
author: Jere Laine
date: 2020-08-10
---

Sir Tim-Berners Lee keksi World Wide Webin vuonna 1989 mutta kouluissa ei opeteta suunnilleenkaan kuinka se toimii. Tämä artikkeli toivottavasti avaa maailmanlaajuisen verkon toimintaa hieman.

Lyhyesti: verkkosivu on yksinkertaisimmillaan tekstitiedosto, joka on jollain toisella tietokoneella. Aika simppeliä, vai mitä?

Ottakaamme esimerkki: kirjoittaessasi osoitepalkkiin vaikkapa https://staticcharge.fi lähettää selain tuossa osoitteessa sijaitsevalle erikoistuneelle tietokoneelle (“palvelimelle”) pyynnön saada kopio sille varastoidusta tekstitiedostosta. Jos kaikki menee kuten pitää, palvelin lähettää tiedoston paluupostissa takaisin sitä pyytäneelle selaimelle. Ihan missä tahansa muodossa tekstitiedoston sisältö ei kuitenkaan voi olla, vaan selaimet ymmärtävät pääasiassa kolmea eri merkintätapaa, jotka ovat…

## HTML, CSS ja Javascript

HTML eli HyperText Markup Language, CSS eli Cascading Style Sheets ja Javascript ovat minkä tahansa verkkosivun peruspilarit. Jos tehdään vertaus luonnolliseen kieleen, niitä voi verrata sanaluokkiin. HTML on vähän kuin substantiivit: se kertoo, mitä elementtejä sivulla on. Tekstiä, kuvia, navigaatiopalkkeja. CSS taas vastaa adjektiiveja. HTML:ään yhdistettynä CSS kertoo millaisia sivun elementit ovat: navigaatiopalkki on ylhäällä ja väriltään harmaa. Javascript puolestaan vastaa verbejä: sen avulla HTML-elementtejä voi esimerkiksi liikuttaa, poistaa ja luoda täysin mielivaltaisesti.

Miltä nämä merkintätavat sitten näyttävät? Muutama esimerkki:

<div class="row">
<div class="col-md-4">
<figure>
<figcaption>HTML-koodia</figcaption>
<pre>
<code>
&lt;!DOCTYPE html&gt;
&lt;html lang="en"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title>Hello world&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Tämä on otsikko&lt;/h1&gt;
  &lt;p&gt;Tämä on kappale&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;

</code>
</pre>
</figure>
</div>
<div class="col-md-4">
<figure>
<figcaption>CSS-koodia</figcaption>
<pre>
<code>
h1 {
  font-size: 3rem;
  text-align: center;
}
p {
  color: red;
}
a {
  text-decoration: none;
}

</code> 
</pre>
</figure>
</div>
<div class="col-md-4">
<figure>
<figcaption>Javascript-koodia</figcaption>
<pre>
<code>
const sqrtOfSum =
  (firstNum, secondNum) => {
  const result =
    Math.sqrt(firstNum +
      secondNum);
  return result;
}
window.alert(sqrtOfSum(5, 6));
</code>
</pre>
</figure>
</div>
</div>

Selain osaa tulkita nämä merkinnät samankaltaiseksi sivuksi, jonka näet edessäsi. Voit kokeilla tätä itse: tee vaikkapa työpöydällesi uusi tekstitiedosto, jonka nimeksi annat index.html. Kopioi tämän jälkeen tuo ylläoleva HTML-koodi ja liitä sen tekstitiedostoon. Tämän jälkeen voit klikata sivua hiiren oikealla näppäimellä ja avata sen verkkoselaimella.

Sivu itsessään on aina HTML-tyyppinen tiedosto, mutta HTML-tiedostossa voi olla viittauksia muihin tiedostoihin, kuten Javascript- ja CSS-tiedostoihin tai esimerkiksi kuviin. HTML-tiedosto siis ladataan aina ensin, ja sen jälkeen palvelimelta haetaan ne tiedostot joihin HTML-tiedosto viittaa. Kokonaisuudessaan HTML-tiedostoja ja niiden mukana tulevaa CSS:ää ja Javascriptiä kutsutaan frontendiksi ja niistä vastaavat frontend-kehittäjät.

## Staattinen ja dynaaminen sivu

Verkkosivut voidaan jakaa karkeasti staattisiin ja dynaamisiin sivuihin. Staattinen sivu (static site) on yksinkertaisin sivutyyppi, ja se toimii täsmälleen samoin kuin ensimmäisessä esimerkissä kuvailtiin. Palvelimelle tulee pyyntö, ja se lähettää takaisin HTML-tiedoston. Koska palvelimen ei tarvitse tehdä mitään ylimääräistä, tämä sivutyyppi on nopein mahdollinen. Samasta syystä staattinen sivu on erittäin halpa ylläpitää.

Sitten joku keksi, että olisi kiva jos verkkosivuilla voisi oikeasti tehdä jotain sen sijaan, että ne ovat vain passiivisesti kulutettavaa sisältöä. Tämä johti dynaamisten (dynamic) verkkosivujen syntyyn. Klassinen dynaaminen sivu toimii siten, että palvelimella ei olekaan enää HTML-tiedostoja valmiina, vaan palvelin luo sellaisen vasta kun joku sellaista pyytää. Tällä oli valtava vaikutus: oli mahdollista valmistaa verkkopalvelu, joka osasi erottaa käyttäjät toisistaan!

Dynaamiseen sivuun kuuluu useimmiten tietokanta tai useampikin. Tietokantoihin on mahdollista varastoida muun muassa käyttäjäkohtaisia tietoja, kuten vaikkapa verkkopankissa pankkitilin saldo tai verkkokaupassa ostoskori. Verkkopankkia käytettäessä homma menee siis hieman yksinkertaistaen näin:

1. Käyttäjä menee selaimella verkkopankin osoitteeseen
2. Palvelin ei tiedä kuka käyttäjä on, joten se vastaa lähettämällä HTML-tiedoston jossa on kaavake. Kaavakkeessa on kenttä käyttäjätunnukselle ja salasanalle.
3. Käyttäjä täyttää kentät ja lähettää kaavakkeen tiedot palvelimelle.
4. Palvelimen ohjelmisto etsii käyttäjätunnuksen ja salasanan vastaavuudet tietokannasta.
5. Jos vastaavuus löytyy, palvelin etsii toisesta tietokannasta pankkitilin saldon ja mahdollisia muita tietoja, koostaa niistä HTML-tiedoston ja lähettää sen takaisin käyttäjälle.

Samaa tekniikkaa alettiin käyttää myös sellaisissa sivuissa, joissa käyttäjiä ei tarvitse erottaa toisistaan. Tällöin saavutettava merkittävä etu on sisällönhallintajärjestelmä (CMS): sivuston muokkaajan ei tarvitse enää osata kirjoittaa HTML-tiedostoja, vaan hän kykenee luomaan sisällön helppokäyttöisellä tekstieditorilla joka tallentaa kaiken tietokantaan automaattisesti. Palvelimen ohjelmakoodi koostaa sitten tämän perusteella käyttäjälle lähetettävän HTML-sivun. Tällaisia sisällönhallintajärjestelmiä ovat esimerkiksi Wordpress ja Drupal.

Dynaamisten sivujen mukana tuli kuitenkin kaksi ei-toivottua sivuvaikutusta: ensiksi, ohjelmakoodin suorittaminen palvelimella vaatii huomattavasti enemmän aikaa ja suorituskykyä kuin pelkkä staattisen sivun lähettäminen. Toiseksi, se teki mahdolliseksi tietokantoihin tai palvelimen ohjelmistoon itseensä kohdistuvat kyberhyökkäykset. 

Palvelimella olevaa ohjelmistoa kutsutaan backendiksi ja ne ovat backend-kehittäjien alaa. Jos ohjelmoija osaa sekä frontend- että backend-kehitystä, häntä sanotaan full stack-kehittäjäksi.

Nykyään on käytössä paljon sivustoja, jotka yhdistelevät näitä lähestymistapoja. Se on kuitenkin toisenlainen tarina, ja kerron asiasta lisää tulevissa artikkeleissa.

## Moderni staattinen sivu

Mistäs ne staattisten sivujen HTML-tiedostot sitten tulevat? Aiemmin vastaus oli, että avattiin tekstieditori ja kirjoitettiin HTML-tiedostot käsin. Epäilemättä lupsakkaa puuhaa, mutta nykyajan työelämä vaatii tehokkuutta.

Nykyään staattisten sivujen valmistaminen tehdään ns. sivugeneraattoreita apuna käyttäen (SSG, static site generator). Generaattori mahdollistaa sisällön pitämisen sisältötiedostoissa samalla kun HTML pidetään HTML-mallitiedostoissa. Mallitiedostot ovat muutoin ihan tavallista HTML:ää mutta niihin on merkitty kohdat joihin sisältötiedostossa oleva sisältö tulee lisätä. Kun generaattorikoodi suoritetaan, se yhdistää mallitiedostot ja sisältötiedostot valmiiksi HTML-sivuiksi. Näin yhden ainoan mallitiedoston tekemällä voi tuottaa sivustolle vaikka tuhat erillistä sivua (jos sisältöä riittää niin paljon). Erotuksena dynaamiseen sivuun joka luo sivun aina kun käyttäjä sellaisen pyytää, sivugeneraattori suoritetaan vain silloin kun sivustoa on jollain tapaa muokattu jonka jälkeen HTML-tiedostot ovat valmiina palvelimella. Generaattorit osaavat nykyisin paljon muutakin, kuten esimerkiksi kuvien automaattisen optimoinnin ja sivukarttojen tekemisen hakukoneita varten.

Viimeaikainen innovaatio on staattisen sivun sisällönhallintajärjestelmä, joka mahdollistaa sisältötiedostojen helpon luomisen, muokkaamisen ja sitä kautta päivitysten julkaisemisen nappia painamalla. Juuri sisällönhallintajärjestelmän puute on ollut aiemmin staattisten sivujen suurin ongelma, mutta nyt kun sellaisia on kehitetty on vaikea perustella dynaamisen sivuntyypin käyttöä esimerkiksi blogialustana tai alustana yrityksen kotisivuille.