import React, { Component } from 'react';
import { Filter, Undo, CaretRight as Caret } from 'styled-icons/fa-solid';
import MainWrapper from './styles/MainWrapper';
import SearchBar from './styles/SearchBar';
import ButtonFilter from './styles/ButtonFilter';
import SearchField from './styles/SearchField';
import ButtonRefresh from './styles/ButtonRefresh';
import List from './styles/List';
import Item from './styles/Item';
import Label from './styles/Label';


class Sidebar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filterSize: 12,
            caretSize: 14
        };
    }

    render() {
        return (
            <MainWrapper>
                <SearchBar>
                    <ButtonFilter>
                        <Filter size={this.state.filterSize} />
                    </ButtonFilter>
                    <SearchField type="text" placeholder="Поиск..." />
                    <ButtonRefresh>
                        <Undo size={this.state.filterSize} />
                    </ButtonRefresh>
                </SearchBar>
                <List>
                    <Item>
                        <Label>
                            <Caret size={this.state.caretSize} />
                            TestWell
                        </Label>
                        <List>
                            <Item>
                                <Label>
                                    <Caret size={this.state.caretSize} />
                                    Демо3
                                </Label>
                                <List>
                                    <Item>
                                        <Label>
                                            <Caret size={this.state.caretSize} />
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
                </List>
                <List>
                    <Item>
                        <Label>
                            <Caret size={this.state.caretSize} />
                            Unknown
                        </Label>
                        <List>
                            <Item>
                                <Label>
                                     <Caret size={this.state.caretSize} />
                                    demoWell
                                </Label>
                                <List>
                                    <Item>
                                        <Label>
                                            <Caret size={this.state.caretSize} />
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
                </List>
            </MainWrapper>
        )
    }
}

export default Sidebar;