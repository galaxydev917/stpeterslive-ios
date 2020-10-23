import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Location } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { LoadingController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  validationsform: FormGroup;
  isLoading = false;
  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    public loadingController: LoadingController,
    public menuCtrl: MenuController,
    private location: Location
  ) { }

  ngOnInit() {
    this.validationsform = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      phone: new FormControl('', Validators.compose([
        Validators.required
      ])),
      address: new FormControl('', Validators.compose([
        Validators.required
      ])),
      coming_service: new FormControl('', Validators.compose([
        Validators.required
      ]))
    });
  }

  tryRegister(value) {
    this.isLoading = true;
    this.http.post('https://stpetersgc.com.au/wp-json/mobileapi/v1/sendmail', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      name: value.name,
      email: value.email,
      phone: value.phone,
      service: value.coming_service,
      address: value.address
    }).subscribe(data => {
      this.isLoading = false;
      this.presentAlert('Registered Successfully.');
    });
  }

  async presentAlert(value) {
    const loading = await this.loadingController.create({
      spinner: null,
      duration: 2000,
      message: value,
      mode: 'ios'
    });
    await loading.present();
  }  

  back(){
    this.location.back();
  }

  openMenu() {
    this.menuCtrl.enable(true, 'customMenu');
    this.menuCtrl.open('customMenu');
  }
}
