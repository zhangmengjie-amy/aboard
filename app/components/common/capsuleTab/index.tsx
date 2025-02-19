"use client";
import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography } from '@mui/material';
import styles from "./style.module.scss";

interface ICapsuleOptions {
    name: string,
    value: string
}

interface ICapsuleTab {
    activeTab?: string;
    bgColor?: string;
    highlightColor?: string;
    options: ICapsuleOptions[];
    showBorder?: boolean;
    size?: "small" | "regular";
}

const CapsuleTab: React.FC<ICapsuleTab> = ({ options, bgColor, size = "regular", showBorder, highlightColor }) => {
    const HEIGHT = {
        "small": "40px",
        "regular": "50px"
    }
    const FONT_SIZE = {
        "small": "12px",
        "regular": "14px"
    }
    const PADDING = {
        "small": "2px",
        "regular": "6px"
    }
    const [activeTab, setActiveTab] = useState<string | null>(null);
    const tabListRef = useRef<any>(null);
    const highlightRef = useRef<any>(null);
    const handleActiveTab = (activeTab: string) => {
        setActiveTab(activeTab);
    }

    useEffect(() => {
        const activeTabIndex = options.findIndex((item) => item.value == (activeTab ?? options[0]?.value));
        handleActiveTabStyle(activeTabIndex);
    }, [activeTab])

    const handleActiveTabStyle = (activeTabIndex: number) => {
        if (tabListRef.current?.children && highlightRef.current) {
            const tabWidth = tabListRef.current?.children?.[activeTabIndex]?.offsetWidth;
            const tabHeight = tabListRef.current?.children?.[activeTabIndex]?.offsetHeight;
            const tabOffset = tabListRef.current?.children?.[activeTabIndex]?.offsetLeft;
            highlightRef.current.style.width = `${tabWidth}px`;
            highlightRef.current.style.height = `${tabHeight}px`;
            highlightRef.current.style.left = `${tabOffset}px`;
            highlightRef.current.style.backgroundColor = highlightColor ?? "rgb(255, 255, 2)";
            highlightRef.current.style.borderRadius = `${tabHeight / 2}px`;
            highlightRef.current.style.zIndex = 0;
        }
    }


    return <Box ref={tabListRef} className={styles.capsuleTab} sx={{ display: "flex", alignItems: "center", border: `${showBorder ? "1px solid #eee" : "none"}`, bgcolor: `${bgColor ?? '#fff'}`, height: HEIGHT[size], borderRadius: "25px" }} padding={PADDING[size]}>
        {
            options?.map((option, index) => {
                return <Typography key={index} className={`${styles.tab} ${option.value == activeTab ? styles.activeTab : ""}`} sx={{ cursor: "pointer", transition: "all ease .3s" }} onClick={() => { handleActiveTab(option.value) }}
                    marginLeft={index == 0 ? "0px" : "5px"} fontSize={FONT_SIZE[size]} color={"#000"}
                    borderRadius={"20px"}>{option.name}</Typography>
            })
        }
        <Typography className={styles.highlight} ref={highlightRef} />
    </Box>
}
export default CapsuleTab;
