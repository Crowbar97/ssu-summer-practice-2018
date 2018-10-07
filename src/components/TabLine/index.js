import React, { Component } from 'react';
import { observer } from 'mobx-react';
import tabStore from '../../TabStore';
import { Plus } from 'styled-icons/fa-solid';
import Shadower from './styles/Shadower';
import MainWrapper from './styles/MainWrapper';
import Wrapper from './styles/Wrapper';
import TabList from './styles/TabList';
import ButtonAdd from './styles/ButtonAdd';

@observer
class TabLine extends Component {
    constructor(props) {
        super(props);

        this.addNewTab = this.addNewTab.bind(this);

        this.addNewTab();
    }

    addNewTab() {
        tabStore.addNewTab();
    }

    render() {
        return (
            <Shadower>
                <MainWrapper>
                    <Wrapper>
                        <TabList>
                            {tabStore.tabList}
                        </TabList>
                        <ButtonAdd onClick={this.addNewTab}>
                            <Plus size="18"/>
                        </ButtonAdd>
                    </Wrapper>
                </MainWrapper>
            </Shadower>
        )
    }
}

export default TabLine;