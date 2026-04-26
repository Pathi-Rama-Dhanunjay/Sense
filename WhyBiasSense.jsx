import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function WhyBiasSense() {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 4, color: '#000000' }}>
                    Why BiasSense
                </Typography>
                <Typography variant="h5" sx={{ color: '#50565e', lineHeight: 1.6, mb: 4 }}>
                    Discover why industry leaders choose BiasSense to accelerate innovation with fully managed, intelligent, and scalable data services.
                </Typography>
                <Typography variant="body1" sx={{ color: '#50565e', lineHeight: 1.8 }}>
                    Our platform is designed to seamlessly integrate with your existing workflows, offering enterprise-grade reliability and compliance out of the box. Whether you are scaling a startup or modernizing a global enterprise, BiasSense delivers the foundation you need.
                </Typography>
            </Container>
        </Box>
    );
}