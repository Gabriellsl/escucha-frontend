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
      const x:Analyzer = await this.uploadAudioService.uploadAudio(this.uploadAudioFile).toPromise();
  }

  async getTotalCost(){

    //this.costService.getTotalCost().subscribe;
    this.router.navigate(['appropriate']);
    const cost:Cost = await this.costService.getTotalCost().toPromise();

  }



}
