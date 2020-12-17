import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  public data : any = {};
  public imgIsLoaded = false;
  public loadingIcon = "../../assets/icon/shapes.svg";
  
  constructor(private activatedRoute: ActivatedRoute, private rest: RestService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.data = JSON.parse(params["d"]);
      this.getData().then(()=>{})
      });
  }
  private async getData(){
    try{
      var info = await this.rest.getInfo(this.data.id)
      this.data.img = info.thumbnail_180_url;
      this.data.url = info.embed_url;
    }catch(err){}
  }
  public loadingImg(e){
    this.imgIsLoaded = true;
  }
}