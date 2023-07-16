import {Component, Input} from '@angular/core';
import {MatchModel} from "../../../model/match/match.model";

@Component({
  selector: 'app-lineups',
  templateUrl: './lineups.component.html',
  styleUrls: ['./lineups.component.css']
})
export class LineupsComponent {
  @Input() match?: MatchModel

  getLineupsToFor() {
    if (!this.match) return []
    if (this.match.homeTeamLineups!.length > this.match.awayTeamLineups!.length) {
      return this.match.homeTeamLineups
    }

    return this.match.awayTeamLineups
  }

  getManagersToFor() {
    if (!this.match) return []
    if (this.match.homeTeamManagers!.length > this.match.awayTeamManagers!.length) {
      return this.match.homeTeamManagers
    }

    return this.match.awayTeamManagers
  }
}
