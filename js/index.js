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
moreAnchorTags[0].textContent = "Services";
moreAnchorTags[1].textContent = "Product";
moreAnchorTags[2].textContent = "Vision";
moreAnchorTags[3].textContent = "Features";
moreAnchorTags[4].textContent = "About";
moreAnchorTags[5].textContent = "Contact";

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
head4[0].textContent = "features";
head4[1].textContent = "about";
head4[2].textContent = "Services";
head4[3].textContent = "product"
head4[4].textContent = "vision"
head4[5].textContent = "contact"

const para = document.querySelectorAll('p');
para[0].textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[1].textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[2].textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[3].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[4].textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";
para[5].textContent = "123 Way 456 Street Somewhere, USA";
para[6].textContent = "1 (888) 888-8888";
para[7].textContent = "sales@greatidea.io"
para[8].textContent = "Copyright Great Idea! 2018"

const navtext = document.querySelectorAll('a');
navtext[0].style.color = 'green';
navtext[1].style.color = 'green';
navtext[2].style.color = 'green';
navtext[3].style.color = 'green';
navtext[4].style.color = 'green';
navtext[5].style.color = 'green';

const navElem = document.querySelector('header');

const subnav = document.createElement('h2');
subnav.textContent = "extra"
subnav.style.fontSize = "2rem"
navElem.prepend(subnav);

const navel = document.querySelector('header');
const subnavel = document.createElement('p')
subnavel.textContent = "extra extra!"
navel.appendChild(subnavel)