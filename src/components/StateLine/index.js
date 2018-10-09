import React, { Component } from 'react';
import { FolderOpen as Folder, Times as Cross } from 'styled-icons/fa-solid';
import MainWrapper from './styles/MainWrapper';
import RowSWrapper from './styles/RowSWrapper';
import ButtonOpen from './styles/ButtonOpen';
import StateInfo from './styles/StateInfo';
import ButtonClose from './styles/ButtonClose';

class StateLine extends Component {
    constructor(props) {
        super(props);

        this.state = {
            folderSize: 16,
            crossSize: 15
        };
    }

    render() {
        return (
            <MainWrapper>
                <RowSWrapper>
                    <ButtonOpen>
                        <Folder size={this.state.folderSize}/>
                    </ButtonOpen>
                    <StateInfo>
                        development
                    </StateInfo>
                </RowSWrapper>
                <ButtonClose>
                    <Cross size={this.state.crossSize}/>
                </ButtonClose>
            </MainWrapper>
        )
    }
}

export default StateLine;