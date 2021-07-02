import agent from "../utils/agent";

const baseUrl = '/flow';

export const getPosts = (data) => {
  return agent.get(baseUrl, data)
};
