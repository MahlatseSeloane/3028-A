const MenuData = [   
    {title: "Home", link: "/index.html"},
    {title: "Theory", link: "/TheoryPage/TheoryPageIndex.html"},
    {title: "Creative", link: "/CreativePage/CreativePageIndex.html"}, 
    {title: "About", link: "/AboutPage/AboutPageIndex.html"},
    {title: "Contact", link: "/ContactPage/ContactPageIndex.html"}
]

const SocialMedia = [
    {title: "Email Logo", link: "mailto:Kgothatso'sAdeventures@gmail.com", image: "/Images/svgs/envelope-white.svg"},
    {title: "Facebook Logo", link: "https://www.facebook.com", image: "/Images/svgs/facebook-white.svg"},
    {title: "Instagram Logo", link: "https://www.instagram.com", image: "/Images/svgs/instagram-white.svg"},
    {title: "Twitter Logo", link: "https://twitter.com", image: "/Images/svgs/twitter-black.svg"}
    
]

const menuNav = (ul, identifier) =>{
    for(let item of MenuData)
    {
        const li = document.createElement("li");
        const a = document.createElement("a");

        a.className = identifier;
        a.innerText = item.title;
        a.href = item.link;

        li.appendChild(a);
        ul.appendChild(li);
    }
};

const initialiseMenu = () =>{
    const nav = document.querySelector("nav");
    const ul = document.createElement("ul");
    ul.className = "nav-links";

    const identifier = "nav-link";
    menuNav(ul, identifier);

    nav.appendChild(ul);
};

const initialiseLogo = () => {
    const MobNvav =document.querySelector(".Mobile_Navigation");
    const logo = document.createElement("h1");
    const a = document.createElement("a");
    a.className = "logo";
    a.innerText = "Kgothatso's Adventures";
    a.href = "/index.html";
    logo.appendChild(a);

    MobNvav.appendChild(logo);

    const button = document.createElement("button");
    button.type = "button";
    button.className = "burger-icon";
    
    const burgerImg = document.createElement("img");
    burgerImg.src = "/Images/svgs/bars-solid.svg";
    burgerImg.width = 30;
    burgerImg.height = 30;
    burgerImg.alt = "burger Menu";
    button.appendChild(burgerImg);

    MobNvav.appendChild(button);
}

const MobileNavigationButton = () => {
    const burger = document.querySelector(".burger-icon");
    const a = document.querySelectorAll(".nav-link");

    burger.addEventListener("click", () => {
        for (let i = 0; i < 5; i++)
        {
            a[i].classList.toggle("active");
        }
    }

    );
}

const initialiseFooter = () =>{
    const footer = document.querySelector("footer"); 
    const ulSiteMap = document.createElement("ul");  
    const ulSocialMedia = document.createElement("ul");  

    ulSiteMap.className = "sitemap-links";
    const identifier = "sitemap-link";

    ulSocialMedia.className = "social-media-icons";

    menuNav(ulSiteMap, identifier);
    footer.appendChild(ulSiteMap);

    for (let item of SocialMedia){
        const li = document.createElement("li");
        const a = document.createElement("a");
        const image = document.createElement("img");

        a.className = "social-media-icon";
        a.href = item.link;
        a.target = "_blank";

        image.src = item.image;
        image.width = 30;
        image.height = 30;
        image.alt = item.title;
        
        a.appendChild(image);
        li.appendChild(a);
        ulSocialMedia.appendChild(li);
    }

    footer.appendChild(ulSocialMedia);
    const p = document.createElement("p");
    p.className = "copyright";
    p.innerText = "Copyright © 2021 All Rights Reserved Kgothatso's Adventures";
    footer.appendChild(p);
};

document.addEventListener("DOMContentLoaded", () => initialiseMenu(), initialiseLogo(), initialiseFooter(), MobileNavigationButton ());