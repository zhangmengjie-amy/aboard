"use client";
import React, { useState, useEffect, useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import { useHighcharts } from '@app/context/HighchartsContext';
import { getWordMap } from "@app/config/requestConfig";

const MapChart = () => {
    const [mapOptions, setMapOptions] = useState<Highcharts.Options>();
    const mapRef = useRef<any>(null);
    const Highcharts = useHighcharts();

    useEffect(() => {
        const fetchData = async () => {
            mapRef.current = await getWordMap();
            const _mapOptions: any = {
                chart: {
                    map: mapRef.current,
                    height: 550,
                    spacing: 0,
                    margin: 0,
                    borderRadius: "10px",
                },
                credits: {
                    enabled: false
                },
                title: { text: "" },
                legend: {
                    enabled: false
                },
                mapView: {
                    zoom: 2,
                    center: [-3.7038, 40.4168]
                },
                series: [{
                    type: 'tiledwebmap',
                    name: 'TWM Tiles',
                    provider: {
                        type: 'Esri',
                        theme: 'Standard'
                    },
                    color: 'rgba(128,128,128,0.3)',
                    joinBy: ['iso-a2', 'code'],
                    // nullColor: "rgb(242, 239, 233)",
                    // borderColor: "rgb(212, 197, 206)",
                    nullColor: "rgb(217, 220, 230)",
                    borderColor: "#fff",
                    borderWidth: 0.5,

                    tooltip: {
                        valueSuffix: '/km²'
                    },
                    showInLegend: false,

                }, {
                    type: 'mappoint',
                    name: 'Mappoints',
                    marker: {
                        radius: 5,
                        color: "rgba(44, 175, 254, .4)",
                        lineWidth: 5,
                        lineColor: "rgba(44, 175, 254, .2)"
                    },
                    enableMouseTracking: false,
                    states: {
                        inactive: {
                            enabled: false
                        }
                    },
                    dataLabels: {
                        enabled: true,
                        style: {
                            color: "#666"
                        }
                    },
                    data: [{
                        name: 'United States',
                        lat: 39.5,
                        lon: -98.35
                    }, {
                        name: 'Canada',
                        lat: 56.1304,
                        lon: -106.3468
                    }, {
                        name: 'Ukraine',
                        lon: 31.1656,
                        lat: 48.3794
                    }, {
                        name: 'Spain',
                        lon: -3.7038,
                        lat: 40.4168
                    }, {
                        name: 'United Kingdom',
                        lat: 54.7025,
                        lon: -1.1743
                    }]
                }]
            }
            setMapOptions(_mapOptions)
        }
        fetchData();
    }, [])
    return <HighchartsReact constructorType={"mapChart"} highcharts={Highcharts} options={mapOptions} ></HighchartsReact>
}
export default MapChart;
