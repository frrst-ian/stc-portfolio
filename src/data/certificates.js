import cyberSecImg from '../assets/images/cybersecurity.png';
import dataVizImg from '../assets/images/data-viz.png';
import iotImg from '../assets/images/iot.png';
import mlImg from '../assets/images/ml_art_of_pos.png';
import cvImg from '../assets/images/cv.png';
import blockchainImg from '../assets/images/blockchain.png';
import mlAiImg from '../assets/images/ml_ai_fundamentals.png';
import roboticsImg from '../assets/images/robotics.png';
import mlOnrampImg from '../assets/images/ml_onramp.png';
import braketImg from '../assets/images/braket.png';

export const certificates = [
    {
        id: 1,
        title: 'Introduction to Cybersecurity',
        issuer: 'Cisco Networking Academy',
        category: 'Cybersecurity',
        desc: 'This course introduced me to the significance of cybersecurity in our everyday lives.I learned the basics of protecting my information online and identifying potential security risks and vulnerabilities that hackers can exploit. Further, the course taught me about the basics of risk assessment in an organization to prevent cyber threats. To summarize, the introduction to cybersecurity serves as the primary stepping stone for me to dive into possible careers in cybersecurity.',
        link: 'https://www.netacad.com/courses/introduction-to-cybersecurity?courseLang=en-US',
        imageUrl: cyberSecImg,
        imageAlt: 'Cisco Cybersecurity Certificate'
    },
    {
        id: 2,
        title: 'Data Visualization',
        issuer: 'freeCodeCamp',
        category: 'Data Visualization',
        desc: 'This course from freeCodeCamp taught me to create dynamic data visualization using D3.js or Data-Driven Documents, a javascript library for creating dynamic data visualizations on the web. This is one of the challenging courses that requires patience to finish because it contains a variety of exercises that are necessary to complete to finish it. Further, in today’s world data is all around us but it remains useless if we can’t visualize it, overall, this course taught me to create data visualizations so that I can apply it to create dynamic and attractive data visualizations. ',
        link: 'https://www.freecodecamp.org/learn/data-visualization/',
        imageUrl: dataVizImg,
        imageAlt: 'freeCodeCamp Data Visualization Certificate'
    },
    {
        id: 3,
        title: 'Introduction to IoT and Digital Transformation',
        issuer: 'Cisco Networking Academy',
        category: 'Internet of Things',
        desc: 'This course is one of the courses that I enjoyed because of its quality. The topics in this course that I’ve learned are automation, intent-based networking, cloud, and edge computing. This course also introduced me to Cisco packet tracer, a computer network simulation software. Moreover, this course also gave me an idea of the challenges and opportunities in the Digital World.',
        link: 'https://www.netacad.com/courses/introduction-iot?courseLang=en-US',
        imageUrl: iotImg,
        imageAlt: 'IoT Certificate'
    },
    {
        id: 4,
        title: 'Introduction to ML: Art of the Possible',
        issuer: 'Amazon',
        category: 'Artificial Intelligence',
        desc: 'In this course, I’ve learned the pros and cons of machine learning in businesses and the tech industry. Also, the course taught me the possibilities that Machine Learning will bring in the next decades and the uncertainties and problems that may hinder the growth of ML. In summary, this course served as an introduction to machine learning and gave me an idea of how different businesses utilize machine learning to solve problems in the real world.',
        link: 'https://explore.skillbuilder.aws/learn/courses/11322/introduction-to-machine-learning-art-of-the-possible',
        imageUrl: mlImg,
        imageAlt: 'Machine Learning Certificate'
    },
    {
        id: 5,
        title: 'Computer Vision',
        issuer: 'Kaggle',
        category: 'Artificial Intelligence',
        desc: 'This course is an exciting one since it clearly explains how to create a convolutional neural network or CNN with tensor flow and keras. One of the fundamental concepts I learned from this course is feature extraction and its three basic operations,  filter, detect, and condense; these three operations are crucial in the convolutional layer. In conclusion, the topics/modules from this course have increased my knowledge about computer vision in general.',
        link: 'https://www.kaggle.com/learn/computer-vision',
        imageUrl: cvImg,
        imageAlt: 'Computer Vision Certificate'
    },
    {
        id: 6,
        title: 'Designing Blockchains Solutions',
        issuer: 'Amazon',
        category: 'Blockchain',
        desc: 'Throughout this course from Amazon Skill Builder, I’ve gained some valuable knowledge on designing blockchain solutions using Amazon Managed Blockchain.The vital concept I’ve learned is the two frameworks in the blockchain: Hyperledger Fabric, which offers private data collection; and Ethereum, which is a decentralized blockchain and offers smart contracts. Overall, this course expanded my knowledge about blockchain solutions.',
        link: 'https://explore.skillbuilder.aws/learn/courses/11257/designing-blockchain-solutions-using-amazon-managed-blockchain',
        imageUrl: blockchainImg,
        imageAlt: 'Blockchain Certificate'
    },
    {
        id: 7,
        title: 'Fundamentals of Machine Learning and AI',
        issuer: 'Amazon',
        category: 'Artificial Intelligence',
        desc: 'Through this course from AWS Skill Builder, I explored the connections between the different branches of AI  and the possible real-life application of this emerging technology. Further, I also engaged in some AWS Infrastructure and Technologies used in the Artificial Intelligence industry. Overall, I’ve gained practical insights from this course that will enable me to understand the basic concepts of AI, ML, and deep learning.',
        link: 'https://explore.skillbuilder.aws/learn/courses/19578/fundamentals-of-machine-learning-and-artificial-intelligence',
        imageUrl: mlAiImg,
        imageAlt: 'Machine learning and Artificial Intelligence Certificate'
    },
    {
        id: 8,
        title: 'Introduction to Robotics',
        issuer: 'Amazon',
        category: 'Artificial Intelligence',
        desc: 'In this self-paced digital training from AWS Skill Builder, I’ve learned the evolutions of robotics, identified common robotics challenges, and learned Amazon Services for robot workloads. This course also taught me to test and validate robots through simulations and other relevant concepts in creating common workflows for cloud robotics. Overall, this is an exciting course and It familiarized me with how to test and run robots on the cloud and how the cloud offers a much more efficient development of robotics in the future.',
        link: 'https://explore.skillbuilder.aws/learn/courses/15053/introduction-to-robotics-on-aws',
        imageUrl: roboticsImg,
        imageAlt: 'Robotics Certificate'
    },
    {
        id: 9,
        title: 'Machine Learning Onramp',
        issuer: 'MathWorks',
        category: 'Artificial Intelligence',
        desc: 'This intensive course from MathWorks tackles the step-by-step procedure/process of training a machine learning model. Through the use of MATLAB programming language, a high-level language used by engineers and scientists, I’ve learned the basics of practical machine learning for classification problems using real-world data. To summarize, this course taught me how to train, validate, and improve machine learning models.',
        link: 'https://matlabacademy.mathworks.com/details/machine-learning-onramp/machinelearning',
        imageUrl: mlOnrampImg,
        imageAlt: 'Machine Learning Onramp Certificate'
    },
    {
        id: 10,
        title: 'Amazon Braket Getting Started',
        issuer: 'Amazon',
        category: 'Quantum Computing',
        desc: 'Amazon Braket is  fully managed quantum computing service on Amazon Web Services (AWS).In this course, I’ve learned the process of using Braket to program Quantum Computers and explore the possibilities of Quantum Computing which will be the technology that will revolutionize our future. Further, I’ve also learned the capabilities of Braket and I’ve executed quantum algorithms with Amazon Braket Python SDK.',
        link: 'https://explore.skillbuilder.aws/learn/courses/17097/amazon-braket-getting-started',
        imageUrl: braketImg,
        imageAlt: 'Amazon Braket Getting Started Certificate'
    }

];
