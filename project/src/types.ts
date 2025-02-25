declare global {
  interface Window {
    diam: {
      connect: () => Promise<{
        message: {
          data: [{
            diamPublicKey: string;
          }];
        };
      }>;
    };
  }
}

export interface Game {
  id: number;
  _id: number
  createrId: number;
  gameId: string;
  gameToken: string;
  gameSaAddress: string;
  name: string;
  type: string;
  description: string;
  isApproved: boolean;
  createdAt: string;
  events: {
    eventId: string;
    gameId: number;
    eventType: string;
    createdAt: string;
  }[];
} 