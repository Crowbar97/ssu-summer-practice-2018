import React, { Component } from 'react';
import { AngleLeft } from 'styled-icons/fa-solid';
import MainWrapper from './styles/MainWrapper';
import Pointer from './styles/Pointer';
import Indent from './styles/Indent';

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
