import React, { Suspense, lazy } from 'react';
import Layout from '@app/components/layout';
import Dashboard from '@app/components/dashboard';
const HomePage = async () => {
    return (
        <Layout>
            <Dashboard></Dashboard>
        </Layout>
    );
};

export default HomePage;
