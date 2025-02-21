"use client";
import React from 'react';

import HighchartsReact from 'highcharts-react-official';

import Highcharts from "highcharts";

const ColumnChart = () => {

    const columnOptions: Highcharts.Options = {
        chart: {
            type: "column",
            height: 200,
        },
        credits: {
            enabled: false
        },
        title: { text: "" },
        yAxis: {
            title: {
                text: ""
            },
            gridLineWidth: 1,
            gridLineColor: "#eee",
            labels: {
                enabled: false
            }
        },
        xAxis: {
            title: {
                text: ""
            },
            lineWidth: 1,
            lineColor: "#eee",
            tickLength: 0,
            gridLineWidth: 0,
            labels: {
                style: {
                    color: "#666",
                    fontSize: "12px"
                },
                step: 2 // 设置为 2，表示每隔一个标签显示一次
            },
            categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        series: [{
            type: "column",
            stacking: 'normal',
            showInLegend: false,
            borderRadius: 6,
            name: "click",
            color: "rgb(239, 240, 245)",
            data: [3, 6, 4, 6, 5, 6, 5, 6, 4, 6, 2, 6]
        }, {
            type: "column",
            stacking: 'normal',
            name: "unclick",
            showInLegend: false,
            color: "rgb(255, 135, 48)",
            data: [5, 6, 4, 6, 3, 6, 2, 6, 4, 6, 5, 6]
        }],
    }

    return <HighchartsReact highcharts={Highcharts} options={columnOptions}></HighchartsReact>
}
export default ColumnChart;
