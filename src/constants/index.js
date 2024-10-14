import {
  video,
  Services1,
  Services2,
  Services3,
  Client1,
  Client2,
  Client3,
  Client4,
  Client5,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "services",
    title: "Services",
  },
  {
    id: "work",
    title: "Testimonials",
  },
];

const services = [
  {
    title: "Web/App Development",
    icon: Services1,
  },
  {
    title: "Motion Graphics",
    icon: Services2,
  },
  {
    title: "Content Creation",
    icon: Services3,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: Client1,
  },
  {
    name: "CSS 3",
    icon: Client2,
  },
  {
    name: "JavaScript",
    icon: Client3,
  },
  {
    name: "TypeScript",
    icon: Client4,
  },
  {
    name: "React JS",
    icon: Client5,
  },
];

export const testimonialsData = [
  {
    icon: Client1,
    comment:
      "Contentic Media brethed life into our cloathing brand.Their innovative stratigies boosted brand visiblity,driving a surge in sales highly recommanded for their transformative impact.",
    name: "CEO",
    profession: "Deepak Textile",
  },
  {
    icon: Client2,
    comment:
    "Contentic Media turned our projects into compelling stories, attracting buyers and investors.Their expertise exceeded expectations, elevating our brand presence and driving remarkable growth."
    ,
    name: "Founder",
    profession: "Mithla Homes",
  },
  {
    icon: Client3,
    comment:
    "Contentic Media elevated our travel business, increasing bookings and enhancing our online presence. Their creative campaigns showcased our destinations, driving tangible results."
    ,
    name: "CEO",
    profession: "OJPL",
  },
  {
    icon: Client4,
    comment:
    "Contentic Media revolutionized our taxi services, effectively communicating our reliability and safety commitment. Positive customer response and user base growth highlight their outstanding impact"
    ,
    name: "Founder",
    profession: "Model Cabs",
  },
  {
    icon: Client5,
    comment:
    "Contentic Media provided a fresh perspective for our TVS BIKES marketing, increasing brand loyalty and driving a surge in product inquiries. Their dedication elevated our brand presence and value"
    ,
    name: "Owner",
    profession: "Vicky TVS",
  },
];

export { services, technologies, video };
