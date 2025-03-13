import {
    mobile,
    backend,
    
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
   
    
    
    
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
     
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Database developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: " Software Engineer",
      icon : meta,
      
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  
  
  // const testimonials = [
  //   {
  //     testimonial:
  //       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //     name: "Sara Lee",
  //     designation: "CFO",
  //     company: "Acme Co",
  //     image: "https://randomuser.me/api/portraits/women/4.jpg",
  //   },
  //   {
  //     testimonial:
  //       "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //     name: "Chris Brown",
  //     designation: "COO",
  //     company: "DEF Corp",
  //     image: "https://randomuser.me/api/portraits/men/5.jpg",
  //   },
  //   {
  //     testimonial:
  //       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //     name: "Lisa Wang",
  //     designation: "CTO",
  //     company: "456 Enterprises",
  //     image: "https://randomuser.me/api/portraits/women/6.jpg",
  //   },
  // ];
  
  const projects = [
    {
      name: "E-Commerce Platform",
      description:
        "E-commerce platform that allows users to browse products, add them to their cart, and complete the checkout process. Includes features like product search, filtering, and sorting.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "mongodb", color: "green-text-gradient" },
        { name: "tailwind", color: "pink-text-gradient" },
      ],
      image: "/Screenshot 2025-03-13 154009.png", // Image path
    },
    {
      name: "Todo App",
      description:
        "Todo app that allows users to create, update, and delete tasks.",
      tags: [
        { name: "react", color: "blue-text-gradient" },
        { name: "restapi", color: "green-text-gradient" },
        { name: "scss", color: "pink-text-gradient" },
      ],
      image: "/Screenshot 2025-03-13 153727.png",
    },
    {
      name: "Food-delivery App",
      description:
        "Mobile app that allows users to order food from local restaurants, track their order status in real-time, and receive notifications when their order is ready for pickup or delivery.",
      tags: [
        { name: "nextjs", color: "blue-text-gradient" },
        { name: "supabase", color: "green-text-gradient" },
        { name: "css", color: "pink-text-gradient" },
      ],
      image: "/1741809011703.png",
    },
  ];
  
  
  export { services, technologies,  projects };