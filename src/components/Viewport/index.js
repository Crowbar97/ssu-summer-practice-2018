import React, { Component } from 'react';
import { AngleLeft } from 'styled-icons/fa-solid';
import MainWrapper from './styles/MainWrapper';
import Pointer from './styles/Pointer';
import Tip from './styles/Tip';

class Viewport extends Component {
    constructor(props) {
        super(props);

        this.state = {
            angleSize: 24
        };
    }

    render() {
        return (
            <MainWrapper>
                <Pointer>
                    <AngleLeft size={this.state.angleSize} />
                    <Tip>
                        Выберите скважину
                    </Tip>
                </Pointer>
            </MainWrapper>
        )
    }
}

export default Viewport;
