import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { NavigationService } from '../services/navigation.service';
import { RestService } from '../services/rest.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  public slicedList: any = [];
  public fliteredList: any = [];
  public searchTerm: string = ""
  public disabledScroll: boolean = false;
  private page: number = 1;

  constructor(private rest: RestService, public navigation: NavigationService) {}

  ngOnInit(){
    this.getVideos(11);
   }
  private getVideos(limit){
    this.rest.getVideos(limit, this.page).then((vids)=>{
      this.slicedList = this.slicedList.concat(vids);
      this.fliteredList = this.slicedList;
      this.setIcon(this.fliteredList)
    })
  }
  private async setIcon(list){
    try{
      for (let i = 0; i < list.length;i++){
        var data = await this.rest.getThumbnail(list[i].id);
        list[i].thumb = data.thumbnail_60_url;
    }
    }catch(err){}
  }
  public loadData(event) {
    setTimeout(() => {
      this.page++;
      this.getVideos(5);
      event.target.complete();

    }, 1000);
  }
  private filterItems(searchTerm) {
    return this.slicedList.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  public setFilteredItems() {
    this.fliteredList = this.filterItems(this.searchTerm);
    this.infiniteScroll.disabled = true;
    if(this.searchTerm == '')
        this.infiniteScroll.disabled = false;
  }
}
