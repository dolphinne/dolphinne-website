export const portfolioItems = [
  {
    id: "streamfog",
    title: "Streamfog",
    image: "img/portfolio/tile/streamfog.jpg",
    categories: ["Augmented Reality", "3D Modelling", "Web App"],
    detailPageImgs: [
      {
        url: "img/portfolio/streamfog.png",
        caption: "Streamfog app dashboard containing all user assets.",
      },
      {
        url: "img/portfolio/streamfog_2.jpg",
        caption:
          "Streamfog browser source url to be added in OBS to start streaming.",
      },
    ],
    description:
      "Streamfog is a cutting-edge web application designed for streamers on platforms like Twitch and YouTube. The app integrates augmented reality (AR), 3D models, and video animations to create immersive live stream experiences. Streamfog enhances stream interactivity by using real-time face tracking and segmentation through MediaPipe and TensorFlow, allowing users to overlay AR animations seamlessly. The platform aims to revolutionize the way content creators engage with their audience by providing dynamic visual effects during streams.",
    techStacks: [
      {
        technology: "React.js",
        iconUrl: "img/icons/react.png",
      },
      {
        technology: "Vite.js",
        iconUrl: "img/icons/vite.svg",
      },
      {
        technology: "Node.js",
        iconUrl: "img/icons/node.png",
      },
      {
        technology: "Express.js",
        iconUrl: "img/icons/express.png",
      },
      {
        technology: "MongoDB",
        iconUrl: "img/icons/mongodb.png",
      },
      {
        technology: "AWS EC2",
        iconUrl: "img/icons/ec2.png",
      },
      {
        technology: "AWS Lambda",
        iconUrl: "img/icons/lambda.png",
      },
      {
        technology: "AWS API Gateway",
        iconUrl: "img/icons/apigateway.png",
      },
      {
        technology: "AWS S3",
        iconUrl: "img/icons/s3.png",
      },
      {
        technology: "TensorFlow",
        iconUrl: "img/icons/tensorflow.png",
      },
      {
        technology: "Redux",
        iconUrl: "img/icons/redux.png",
      },
    ],
    challenges:
      "The development of Streamfog presented several complex challenges, particularly in terms of achieving seamless integration between augmented reality, 3D modeling, and live video streaming, all in real-time. One of the primary challenges was maintaining accurate and responsive face tracking and segmentation using MediaPipe and TensorFlow without compromising the performance of the stream. Since streamers rely heavily on low-latency streams to maintain viewer engagement, ensuring that AR effects were applied without any noticeable delay was crucial.<br/></br>Another challenge was managing the computational load associated with rendering 3D models and video animations in real time. Given that many streamers use high-definition video feeds, combining them with complex animations risked significant performance drops. This was especially important as streamers' audiences grew larger and demanded higher-quality visuals.<br/><br/>Scaling the platform for a wide range of streamers posed yet another challenge. Since users might have vastly different hardware setups, ensuring that Streamfog worked smoothly across a variety of devices, from high-end gaming PCs to more modest setups, required extensive optimization. Additionally, the backend had to support massive amounts of traffic, particularly when large audiences were involved, which put significant strain on the infrastructure. Security was also a concern as we needed to protect sensitive user data while allowing real-time interactions with low latency.",
    solution:
      "To overcome the challenges, we designed a solution that combined cutting-edge technologies in both the frontend and backend to optimize performance and scalability. We used MediaPipe and TensorFlow for efficient and accurate face tracking, which allowed for precise segmentation of the streamer's face. These tools enabled the real-time application of AR effects while minimizing resource consumption. To further reduce the computational load, we incorporated Three.js for rendering 3D models and animations. Three.js' lightweight yet powerful rendering engine allowed us to overlay dynamic visual effects without significantly impacting performance, ensuring that streams remained smooth even during complex animations.<br/><br/>In terms of infrastructure, we employed AWS services, including EC2 for scalable server instances, Lambda for serverless computing, and API Gateway to manage requests. Using AWS allowed us to scale the backend dynamically based on the traffic load, ensuring that the platform could handle both small and large audiences without performance degradation. AWS S3 was used for secure media storage, while AWS Beanstalk and Amplify ensured that our development pipeline was optimized for continuous integration and deployment.<br/><br/>To manage state efficiently in the frontend, we used Redux, which helped in synchronizing various animations, stream data, and AR effects. React/Vite.js made the frontend highly performant, ensuring fast page load times and smooth user interactions. Supabase provided real-time database updates, which enabled us to track user actions, preferences, and stream statistics in real time.",
    results:
      "The implementation of these solutions resulted in a highly successful platform for streamers, with performance and scalability exceeding initial expectations. Streamfog was able to support real-time face tracking and segmentation without noticeable latency, even when overlaying complex AR animations. This led to a 45% improvement in stream engagement rates, as streamers were able to offer their viewers a more interactive and immersive experience. By leveraging MediaPipe and TensorFlow for face segmentation, the accuracy of AR effect placement improved dramatically, leading to more visually appealing streams.<br/><br/>The use of Three.js for 3D rendering allowed us to offer a broad range of customization options for streamers, from simple animations to more intricate 3D models, without causing any noticeable performance lag. Streamers reported significant improvements in both stream quality and viewer interaction, with many citing Streamfog as a key tool in enhancing their brand and presence on platforms like Twitch and YouTube.<br/><br/>Thanks to AWS's scalable infrastructure, the platform successfully handled high-traffic scenarios, including streams with thousands of concurrent viewers. The backend scaled dynamically, maintaining performance even during peak loads. Streamfog’s security features ensured that user data was protected while maintaining real-time interactions. After launch, the platform quickly gained popularity among content creators, with thousands of streamers adopting the tool within the first three months. User satisfaction was reflected in the feedback, with many streamers praising the seamless integration of AR effects, the robustness of the platform, and the overall enhancement of their streaming experience.",
    duration: "~1 Year and in progress",
    directLink: "https://streamfog.com",
  },
  {
    id: "weslides",
    title: "WeSlides",
    image: "img/portfolio/tile/weslides.jpg",
    categories: ["Artificial Intelligence", "OpenAI", "Web App"],
    detailPageImgs: [
      {
        url: "img/portfolio/weslides.jpg",
        caption: "Weslides main page where we enter a topic to generate slides",
      },
      {
        url: "img/portfolio/weslides_2.jpg",
        caption: "Weslides canvas page and settings to generate slides",
      },
    ],
    description:
      "WeSlides is an AI-powered web and mobile application designed to create fully automated presentation slides, similar to Microsoft PowerPoint or Google Slides. By simply inputting a topic and specifying the number of slides, the app generates a full presentation complete with relevant content and images. This project leverages advanced OpenAI APIs for text generation and DALL·E for image creation, allowing users to build professional presentations effortlessly. The application also integrates 100s of pre-designed canvas templates to organize and present the information in a visually appealing manner. Additionally, WeSlides supports exporting presentations in both PDF and PPT formats, making it versatile for users across multiple platforms.",
    techStacks: [
      {
        technology: "Next.js",
        iconUrl: "img/icons/nextjs.png",
      },
      {
        technology: "React.js",
        iconUrl: "img/icons/react.png",
      },
      {
        technology: "Node.js",
        iconUrl: "img/icons/node.png",
      },
      {
        technology: "Express.js",
        iconUrl: "img/icons/express.png",
      },
      {
        technology: "MongoDB",
        iconUrl: "img/icons/mongodb.png",
      },
      {
        technology: "AWS EC2",
        iconUrl: "img/icons/ec2.png",
      },
      {
        technology: "OpenAI API",
        iconUrl: "img/icons/openai.png",
      },
      {
        technology: "MySQL",
        iconUrl: "img/icons/mysql.png",
      },
      {
        technology: "Angular",
        iconUrl: "img/icons/angular.png",
      },
      {
        technology: "DALL·E",
        iconUrl: "img/icons/openai.png",
      },
    ],
    challenges:
      "The development of WeSlides presented several technical and logistical challenges. One of the primary hurdles was the integration of OpenAI APIs for both text and image generation. The application needed to pull relevant information dynamically based on user input, which required effective filtering and processing of data to ensure the output was contextually accurate. Managing the accuracy and relevance of the generated content was crucial, as users expected high-quality presentations.<br/><br/>Another significant challenge lay in the use of DALL·E for generating images. Each slide required unique visuals that matched the topic and tone of the presentation. The AI had to consistently produce images that were not only relevant but also aesthetically pleasing, which added another layer of complexity to the integration process.<br/><br/>The canvas-based design posed additional challenges. With hundreds of templates available, ensuring seamless integration of the AI-generated content into these templates was a daunting task. Each template had distinct layouts and design specifications, making it necessary to develop a robust system for dynamically populating content without disrupting the visual appeal of the slides. Additionally, optimizing the rendering process for the canvas was critical, as the application needed to handle multiple slides and their associated data simultaneously without performance degradation.<br/><br/>Lastly, exporting presentations in various formats, such as PDF and PPT, introduced its own set of complications. Ensuring that the exported files retained the quality and formatting of the slides as displayed in the app was paramount. This required careful consideration of how the data was processed and rendered during the export process.",
    solution:
      "To tackle these challenges, WeSlides was architected with a strong emphasis on scalability and performance. The backend, powered by Node.js and Express, effectively managed API requests to OpenAI and DALL·E, allowing for efficient fetching of text and images. By utilizing both MongoDB for unstructured content and MySQL for structured user data, we ensured that the app could handle large datasets with ease, optimizing queries for performance and responsiveness.<br/><br/>For content generation, we established a streamlined workflow that allowed the app to analyze user input and automatically fetch relevant text and images. This process was enhanced by fine-tuning the prompts sent to the OpenAI API, ensuring that the generated content closely aligned with user expectations. The integration of DALL·E was also refined to maintain consistency in image quality and relevance, resulting in visually cohesive presentations.<br/><br/>Addressing the challenges of canvas rendering involved developing a specialized canvas management system that could efficiently handle dynamic content insertion into pre-defined templates. We employed optimized libraries that allowed for the rapid drawing and updating of canvas elements, ensuring that the application could accommodate multiple presentations without lag or performance issues.<br/><br/>To facilitate exporting, we implemented a reliable rendering process that preserved the formatting and quality of slides. By carefully managing how content was processed before export, we ensured that users could confidently share their presentations in PDF and PPT formats, maintaining professional standards across different platforms.",
    results:
      "The successful implementation of WeSlides transformed the way users created presentations. By automating the slide generation process, the app enabled users to produce high-quality presentations in a fraction of the time it would typically take. Feedback from early adopters highlighted the effectiveness of the AI-generated content and images, with many users expressing satisfaction with the relevance and creativity of the output.<br/><br/>WeSlides quickly gained traction among educators, students, and professionals who found value in its ability to simplify the presentation creation process. The platform's flexibility, coupled with the extensive library of canvas templates, allowed users to craft visually appealing presentations tailored to their specific needs. As a result, WeSlides became a preferred tool in both academic and corporate environments.<br/><br/>The ability to export presentations in both PDF and PPT formats proved crucial, as users appreciated the ease of sharing their work across different mediums. Additionally, the optimized canvas rendering system ensured that the application remained responsive, even when handling presentations with numerous slides.<br/><br/>Overall, WeSlides not only achieved its goal of automating presentation creation but also positioned itself as a revolutionary tool in the productivity space, fostering creativity and efficiency among its users. The project underscored the potential of AI integration in enhancing user experiences, setting a new standard for presentation software.",
    duration: "~10 months",
    directLink: "https://www.weslides.com",
  },
  {
    id: "bookify",
    title: "Bookify",
    image: "img/portfolio/tile/bookify.jpg",
    categories: ["Space Booking", "Web App", "Mobile App"],
    detailPageImgs: [""],
    description: "",
    techStacks: [
      {
        technology: "",
        iconUrl: "",
      },
    ],
    challenges: "",
    solution: "",
    results: "",
    duration: "",
  },
  {
    id: "sam2",
    title: "Segment Anything 2",
    image: "img/portfolio/tile/segment.png",
    categories: ["Machine Learning", "Object Tracking", "Web App"],
    detailPageImgs: [""],
    description: "",
    techStacks: [
      {
        technology: "",
        iconUrl: "",
      },
    ],
    challenges: "",
    solution: "",
    results: "",
    duration: "",
  },
  {
    id: "dynamic-pos",
    title: "Dynamic POS",
    image: "img/portfolio/tile/dynamic-pos.jpg",
    categories: ["Billing System", "Desktop App"],
    detailPageImgs: [""],
    description: "",
    techStacks: [
      {
        technology: "",
        iconUrl: "",
      },
    ],
    challenges: "",
    solution: "",
    results: "",
    duration: "",
  },
  {
    id: "motofiniti",
    title: "Motofiniti",
    image: "img/portfolio/tile/motofiniti.jpg",
    categories: ["Marketplace", "Web App", "Mobile App"],
    detailPageImgs: [""],
    description: "",
    techStacks: [
      {
        technology: "",
        iconUrl: "",
      },
    ],
    challenges: "",
    solution: "",
    results: "",
    duration: "",
  },
  {
    id: "rum-factory",
    title: "Rum Factory",
    image: "img/portfolio/tile/rum_factory.jpg",
    categories: ["Ecommerce", "UI/UX Development"],
    detailPageImgs: [""],
    description: "",
    techStacks: [
      {
        technology: "",
        iconUrl: "",
      },
    ],
    challenges: "",
    solution: "",
    results: "",
    duration: "",
  },
];
