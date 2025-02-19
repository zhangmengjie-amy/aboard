"use client";
import React, { useState, useEffect } from 'react';
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';
import { Box, Avatar, Typography ,Badge , Button} from '@mui/material';
import { HeaderConfig } from "@app/config/headerConfig";
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SettingsIcon from '@mui/icons-material/Settings';
import CapsuleTab from "@app/components/common/capsuleTab";
import SearchIcon from '@mui/icons-material/Search';
interface IHeader {
    name?: string;
}
const Header: React.FC<IHeader> = () => {

    return <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "8px", padding: "20px 0" }}>
        <Typography variant="h6" color="#000" marginLeft={"15px"} sx={{ display: "flex", alignItems: "center" }}><Face2SharpIcon sx={{ color: "#1976d2", fontSize: "28px", marginRight: "10px" }} />Aboard</Typography>
        <CapsuleTab options={HeaderConfig}>
        </CapsuleTab>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginRight: "15px" }}>
            <SearchIcon sx={{ width: "30px", cursor: "pointer", height: "30px", color: "#000", marginRight: "10px", backgroundColor: "#fff", padding: "5px", borderRadius: "15px" }} />
            <Badge variant="dot" color="error"><CircleNotificationsIcon sx={{ width: "30px", cursor: "pointer", height: "30px", color: "#000", backgroundColor: "#fff", padding: "5px", borderRadius: "15px" }} /></Badge>
            <SettingsIcon sx={{ width: "30px", cursor: "pointer", height: "30px", color: "#000", marginLeft: "10px", marginRight: "10px", backgroundColor: "#fff", padding: "5px", borderRadius: "15px" }} />
            <Avatar alt="Remy Sharp" src="/images/avatar.png" />
        </Box>
    </Box>;
}
export default Header;
