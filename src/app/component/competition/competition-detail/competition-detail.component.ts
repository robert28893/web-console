import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CompetitionModel} from "../../../model/competition/competition.model";
import {CompetitionService} from "../../../service/competition/competition.service";
import {Constants} from "../../../common/constants";
import {SeasonModel} from "../../../model/season/season.model";

@Component({
  selector: 'app-competition-detail',
  templateUrl: './competition-detail.component.html',
  styleUrls: ['./competition-detail.component.css']
})
export class CompetitionDetailComponent implements OnInit {
  competition?: CompetitionModel;
  selectedSeason?: SeasonModel;
  activeTab: number = 1;

  constructor(
    private competitionService: CompetitionService,
    private route: ActivatedRoute,
  ) {
    console.log('constructor competition-detail')
  }

  ngOnInit(): void {
    console.log("init competition-detail")
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.competitionService.getCompetition(id).subscribe(competition => this.competition = competition);
  }

  changeSeason(season: SeasonModel) {
    this.selectedSeason = season
  }
}
