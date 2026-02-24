// Import React and necessary modules
import { Link } from "react-router-dom"; // For client-side routing back to the homepage
import React from "react";
import { Helmet } from "react-helmet"; // Allows dynamic changes to the <head>, e.g., page title, meta tags

// Import custom components
import Beams from '../components/Beams/Beams'; // A custom visual effect component (light beams)

// Import CSS specific to this page
import './styling/notFound.css'

// Functional component for the 404 Not Found page
export default function NotFound() {
    return (
        <div className="notFound-container">
            {/* Helmet dynamically sets the page title and meta description for SEO */}
            <Helmet>
                <title>404 | Michael Yurachek</title> 
                <meta name="description" content="Page not found on Michael Yurachek's portfolio." />
            </Helmet>

            {/* Background visual effect */}
            <div className="notFound-background">
                <Beams
                    beamWidth={4}        // Width of each light beam
                    beamHeight={18}      // Height of each beam
                    beamNumber={30}      // Total number of beams
                    lightColor="#ffffff" // Color of the beams (white)
                    speed={2.9}          // Animation speed of the beams
                    noiseIntensity={1.95}// Randomness/noise applied to beams
                    scale={0.17}         // Scale factor for the beam graphics
                    rotation={155}       // Rotation angle of the beams
                />
            </div>

            {/* Main content overlay on top of the background */}
            <div className="notFound-text">
                {/* Page title */}
                <h1 className="notFound-title">404 Page</h1>

                {/* Description text */}
                <p className="notFound-description">
                    Looks like you found my 404 page.<br/>
                    Click below to go back!
                </p>

                {/* Button to redirect user back to home page */}
                <Link to="/" className="redirect-button">
                    CLICK ME!
                </Link>
            </div>
        </div>
    )
}