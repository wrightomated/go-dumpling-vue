import io from "socket.io-client";
import { TokenService } from "./token.service";

class SocketService {
  private socket: SocketIOClient.Socket;

  constructor() {
    const token = TokenService.getToken();
    this.socket = io(`${process.env.VUE_APP_SOCKET_URL}?token=${token}`, {
      secure: true,
    });
  }

  public onWelcome(callback: any): SocketIOClient.Emitter {
    return this.socket.on("welcome", callback);
  }

  public onCountdown(callback: any): SocketIOClient.Emitter {
    return this.socket.on("countdown", callback);
  }

  public onPlayerNumberUpdate(callback: any) {
    return this.socket.on("playersReady", callback);
  }

  public onUpdatedHand(callback: any) {
    return this.socket.on("updateHand", callback);
  }

  public onUpdatePlayArea(callback: any) {
    return this.socket.on("playArea", callback);
  }

  public onUpdatedTable(callback: any) {
    return this.socket.on("table", callback);
  }

  public onEnd(callback: any) {
    return this.socket.on("end", callback);
  }

  public clientReady(playerName?: string): void {
    this.socket.emit("ready", playerName);
  }

  public selectCard(cardId: number | undefined) {
    this.socket.emit("cardSelected", cardId);
  }
}

const socketService = new SocketService();

export { socketService as default };
