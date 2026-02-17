import ShinyText from '../components/ShinyText/ShinyText';
import Beams from '../components/Beams/Beams';
import { useState, useEffect } from "react";
import './styling/home.css';
import imgGithub from '../assets/images/socialIcons/github.png';
import imgInsta from '../assets/images/socialIcons/instagram.png';
import imgLinkedIn from '../assets/images/socialIcons/linkedin.png';
import imgSN from '../assets/images/socialIcons/skyzernetworks.png';

export default function Home() {
    const [activeLink, setActiveLink] = useState(null); // null = none active

    const scrollLinks = [
        { id: "aboutMe", label: "About Me" },
        { id: "skills", label: "Skills" },
        { id: "projects", label: "Projects" }
    ];

    const handleClick = (id) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    useEffect(() => {
        const sections = scrollLinks.map(link => document.getElementById(link.id));

        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.5 // 50% of section must be visible
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
                setActiveLink(null); // none active if no section is in view
            }
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        sections.forEach(section => {
            if (section) observer.observe(section);
        });

        return () => {
            sections.forEach(section => {
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    return (
        <div className="home-container">
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
            <nav className="home-nav">
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
                    <h2 className="homeNav-subtitle">
                        Frontend Developer
                    </h2>
                    <p className="homeNav-description">
                        I build clean and responsive web applications for others to enjoy.
                    </p>
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
            <div className="homeContent-container">
                <section className="aboutMe-section" id="aboutMe">
                    <p className="aboutMe-description">
                        I’m a frontend developer currently pursuing a degree in <span className="highlighted-text">computer science</span>, with a focus on creating clean, intuitive web experiences. 
                        As the founder of <span className="highlighted-text"><a href="https://www.skyzernetworks.com/" target="_blank" rel="noopener noreferrer">Skyzer Networks</a></span>, a small web agency, I design and build websites with attention to both visual design and structured, maintainable architecture.
                        <br/><br/>
                        I’m passionate about turning ideas into interactive, user-friendly web applications and continuously improving my skills through hands-on projects. 
                        Looking ahead, I hope to start my career in the tech industry, contributing to a team where I can <span className="highlighted-text">grow as a developer</span> while helping build high-quality products.
                        <br/><br/>
                        Outside of development, I enjoy exploring new technologies, refining my design skills, and working on projects that challenge me creatively and technically.
                    </p>
                </section>
                <section className="skills-section" id="skills">
                    
                </section>
                <section className="projects-section" id="projects">

                </section>
                <section className="contact-section" id="contact">

                </section>
                <footer className="footer-section">

                </footer>
            </div>
        </div>
    )
}