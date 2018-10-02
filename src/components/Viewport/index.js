import React, { Component } from 'react';
import { AngleLeft } from 'styled-icons/fa-solid';
import MainWrapper from './components/MainWrapper';
import Pointer from './components/Pointer';
import Indent from './components/Indent';

class Viewport extends Component {
    render() {
        return (
            <MainWrapper>
                <Pointer>
                    <AngleLeft size="24" />
                    <Indent>
                        Выберите скважину
                    </Indent>
                </Pointer>
            </MainWrapper>
        )
    }
}

export default Viewport;
