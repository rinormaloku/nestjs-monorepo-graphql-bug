## Entities

### Order of creation of entities

1. **Organization** is the entity that doesn't depend on any other entities and hence it has to be created first
2. **Workspace** is dependent on organization and can be created only within the organization
3. **Users** can be created and they don't have to be tied to any Organization (but it can be tied to multiple).
4. **SlackAccounts** require a user to be created first and then it can be tied to a workspace

```typescript
const organization = await organizationsService.createOrganization(getSampleOrganization());
const workspace = await workspaceService.createWorkspace(workspace, organization.id);

// requires the workspace.id
let slackAccount = getSampleSlackAccount({
  teamId: workspace.id,
  shouldAddUser: false,
});

// this method handles creation of user and then ties it to the slack account
await workspaceService.addSlackAccountsToWorkspaceAndCreateUsersIfMissing([slackAccount], workspace.id);
```
