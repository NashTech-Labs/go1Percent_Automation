# go1Percent_Automation

![Automation_Flow (1) (1)](https://github.com/NashTech-Labs/go1Percent_Automation/assets/26843523/724a77d3-f233-483c-a648-ae4a125d1667)



## Git Branch Naming Convention: 

 

- **Use Descriptive Names**: Branch names should be descriptive, conveying the purpose or nature of the branch. Avoid generic names like "fix" or "feature." 

- **Use Hyphens or Underscores**: Use hyphens or underscores to separate words in branch names. This enhances readability. For example, "feature/new-login-page" or "bugfix/issue-123." 

- **Include a Prefix**: Prefixes help categorize branches. Common prefixes include:
  - **feature/** for new features.
  - **bugfix/** for bug fixes.
  - **hotfix/** for critical, out-of-schedule fixes.
  - **chore/** for maintenance or other non-feature/non-bugfix tasks. 

- **Include a Reference**: Incorporate a reference to a related issue or task number. This connects branches to specific work items in your issue-tracking system, making it easier to trace the purpose of a branch. For example, "feature/123-new-feature" or "bugfix/issue-456." 

- **Keep it Short**: Branch names should be concise, but not so short that they become ambiguous. A good balance is to keep them between 3-5 words. 


## Feature Branch Workflow: 

 

- **Create a Feature Branch**: 

Start by creating a new branch based on the main or development branch. 

Use the naming convention discussed above. 

               

                                              git checkout main 
                                              git pull 
                                              git checkout -b feature/new-feature 
 

- **Regularly Update Your Branch**: 

Keep your feature branch up to date with the main branch by regularly merging or rebasing. 

 

                                             git checkout feature/new-feature 
                                             git rebase main 
 

- **Work in Isolation**: 

Work on your feature branch independently to prevent conflicts with other developers. 

- **Commit Frequently and Keep Commits Atomic**: 

Make small, focused commits with clear messages. 

Avoid making unrelated changes in a single commit. 

- **Test Thoroughly**: 

Ensure your changes are thoroughly tested before merging your feature branch into the main branch. 

- **Code Review**: 

Have your code reviewed by peers before merging. 

Address any feedback or issues. 

Once the feature is merged, delete the feature branch to keep the repository clean. 
