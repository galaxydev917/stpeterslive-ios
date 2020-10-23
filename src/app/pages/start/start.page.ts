import { Component, OnInit } from '@angular/core';
import { strings } from '../../config/strings';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {
  rowHeight : any;
  constructor(
    public plt: Platform
    ) { }

    // tslint:disable-next-line: variable-name
    private _strings = strings;
    public get strings() {
      return this._strings;
    }

  ionViewWillEnter() {
  }

   ngOnInit() {
    this.rowHeight = (this.plt.height() - 110) / 3 + 'px';
  }

}
//ionic cordova run ios --target="8009D915-4C07-43BF-B03C-F9440C9AF44B" --livereload
