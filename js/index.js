const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

const moreAnchorTags = document.querySelectorAll('a');
moreAnchorTags[0].textContent = siteContent.nav['nav-item-1'];
moreAnchorTags[1].textContent = siteContent.nav['nav-item-2'];
moreAnchorTags[2].textContent = siteContent.nav['nav-item-3'];
moreAnchorTags[3].textContent = siteContent.nav['nav-item-4'];
moreAnchorTags[4].textContent = siteContent.nav['nav-item-5'];
moreAnchorTags[5].textContent = siteContent.nav['nav-item-6'];

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let cta = document.getElementById("cta-img");
cta.setAttribute('src', siteContent["cta"]["img-src"])

let middleImage = document.getElementById("middle-img");
middleImage.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const head1 = document.querySelector('h1')
head1.textContent = "Dom is Awesome";

const button1 = document.querySelector('button')
button1.textContent = "Get Started";

const head4 = document.querySelectorAll('h4');
head4[0].textContent = siteContent.nav['nav-item-1'];
head4[1].textContent = siteContent.nav['nav-item-2'];
head4[2].textContent = siteContent.nav['nav-item-3'];
head4[3].textContent = siteContent.nav['nav-item-4'];
head4[4].textContent = siteContent.nav['nav-item-5'];
head4[5].textContent = siteContent.nav['nav-item-6'];

const para = document.querySelectorAll('p');
para[0].textContent = siteContent['main-content']['features-content'];
para[1].textContent = siteContent['main-content']['about-content'];
para[2].textContent = siteContent['main-content']['services-content'];
para[3].textContent = siteContent['main-content']['product-content'];
para[4].textContent = siteContent['main-content']['vision-content'];
para[5].textContent = siteContent['contact']['contact-h4'];
para[6].textContent = siteContent['contact']['address'];
para[7].textContent = siteContent['contact']['phone'];
para[8].textContent = siteContent['contact']['email'];

const navtext = document.querySelectorAll('a');
  navtext.forEach(aTag =>{
    aTag.style.color = 'green';
  })

const subnav = document.createElement('h2');
subnav.textContent = "extra"
subnav.style.fontSize = "2rem"
navElem.prepend(subnav);

const navel = document.querySelector('header');
const subnavel = document.createElement('p')
subnavel.textContent = "extra extra!"
navel.appendChild(subnavel)