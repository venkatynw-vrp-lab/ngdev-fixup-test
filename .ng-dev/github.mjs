import {execFileSync} from 'node:child_process';

// Owner and name come from the clone's `origin` remote, so the same commits can be pushed to any
// replica repository. The other fields are angular/angular's `.ng-dev/github.mjs`.
const [owner, name] = execFileSync('git', ['remote', 'get-url', 'origin'], {encoding: 'utf8'})
  .trim()
  .replace(/\.git$/, '')
  .split('/')
  .slice(-2);

export const github = {
  owner,
  name,
  mainBranchName: 'main',
  mergeMode: 'caretaker-only',
  requireReleaseModeForRelease: false,
};
