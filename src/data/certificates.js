import cyberSecImg from '../assets/images/cybersecurity.png';
import dataVizImg from '../assets/images/data-viz.png';

export const certificates = [
    {
        id: 1,
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        category: 'Cybersecurity',
        desc: 'This course  introduced me inside the world of cybersecurity.I learned cybersecurity basics to protect my personal digital life and gain insights into the biggest security challenges companies, governments, and educational institutions face today. ',
        link: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US',
        imageUrl: cyberSecImg,
        imageAlt: 'Cisco Cybersecurity Certificate'
    },
    {
        id: 2,
        title: 'Data Visualization',
        issuer: 'freeCodeCamp',
        category: 'Data Visualization',
        desc: 'In this course, I learned about data visualization using D3.js. I also grasp the basics of AJAX and JSON, this tools enables me to work with APIs, which helped me to get my essential data. ',
        link: 'https://www.freecodecamp.org/learn/data-visualization/',
        imageUrl: dataVizImg,
        imageAlt: 'freeCodeCamp Data Visualization Certificate'
    },
];
