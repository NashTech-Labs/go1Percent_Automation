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
  
  const addContribution={
    BaseUrl: "https://backend.qa.go1percent.com",
    PostEndPoints: "/contribution/addContribution",
    GetEndPoints: "/contribution/getKnolderContribution?pageNumber=1&limit=10000",
    Contribution_url: "www.codsfcdu.org",
    token: "https://auth.go1percent.com/auth/realms/nashtech/protocol/openid-connect",
    go1percentBase: "https://techhub-backend.qa.go1percent.com",
};

  
  export const admin = {
    techhubUrls,
    headers,
    tokenHeaders,
    tokenBody,
  };
  export const contibution = {
    addContribution,
    headers,
    tokenHeaders,
    tokenBody,
    
  };

  const SessionData= {
    ExpectedTitle: 'TestAutomationTitle',
    Description: 'Description',
    SlideURL: 'Slide URL',
    }
    
    const EmployeeLogin={
    
    username: 'testemployee',
    password: 'testemployee'
    }

export const UpcomingSessionData={

SessionData,
EmployeeLogin,
}
  
  // ... (other exports)
  
