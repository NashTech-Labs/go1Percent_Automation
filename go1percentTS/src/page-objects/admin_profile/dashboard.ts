import { PageObjectModel, EnhancedPageObject } from "nightwatch";

const dashboardCommands = {
    clickImage(this : goOneDasboardPage) {
        return this
        .waitForElementVisible('@adminProfilePic' , 10000)
        .click('@adminProfilePic')
    }
}

const goOneDashboard: PageObjectModel = {
    url: "",

    elements : {
        adminProfilePic : '.no-profile',
        badgeText : 'h6.badge-text'
    },

    commands: [dashboardCommands]
}

export default goOneDashboard;
export interface goOneDasboardPage extends EnhancedPageObject <typeof dashboardCommands, typeof goOneDashboard.elements> {}