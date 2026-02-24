// React hooks
import { useState, useEffect } from "react";

// Components
import ShinyText from "../components/ShinyText/ShinyText"; // Animated text effect
import Beams from "../components/Beams/Beams"; // Visual background effect

// Social Icons
import imgGithub from "../assets/images/socialIcons/github.png";
import imgInsta from "../assets/images/socialIcons/instagram.png";
import imgLinkedIn from "../assets/images/socialIcons/linkedin.png";
import imgSN from "../assets/images/socialIcons/skyzernetworks.png";

// Language Icons
import cssIcon from "../assets/images/langIcons/css.png";
import htmlIcon from "../assets/images/langIcons/html.png";
import javaIcon from "../assets/images/langIcons/java.png";
import jsIcon from "../assets/images/langIcons/js.png";
import pythonIcon from "../assets/images/langIcons/python.png";
import reactIcon from "../assets/images/langIcons/react.png";

// Example project image
import exampleImg from "../assets/images/snIcons/snLogo.png";

// Component-specific styles
import "./styling/home.css";

export default function Home() {

    // Array of skill objects for the skills section
    const skills = [
        { name: "HTML", icon: htmlIcon, level: 100 },
        { name: "CSS", icon: cssIcon, level: 75 },
        { name: "JavaScript", icon: jsIcon, level: 50 },
        { name: "React", icon: reactIcon, level: 60 },
        { name: "Java", icon: javaIcon, level: 70 },
        { name: "Python", icon: pythonIcon, level: 65 },
    ];

    // Tracks which nav link is currently active (based on scroll)
    const [activeLink, setActiveLink] = useState(null);

    // Nav scroll links
    const scrollLinks = [
        { id: "aboutMe", label: "About Me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" }
    ];

    // Handles smooth scrolling to a section when a nav link is clicked
    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    // Observe sections as the user scrolls to highlight the active link
    useEffect(() => {
        const sections = scrollLinks.map(link => document.getElementById(link.id));

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // Consider section "active" when 50% is visible
        };

        const observerCallback = (entries) => {
            let foundActive = false;
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveLink(entry.target.id);
                    foundActive = true;
                }
            });
            if (!foundActive) {
                setActiveLink(null); // No section is active
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        // Start observing each section
        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        // Cleanup observer on unmount
        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="home-container">
            {/* Background visual effect */}
            <div className="home-background">
                <Beams
                    beamWidth={4}
                    beamHeight={18}
                    beamNumber={30}
                    lightColor="#ffffff"
                    speed={2.9}
                    noiseIntensity={1.95}
                    scale={0.17}
                    rotation={155}
                />
            </div>

            {/* Left side navigation */}
            <nav className="home-nav">
                {/* Title, subtitle, description */}
                <div className="homeNav-titleContainer">
                    <h1 className="homeNav-title">
                        <ShinyText
                            text="Michael Yurachek"
                            speed={10}
                            delay={0}
                            color="#ffffff"
                            shineColor="#646464"
                            spread={90}
                            direction="left"
                            yoyo={false}
                            pauseOnHover={false}
                            disabled={false}
                        />
                    </h1>
                    <h2 className="homeNav-subtitle">Frontend Developer</h2>
                    <p className="homeNav-description">
                        I build clean and responsive web applications for others to enjoy.
                    </p>

                    {/* Smooth scroll navigation */}
                    <div className="homeNav-scrollContainer">
                        {scrollLinks.map((link) => (
                            <div
                                key={link.id}
                                className={`homeNav-scrollContent ${activeLink === link.id ? "active" : ""}`}
                                onClick={() => handleClick(link.id)}
                            >
                                <hr className="scroll-hr"/>
                                <span className="scroll-link">{link.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Social media icons */}
                <div className="homeNav-links">
                    <a href="https://github.com/michaelyurachek" target="_blank" rel="noopener noreferrer" className="homeNav-button">
                        <img src={imgGithub} alt="GitHub" className="navLink-img" draggable={false} />
                    </a>
                    <a href="https://www.instagram.com/michael.yurachek.public/" target="_blank" rel="noopener noreferrer" className="homeNav-button">
                        <img src={imgInsta} alt="Instagram" className="navLink-img" draggable={false} />
                    </a>
                    <a href="https://www.linkedin.com/in/michael-yurachek-a873213b1/" target="_blank" rel="noopener noreferrer" className="homeNav-button">
                        <img src={imgLinkedIn} alt="LinkedIn" className="navLink-img" draggable={false} />
                    </a>
                    <a href="https://www.skyzernetworks.com/" target="_blank" rel="noopener noreferrer" className="homeNav-button">
                        <img src={imgSN} alt="Skyzer Networks" className="navLink-img" draggable={false} />
                    </a>
                </div>
            </nav>

            {/* Main content on the right */}
            <div className="homeContent-container">

                {/* About Me Section */}
                <section className="aboutMe-section" id="aboutMe">
                    <p className="aboutMe-description">
                        <span className="aboutMe-title">About Me:</span><br/>
                        I’m a frontend developer currently pursuing a degree in <span className="highlighted-text">computer science</span>, with a focus on creating clean, intuitive web experiences. 
                        As the founder of <span className="highlighted-text"><a href="https://www.skyzernetworks.com/" target="_blank" rel="noopener noreferrer">Skyzer Networks</a></span>, a small web agency, I design and build websites with attention to both visual design and structured, maintainable architecture.
                        <br/><br/>
                        I’m passionate about turning ideas into interactive, user-friendly web applications and continuously improving my skills through hands-on projects. 
                        Looking ahead, I hope to start my career in the tech industry, contributing to a team where I can <span className="highlighted-text">grow as a developer</span> while helping build high-quality products.
                        <br/><br/>
                        Outside of development, I enjoy exploring new technologies, refining my design skills, and working on projects that challenge me creatively and technically.
                    </p>
                </section>

                {/* Skills Section */}
                <section className="skills-section" id="skills">
                    <h1 className="skills-title">Skills:</h1>
                    <div className="skills-grid">
                        {skills.map((skill, index) => (
                            <div className="skills-card" key={index}>
                                <img src={skill.icon} alt={skill.name} className="skill-img"/>
                                <h3 className="skill-name">{skill.name}</h3>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${skill.level}%` }}></div>
                                </div>
                                <span className="skill-percent">{skill.level}%</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Projects Section */}
                <section className="projects-section" id="projects">
                    <h1 className="projects-title">Featured Projects:</h1>

                    {/* Each projects-card contains the image, content, hashtags, and buttons */}
                    <div className="projects-card">
                        <div className="projects-img-holder">
                            <img src={exampleImg} className="projects-img" />
                        </div>
                        <hr className="projects-hr" />
                        <div className="projects-content-holder">
                            <h1 className="projects-subtitle">Projects Title</h1>
                            <p className="projects-description">A project description to help explain wtf this project is.</p>
                            <ul className="hashtag-holder">
                                <li className="hashtag-item">#hash1</li>
                                <li className="hashtag-item">#hash2</li>
                                <li className="hashtag-item">#hash3</li>
                            </ul>
                            <div className="projects-button-holder">
                                <a className="projects-button ">Live Site</a>
                                <a className="projects-button no-fill">Source Code</a>
                            </div>
                        </div>
                    </div>

                    {/* Example of a flipped project card */}
                    <div className="projects-card card-left">
                        {/* The layout is flipped using CSS flex-direction: row-reverse */}
                        <div className="projects-img-holder">
                            <img src={exampleImg} className="projects-img" />
                        </div>
                        <hr className="projects-hr" />
                        <div className="projects-content-holder">
                            <h1 className="projects-subtitle">Projects Title</h1>
                            <p className="projects-description">A project description to help explain wtf this project is.</p>
                            <ul className="hashtag-holder">
                                <li className="hashtag-item">#hash1</li>
                                <li className="hashtag-item">#hash2</li>
                                <li className="hashtag-item">#hash3</li>
                            </ul>
                            <div className="projects-button-holder">
                                <a className="projects-button ">Live Site</a>
                                <a className="projects-button no-fill">Source Code</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="contact-section" id="contact">
                    <h2 className="contact-title">Get in Touch</h2>
                    <p className="contact-description">
                        I’m always open to discussing new projects or collaborations.  
                        Fill out the form below and it will open your email to send me a message directly.
                    </p>

                    <div className="contact-container">
                        {/* Contact form */}
                        <form
                            className="contact-form"
                            onSubmit={(e) => {
                                e.preventDefault(); // Prevent default form submission

                                // Get values from the form
                                const name = e.target.name.value;
                                const email = e.target.email.value;
                                const message = e.target.message.value;

                                // Encode for URL
                                const subject = encodeURIComponent(`Contact Form Submission from ${name}`);
                                const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);

                                // Gmail compose URL
                                const gmailUrl = `https://mail.google.com/mail/?view=cm&to=michaelyurachek@gmail.com&su=${subject}&body=${body}`;

                                // Open Gmail in a new tab
                                window.open(gmailUrl, "_blank");
                            }}
                        >
                            <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
                            <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
                            <textarea name="message" placeholder="Your Message" className="contact-textarea" required></textarea>
                            <button type="submit" className="contact-button">Send Message</button>
                        </form>

                        {/* Social links alternative */}
                        <div className="contact-socials">
                            <p className="contact-subtitle">Or reach me via:</p>
                            <div className="social-links">
                                <a href="https://github.com/michaelyurachek" target="_blank" rel="noopener noreferrer">GitHub</a>
                                <a href="https://www.linkedin.com/in/michael-yurachek-a873213b1/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                <a href="https://mail.google.com/mail/?view=cm&to=michaelyurachek@gmail.com&su=Hello&body=Hi%20there!" target="_blank" rel="noopener noreferrer">Email</a>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Footer */}
                <footer className="footer-section">
                    <p>© {new Date().getFullYear()} Michael Yurachek</p>
                    <button
                        className="scroll-top-button"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        ↑ Back to Top
                    </button>
                </footer>
            </div>
        </div>
    )
}