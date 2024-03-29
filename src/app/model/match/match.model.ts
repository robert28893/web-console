import {CompetitionModel} from "../competition/competition.model";
import {StadiumModel} from "../stadium/stadium.model";
import {SeasonModel} from "../season/season.model";
import {TeamModel} from "../team/team.model";
import {ManagerModel} from "../manager/manager.model";
import {PlayerModel} from "../player/player.model";
import {RefereeModel} from "../referee/referee.model";

export class MatchModel {
  public homeTeamManagers: ManagerModel[] = []
  public awayTeamManagers: ManagerModel[] = []
  public homeTeamLineups: PlayerModel[] = []
  public awayTeamLineups: PlayerModel[] = []

  constructor(
    public id: number,
    public homeTeam: TeamModel,
    public awayTeam: TeamModel,
    public homeScore: number,
    public awayScore: number,
    public matchDate: string,
    public kickOff: string,
    public competition?: CompetitionModel,
    public season?: SeasonModel,
    public stadium?: StadiumModel,
    public referee?: RefereeModel,
  ) {
  }
}
