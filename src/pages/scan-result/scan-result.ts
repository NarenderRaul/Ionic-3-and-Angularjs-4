import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Api } from "../../providers/api";
/*
  Generated class for the ScanResult page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan-result',
  templateUrl: 'scan-result.html'
})
export class ScanResultPage {
  public scannedText: string;
  selectedReason = { reason:  'reason4'};
  public reasons: any;
   private data: any;

  constructor(public _nav: NavController,
    private _navParams: NavParams,
    private _api: Api,
    private _loadingController: LoadingController) {}

  ionViewDidLoad() {
    this.scannedText = this._navParams.get("scannedText");
    this.getReasons();
  }

  getReasons() {
    let loading = this._loadingController.create({
      content: "Please wait..."
    });

    loading.present();

    this._api.getReasons().then((res) => {
      loading.dismiss();
      this.reasons = res;
      console.log(this.reasons);
    }, (err) => {
      console.log(err);
      loading.dismiss();
    });
  }

  submitBarcode() {
    let loading = this._loadingController.create({
      content: "Please wait..."
    });

    loading.present();

    //Submit Barcode
    this._api.submitBarcode(this.scannedText,  this.selectedReason.reason).then((result) => {
      loading.dismiss();
      this.data = result;
      console.log(this.data);
      alert("Barcode Submitted");
      this._nav.pop();
    }, (err) => {
      loading.dismiss();
      // Display submit barcode error code
      alert(err);
    });
  }

}
