import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeHistoryModel } from '../model/changeHistory.model';
import { ChangeHistoryService } from '../service/change-history.service';

@Component({
  selector: 'app-change-history-detail',
  templateUrl: './change-history-detail.component.html',
  styleUrls: ['./change-history-detail.component.css']
})
export class ChangeHistoryDetailComponent implements OnInit {

  changeHistory: ChangeHistoryModel;
  constructor(private router: Router,
    private route: ActivatedRoute,
    private changeHistoryService: ChangeHistoryService) { }

  ngOnInit(): void {
    this.registerRouteParameterChanges();
  }

  registerRouteParameterChanges(): void {
    this.route.paramMap.subscribe(params => {
      const versionId = params.get("versionId");
      const userId = params.get("userId");
      if (versionId && userId) {
        this.changeHistoryService.getChangeHistory(versionId, userId).subscribe(changeHistory => this.changeHistory = changeHistory);
      }
    });
  }

  back(): void {
    this.router.navigateByUrl("/users/" + this.changeHistory.userId + "/change-history");
  }

}
