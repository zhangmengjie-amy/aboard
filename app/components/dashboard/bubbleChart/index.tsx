"use client";
import React, { useState, useEffect } from 'react';
import HighchartsReact from 'highcharts-react-official';
import 'highcharts/modules/exporting';  // 如果需要导出功能，可以引入
import 'highcharts/modules/solid-gauge';
import { useHighcharts } from '@app/context/HighchartsContext';

const BubbleChart: React.FC = () => {
    const [bubbleOptions, setBubbleOptions] = useState<Highcharts.Options>();
    const Highcharts = useHighcharts();

    const getRandomColor = () => {
        const colors = Highcharts.getOptions().colors;  // 获取 Highcharts 默认颜色数组
        const randomIndex = Math.floor(Math.random() * (colors?.length ?? 0));
        return colors?.[randomIndex];
    };

    useEffect(() => {
        const fetchData = async () => {
            const _bubbleOptions: any = {
                chart: {
                    type: 'bubble',
                },
                title: {
                    text: ''
                },
                credits: {
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
                    gridLineWidth: 0,
                    labels: {
                        enabled: false
                    }
                },
                legend: {
                    enabled: false,
                },
                series: [{
                    name: "one",
                    data: [
                        [9, 81, 63],
                        [98, 5, 89],
                        [51, 50, 73],
                        [41, 22, 14],
                        [58, 24, 20],
                        [78, 37, 34],
                        [55, 56, 53],
                        [18, 45, 70],
                        [42, 44, 28],
                        [3, 52, 59],
                        [31, 18, 97],
                        [79, 91, 63],
                        [93, 23, 23],
                        [44, 83, 22]
                    ],
                    marker: {
                        lineWidth: 0.5,
                        lineColor: "#fff",
                        fillColor: {
                            radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                            stops: [
                                [0, 'rgba(255,255,255,0.5)'],
                                [
                                    1, getRandomColor()
                                ]
                            ]
                        }
                    }
                }, {
                    name: "two",
                    data: [
                        [42, 38, 20],
                        [6, 18, 1],
                        [1, 93, 55],
                        [57, 2, 90],
                        [80, 76, 22],
                        [11, 74, 96],
                        [88, 56, 10],
                        [30, 47, 49],
                        [57, 62, 98],
                        [4, 16, 16],
                        [46, 10, 11],
                        [22, 87, 89],
                        [57, 91, 82],
                        [45, 15, 98]
                    ],
                    marker: {
                        lineWidth: 0.5,
                        lineColor: "#fff",
                        fillColor: {
                            radialGradient: { cx: 0.4, cy: 0.3, r: 0.7 },
                            stops: [
                                [0, 'rgba(255,255,255,0.5)'],
                                [
                                    1,
                                    getRandomColor()
                                ]
                            ]
                        }
                    }
                }]

            }
            setBubbleOptions(_bubbleOptions)
        }
        fetchData();
    }, [])

    return <HighchartsReact highcharts={Highcharts} options={bubbleOptions} ></HighchartsReact>
}
export default BubbleChart;
