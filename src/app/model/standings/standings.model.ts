export class StandingsModel {
  constructor(
    public teamId: number,
    public teamName: string,
    public mp: number,
    public w: number,
    public d: number,
    public l: number,
    public gf: number,
    public ga: number,
    public gd: number,
    public pts: number,
  ) {
  }
}
