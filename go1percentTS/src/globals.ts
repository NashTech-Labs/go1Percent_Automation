// globals.ts

const techhubUrls = {
    token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
    go1percentBase: "https://techhub-backend.qa.go1percent.com",
  };
  
  const headers = {
    'Authorization': '',
    'Source': 'https://nashtechglobal.qa.go1percent.com'
  };
  
  const tokenHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'source': 'https://nashtechglobal.qa.go1percent.com'
  };
  
  const tokenBody = {
    client_id: 'leaderboard-ui',
    client_secret: '8090ed15-4cd1-483c-9fee-2a8b35941852',
    username: 'testadmin',
    password: 'testadmin',
    grant_type: 'password',
  };
  

  export const admin = {
    techhubUrls,
    headers,
    tokenHeaders,
    tokenBody,
  };

  export const feedbackForm = {
    username: 'testadmin',
    password: 'testadmin',
    apiUrls: {
      requestUrl: 'https://knolx-backend.qa.go1percent.com/v02/feedback-form',
    },
    uiData: {
      sessionInUseMessage: 'The Form is currently being used in following session(s)',
      formUpdateMessage: 'Form Updated Successfully',
      deleteDialogBoxMessage: 'Are you sure want to delete this form ?',
      addNPSMessage: 'Please add a NPS question',
      addFormTitleMessage: 'Please enter a Form Title',
      addQuestionMessage: 'Question cannot be empty',
      formCreatedMessage: 'Form created successfully',
      searchQuery: 'Search Me',
      formDeletedMessage: 'Form Deleted Successfully',
      sessionFormName: 'knol',
      no_sessionFormName: 'temp',
      setTitle: 'Temporary Form',

    },

  };
  
  // ... (other exports)

  