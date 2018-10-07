import React, { Component } from 'react';
import { observer } from 'mobx-react';
import tabStore from '../../../../TabStore';
import { Times as Cross} from 'styled-icons/fa-solid';
import Wrapper from './styles/Wrapper';
import ButtonClose from './styles/ButtonClose';

@observer
class Tab extends Component {
    constructor(props) {
        super(props);

        this.activate = this.activate.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            id: props.id,
            title: props.title || "новая вкладка"
        };

        console.log("tab with id " + this.state.id + " was created!");
    }

    activate() {
        tabStore.activateTab(this.state.id);
    }

    close() {
        tabStore.closeTab(this.state.id);
    }

    render() {
        return (
            <Wrapper isActive={tabStore.activeId === this.state.id} onClick={this.activate}>
                {this.state.title}
                <ButtonClose onClick={this.close}>
                    <Cross size="18" />
                </ButtonClose>
            </Wrapper>
        )
    }
}

export default Tab;