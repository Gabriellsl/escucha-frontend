import { Analyzer, Category } from './../../models/Interfaces';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  
  audioResult: Analyzer;
  detect: Category;
  categorys: Category[]; 
  constructor(private router: Router) {
    
  }

  async ngOnInit() {
    
    var words: string[];   
    // this.detect;

     this.audioResult = await history.state.audioResult;
    // console.log(this.audioResult);
    // let detecte: Category;
    // let detectes: Category[];
    // this.audioResult.result.forEach(function (value){
      
    //   console.log(value);
    //   detecte.category = value.category;

    //   value.words.forEach(function(word){
    //       detectes.push(detecte = {category:value.category,word:word});
    //       console.log(word);
    //   }

    //   )
      
      
    // });
    // console.log(detectes);







// this.audioResult.result.forEach(function (value){
      

//        console.log(value);
//        console.log(value.category);
       

//        value.words.forEach(function(word){
//          console.log(word);
         
         
//          //dect.category = value.category;
//          //dect.word = word;
//          //detecteds.push(dect);
//        }

//        );

// });
    
    this.loadWords();

}

  loadWords(){
      console.log("te salvei");
      
      this.audioResult.result.forEach(function (value){
      

       console.log(value);
       console.log(value.category);
       

       value.words.forEach(function(word){
         console.log(word);
         
         
         //dect.category = value.category;
         //dect.word = word;
         //detecteds.push(dect);
       }

       );

});

  }


}
