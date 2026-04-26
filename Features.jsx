import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function Features() {
    return (
        <Box sx={{ minHeight: 'calc(100vh - 64px)', display: 'flex', alignItems: 'center', py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 4, color: '#000000' }}>
                    Platform Features
                </Typography>
                <Typography variant="h5" sx={{ color: '#50565e', lineHeight: 1.6, mb: 4 }}>
                    Everything you need to run mission-critical applications at scale.
                </Typography>
                <Typography variant="body1" sx={{ color: '#50565e', lineHeight: 1.8 }}>
                    • Fully managed patching, updates, and maintenance<br />
                    • Built-in high availability and disaster recovery<br />
                    • Enterprise-grade security and compliance<br />
                    • Intelligent performance tuning and query optimization<br />
                    • Seamless integration with major cloud providers
                </Typography>
            </Container>
        </Box>
    );
}