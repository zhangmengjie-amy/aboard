"use client";
import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import { useHighcharts } from '@app/context/HighchartsContext';
import { LineStyle } from '@mui/icons-material';

interface IZoneChart {
    currentDay: number;
}

const ZoneChart: React.FC<IZoneChart> = ({ currentDay }) => {
    const [zoneOptions, setZoneOptions] = useState<Highcharts.Options>();
    const Highcharts = useHighcharts();

    const getCurrentData = () => {
        const currentDate = new Date();
        const timestamps = [];
        const sevenDaysData = [100, 200, 120, 150, 130, 180, 90];
        const weekDaysData = [150, 200, 180, 110, 190, 120, 70, 160, 90, 100, 150, 200, 180, 100];
        const data = currentDay == 7 ? sevenDaysData : weekDaysData;
        for (let i = 0; i < currentDay; i++) {
            const date = new Date(currentDate);
            date.setDate(currentDate.getDate() - i);
            timestamps.push([date.getTime(), data[i]]);
        }
        return timestamps
    }
    useEffect(() => {
        const fetchData = async () => {
            const _zoneOptions: any = {
                chart: {
                    type: "areaspline",
                    height: 200,
                    spacing: 0,
                    marginTop: 20,
                    borderRadius: "10px",
                },
                credits: {
                    enabled: false
                },
                title: { text: "" },
                legend: {
                    enabled: false
                },
                xAxis: {
                    lineWidth: 0,
                    tickLength: 0,
                    enabled: false,
                    title: {
                        text: ""
                    },
                    gridLineWidth: 0,
                    labels: {
                        enabled: false
                    }
                },
                yAxis: {
                    enabled: false,
                    title: {
                        text: ""
                    },
                    gridLineWidth: 1,
                    gridLineDashStyle: "dashdot",
                    labels: {
                        enabled: false
                    }
                },
                series: [{
                    name: 'Temperature in Reykjavík',
                    data: getCurrentData(),
                    zoneAxis: 'x',
                    lineWidth: 4,
                    marker: {
                        lineWidth: 2,
                        lineColor: '#32CD32',
                        fillColor: '#fff'
                    },
                    color: {
                        linearGradient: { x1: 0, x2: 0, y1: 0, y2: 1 },
                        stops: [
                            [0, 'rgb(50, 205, 50, .3)'],
                            [1, '#fff']
                        ]
                    },
                    zones: [{
                        value: new Date()
                    }, {
                        dashStyle: 'Dot'
                    }]
                }]
            }
            setZoneOptions(_zoneOptions)
        }
        fetchData();
    }, [currentDay])
    return <HighchartsReact highcharts={Highcharts} options={zoneOptions} ></HighchartsReact>
}
export default ZoneChart;
