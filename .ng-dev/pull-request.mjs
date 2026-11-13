export const pullRequest = {
  githubApiMerge: {
    default: 'auto',
    labels: [{pattern: 'merge: squash commits', method: 'squash'}],
  },
  requiredStatuses: [{type: 'check', name: 'lint'}],
};
