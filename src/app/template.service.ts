import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateService {
  constructor(private http: HttpClient) {}
  editTemplate(template) {
    return this.http.put(
      `https://0ce2-105-159-134-55.ngrok.io/api/app/templateDocument/77`,
      template
    );
  }
  getJasonUrl() {
    return this.http.get(
      `https://0ce2-105-159-134-55.ngrok.io/api/app/templateDocument/77`
    );
  }
  getJason(Url) {
    return this.http.post(
      `http://0ce2-105-159-134-55.ngrok.io/api/app/templateDocument/myTemplateJson?path=${Url}`,
      null
    );
  }

  saveTemplate(template) {
    return this.http.post(
      `https://0ce2-105-159-134-55.ngrok.io/api/app/templateDocument`,
      template
    );
  }
}
