import React, { Component } from 'react';
import { FolderOpen as Folder, Times as Cross } from 'styled-icons/fa-solid';
import MainWrapper from './styles/MainWrapper';
import RowSWrapper from './styles/RowSWrapper';
import ButtonOpen from './styles/ButtonOpen';
import StateInfo from './styles/StateInfo';
import ButtonClose from './styles/ButtonClose';

class StateLine extends Component {
    render() {
        return (
            <MainWrapper>
                <RowSWrapper>
                    <ButtonOpen>
                        <Folder size="18"/>
                    </ButtonOpen>
                    <StateInfo>
                        development
                    </StateInfo>
                </RowSWrapper>
                <ButtonClose>
                    <Cross size="18"/>
                </ButtonClose>
            </MainWrapper>
        )
    }
}

export default StateLine;