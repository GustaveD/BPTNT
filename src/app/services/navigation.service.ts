import { Injectable } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public welcomeView : boolean = true;

  constructor(public router: Router) { }

  public closeWelcome(){
    this.welcomeView = !this.welcomeView;
  }
  public async openDetails(data){
    let navigationExtras: NavigationExtras = {
        queryParams: {
        d: JSON.stringify(data),
        }
    };
    return await this.router.navigate([`/details/${data.id}`], navigationExtras)
  }
}
