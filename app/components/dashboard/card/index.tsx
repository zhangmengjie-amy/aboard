"use client";
import React, { useState, useEffect, useRef, ReactElement } from 'react';
import { Box, Avatar, Typography, Badge, Button } from '@mui/material';
import CapsuleTab from "@app/components/common/capsuleTab";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import { CountriesConfig } from '@app/config/dashboardConfig';
import Grid from '@mui/material/Grid2';



interface ICard {
    name?: string;
    count?: number;
    percent?: number;
    icon?: ReactElement
}
const Card: React.FC<ICard> = ({ icon, name, count, percent }) => {

    return <Grid size={12}  sx={{ display: "flex", flexDirection:"column", justifyContent: "space-around", backgroundColor: "#fff", padding: "15px" }} borderRadius={6}>
    {icon}
    <Typography sx={{ color: "#666" }} fontSize={14} marginTop={1}>{name}</Typography>
    <Grid container sx={{ alignItems: "center" }}>
        <Typography overflow={"hidden"} textOverflow={"ellipsis"} fontWeight={"bold"} fontSize={"24px"}>{count}</Typography>
        <Button sx={{ marginLeft: "5px", height: "24px", backgroundColor: "rgb(8, 142, 1, .1)", color: "rgb(8, 142, 1)", border: "1px solid rgb(8, 142, 1, .5)", borderRadius: "15px", fontSize: "12px" }}>
            <ArrowUpwardIcon sx={{ fontSize: "12px", color: "rgb(8, 142, 1)" }}></ArrowUpwardIcon>
            {percent}%
        </Button>
    </Grid>
</Grid>
}
export default Card;
