import {
  video,
  Services1,
  Services2,
  Services3,
  Services4,
  Client1,
  Client2,
  Client3,
  Client4,
  Client6,
  Client7,
  Client8,
  Client9,
  Client10
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
    title: "Digital Marketing",
    icon: Services2,
    subServices: [
      "Lead Generation",
      "Content Marketing",
      "Google/Meta Ads",
      "Social Media Marketing"
    ]
  },
  {
    title: "Content Creation",
    icon: Services1,
    subServices: [
      "UGC Content",
      "Motion Graphics",
      "Video Production"
    ]
  },
  {
    title: "Video Editing",
    icon: Services3,
    subServices: [
      "Commercial Editing",
      "Social Media Videos",
      "Corporate Videos",
      "Event Coverage"
    ]
  },
  {
    title: "Web Development",
    icon: Services4,
    subServices: [
      "Website Design",
      "E-commerce Solutions",
      "Web Applications",
      "Website Maintenance"
    ]
  }
];

export const testimonialsData = [
  {
    icon: Client2,
    comment:
    "Contentic Media's lead generation and digital services helped us secure over 350+ inquiries in just a month. Their innovative approach ensured we reached the right audience, driving results for our business.",
    name: "Founder & Director",
    profession: "Mithla Homes",
    rating: 4.5
  },
  {
    icon: Client4,
    comment:
    "Contentic Media's efforts brought us 16 high-ticket fleet orders in a short span of 1.5 months. Their lead generation and social media marketing helped us achieve this milestone while boosting our brand presence across digital platforms",
    name: "Founder",
    profession: "Model Cabs",
    rating: 5
  },
  {
    icon: Client10,
    comment:
    "With Contentic Media's lead generation expertise, we successfully booked over 60+ property appointments within one month. Their understanding of our business needs and ability to deliver qualified leads helped us scale and lead the market.",
    name: "Director of Sales",
    profession: "Satyam Properties",
    rating: 4.5
  },
  {
    icon: Client9,
    comment:
    "Contentic Media made lead generation effortless for us. In just six weeks, we secured over 15 high-value construction projects through their targeted campaigns. Their professional approach and insightful strategies set them apart.",
    name: "Business Owner",
    profession: "Archastu Construction",
    rating: 5
  },
  {
    icon: Client8,
    comment:
    "Thanks to Contentic Media's Google Ads and influencer marketing, our brand saw a 40% increase in showroom footfall. Their creative video ads and well-executed campaigns led to attaract the potential customers and create a buzz in the market. They truly elevated our marketing game.",
    name: "Managing Partner",
    profession: "Agarwal's Exclusive",
    rating: 4
  },
  {
    icon: Client7,
    comment:
    "Contentic Media transformed our online presence through social media management, increasing our page followers and delivering creative content and engaging the customers. Their campaigns brought both sales and visibility.",
    name: "General Manager",
    profession: "Mithai Ghar",
    rating: 4
  },
  {
    icon: Client1,
    comment:
      "Working with Contentic Media has been a game-changer for us. Their B2B lead generation and social media marketing strategies helped us to increase our sales every month. The video ads they produced perfectly showcased our products, leading to a significant increase in customer engagement.",
    name: "Chief Executive Officer",
    profession: "Deepak Textile",
    rating: 5
  },
  {
    icon: Client3,
    comment:
    "We trusted Contentic Media for lead generation, and they delivered beyond expectations.Their results-oriented strategies were impressive.",
    name: "Chief Executive Officer",
    profession: "OJPL",
    rating: 4
  },
  {
    icon: Client6,
    comment:
    "The social media and influencer marketing campaigns by Contentic Media generated a great impact in our sales and brand awareness making it great success as CPV for the campaign was less than 0.09 . Their strategies helped us achieve a 70% increase in festive season sales.",
    name: "Marketing Director",
    profession: "Rupam Sarees and Dresses",
    rating: 4.5
  },
];

export { services, video };
