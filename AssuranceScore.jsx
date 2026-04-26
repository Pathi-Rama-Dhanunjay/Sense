import React from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CircularProgress, LinearProgress } from '@mui/material';


export default function AssuranceScore() {
    return (
        <Box sx={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 4, color: '#000000' }}>
                    Assurance Score
                </Typography>
                <Typography variant="h5" sx={{ color: '#50565e', lineHeight: 1.6, mb: 4 }}>
                    Measure, track, and improve the reliability of your data operations with the industry's most comprehensive Assurance Score.
                </Typography>
                <Typography variant="body1" sx={{ color: '#50565e', lineHeight: 1.8 }}>
                    Our proprietary scoring system evaluates your database health, security posture, and compliance standing in real time. We provide actionable insights and automated recommendations to keep your applications running smoothly without manual intervention.
                </Typography>

                {/* Dashboard Section */}
                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {/* Field 1: Overall Score Card */}
                    <Grid item xs={12} md={4}>
                        <Card sx={{ height: '100%', borderRadius: '24px', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.05)' }}>
                            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', p: 4 }}>
                                <Box sx={{ position: 'relative', display: 'inline-flex', mb: 2 }}>
                                    <CircularProgress variant="determinate" value={94} size={140} thickness={4} sx={{ color: '#4299E1' }} />
                                    <Box sx={{ top: 0, left: 0, bottom: 0, right: 0, position: 'absolute', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Typography variant="h3" component="div" sx={{ fontWeight: 700, color: '#171d25' }}>
                                            94
                                        </Typography>
                                    </Box>
                                </Box>
                                <Typography variant="h6" sx={{ fontWeight: 600, color: '#171d25' }}>Overall Score</Typography>
                                <Typography variant="body2" sx={{ color: '#48bb78', fontWeight: 600, mt: 0.5 }}>Excellent</Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    {/* Fields 2-5: Individual Metrics */}
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}>
                            {[
                                { title: 'Database Health', value: '99.99% Uptime', progress: 100, color: '#48bb78' },
                                { title: 'Security Posture', value: '0 Active Threats', progress: 100, color: '#4299E1' },
                                { title: 'Compliance Standing', value: '100% Validated', progress: 100, color: '#805ad5' },
                                { title: 'Performance', value: '24ms Latency', progress: 85, color: '#ecc94b' }
                            ].map((metric, index) => (
                                <Grid item xs={12} sm={6} key={index}>
                                    <Card sx={{ borderRadius: '20px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)' }}>
                                        <CardContent>
                                            <Typography color="text.secondary" gutterBottom sx={{ fontWeight: 500 }}>
                                                {metric.title}
                                            </Typography>
                                            <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: '#171d25' }}>
                                                {metric.value}
                                            </Typography>
                                            <LinearProgress variant="determinate" value={metric.progress} sx={{ height: 8, borderRadius: 4, backgroundColor: '#e2e8f0', '& .MuiLinearProgress-bar': { backgroundColor: metric.color } }} />
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}