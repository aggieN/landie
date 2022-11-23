import icon from "../images/Icon.svg";
import image1 from "../images/section-1.jpg";
import image2 from "../images/section-2.png";
import fbIcon from "../images/facebook.svg";
import linkedInIcon from "../images/linkedin.svg";
import twitterIcon from "../images/twitter.svg";
import ytIcon from "../images/youtube.svg";
import instagramIcon from "../images/instagram.svg";

export const NAVIGATION_LINKS = [
  {
    id: 1,
    label: "Home",
    href: "/",
  },
  {
    id: 2,
    label: "About",
    href: "/",
  },
  {
    id: 3,
    label: "Contact",
    href: "/",
  },
];

export const HERO_TITLE = "Introduce Your Product Quickly & Effectively";

export const HERO_TEXT = [
  `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
commodo ligula eget dolor. Aenean massa. Cum sociis natoque
penatibus et magnis dis parturient montes, nascetur ridiculus`,
  `mus.
Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
Nulla consequat massa quis enim.`,
];

export const SECTIONS_CONTENT = [
  {
    id: 1,
    title: "Light, Fast & Powerful",
    paragraphs: [
      `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus`,
      ` 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
    ],
    textWithIcons: [
      {
        id: 1,
        icon,
        title: "Title Goes Here",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      },
      {
        id: 2,
        icon,
        title: "Title Goes Here",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ",
      },
    ],
    image: image1,
  },
  {
    id: 2,
    title: "Light, Fast & Powerful",
    paragraphs: [
      `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus`,
      ` 
    mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
    ],
    image: image2,
  },
];

export const BOTTOM_SECTION_TITLE = "A Price To Suit Everyone";

export const BOTTOM_SECTION_TEXT =
  "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus ";

export const BOTTOM_SECTION_PRICE = "$40";

export const BOTTOM_SECTION_PRICE_TEXT = "UI Design Kit";

export const BOTTOM_SECTION_SMALL_TEXT = "See, One price. Simple.";

export const FOOTER_COMPANY_NAME = "©2020 Yourcompany";

export const SOCIAL_MEDIA_ICONS = [
  fbIcon,
  linkedInIcon,
  twitterIcon,
  ytIcon,
  instagramIcon,
];
