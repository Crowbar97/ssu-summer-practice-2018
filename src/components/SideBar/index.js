import React, { Component } from 'react';
import { Filter, Undo, CaretRight as Caret } from 'styled-icons/fa-solid';
import MainWrapper from './components/MainWrapper';
import SearchBar from './components/SearchBar';
import ButtonFilter from './components/ButtonFilter';
import SearchField from './components/SearchField';
import ButtonUndo from './components/ButtonUndo';
import PlotList from './components/PlotList';
import Item from './components/Item';
import List from './components/List';
import Label from './components/Label';


class Sidebar extends Component {
    render() {
        return (
            <MainWrapper>
                <SearchBar>
                    <ButtonFilter>
                        <Filter size="18" />
                    </ButtonFilter>
                    <SearchField type="text" placeholder="Поиск..." />
                    <ButtonUndo>
                        <Undo size="18" />
                    </ButtonUndo>
                </SearchBar>
                <PlotList>
                    <Item>
                        <Label>
                            <Caret size="18" />
                            TestWell
                        </Label>
                        <List>
                            <Item>
                                <Label>
                                    <Caret size="18" />
                                    Демо3
                                </Label>
                                <List>
                                    <Item>
                                        <Label>
                                            <Caret size="18" />
                                            Демо3
                                        </Label>
                                        <List>
                                            <Item>
                                                <Label>
                                                    По времени
                                                </Label>
                                            </Item>
                                            <Item>
                                                <Label>
                                                    По глубине
                                                </Label>
                                            </Item>
                                        </List>
                                    </Item>
                                </List>
                            </Item>
                        </List>
                    </Item>
                </PlotList>
                <PlotList>
                    <Item>
                        <Label>
                            <Caret size="18" />
                            Unknown
                        </Label>
                        <List>
                            <Item>
                                <Label>
                                     <Caret size="18" />
                                    demoWell
                                </Label>
                                <List>
                                    <Item>
                                        <Label>
                                            <Caret size="18" />
                                            demoWellbore
                                        </Label>
                                        <List>
                                            <Item>
                                                <Label>
                                                    Video: demoWellbore0
                                                </Label>
                                            </Item>
                                            <Item>
                                                <Label>
                                                    По времени
                                                </Label>
                                            </Item>
                                            <Item>
                                                <Label>
                                                    По глубине
                                                </Label>
                                            </Item>
                                            <Item>
                                                <Label>
                                                    Литология
                                                </Label>
                                            </Item>
                                            <Item>
                                                <Label>
                                                    Шламограмма
                                                </Label>
                                            </Item>
                                            <Item>
                                                <Label>
                                                    Инклинометрия
                                                </Label>
                                            </Item>
                                        </List>
                                    </Item>
                                </List>
                            </Item>
                        </List>
                    </Item>
                </PlotList>
            </MainWrapper>
        )
    }
}

export default Sidebar;