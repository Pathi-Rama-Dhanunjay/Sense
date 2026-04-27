import React, { useState } from 'react';
import { Box, Container, Typography, Paper, List, ListItem } from '@mui/material';

// Image import must perfectly match the exact casing of the file for Vercel (Linux)
import aiBiasImage from './assets/ai-bias.png';

export default function WhatIsAIBias() {
    const [activeSection, setActiveSection] = useState(0);

    // Extract items to a variable so we can use them on both sides of the page
    const menuItems = [
        'Bias in AI explained',
        'Importance of addressing AI bias',
        'Where does AI bias come from?',
        'Examples of bias in AI',
        'What are the impacts of AI bias?',
        'How to mitigate bias in AI',
        'Collaborative efforts to mitigate AI bias',
        'Emerging trends in fair AI development'
    ];

    return (
        <Box sx={{ py: 8, mt: 8 }}>
            <Container maxWidth="lg">
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: 6 }}>
                    <Box sx={{ flex: 1, width: '100%' }}>
                        <Typography variant="h2" component="h1" gutterBottom sx={{ fontWeight: 600, color: '#171d25' }}>
                            What is AI Bias?
                        </Typography>
                        <Typography variant="h5" sx={{ color: '#50565e', mb: 4, lineHeight: 1.6 }}>
                            AI bias refers to systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others. 
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#50565e', mb: 2, fontSize: '1.1rem', lineHeight: 1.8 }}>
                            Bias can emerge from many factors, including but not limited to the design of the algorithm or the unintended or unanticipated use or decisions relating to the way data is coded, collected, selected or used to train the algorithm.
                        </Typography>
                        <Typography variant="body1" sx={{ color: '#50565e', fontSize: '1.1rem', lineHeight: 1.8 }}>
                            At BiasSense, we help you detect, measure, explain, and remediate bias in AI models and datasets to govern the entire lifecycle ethically.
                        </Typography>
                    </Box>
                    <Box sx={{ flex: 1, width: '100%' }}>
                        <Box sx={{ width: '100%', borderRadius: '24px', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)' }}>
                            <Box component="img" src={aiBiasImage} alt="AI Bias Illustration" sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </Box>
                    </Box>
                </Box>
            </Container>

            {/* Technical Organizational Chart & Mandates Section */}
            <Container maxWidth="lg" sx={{ mt: { xs: 8, md: 12 } }}>
                <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 6 }}>
                    
                    {/* Left Sidebar (TOC) */}
                    <Box sx={{ width: { xs: '100%', md: '20%' }, flexShrink: 0 }}>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, mb: 2, color: '#171d25', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: 1 }}>
                            What's on this page
                        </Typography>
                        <List sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 0 }}>
                            {menuItems.map((item, index) => (
                                <ListItem key={index} sx={{ p: 0 }}>
                                    <Typography 
                                        onClick={() => setActiveSection(index)}
                                        sx={{ 
                                            fontSize: '0.95rem', 
                                            cursor: 'pointer', 
                                            pl: 2,
                                            py: 0.5,
                                            borderLeft: activeSection === index ? '3px solid #319795' : '3px solid transparent',
                                            color: activeSection === index ? '#319795' : '#50565e',
                                            fontWeight: activeSection === index ? 600 : 400,
                                            transition: 'all 0.2s',
                                            '&:hover': { color: '#319795' }
                                        }}
                                    >
                                        {item}
                                    </Typography>
                                </ListItem>
                            ))}
                        </List>
                    </Box>

                    {/* Right Main Content */}
                    <Box sx={{ width: { xs: '100%', md: '80%' } }}>
                        
                        {/* Dynamic Section Header */}
                        <Typography variant="h4" sx={{ fontWeight: 700, mb: 4, color: '#171d25' }}>
                            {menuItems[activeSection]}
                        </Typography>

                        {/* Dynamic Content Rendering */}
                        {activeSection === 0 ? (
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#171d25' }}>
                                    Understanding AI Bias: Sources and Impact
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748', mt: 4 }}>
                                    Two Primary Sources of Bias:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    <strong>Model Design:</strong> Bias often stems from the developers themselves. The underlying code can inadvertently reflect the personal assumptions or preferences of the programmers, causing the AI to favor specific outcomes.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    <strong>Training Data:</strong> AI learns by identifying patterns in massive datasets. If the historical data contains systemic disparities or societal inequities, the AI will naturally "absorb" and replicate those prejudices.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    The Problem of Scale:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    Machine learning tools operate on a massive scale. Because of this, even a minor bias in the initial training data can be amplified, leading to widespread and significant discriminatory results.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Real-World Consequences:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    <strong>Inaccuracy:</strong> Bias directly reduces the accuracy of AI models, hindering their overall potential and the value they provide to businesses.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    <strong>Social and Economic Harm:</strong> Unaddressed bias can prevent individuals from fully participating in society and the economy, particularly impacting marginalized groups in sensitive areas like hiring, policing, and credit scoring.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    <strong>Erosion of Trust:</strong> Scandals caused by biased outputs foster deep mistrust among women, people of color, the LGBTQ community, and people with disabilities.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    The Business Risk:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    Organizations risk their own success when using systems that produce distorted results. Despite the widespread adoption of AI, many businesses continue to struggle with managing these pervasive ethical challenges.
                                </Typography>
                            </Box>
                        ) : activeSection === 1 ? (
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#171d25' }}>
                                    Why Addressing AI Bias is a Human Necessity
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    We often think of bias as a "tech problem," but it’s actually a human one. Because we all have limited perspectives, the tools we build can accidentally inherit our blind spots. When these tools operate at a global scale, those blind spots can become barriers for real people.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    1. The Risk of "Digital Magnification"
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    Human bias is often subtle, but when it’s programmed into AI, it becomes systematic. Because AI is being woven into the fabric of our daily lives—from how we shop to how we receive healthcare—a small error in judgment can be amplified a million times over.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    2. High Stakes in Sensitive Places
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    In many industries, the cost of a biased algorithm isn't just a technical glitch; it’s a life-altering event:
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>In Healthcare:</strong> A biased diagnostic tool could lead to unequal treatment.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>In Justice:</strong> An algorithm used for parole decisions should never judge a person based on race or gender.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>In the Workplace:</strong> AI used for hiring must be a bridge to opportunity, not a gatekeeper that uses biased language to exclude talented people.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    3. Protecting the Integrity of Innovation
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    The goal of AI is to make our lives more efficient and innovative. However, if a tool creates new forms of discrimination or worsens existing inequalities, it fails its primary mission. To truly innovate, we must ensure our tools are as fair as they are "smart."
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    4. Building Foundations of Trust
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    Public trust is the currency of the digital age. For organizations to succeed, they must practice Responsible AI. This means being transparent about how decisions are made and working tirelessly to ensure that accuracy and fairness come before pure speed.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Our Commitment:
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    Technology should serve everyone, not just the majority. By identifying and mitigating bias today, we ensure that the AI of tomorrow is a tool for progress, equity, and genuine human connection.
                                </Typography>
                            </Box>
                        ) : activeSection === 2 ? (
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#171d25' }}>
                                    Where Does AI Bias Come From?
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    AI doesn’t live in a vacuum; it learns from us. Bias enters the system when the tools we build are fed incomplete or lopsided information. Here is a breakdown of the sources and types of bias that can affect AI fairness.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    The Three Main Pillars of Bias
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    <strong>Data Bias:</strong> This is the most common source. If the "textbook" (training data) we give the AI is missing information or represents only a specific group of people, the AI will graduate with a skewed worldview.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    <strong>Algorithmic Design:</strong> Sometimes the bias is in the math. Even with perfect data, the way an algorithm is programmed to prioritize certain features can lead to unfair advantages or disadvantages.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    <strong>Human Decision-Making:</strong> AI requires human guidance. From labeling images to choosing which data is "important," our own cognitive shortcuts and prejudices can quietly seep into the code.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Common Types of AI Bias You Should Know
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    To build better systems, we have to recognize these specific "blind spots":
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Sample & Selection Bias:</strong> This happens when the training data isn't large or diverse enough. For example, if an AI is trained only on graduates to predict success, it will never understand the factors that cause students to drop out.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Exclusion & Measurement Bias:</strong> This is the "missing piece" problem. It occurs when developers fail to include crucial data points or use incomplete datasets that don't represent the entire population.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Out-Group Homogeneity:</strong> A tendency for developers to see their own group as diverse but view "others" as all the same. This often leads to misclassification or racial bias in software.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Stereotyping & Prejudice:</strong> When societal myths find their way into data—like an AI assuming all doctors are men or all nurses are women—it reinforces harmful status quos instead of reflecting reality.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Confirmation & Recall Bias:</strong> These occur when the AI (or the humans training it) focuses too much on pre-existing beliefs or inconsistent labels, making it unable to spot new, important patterns.
                                    </Typography>
                                </Box>
                            </Box>
                        ) : activeSection === 3 ? (
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#171d25' }}>
                                    AI Bias in Action: Real-World Impacts
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    When AI models are trained on lopsided data, they don't just make "mistakes"—they can reinforce systemic inequalities. Here is how AI bias manifests across different industries today.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    💼 Careers & Finance
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Hiring & Recruitment:</strong> Automated resume scanners can be "coded" to favor specific demographics. For example, using "aggressive" or "masculine" keywords (like "ninja" or "rockstar") in job descriptions or penalizing gaps in employment can inadvertently filter out qualified female candidates and caregivers.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Credit & Lending:</strong> Algorithms may unfairly penalize applicants from low-income or minority zip codes, leading to higher rejection rates for loans and credit, regardless of an individual's actual financial reliability.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    🩺 Health & Education
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Medical Diagnostics:</strong> When AI is trained primarily on one ethnic group, its accuracy drops for everyone else. Studies have shown that some diagnostic systems return lower accuracy results for African-American patients compared to white patients, leading to potential misdiagnosis.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Educational Access:</strong> Admission algorithms that predict "success" often favor students from well-funded school districts, creating a digital barrier for talented students from under-resourced backgrounds.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    ⚖️ Justice & Safety
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Predictive Policing:</strong> Tools designed to identify "crime hotspots" often rely on historical arrest data. This creates a feedback loop that can lead to over-policing in minority neighborhoods based on past patterns rather than current needs.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Facial Recognition:</strong> Many systems show a significant "demographic lag," with much higher error rates when identifying individuals with darker skin tones compared to those with lighter skin tones.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    🎨 Media & Technology
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Image Generation:</strong> Generative AI often defaults to harmful stereotypes. A recent study found that AI-generated images of "CEOs" were overwhelmingly white men, while "service workers" or "criminals" were disproportionately depicted as people of color.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Voice & Language:</strong> Voice assistants frequently struggle with regional accents or non-native speakers, making the technology less usable for millions of people worldwide.
                                    </Typography>
                                </Box>
                            </Box>
                        ) : activeSection === 4 ? (
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#171d25' }}>
                                    What are the impacts of AI bias?
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    When AI bias goes unchecked, the consequences ripple far beyond a simple software error. It creates a "domino effect" that touches every part of our modern world.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    1. Human & Personal Impact
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Health & Safety:</strong> In healthcare, biased tools can lead to incorrect diagnoses or less effective treatment plans for specific groups, directly widening health disparities.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Economic Opportunity:</strong> Bias in hiring or credit algorithms can unfairly block individuals from career growth or financial stability based on demographic "blind spots."
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Psychological Well-being:</strong> Being repeatedly "misunderstood" or unfairly treated by automated systems causes genuine stress, anxiety, and a sense of exclusion from the digital world.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    2. Business & Organizational Impact
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Flawed Decision-Making:</strong> Algorithms with bias produce distorted data. Relying on these "broken mirrors" leads to poor business choices and reduced profitability.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Reputational Damage:</strong> One public instance of AI discrimination can erase years of customer trust and severely damage a brand’s market standing.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Legal & Compliance Risk:</strong> As global regulations catch up to technology, organizations face significant legal consequences for failing to uphold fairness and justice in their automated decisions.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    3. Societal & Ethical Impact
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Deepening Inequality:</strong> AI has the power to amplify small human biases to a massive scale, deepening existing social and economic gaps for marginalized communities.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>The "Stereotype Loop":</strong> AI often reinforces outdated social roles—such as associating specific jobs with only one gender—making it harder for society to move toward genuine equity.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Erosion of Public Trust:</strong> When technology feels "rigged," people lose faith in innovation. Ensuring fairness is essential to keeping the public’s confidence in the future of AI.
                                    </Typography>
                                </Box>
                            </Box>
                        ) : activeSection === 5 ? (
                            <Box>
                                <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: '#171d25' }}>
                                    How to mitigate bias in AI
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    Building fair technology isn’t a one-time fix; it’s a continuous process of checking, balancing, and refining. We use a multi-layered approach to ensure that AI remains a tool for equity.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Pre-Processing: Building a Better Foundation
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    Before an AI model even begins its "education," we look at the data it will learn from. This involves:
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Cleaning & Balancing:</strong> Actively searching for missing perspectives and filling those gaps.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Neutralizing Data:</strong> Removing or adjusting information that could lead to discriminatory shortcuts before the training starts.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Fairness-Aware Design
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    We don't just hope the AI acts fairly—we code fairness into its DNA. By using Fairness-Aware Algorithms, developers can set specific rules and mathematical guidelines that prioritize equitable outcomes. This ensures the model treats different groups with the same level of accuracy and care.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Post-Processing: The Safety Net
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    Even with great data, we must verify the results. Post-processing acts as a final "sanity check" after a decision is made.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 4, lineHeight: 1.8 }}>
                                    <em>Example:</em> A language model might generate a response, but a secondary "screener" instantly checks it to ensure it doesn't contain biased language or harmful stereotypes before the user sees it.
                                </Typography>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Auditing & Human Transparency
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                    Technology should never operate in the dark. We believe in "Human-in-the-Loop" systems where:
                                </Typography>
                                <Box sx={{ pl: 2, mb: 4 }}>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8 }}>
                                        <strong>Regular Audits:</strong> Experts frequently review AI decisions to spot hidden biases.
                                    </Typography>
                                    <Typography variant="body1" sx={{ color: '#50565e', mb: 1, lineHeight: 1.8 }}>
                                        <strong>Transparency:</strong> We aim to understand how an AI reached a conclusion, not just what the conclusion was. This "Explainable AI" allows us to refine the tools and build lasting trust with users.
                                    </Typography>
                                </Box>

                                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: '#2d3748' }}>
                                    Our Closing Commitment
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', mb: 2, lineHeight: 1.8, fontStyle: 'italic' }}>
                                    "Mitigating bias is a journey, not a destination. By combining technical rigor with human empathy, we are committed to building AI systems that don't just work faster, but work better for everyone."
                                </Typography>
                            </Box>
                        ) : (
                            <Paper sx={{ p: { xs: 3, md: 5 }, backgroundColor: '#ffffff', borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 4px 20px rgba(0,0,0,0.03)' }}>
                                <Typography variant="h6" sx={{ color: '#2d3748', mb: 2, fontWeight: 600 }}>
                                    Section Overview
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', lineHeight: 1.8, mb: 3 }}>
                                    Enterprise documentation, policies, and guidelines regarding <strong>{menuItems[activeSection]}</strong> belong in this section.
                                </Typography>
                                <Typography variant="body1" sx={{ color: '#50565e', lineHeight: 1.8 }}>
                                    Please update this placeholder with your organization's specific technical requirements, mitigation strategies, and governance standards.
                                </Typography>
                            </Paper>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}