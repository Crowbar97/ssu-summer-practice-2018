import React, { Component } from 'react';
import { FolderOpen as Folder, Times as Cross } from 'styled-icons/fa-solid';
import MainWrapper from './components/MainWrapper';
import RowSWrapper from './components/RowSWrapper';
import ButtonOpen from './components/ButtonOpen';
import StateInfo from './components/StateInfo';
import ButtonClose from './components/ButtonClose';

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