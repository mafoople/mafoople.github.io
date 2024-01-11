var headerHTML = '<header><div id="headimage"></div></header><nav><div class="prison"><ul id="navlist"></ul></div></nav>'

var navLinks = [
    {"url": "/index.html", "name": "Home"},
    {"url": "/mafoople/index.html", "name": "Mafoople"},
    {"url": "/magic_mechanics/index.html", "name": "Magic Mechanics"},
    {"url": "/commissions/index.html", "name": "Commissions"},
]

document.getElementById('head').innerHTML = headerHTML
var navContainer = document.getElementById("navlist")
for (var i = 0; i < navLinks.length; i++) {
  var linkItem = document.createElement('li');
  navContainer.appendChild(linkItem);
  
  var link = document.createElement('a');
  link.href = navLinks[i].url;
  link.innerHTML = '<span lang="en">' + navLinks[i].name;

  linkItem.appendChild(link);

  /*
  if (navLinks[i].url === currentPageUrl) {
    link.classList.add('current-page');
  }
  */
}