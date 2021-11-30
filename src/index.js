const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "mocks/img/logo.png",
    "cta-img": "mocks/img/cta.png",
    "accent-img": "mocks/img/accent.png",
  },
};

console.log('project wired!')


const navA = document.querySelector('nav a');
const navImg = document.querySelector('nav img');
const ctaH = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('.cta img');
const mainImg = document.querySelector('.main-content img')

//Header & Nav Bar
const firstSectionA1 = document.querySelector('nav a:nth-of-type(1)');
const firstSectionA2 = document.querySelector('nav a:nth-of-type(2)');
const firstSectionA3 = document.querySelector('nav a:nth-of-type(3)');
const firstSectionA4 = document.querySelector('nav a:nth-of-type(4)');
const firstSectionA5 = document.querySelector('nav a:nth-of-type(5)');
const firstSectionA6 = document.querySelector('nav a:nth-of-type(6)');
const firstSectionImage = document.querySelector('header img');

//Main Section 
const firstSectionDiv1 = document.querySelector('.text-content:nth-of-type(1) p');
const firstSectionDiv1H = document.querySelector('.text-content:nth-of-type(1) h4');
const firstSectionDiv2 = document.querySelector('.text-content:nth-of-type(2) p');
const firstSectionDiv2H = document.querySelector('.text-content:nth-of-type(2) h4');
const firstSectionDiv3 = document.querySelector('.text-content:nth-of-type(3) p');
const firstSectionDiv3H = document.querySelector('.text-content:nth-of-type(3) h4');
const firstSectionDiv4 = document.querySelector('.text-content:nth-of-type(4) p');
const firstSectionDiv4H = document.querySelector('.text-content:nth-of-type(4) h4');
const firstSectionDiv5 = document.querySelector('.text-content:nth-of-type(5) p');
const firstSectionDiv5H = document.querySelector('.text-content:nth-of-type(5) h4');

//Second Section
const secondSectionH = document.querySelector('.contact h4');
const secondSectionp1 = document.querySelector('.contact p:nth-of-type(1)');
const secondSectionp2 = document.querySelector('.contact p:nth-of-type(2)');
const secondSectionp3 = document.querySelector('.contact p:nth-of-type(3)');

//Footer
const footer = document.querySelector('footer a');

//Nav Bar
firstSectionA1.className = 'italic';
firstSectionA1.textContent = siteContent["nav"]["nav-item-1"];
firstSectionA2.className = 'italic';
firstSectionA2.textContent = siteContent["nav"]["nav-item-2"];
firstSectionA3.className = 'italic';
firstSectionA3.textContent = siteContent["nav"]["nav-item-3"];
firstSectionA4.className = 'italic';
firstSectionA4.textContent = siteContent["nav"]["nav-item-4"];
firstSectionA5.className = 'italic';
firstSectionA5.textContent = siteContent["nav"]["nav-item-5"];
firstSectionA6.className = 'italic';
firstSectionA6.textContent = siteContent["nav"]["nav-item-6"];
firstSectionImage.src = siteContent["images"]["logo-img"];

//cta
ctaH.textContent = siteContent["cta"]["h1"];
ctaButton.textContent = siteContent["cta"]["button"];
ctaImg.src = siteContent["images"]["cta-img"];

//main-content
firstSectionDiv1.textContent = siteContent["main-content"]["features-h4"];
firstSectionDiv1H.textContent = siteContent["main-content"]["features-content"];
firstSectionDiv2.textContent = siteContent["main-content"]["about-h4"];
firstSectionDiv2H.textContent = siteContent["main-content"]["about-content"]
firstSectionDiv3.textContent = siteContent["main-content"]["services-h4"];
firstSectionDiv3H.textContent = siteContent["main-content"]["services-content"]
firstSectionDiv4.textContent = siteContent["main-content"]["product-h4"];
firstSectionDiv4H.textContent = siteContent["main-content"]["products-content"]
firstSectionDiv5.textContent = siteContent["main-content"]["vision-h4"];
firstSectionDiv5H.textContent = siteContent["main-content"]["vision-content"]