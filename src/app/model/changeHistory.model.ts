import { Timestamp } from "rxjs";

export class ChangeHistoryModel {

  versionId : string; 
  userId: string;
  previousUsername: string; 
  updatedUsername: string; 
  previousFirstName: string; 
  updatedFirstName: string; 
  previousLastName: string;
  updatedLastName: string; 
  timeStamp: string;
    
  }