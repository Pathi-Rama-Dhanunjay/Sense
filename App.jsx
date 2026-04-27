import React, { useRef, useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Link, Container, Grid, SvgIcon, IconButton, Menu, MenuItem } from '@mui/material';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom'; // Keep this import
import WhyBiasSense from './WhyBiasSense'; // Keep this import
import AssuranceScore from './AssuranceScore'; // Keep this import
import HowItWorks from './HowItWorks'; // Keep this import
import Features from './Features'; // Keep this import
import Contact from './Contact'; // Keep this import
import WhatIsAIBias from './WhatIsAIBias'; 

function AnimatedMesh({ type }) {
    const meshRef = useRef();

    // Hook into the render loop to slowly rotate the shape continuously
    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += delta * 0.5;
            meshRef.current.rotation.x += delta * 0.2;
        }
    });

    return (
        <mesh ref={meshRef}>
            {type === 'sql' && <boxGeometry args={[1.5, 1.5, 1.5]} />}
            {type === 'cosmos' && <octahedronGeometry args={[1.2]} />}
            {type === 'pg' && <torusGeometry args={[0.8, 0.3, 16, 32]} />}
            {type === 'mysql' && <cylinderGeometry args={[1, 1, 1.5, 32]} />}
            {type === 'redis' && <icosahedronGeometry args={[1.2]} />}
            {type === 'cassandra' && <dodecahedronGeometry args={[1.2]} />}
            <meshStandardMaterial 
                color={
                    type === 'sql' ? '#007FFF' : 
                    type === 'cosmos' ? '#7A00B2' : 
                    type === 'mysql' ? '#BF3475' :
                    type === 'redis' ? '#FFCE61' :
                    type === 'cassandra' ? '#4299E1' :
                    '#ffffff'
                }
                metalness={0.1} 
                roughness={0.85} 
            />
        </mesh>
    );
}

function MiniIsometric({ type, height = '100%' }) {
    return (
        <Box sx={{ height, width: '100%', pointerEvents: 'none' }}>
            <Canvas orthographic camera={{ position: [5, 5, 5], zoom: 40 }}>
                <ambientLight intensity={0.6} />
                <directionalLight position={[10, 10, 5]} intensity={1.5} />
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
                    <AnimatedMesh type={type} />
                </Float>
            </Canvas>
        </Box>
    );
}

