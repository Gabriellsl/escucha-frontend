import { Analyzer, Cost } from './../../models/Interfaces';
import { CostService } from './../../services/cost.service';
import { UploadAudioService } from './../../services/upload-audio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';


@Component({
  selector: 'app-submit-audio',
  templateUrl: './submit-audio.component.html',
  styleUrls: ['./submit-audio.component.css']
})
export class SubmitAudioComponent implements OnInit {

  uploadAudioFile: File = null;
  audioPreview: string;
  loaded: boolean;
  audioResult: Analyzer;
  cost: Cost = {user:"",length:0,cost:0};

  constructor(private router: Router, private uploadAudioService: UploadAudioService, private costService: CostService) { }

  ngOnInit() {
  }

  redirect():void{
    console.log(this.uploadAudioFile.name)
  }

  onAudioPicked(event: Event) {
    this.uploadAudioFile = (event.target as HTMLInputElement).files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.audioPreview = <string> reader.result;
    }
  }

  uploaded(){
    if(this.uploadAudioFile != null){
      this.loaded = true;
    }else{
      this.loaded = false;
    }
  }

  async onSubmit() {
      this.audioResult = await this.uploadAudioService.uploadAudio(this.uploadAudioFile).toPromise();
      console.log(this.audioResult);
      if(this.audioResult.result[0]){
        this.router.navigate(['inappropriate'],{state:{audioResult:this.audioResult}});
      }else{
        this.router.navigate(['appropriate']);
      }
      
  }

  async getTotalCost(){

    //this.costService.getTotalCost().subscribe;
    this.router.navigate(['cost']);
    

  }



}
