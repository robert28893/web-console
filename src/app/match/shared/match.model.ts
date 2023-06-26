export class MatchModel {
  public id: number
  public homeTeamId: number
  public homeTeamName: string
  public awayTeamId: number
  public awayTeamName: string
  public homeScore: number
  public awayScore: number
  public matchDate: string
  public kickoff: string

  constructor(
    id: number,
    homeTeamId: number,
    homeTeamName: string,
    awayTeamId: number,
    awayTeamName: string,
    homeScore: number,
    awayScore: number,
    matchDate: string,
    kickoff: string
  ) {
    this.id = id
    this.homeTeamId = homeTeamId
    this.homeTeamName = homeTeamName
    this.awayTeamId = awayTeamId
    this.awayTeamName = awayTeamName
    this.homeScore = homeScore
    this.awayScore = awayScore
    this.matchDate = matchDate
    this.kickoff = kickoff
  }
}
