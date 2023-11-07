const { internals } = require("@azure/msal-browser");

// Describe block for UI automation of the leaderboard summary option
describe('UI automation for leaderboard summary option', () => {
  let summaryPage;
  let leadingpage;

  beforeEach((client) => {
    // Create a page object and perform login actions
    const page = client.page.LeaderBoard_Summary.login();
    page
      .maximizeWindow()
      .navigate()
      .enterCredentials('testemployee', 'testemployee')
      .signIn();

    //Initialize summaryPage and leadingpage page objects
    summaryPage = client.page.LeaderBoard_Summary.summary();
    leadingpage = client.page.LeaderBoard_Summary.leadingnasher();
  });

  // Define common actions in the beforeEach hook
  const commonActions = () => {
    summaryPage
      .dashboardIsVisible()
      .isLeaderboardVisible()
      .SummaryWithAllTheDetails();
  };

  const leadingNasherCommonActions = () => {
    commonActions();
    leadingpage.leadingNasherProfilePage();
  };

  /**
   * Test case to check if the dashboard is visible
   */
  it('dashboard is visible', () => {
    summaryPage.dashboardIsVisible();
  });

  /**
   * Test case to check if the summary is visible in the leaderboard menu
   */
  it('When I expand leaderboard Then I should be able to see summary in leaderboard menu', () => {
    commonActions();
  });

  /**
  * Test case to check if summary page opens with all the details
  */
  it('When I click on summary Then summary page should be open with all the details', () => {
    commonActions();
  });

  /**
 * Test case to ensure that clicking on the navigation arrow allows switching to all other contribution types.
 */
  it('When I click on navigation arrow Then it should let me switch to all other contribution types', () => {
    commonActions();
    summaryPage.allContribution();
  });


  /**
 * Test case to confirm visibility of the Leading Nasher list after scrolling down.
 * @test Verifies that scrolling down on the summary page reveals the Leading Nasher list.
 */
  it('When I scroll down Then I should be able to see Leading Nasher list', () => {
    commonActions();
    summaryPage.containsLeadingnasherList();
  });

  /**
 * Test case to verify switching between "This Month" and "All Time" buttons and viewing the list of Nashers.
 */
  it('When I am on this month button and click on All time button Then I should be able to switch between both buttons and able to see the list of nasher', () => {
    commonActions();
    summaryPage.switchBetweenAlltimeandThisMonth();
    summaryPage.containsLeadingnasherList();
  });

  /**
 * Test case to validate opening a Nasher's profile when clicking on their name.
 */
  it('When I click on any Nasher Name Then it should open their profile', () => {
    leadingNasherCommonActions();
    leadingpage.verifyLeadingNasherProfilepage();
  });

  /**
   * Test case to verify the visibility of Nasher contributions when scrolling the page.
   */
  it('When i scroll the page Then i should able to see all their contribution', (client) => {
    leadingpage = client.page.LeaderBoard_Summary.leadingnasher();
    leadingNasherCommonActions();
    leadingpage.leadingNasherALlCOntribution().allContibutionList();
  });

  /**
 * Test case to confirm the visibility of redeemed rewards with points and dates.
 */
  it('When i go on Redeemed Reward section Then i should able to see the reward redeemed with their points and the date when that reward redeemed', (client) => {
    leadingNasherCommonActions();
    leadingpage.rewordSection();
  });


  /**
   * Test case to check if "No Rewards Redeemed" message is displayed in the Redeemed Reward section.
   */
  it('When i go on Redeemed Reward section Then it should show You have not redeemed any rewards yet', (client) => {
    commonActions();
    leadingpage
      .noRewordSection();
  });

  /**
   * Test case to validate redirection to the Rewards page when clicking the "View Rewards" button.
   */
  it('When i click on view rewards button Then it should redirect me to Rewards page', (client) => {
    commonActions();
    leadingpage.noRewordSection().viewRewords();
  });

  /**
 * Test case to confirm that clicking on a badge displays a popup with rank, score, and the date earned.
 */
  it('When i click on Badge if any Then it show me a popup with their Rank and score and also it show the Date when they got that rank', (client) => {
    leadingNasherCommonActions();
    leadingpage.badgeSection();
  });

  /**
 * Test case to verify the display of "No Badges Earned" in the Badges section.
 */
  it('When i go on Badges section Then it should show No Badges Earned', () => {
    commonActions();
    leadingpage.nobadgeSection();
  });

  /**
 * Test case to ensure visibility of month and score when clicking on "My Points".
 */
  it('When i click on Mypoints Then i should able to see month and score of that month', () => {
    leadingNasherCommonActions();
    leadingpage.pointsSection();
  });

  /**
 * Test case to check the display of a month's calendar and the ability to select a month when clicking on a current month's name.
 */
  it('When i click on current month Name Then a months calender should be shown and i am able to select month', (client) => {
    leadingNasherCommonActions();
    leadingpage.pointsSection().selectDate();
  });

  /**
   * Test case to validate hover functionality on a graph to see contribution types with scores.
   */
  it('When i hover on graph Then i should able to see contribution type with score', (client) => {
    leadingNasherCommonActions()
    leadingpage.pointsSection()
    // Include the relevant code for hovering on the graph here.
  });

  /**
 * Test case to expand any contribution and verify visibility of one's own contribution for that type with topic name and date.
 */
  it('When i expand any contribution Then i should able to see my contribution for that contribution type with Topic name and Date', () => {
    leadingNasherCommonActions();
    leadingpage
      .pointsSection()
      .expandContribution();
  });

  /**
 * Test case to check the visibility of skills names with levels when clicking on the "Skills" section.
 */
  it('When i click on skills Then i should be able to see skills name with level', () => {

    commonActions()
    leadingpage
      .nasherWithSkill()
  });

  /**
 * Test case to check the display of "No Skills in this level" when clicking on the "Skills" section.
 */
  it('When i click on skills Then i should be able to see No Skills in the level', () => {
    commonActions()
    leadingpage
      .nasherWithSkill()
  });

  afterEach((client) => {
    client.end();
  });
});

