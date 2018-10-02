import React, { Component } from 'react';
import { Times as Cross, Plus} from 'styled-icons/fa-solid';
import Shadower from './components/Shadower';
import MainWrapper from './components/MainWrapper';
import Wrapper from './components/Wrapper';
import TabsList from './components/TabsList';
import Tab from './components/Tab';
import ButtonAdd from './components/ButtonAdd';
import ButtonClose from './components/ButtonClose';

class TabsLine extends Component {
    render() {
        return (
            <Shadower>
                <MainWrapper>
                    <Wrapper>
                        <TabsList>
                            <Tab active>
                                новая вкладка
                                <ButtonClose>
                                    <Cross size="18" />
                                </ButtonClose>
                            </Tab>
                            <Tab>
                                новая вкладка
                                <ButtonClose>
                                    <Cross size="18" />
                                </ButtonClose>
                            </Tab>
                        </TabsList>
                        <ButtonAdd>
                            <Plus size="18"/>
                        </ButtonAdd>
                    </Wrapper>
                </MainWrapper>
            </Shadower>
        )
    }
}

export default TabsLine;