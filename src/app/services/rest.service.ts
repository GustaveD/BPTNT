import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { ErrorService } from './error.service';

@Injectable({
  providedIn: 'root'
})
export class RestService  {

  constructor(private http: HTTP, private error: ErrorService) { }

  public async getVideos(limit, page){
    try{
      let videos = await this.http.get(`https://api.dailymotion.com/videos&limit=${limit}&page=${page}`, {}, {});
      let list : any = JSON.parse(videos.data).list;
      return list;
    } catch (err){
      this.error.presentToast();
    }
  }
  public async getThumbnail(id){
    try{
      let thumb = await this.http.get(`https://api.dailymotion.com/video/${id}?fields=thumbnail_60_url`, {}, {})
      return JSON.parse(thumb.data);
    }catch (err){
      this.error.presentToast();
    }
  }
  public async getInfo(id){
    try{
      let thumb = await this.http.get(`https://api.dailymotion.com/video/${id}?fields=thumbnail_180_url%2Cembed_url`, {}, {})
      return JSON.parse(thumb.data);
    }catch (err){
      this.error.presentToast();
    }
  }
}
