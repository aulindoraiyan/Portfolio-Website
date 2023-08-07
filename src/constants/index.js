import {
    mobile,
    backend,
    creator,
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
    // meta,
    // starbucks,
    // tesla,
    // shopify,
    // carrent,
    // jobit,
    tripguide,
    threejs,
    background,
    BMS,
    REW,
    Orbit,
    KFSCIS,
    init,
    FIUTeach,

} from "../assets";

export const navLinks = [
    {
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [
    {
        title: "Software Engineer",
        icon: web,
    },
    {

        title: "Web Developer",
        icon: web,
    },
    {

        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
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

const experiences = [
    {
        title: "Software Developer Intern",
        company_name: "Orbit Digital Solutions Ltd",
        icon: Orbit,
        iconBg: "#383E56",
        date: "May 2023 - July 2023",
        points: [
            "Collaborated with a team of 4 web developers to design and develop the Unilevers sample distribution webpage, which facilitated the automated collection of user data, form completion, and sample product distribution. ",
            "Developed the front end of the webpage using React, resulting in a smooth and intuitive user interface and improving user engagement by 40%.",
            "Implemented automation functionality to streamline the process of collecting user data and sending out sample products, resulting in a 50% reduction in manual work and improved efficiency.",
            "Created reports from an Excel database by extracting and organizing relevant data, providing valuable insights to the management team, and enabling data-driven decision-making.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Student Ambassador",
        company_name: "FIU Teach",
        icon: FIUTeach,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
            "Assisted over 250 students by providing course-related materials and supporting them with their academic tasks, resulting in a high level of student satisfaction and improved academic performance.",
            "Managed the program's Resource Room, ensuring that all necessary materials were available and accounted for, and maintaining accurate records in Excel, resulting in a well-organized and efficient operation.",
            "Collaborated with program professors to enhance the educational experience of students by contributing to lesson plans, recruiting new students, attending workshops, and promoting the FIU Teach program, resulting in increased awareness and enrollment.",
        ],
    },
    {
        title: "Computer Science Representative",
        company_name: "Knight Foundaion School of Computing and Information Sciences",
        icon: KFSCIS,
        iconBg: "#383E56",
        date: "Jun 2023 - Present",
        points: [
            "Advocated for the needs and interests of 5000+ computer science students, incorporating their feedback to enhance the curriculum and educational resources.",
            "Serving as the bridge between faculty and student body.",

        ],
    },
    {
        title: "Active Member",
        company_name: "Init",
        icon: init,
        iconBg: "#E6DEDD",
        date: "August 2022 - Present",
        points: [
            "",
            "Active member of Init Web Development Committee.  (Jan 2023 - May 2023)",
            "Assisted in planning, organizing, and executing successful Web Development workshops, resulting in positive participant feedback.",
            "Provided on-site support during workshops, ensuring all technical and administrative needs were met.",
            "Active Member in UPE LEAP. (Aug 2022 - Dec 2022)"
        ],
    },
];

const testimonials = [
    {
        testimonial:
            "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial:
            "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial:
            "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [
    {
        name: "Bank Management System",
        description:
            "An ATM simulator that includes features for creating an account with a random account number and the ability to set or change the PIN. Users can log in using their username and password, deposit money by specifying the amount, and withdraw money within the available account balance. Withdrawal attempts exceeding the account balance are restricted. ",
        tags: [
            {
                name: "Java",
                color: "blue-text-gradient",
            },
            {
                name: "JFrame",
                color: "green-text-gradient",
            },
            {
                name: "MySQL",
                color: "pink-text-gradient",
            },
        ],
        image: BMS,
        source_code_link: "https://github.com/aulindoraiyan/Bank-Management-System",
    },
    {
        name: "Face Recognition Attendance System",
        description:
            "A Face Recognition Attendance System using Python that possesses the capability to accurately identify individuals while simultaneously displaying relevant information about them. For the database, I used Firebase. This project's versatility extends to various fields like security and authentication.",
        tags: [
            {
                name: "Python",
                color: "blue-text-gradient",
            },
            {
                name: "Firebase",
                color: "green-text-gradient",
            },

        ],
        image: background,
        source_code_link: "https://github.com/aulindoraiyan/Face-recognition",
    },
    {
        name: "Homys: A Real Estate website",
        description:
            "A responsive real estate website built entirely with React hooks, modern CSS, and the dynamic motion of framer motion. The website is compatible with both desktop and mobile phones, ensuring a seamless experience for users across all devices",
        tags: [
            {
                name: "ReactJs",
                color: "blue-text-gradient",
            },
            {
                name: "Framer motion",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: REW,
        source_code_link: "https://github.com/aulindoraiyan/Homys-A_RealEstate_Website",
    },
    {
        name: "We Care- A food donation website",
        description:
            "A Food Donation website called We Care using HTML, CSS, and JavaScript. The website has animations and allows donors and those in need to find their nearest food bank or food pantry.",
        tags: [
            {
                name: "JavaScript",
                color: "blue-text-gradient",
            },
            {
                name: "HTML",
                color: "green-text-gradient",
            },
            {
                name: "CSS",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/aulindoraiyan/We_Care",
    },
];


export { services, technologies, experiences, testimonials, projects };