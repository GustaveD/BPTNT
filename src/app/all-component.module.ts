import { NgModule } from '@angular/core';

import {CommonModule} from '@angular/common';
import {IonicModule} from '@ionic/angular';
import { WelcomeComponent } from './components/welcome/welcome.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [WelcomeComponent],
    exports: [WelcomeComponent]
})
export class SharedModule {}