"use client";
import React, { createContext, useContext, ReactNode } from 'react';
import Highcharts from 'highcharts';

import HighchartsMap from 'highcharts/modules/map';
import tiledwebmap from 'highcharts/modules/tiledwebmap';

const HighchartsContext = createContext<typeof Highcharts | null>(null);

if (typeof Highcharts !== undefined) {
    HighchartsMap?.(Highcharts);
    tiledwebmap?.(Highcharts);
}

export const HighchartsProvider = ({ children }: { children: ReactNode }) => {
    return (
        <HighchartsContext.Provider value={Highcharts}>
            {children}
        </HighchartsContext.Provider>
    );
};

export const useHighcharts = () => {
    const context = useContext(HighchartsContext);
    if (!context) {
        throw new Error('useHighcharts must be used within a HighchartsProvider');
    }
    return context;
};
