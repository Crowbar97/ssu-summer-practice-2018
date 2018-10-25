import React from 'react';
import { observable } from 'mobx';
import Tab from '../components/Tab';

class TabStore {
    @observable tabList = [];
    @observable keyCounter = 0;
    @observable activeId = 0;

    // tab additions
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

    // tab management
    activateTab(tabId) {
        this.activeId = tabId;
        console.log("tab with id " + tabId + " was activated!");
    }   

    activateNextTab() {
        var tabInd = this.tabList.findIndex(tab => tab.props.id == this.activeId);
        if (tabInd > 0)
            this.activateTab(this.tabList[tabInd - 1].props.id);
        else if (tabInd < this.tabList.length - 1)
            this.activateTab(this.tabList[tabInd + 1].props.id);
        else
            this.activateTab(this.keyCounter);            
    }

    closeTab(tabId, event) {
        if (tabId === this.activeId)
            this.activateNextTab();
        
        this.tabList = this.tabList.filter(tab => tab.props.id !== tabId);

        console.log("tab with id " + tabId + " was closed!");

        event.stopPropagation();
    }
}

export default new TabStore;
