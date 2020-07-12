const submission = (event) => {
  event.preventDefault();

  let siteToAnalyze = event.target.elements.searchTerm.value

  if (siteToAnalyze.toLowerCase().indexOf("https://") === -1 && siteToAnalyze.toLowerCase().indexOf("http://") === -1) {
    siteToAnalyze = "https://" + siteToAnalyze
  }

  const url = `https://developers.google.com/speed/pagespeed/insights/?url=${encodeURIComponent(siteToAnalyze)}`

  Object.assign(document.createElement('a'), { target: '_blank', href: url }).click();

}