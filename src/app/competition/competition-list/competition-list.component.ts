import {Component, OnInit} from '@angular/core';
import {CompetitionService} from "../shared/competition.service";
import {Observable} from "rxjs";
import {CompetitionModel} from "../shared/competition.model";

@Component({
  selector: 'app-competition-list',
  templateUrl: './competition-list.component.html',
  styleUrls: ['./competition-list.component.css']
})
export class CompetitionListComponent implements OnInit{

  competitions: Observable<CompetitionModel[]> = new Observable<CompetitionModel[]>();

  constructor(
    private competitionService: CompetitionService,
  ) {
  }

  ngOnInit(): void {
    this.competitions = this.competitionService.getCompetitions();
  }

}
