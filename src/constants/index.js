import { gallery, people, stocks, emotion, book, ux } from "../assets/images";
import { photo1, photo2 } from "../assets/images";
import { vasari, imateria, venice, sentiment, yolo } from "../assets/images";
import {
  contact,
  css,
  git,
  github,
  html,
  javascript,
  linkedin,
  react,
  python,
  sql,
  csharp,
  figma,
  flask,
  freecad,
  jupyter,
  mathematica,
  streamlit,
  vscode,
  wordpress,
  pytorch,
  tensorflow,
  opencv,
} from "../assets/icons";

export const photos = [
  {
    src: photo2,
    alt: "June at graduation",
  },
  {
    src: photo1,
    alt: "June in St. Moritz",
  },
];

export const skills = [
  {
    imageUrl: python,
    name: "Python",
    type: "Backend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: sql,
    name: "Sql",
    type: "Database",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: streamlit,
    name: "Streamlit",
    type: "Frontend",
  },
  {
    imageUrl: flask,
    name: "Flask",
    type: "Backend",
  },
  {
    imageUrl: jupyter,
    name: "Jupyter",
    type: "Tool",
  },
  {
    imageUrl: pytorch,
    name: "Pytorch",
    type: "ML",
  },
  {
    imageUrl: tensorflow,
    name: "Tensorflow",
    type: "ML",
  },
  {
    imageUrl: opencv,
    name: "Opencv",
    type: "ML",
  },
  {
    imageUrl: vscode,
    name: "Vscode",
    type: "Tool",
  },
  {
    imageUrl: figma,
    name: "Figma",
    type: "Design",
  },
  {
    imageUrl: freecad,
    name: "Freecad",
    type: "Design",
  },
  {
    imageUrl: wordpress,
    name: "Wordpress",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Paintings / Photos Geolocation",
    key_skills: "Python, TensorFlow, Keras, Streamlit, Data Annotation",
    icon: gallery,
    iconBg: "#FFFFFF",
    date: "Jan. 2021",
    points: [
      "Utilized deep learning models to predict the geographical origins of paintings and photos of Venice.",
    ],
  },
  {
    title: "People Counting in Real-Time",
    key_skills: "Python, OpenCV, Caffe",
    icon: people,
    iconBg: "#FFFFFF",
    date: "Jan. 2021",
    points: [
      "Evaluated two object detection and tracking models, Yolo and SSD, for real-time people counting.",
      "This project was part of the ProCam initiative led by MMSPG, under the supervision of Prof. Touradj Ebrahimi.",
    ],
  },
  {
    title: "Time Series Analysis",
    key_skills: "Python, Scikit-learn, Matplotlib, Seaborn",
    icon: stocks,
    iconBg: "#FFFFFF",
    date: "Jan. 2021",
    points: [
      "Conducted time series analysis to predict medical company stock prices during Covid-19.",
    ],
  },
  {
    title: "Sentiment Analysis of Social Media Data",
    key_skills: "Python, Twitter(X) API",
    icon: emotion,
    iconBg: "#FFFFFF",
    date: "Jun. 2021",
    points: [
      "Conducted sentiment analysis to evaluate public attitudes towards Covid vaccines using Twitter(X) data.",
    ],
  },
  {
    title: "Quantifying Vasari",
    key_skills: "R, Rolling Stylometry",
    icon: book,
    iconBg: "#FFFFFF",
    date: "Jun. 2021",
    points: [
      "Employed authorship verification technique on Lives of the Most Excellent Painters, Sculptors and Architects.",
    ],
  },
  {
    title: "imateria: UX Design for Reusable Materials",
    key_skills: "Figma, Miro",
    icon: ux,
    iconBg: "#FFFFFF",
    date: "Jan. 2023",
    points: [
      "Designed the UX/UI for an app prototype, aimed at making second-hand building materials more accessible and appealing through AI recommendations and AR technology for creative and sustainable reuse.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/YourGitHubUsername",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/zijun-c-a93394170/",
  },
];

export const projects = [
  {
    name: "Paintings / Photos Geolocation",
    previewImageUrl: venice,
    description: [
      "Travelling is nowadays a universal hobby. There are many platforms like Instagram and Flickr for people to post their travel photos and share with strangers. With geo information of the posts provided by bloggers, other users can search pictures in a specific location and decide if they want to go travel there. But how about seeing an amazing picture without location indicated? We hope to come up with a solution that can locate an image on map so that if someone find a gorgeous picture without geo information, he or she can use our method to find the location of the place and plan a trip there.",
      "The scale is restricted to Venice.",
    ],
    link: "https://github.com/Linyhazel/FDHProject",
  },
  {
    name: "People Counting in Real-Time",
    previewImageUrl: yolo,
    description: [
      "During the peak of the COVID-19 pandemic, monitoring public spaces became more critical than ever, as crowd management and social distancing were essential to minimizing virus transmission. This real-time people counting application evaluated two widely used object detection and tracking models, YOLO and SSD. By accurately detecting and counting individuals in real time across various real-world scenarios, the solution aimed to provide actionable insights for safe occupancy control in public spaces, addressing a vital challenge during the pandemic.",
      "This project was part of the ProCam initiative at the MMSPG lab at EPFL, under the supervision of Prof. Touradj Ebrahimi.",
    ],
    link: "https://www.epfl.ch/labs/mmspg/procam/",
  },
  {
    name: "Quantifying Vasari",
    previewImageUrl: vasari,
    description: [
      "Was Vasari the author of the Lives of the most excellent painters, sculptors and architects?",
      "The second edition of the Lives published in 1568 is a huge investigation work that gathers a great amount of information about the lives of who Vasari considered the best artists at that time. If many of them were Florentin, they were also past artists and the work would have required investigating and comparing several sources of information. Then the nature and the workload of this investigation naturally questions the real process of writing: was Vasari the only one to write it?",
    ],
    link: "https://github.com/Anna-S0phia/QuantifyVasari",
  },
  {
    name: "Sentiment Analysis of Social Media Data",
    previewImageUrl: sentiment,
    description: [
      "To explore the attitudes of different geographic regions of the United States towards COVID-19 vaccines, and the attitudes towards COVID-19 vaccines from different companies, we use a week of US Tweet to analyze the sentiment positive level in the two dimensions and explore the reasons behind the phenomenon.",
      "We have some interesting findings, such as Pfizer has lower positive level in that week compared with AstraZeneca.",
    ],
    link: "https://drive.google.com/file/d/17RWnRRrD6rMMubCkT8SJuYDtcrzrUu94/view?usp=sharing",
  },
  {
    name: "imateria: UX Design for Reusable Materials",
    previewImageUrl: imateria,
    description: [
      "According to the Swiss Federal Office for the Environment, the highest waste generator is the construction industry of which a fifth comes from the demolition of buildings and mobility infrastructures. Approximatively 70% of deconstruction materials are recycled. How can we keep valuable building materials in the cycle and create a sustainable use of secondary materials? The project aims to facilitate the acquiring of these materials that are piling up in warehouses with no second chance in view.",
    ],
    link: "https://circularcity2022.wordpress.com/2022/12/16/imateria/?fbclid=IwZXh0bgNhZW0CMTEAAR1VsKeKM1fQMVra9y3MPBNQBf1pC9EW1IdYDmoedIGlLC0XjdlNas1l-lU_aem_7cA9w_c7jmS-TzaFnAJR_g",
  },
];
