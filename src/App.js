import React from 'react';

import Layout from './components/Layout';
import Top from './components/Top';
import Form from './components/Form';
import Statistics from './components/Statistics';
import Info from './components/Info';

const App = () => {
    return (
        <>
            <Layout>
                <Top />
                <div className="gray-background">
                    <Form />
                    <Statistics />
                </div>
                <Info />
            </Layout>
        </>
    )
}

export default App