import React, { Component } from 'react';
import MainWrapper from './components/MainWrapper';
import Workspace from './components/Workspace';
import Header from './components/Header';
import StateLine from '../StateLine';
import TabsLine from '../TabsLine';
import Sidebar from '../SideBar';
import Viewport from '../Viewport';

class App extends Component {
    render() {
        return (
            <MainWrapper>
                <Header>
                    <StateLine />
                    <TabsLine />
                </Header>
                <Workspace>
                    <Sidebar />
                    <Viewport />
                </Workspace>
            </MainWrapper>
        )
    }
}

export default App;
