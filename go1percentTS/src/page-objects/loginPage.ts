import { PageObjectModel, EnhancedPageObject } from 'nightwatch';

const loginCommands = {
  enterCredentials(this: LoginPage, email: string, password: string) {
    return this
      .setValue('@emailInput', email)
      .pause(1000)
      .setValue('@passwordInput', password)
      .pause(1000);
  },
  signIn(this: LoginPage) {
    return this.click('@signIn');
  },
};

const loginPage: PageObjectModel = {
  url: '',
  elements: {
    emailInput: {
      selector: '#username',
    },
    passwordInput: {
      selector: '#password',
    },
    signIn: {
      selector: '#kc-login',
    },
  },
  commands: [loginCommands],
};

export default loginPage;

export interface LoginPage
  extends EnhancedPageObject<typeof loginCommands,
  typeof loginPage.elements> { }
