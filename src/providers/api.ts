import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class Api {

  constructor(private http: Http) {}

  public signin(ipAddr, username, password) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Content-Type', 'application/json');

      this.http.post(ipAddr+'/api/signin', { username: username, password: password }, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  getReasons() {
    return new Promise((resolve, reject) => {
        let headers = new Headers();
        headers.append('Authorization', localStorage.getItem("token"));
        
        this.http.get(localStorage.getItem('serverPath')+'/api/reason', {headers: headers})
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  public submitBarcode(text, reason) {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('Authorization', localStorage.getItem("token"));

      this.http.post(localStorage.getItem('serverPath')+'/api/barcode', { text: text, reason: reason }, {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }
}
