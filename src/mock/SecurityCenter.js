class SecurityCenter {
    constructor(doorPanel) {
        this.doorPanel = doorPanel;
    }

    switchOn() {
        this.doorPanel.close();
    }
}

export default SecurityCenter;