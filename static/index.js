const submission = (event) => {
  event.preventDefault();

  let siteToAnalyze = event.target.elements.searchTerm.value

  if (siteToAnalyze.toLowerCase().indexOf("https://") === -1 && siteToAnalyze.toLowerCase().indexOf("http://") === -1) {
    siteToAnalyze = "https://" + siteToAnalyze
  }

  const url = `https://developers.google.com/speed/pagespeed/insights/?url=${encodeURIComponent(siteToAnalyze)}`

  Object.assign(document.createElement('a'), { target: '_blank', href: url }).click();

}

// opens and closes the navbar
const navBar = () => {
  const x = document.getElementById("nav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

// opens and closes the chat
const chat = () => {
  const x = document.getElementById("chat");
  if (x.className === "chat") {
    x.className += " open";
  } else {
    x.className = "chat";
  }
}

// adds whatsapp link after page load
window.addEventListener("load", () => {
  setTimeout(() =>
      document.getElementById("whatsapp").href = "https://wa" + "." + "me/358" + "4303" + "4303",
      document.getElementById("telegram").href = "https://t" + "." + "me/ju" + "hannuspukki",
    1000);
});
