export class PlayerModel {
  constructor(
    public id: number,
    public name: string,
    public nickname: string,
    public jerseyNumber?: number,
  ) {
  }
}
