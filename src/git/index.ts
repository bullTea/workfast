import { Gitlab } from 'gitlab';

class GitLabSourece {
  gitlabApi;
  constructor({ token }: { token?: string }) {
    this.gitlabApi = new Gitlab({
      host: 'http://git.dev.sh.ctripcorp.com',
      token,
    });
  }

  getBranches = async (projectId: string = '62736') => {
    const branches = await this.gitlabApi.Branches.all(projectId);
    // @ts-ignore
    return branches.map((branch) => branch.name);
  };

  getProjectName = () => {
    this.gitlabApi.Projects;
  };
}

export default GitLabSourece;
