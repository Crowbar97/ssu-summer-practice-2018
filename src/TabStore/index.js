import React from 'react';
import { observable } from 'mobx';
import Tab from '../components/TabLine/components/Tab';

class TabStore {
    @observable tabList = [];
    @observable keyCounter = 0;
    @observable activeId = 0;

    addNewTab() {
        this.tabList.push(
            <Tab
                key={this.keyCounter}
                id={this.keyCounter}
                title={"вкладка " + this.keyCounter}
            />
        );
        this.keyCounter++;
    }

    activateTab(tabId) {
        this.activeId = tabId;
        console.log("tab with id " + tabId + " was activated!");
    }

    closeTab(tabId) {
        this.tabList = this.tabList.filter(tab => tab.props.id !== tabId);
        console.log("tab with id " + tabId + " was closed!");
    }
}

export default new TabStore;
