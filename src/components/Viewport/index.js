import React, { Component } from 'react';
import { AngleLeft } from 'styled-icons/fa-solid';
import MainWrapper from './styles/MainWrapper';
import Pointer from './styles/Pointer';
import Tip from './styles/Tip';

class Viewport extends Component {
    render() {
        return (
            <MainWrapper>
                <Pointer>
                    <AngleLeft size="24" />
                    <Tip>
                        Выберите скважину
                    </Tip>
                </Pointer>
            </MainWrapper>
        )
    }
}

export default Viewport;
