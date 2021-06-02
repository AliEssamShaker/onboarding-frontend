import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChangeHistoryModel } from '../model/changeHistory.model';
import { UserModel } from '../model/user.model';
import {ChangeHistoryService} from '../service/change-history.service';

@Component({
  selector: 'app-change-history',
  templateUrl: './change-history.component.html',
  styleUrls: ['./change-history.component.css']
})
export class ChangeHistoryComponent implements OnInit {

  changeHistories : ChangeHistoryModel[] = [];
  user: UserModel;
  loadingSubscription = Subscription.EMPTY;

  constructor(private router: Router,
    private route: ActivatedRoute,
    private changeHistoryService: ChangeHistoryService) {}

    ngOnInit(): void {
      this.registerRouteParameterChanges()
    }
  
    registerRouteParameterChanges(): void {
      this.route.paramMap.subscribe(params => {
        const userId = params.get("userId");
        this.changeHistoryService.findAllChangeHistory(userId).subscribe(changeHistories => (this.changeHistories = changeHistories));
      });
    }

    view(changeHistory: ChangeHistoryModel): void {
      this.router.navigateByUrl("/users/"+changeHistory.userId+"/change-history/"+changeHistory.versionId).then((e) =>{
        if (e) {
          console.log("Navigation is successful!");
        } else {
          console.log("Navigation has failed!");
        }
      });
    }

    back(): void {
      this.route.paramMap.subscribe(params => {
        const userId = params.get("userId");
        this.router.navigateByUrl("/users/" +userId );
      })
      
    }

}
