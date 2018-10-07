import React, { Component } from 'react';
import MainWrapper from './styles/MainWrapper';
import Workspace from './styles/Workspace';
import Header from './styles/Header';
import StateLine from '../StateLine';
import TabLine from '../TabLine';
import Sidebar from '../SideBar';
import Viewport from '../Viewport';

class App extends Component {
    render() {
        return (
            <MainWrapper>
                <Header>
                    <StateLine />
                    <TabLine />
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
