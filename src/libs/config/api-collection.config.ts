export const API = {
  GITHUB: {
    USER: (owner: string) => `/users/${owner}`,
    USER_REPO: (owner: string) => `/users/${owner}/repos`,
  },
};
