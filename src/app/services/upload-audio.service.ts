import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Analyzer } from '../models/Interfaces';
import defaultToken from '../defaultToken';

@Injectable({
  providedIn: 'root'
})
export class UploadAudioService {

  constructor(private http: HttpClient) { }

  uploadAudio(uploadAudioFile: File){
    const file = new FormData();
    const toeflDesc = 'this is a update testing documents';
    file.append('toeflDesc', toeflDesc);

    if ( uploadAudioFile ) {
      file.append('toeflFiles', uploadAudioFile);
    }

    const options = {
      headers: {
        authorization:defaultToken
      }
    }

    this.http.post<Analyzer>('http://localhost:3000/upload', file, options)
    .subscribe(res => {
       console.log(res);
     // res.result? res.result:"sssssss"; // <<< navigate com params....
    });
  }

}