function FeatureSection({ title, description, reverse, exploreText, alwaysRow, media, linkTo }) {
    return (
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="center" justifyContent={!media ? 'center' : 'flex-start'} direction={alwaysRow ? (reverse ? 'row-reverse' : 'row') : { xs: 'column', md: reverse ? 'row-reverse' : 'row' }}>
            <Grid item xs={alwaysRow && media ? 6 : 12} md={!media ? 8 : 6} sx={!media ? { textAlign: 'center' } : {}}>
                <Typography variant="h3" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#171d25', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                    {title}
                </Typography>
                <Typography variant="h6" sx={{ color: '#50565e', mb: 4, lineHeight: 1.6, fontWeight: 400 }}>
                    {description}
                </Typography>
                <Button component={RouterLink} to={linkTo || "#"} variant="outlined" size="large" sx={{ borderRadius: '30px', textTransform: 'none', px: 4, py: 1.5, borderColor: '#4299E1', color: '#4299E1', '&:hover': { backgroundColor: 'rgba(66, 153, 225, 0.1)', borderColor: '#3182ce' } }}>
                    {exploreText || `Explore ${title.replace('BiasSense ', '')}`} &rarr;
                </Button>
            </Grid>
            {media && (
                <Grid item xs={alwaysRow ? 6 : 12} md={6}>
                    <Box sx={{ height: { xs: '200px', sm: '250px', md: '300px' }, width: '100%', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(16px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxSizing: 'border-box' }}>
                        {media}
                    </Box>
                </Grid>
            )}
        </Grid>
    );
}

const companies = [
    { name: 'Acme Corp', path: 'M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z' },
    { name: 'Globex', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z' },
    { name: 'Soylent', path: 'M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z' },
    { name: 'Initech', path: 'M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z' },
    { name: 'Umbrella Corp', path: 'M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7z' },
    { name: 'Stark Industries', path: 'M12 2L2 22h20L12 2zm0 3.99L18.53 19H5.47L12 5.99z' },
    { name: 'Wayne Enterprises', path: 'M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm4.24 16L12 15.45 7.77 18l1.12-4.81-3.73-3.23 4.92-.42L12 5l1.92 4.53 4.92.42-3.73 3.23L16.23 18z' },
    { name: 'Massive Dynamic', path: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z' }
];

const featuredProducts = [
    {
        title: 'BiasSense for PostgreSQL',
        desc: 'Innovate faster with a fully managed PostgreSQL database service for open-source developers.',
        type: 'pg'
    },
    {
        title: 'BiasSense for MySQL',
        desc: 'Fully managed community MySQL database service for deploying cloud-native applications.',
        type: 'mysql'
    },
    {
        title: 'BiasSense Cache for Redis',
        desc: 'Power fast, scalable applications with an in-memory data store based on Redis.',
        type: 'redis'
    },
    {
        title: 'BiasSense Managed Cassandra',
        desc: 'Easily build and scale Cassandra apps with a fully managed, serverless database.',
        type: 'cassandra'
    }
];

export default function App() {
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    return (
        <Router>
            <Box sx={{ flexGrow: 1, backgroundColor: '#f8f9fa', minHeight: '100vh', pt: '64px', width: '100%', maxWidth: '100vw', overflowX: 'hidden', boxSizing: 'border-box' }}>
            {/* Glassmorphic Navbar */}
            <AppBar position="fixed" sx={{ background: 'rgba(255, 255, 255, 0.7)', backdropFilter: 'blur(16px)', color: '#171d25', borderBottom: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 4px 16px rgba(0, 0, 0, 0.05)', boxSizing: 'border-box' }}>
                <Toolbar sx={{ px: '2rem !important' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <SvgIcon sx={{ mr: 1.5, color: '#4299E1', fontSize: '2rem' }}>
                            <path d="M12 3c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0 10c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4zm0-5c-4.97 0-9 1.79-9 4s4.03 4 9 4 9-1.79 9-4-4.03-4-9-4z" />
                        </SvgIcon>
                        <Typography variant="h6" component={RouterLink} to="/" sx={{ fontWeight: 'bold', color: '#171d25', textDecoration: 'none' }}>
                            BiasSense
                        </Typography>
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '1.5rem', alignItems: 'center' }}>
                        <Link component={RouterLink} to="/why-biassense" color="#171d25" underline="none" sx={{ fontSize: '0.9rem', transition: 'color 0.2s', '&:hover': { color: '#4299E1' } }}>Why BiasSense</Link>
                        <Link component={RouterLink} to="/assurance-score" color="#171d25" underline="none" sx={{ fontSize: '0.9rem', transition: 'color 0.2s', '&:hover': { color: '#4299E1' } }}>Assurance Score</Link>
                        <Link component={RouterLink} to="/how-it-works" color="#171d25" underline="none" sx={{ fontSize: '0.9rem', transition: 'color 0.2s', '&:hover': { color: '#4299E1' } }}>How it Works</Link>
                        <Link component={RouterLink} to="/features" color="#171d25" underline="none" sx={{ fontSize: '0.9rem', transition: 'color 0.2s', '&:hover': { color: '#4299E1' } }}>Features</Link>
                        <Button component={RouterLink} to="/contact" variant="contained" sx={{ backgroundColor: '#4299E1', color: 'white', borderRadius: '20px', px: 3, py: 0.75, fontSize: '0.9rem', textTransform: 'none', boxShadow: '0 2px 8px rgba(66, 153, 225, 0.3)', transition: 'all 0.3s ease', '&:hover': { backgroundColor: '#3182ce', transform: 'translateY(-2px)' } }}>
                            Contact
                        </Button>
                    </Box>
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton size="large" onClick={handleMobileMenuOpen} color="inherit">
                            <SvgIcon sx={{ color: '#171d25' }}>
                                <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                            </SvgIcon>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Mobile Menu */}
            <Menu
                anchorEl={mobileMoreAnchorEl}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                keepMounted
                transformOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <MenuItem onClick={handleMobileMenuClose}>
                    <Link component={RouterLink} to="/why-biassense" color="#171d25" underline="none" sx={{ width: '100%' }}>Why BiasSense</Link>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                    <Link component={RouterLink} to="/assurance-score" color="#171d25" underline="none" sx={{ width: '100%' }}>Assurance Score</Link>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                    <Link component={RouterLink} to="/how-it-works" color="#171d25" underline="none" sx={{ width: '100%' }}>How it Works</Link>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                    <Link component={RouterLink} to="/features" color="#171d25" underline="none" sx={{ width: '100%' }}>Features</Link>
                </MenuItem>
                <MenuItem onClick={handleMobileMenuClose}>
                    <Button component={RouterLink} to="/contact" variant="contained" sx={{ backgroundColor: '#4299E1', color: 'white', borderRadius: '20px', px: 3, py: 0.75, fontSize: '0.9rem', textTransform: 'none', boxShadow: '0 2px 8px rgba(66, 153, 225, 0.3)', width: '100%' }}>
                        Contact
                    </Button>
                </MenuItem>
            </Menu>

            <Routes>
                <Route path="/" element={
                    <>
            {/* Hero Section */}
            <Box sx={{ minHeight: 'calc(100vh - 64px)', py: { xs: 6, md: 0 }, display: 'flex', alignItems: 'center', background: 'radial-gradient(100% 100% at top left, #ffffff 0%, #ffffff 98%, rgba(67, 189, 255, 0.4) 98.3%, rgba(255, 255, 255, 0.9) 98.7%, #43BDFF96 100%, #43BDFF 141%)', overflow: 'hidden', width: '100%', boxSizing: 'border-box' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
                        <Box sx={{ flex: 1, maxWidth: { md: '70%' } }}>
                            <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 3, fontSize: { xs: '2.5rem', md: '3.5rem' }, color: '#000000' }}>
                                Bias Sense
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.5, color: '#000000' }}>
                                Enterprise Grade AI platform
                            </Typography>
                            <Typography variant="h5" sx={{ mb: 4, fontWeight: 400, lineHeight: 1.5, color: '#000000' }}>
                                Detects-Measures-Explain & Remediate Bias in AI Models, Datasets and Govern entire lifecycle.
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                                {/* Claymorphic Buttons */}
                                <Button variant="contained" sx={{ backgroundColor: 'rgb(65, 153, 224)', color: '#ffffff', borderRadius: '30px', px: 4, py: 1.5, fontSize: '1rem', textTransform: 'none', boxShadow: '0 4px 14px rgba(65, 153, 224, 0.4)', transition: 'all 0.3s ease', '&:hover': { backgroundColor: 'rgb(43, 102, 149)', transform: 'translateY(-2px)', boxShadow: '0 6px 20px rgba(65, 153, 224, 0.6)' } }}>
                                    Start free
                                </Button>
                                <Button variant="outlined" sx={{ backgroundColor: 'transparent', color: 'rgb(65, 153, 224)', borderRadius: '30px', px: 4, py: 1.5, fontSize: '1rem', textTransform: 'none', border: '1px solid rgb(65, 153, 224)', transition: 'all 0.3s ease', '&:hover': { backgroundColor: 'rgba(65, 153, 224, 0.1)', border: '1px solid rgb(65, 153, 224)', transform: 'translateY(-2px)' } }}>
                                    Contact Sales
                                </Button>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Trusted By / Scrolling Bar Section */}
            <Box sx={{ borderTop: '1px solid rgba(0,0,0,0.05)', borderBottom: '1px solid rgba(0,0,0,0.05)', py: 3, backgroundColor: '#ffffff', overflow: 'hidden', display: 'flex', width: '100%', boxSizing: 'border-box' }}>
                <Box sx={{
                    display: 'flex',
                    alignItems: 'center',
                    whiteSpace: 'nowrap',
                    animation: 'marquee 30s linear infinite',
                    '@keyframes marquee': {
                        '0%': { transform: 'translateX(0%)' },
                        '100%': { transform: 'translateX(-50%)' }
                    },
                    '&:hover': {
                        animationPlayState: 'paused'
                    }
                }}>
                    {[1, 2].map((group) => (
                        <Box key={group} sx={{ display: 'flex', alignItems: 'center' }}>
                            {companies.map((company, index) => (
                                <React.Fragment key={`${group}-${index}`}>
                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mx: 4 }}>
                                        <SvgIcon sx={{ color: '#a0aab5', fontSize: '1.8rem' }}>
                                            <path d={company.path} />
                                        </SvgIcon>
                                        <Typography variant="h6" sx={{ fontWeight: 700, color: '#a0aab5', textTransform: 'uppercase', letterSpacing: 2 }}>
                                            {company.name}
                                        </Typography>
                                    </Box>
                                    <Typography variant="h6" sx={{ color: '#d0d5da' }}>
                                        &middot;
                                    </Typography>
                                </React.Fragment>
                            ))}
                        </Box>
                    ))}
                </Box>
            </Box>

            {/* What is AI Bias Section */}
            <Box sx={{ py: { xs: 4, md: 8 }, width: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
                <Container maxWidth="lg">
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
                        <Box sx={{ flex: 1 }}>
                            <Typography variant="h3" component="h3" sx={{ fontWeight: 600, mb: 2, color: '#171d25', fontSize: { xs: '2rem', md: '2.5rem' } }}>
                                What is AI bias?
                            </Typography>
                            <Typography variant="h6" sx={{ color: '#50565e', mb: 4, lineHeight: 1.6, fontWeight: 400 }}>
                                Addressing AI bias is critical to ethical innovation. By identifying the systematic discrimination often found in AI systems, we can prevent technology from reinforcing existing biases or amplifying discrimination, prejudice, and stereotyping.
                            </Typography>
                            <Button 
                                component={RouterLink} 
                                to="/what-is-ai-bias" 
                                onClick={() => window.scrollTo(0, 0)}
                                variant="outlined" 
                                size="large" 
                                sx={{ borderRadius: '30px', textTransform: 'none', px: 4, py: 1.5, borderColor: '#4299E1', color: '#4299E1', '&:hover': { backgroundColor: 'rgba(66, 153, 225, 0.1)', borderColor: '#3182ce' } }}
                            >
                                Explore What is AI bias &rarr;
                            </Button>
                        </Box>
                        <Box sx={{ flex: 1, width: '100%' }}>
                            <Box sx={{ height: { xs: '200px', sm: '250px', md: '300px' }, width: '100%', background: 'rgba(255, 255, 255, 0.6)', backdropFilter: 'blur(16px)', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 1)', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', boxSizing: 'border-box' }}>
                                <Box component="img" src="https://placehold.co/800x600/4299E1/FFFFFF/png?text=AI+Bias+Illustration" alt="AI bias illustration" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* Products Grid Section */}
            <Box sx={{ py: { xs: 4, md: 8 }, width: '100%', overflowX: 'hidden', boxSizing: 'border-box' }}>
                <Container maxWidth="lg">
                    <Typography variant="h4" component="h2" sx={{ fontWeight: 600, mb: 2, color: '#171d25', textAlign: 'center' }}>
                        Featured products
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 8, color: '#50565e', maxWidth: '800px', fontSize: '1.1rem', mx: 'auto', textAlign: 'center' }}>
                        Discover our portfolio of secure, enterprise-grade, fully managed database services that support open-source engines and modern applications.
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                        {featuredProducts.map((product, index) => (
                            <FeatureSection 
                                key={index}
                                title={product.title}
                                description={product.desc}
                                reverse={index % 2 !== 0}
                                media={<MiniIsometric type={product.type} height="100%" />}
                            />
                        ))}
                    </Box>
                </Container>
            </Box>
                    </>
                } />
                <Route path="/why-biassense" element={<WhyBiasSense />} />
                <Route path="/assurance-score" element={<AssuranceScore />} />
                <Route path="/how-it-works" element={<HowItWorks />} />
                <Route path="/features" element={<Features />} />
                <Route path="/what-is-ai-bias" element={<WhatIsAIBias />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>

            </Box>
        </Router>
    );
}