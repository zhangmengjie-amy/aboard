"use client";
import React from 'react';
import { Box, Avatar, Typography, Button } from '@mui/material';
import CapsuleTab from "@app/components/common/capsuleTab";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowRightAlt from '@mui/icons-material/ArrowRightAlt';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Grid from '@mui/material/Grid2';
import MapChart from './mapChart';
import ColumnChart from "./columnChart";
import CountriesProgress from './countriesProgress';
import Card from './card';


interface IDashboard {
    name?: string;
}
const Dashboard: React.FC<IDashboard> = () => {
    const LOGO_COLOR = "#1976d2";
    return <Grid container direction={"column"} spacing={"15px"} width={"100vw"}>
        <Grid container sx={{ flex: 1.5 }} borderRadius={6} spacing={"15px"} margin={"0 15px"}>
            <Grid container size={2} justifyContent={"space-between"}>
                <Card name={"Followers"} count={12345} percent={28} icon={<PeopleAltIcon sx={{ width: "36px", height: "36px", padding: "8px", color: LOGO_COLOR, fontSize: "34px", border: "1px solid #eee", borderRadius: 2 }}></PeopleAltIcon>}></Card>
                <Card name={"Likes"} count={12345} percent={28} icon={<FavoriteIcon sx={{ width: "36px", height: "36px", padding: "8px", color: "#ff0000", fontSize: "34px", border: "1px solid #eee", borderRadius: 2 }}></FavoriteIcon>}></Card>
            </Grid>
            <Grid size={4} sx={{ backgroundColor: "#fff", padding: "15px" }} borderRadius={6}>
                <Typography sx={{ color: "#000" }} fontSize={16}>Click-through rate(CTR)</Typography>
                <Grid container sx={{ alignItems: "center" }}>
                    <Typography overflow={"hidden"} textOverflow={"ellipsis"} fontWeight={"bold"} fontSize={"24px"}>12345</Typography>
                    <Button sx={{ marginLeft: "5px", height: "24px", backgroundColor: "rgb(8, 142, 1, .1)", color: "rgb(8, 142, 1)", border: "1px solid rgb(8, 142, 1, .5)", borderRadius: "15px", fontSize: "12px" }}>
                        <ArrowUpwardIcon sx={{ fontSize: "12px", color: "rgb(8, 142, 1)" }}></ArrowUpwardIcon>
                        28%
                    </Button>
                </Grid>
                <ColumnChart></ColumnChart>

            </Grid>
            <Grid size={6} sx={{ backgroundColor: "#fff", padding: "15px" }} borderRadius={6}>

                <Grid container sx={{ alignItems: "flex-start", justifyContent: "space-between" }}>
                    <Grid size={6}><Typography sx={{ color: "#000" }} fontSize={16}>Audience Growth</Typography></Grid>
                    <Grid>
                        <CapsuleTab size="small" showBorder options={[{ name: "This Week", value: "week" }, { name: "This Month", value: "month" }]}></CapsuleTab>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid container sx={{ flex: 2 }} borderRadius={6} spacing={"15px"} margin={"0 15px"} marginBottom={"20px"}>
            <Grid size={9.5} container sx={{ backgroundColor: "#fff", padding: "15px" }} borderRadius={6}>
                <Grid size={9}>
                    <Typography sx={{ color: "#000", marginBottom: "10px" }} fontSize={16}>Audience Location</Typography>
                    <MapChart></MapChart>
                </Grid>
                <CountriesProgress></CountriesProgress>
            </Grid>
            <Grid container direction={"column"} size={2.5} justifyContent={"space-between"}>
                <Grid flex={1} size={12} sx={{ backgroundColor: "#fff", padding: "15px" }} borderRadius={6}>
                    <Typography sx={{ color: "#000" }} fontSize={14}>Sentiment Analysis</Typography>
                </Grid>
                <Grid size={12} sx={{ backgroundColor: "#fff", padding: "15px" }} borderRadius={6}>
                    <Typography sx={{ color: "#000" }} fontSize={14}>Total Customers</Typography>
                    <Box sx={{ display: "flex", direction: "column", alignItems: "center", marginTop: "5px" }}>
                        <Typography overflow={"hidden"} textOverflow={"ellipsis"} fontWeight={"bold"} fontSize={"24px"}>1234556</Typography>
                        <Button sx={{ marginLeft: "5px", fontSize: "12px", height: "24px", backgroundColor: "rgb(8, 142, 1, .1)", color: "rgb(8, 142, 1)", border: "1px solid rgb(8, 142, 1, .5)", borderRadius: "15px" }}>
                            <ArrowUpwardIcon sx={{ fontSize: "12px", color: "rgb(8, 142, 1)" }}></ArrowUpwardIcon>
                            50%
                        </Button>
                    </Box>
                    <Box sx={{ display: "flex" }} marginTop={"10px"}>
                        {
                            [1, 2, 3, 4, 5].map((_, index) => {
                                return <Avatar key={index} alt="" src={`/images/avatar${index}.jpg`} sx={{ width: 30, height: 30, marginLeft: `${index == 0 ? 0 : "-5px"}`, border: "2px solid #fff", zIndex: `${Math.abs(5 - index)}` }}></Avatar>
                            })
                        }
                    </Box>
                    <Button sx={{ height: "26px", marginTop: "10px", backgroundColor: "#fff", color: "#000", border: "1px solid #eee", borderRadius: "15px" }}>
                        <Typography fontSize={12}>{'show all'}</Typography>
                        <ArrowRightAlt sx={{ fontSize: "12px", color: "#000" }}></ArrowRightAlt>
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>
}
export default Dashboard;
