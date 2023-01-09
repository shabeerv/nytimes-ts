import httpClient from "./httpClient";

class UserController {
  loginPath: string;
  registerPath: string;

  constructor() {
    this.loginPath = "/auth/login";
    this.registerPath = "/auth/register";
  }

  login = async (email: string, password: string) =>
    httpClient.post(this.loginPath, { email, password });

  register = async (email: string, password: string) =>
    httpClient.post(this.registerPath, { email, password });
}

export default new UserController();
