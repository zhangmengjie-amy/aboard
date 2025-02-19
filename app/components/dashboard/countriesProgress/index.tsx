"use client";
import React from 'react';
import { Avatar, Typography } from '@mui/material';
import { CountriesConfig } from '@app/config/dashboardConfig';
import Grid from '@mui/material/Grid2';
import { styled } from '@mui/material/styles';

import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';

interface ICountriesProgress {
    name?: string;
}
const CountriesProgress: React.FC<ICountriesProgress> = () => {

    const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
        height: 10,
        borderRadius: 5,
        [`&.${linearProgressClasses.colorPrimary}`]: {
            backgroundColor: theme.palette.grey[200],
            ...theme.applyStyles('dark', {
                backgroundColor: theme.palette.grey[800],
            }),
        },
        [`& .${linearProgressClasses.bar}`]: {
            borderRadius: 5,
            backgroundColor: '#1a90ff',
            ...theme.applyStyles('dark', {
                backgroundColor: '#308fe8',
            }),
        },
    }));
    return <Grid container size={3} paddingTop={"70px"}>
        {
            CountriesConfig.map((item, index) => {
                return <Grid key={index} size={12} height={40} container alignItems={"flex-end"}>
                    <Grid size={2}><Avatar alt="" src={`/images/${item.value}.png`} sx={{ width: 40, height: 40, border: "2px solid #eee" }}></Avatar></Grid>
                    <Grid size={7.5}>
                        <Typography sx={{ color: "#000" }} fontSize={12}>{item.name}</Typography>
                        <BorderLinearProgress sx={{ marginTop: "10px" }} variant="determinate" value={item.percent} />
                    </Grid>
                    <Grid size={2.5}><Typography sx={{ fontSize: "12px" }}>{item.percent}%</Typography> </Grid>
                </Grid>
            })
        }
    </Grid>
}
export default CountriesProgress;
