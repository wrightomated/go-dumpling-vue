import { v4 as uuidv4 } from "uuid";
export class TokenService {
  // this will be replaced by auth tokens eventually
  static getToken() {
    const token = localStorage.getItem("token");
    return token ?? this.genToken();
  }

  static genToken() {
    const token = uuidv4();
    localStorage.setItem("token", token);
    return token;
  }
}
