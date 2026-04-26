import React from 'react';
import { Box, Container, Typography } from '@mui/material';

export default function HowItWorks() {
    return (
        <Box sx={{ py: 8 }}>
            <Container maxWidth="md">
                <Typography variant="h2" component="h1" sx={{ fontWeight: 600, mb: 4, color: '#000000' }}>
                    How it Works
                </Typography>
                <Typography variant="h5" sx={{ color: '#50565e', lineHeight: 1.6, mb: 4 }}>
                    A streamlined process to get your databases deployed, secured, and scaled in minutes.
                </Typography>
                <Typography variant="body1" sx={{ color: '#50565e', lineHeight: 1.8 }}>
                    Simply connect your environment, select your preferred engine—whether it's SQL, PostgreSQL, MySQL, Redis, or Cassandra—and let BiasSense do the heavy lifting. We automatically provision the infrastructure, establish secure connections, and implement continuous backup and monitoring protocols.
                </Typography>
            </Container>
        </Box>
    );
}