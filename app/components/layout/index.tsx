"use client";
import React from 'react';
import { Box } from '@mui/material';
import Header from '@app/components/header';

interface ILayout {
    children?: React.ReactNode;
}
const Layout: React.FC<ILayout> = ({ children }) => {
    return (<Box sx={{ bgcolor: 'rgba(237, 239, 241)' }} padding={"0px"}>
        <Header></Header>
        {children}
    </Box>)
}
export default Layout;
