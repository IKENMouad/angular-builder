import { Component, OnInit, Renderer2 } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-builder';

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.editorLoaded();
  }

  editorLoaded(event?: any) {
    if (window && window['unlayer']) {
      window['unlayer'].init({
        id: 'editor-wrapper',
        locale: 'fr-FR',
        projectId: 1,
        customJS: [
          'http://localhost:4300/assets/js/articles.js',
          'http://localhost:4300/assets/js/total-prices.js',
          'http://localhost:4300/assets/js/label-price.js',
          'http://localhost:4300/assets/js/condition-paiement.js',
          'http://localhost:4300/assets/js/notes.js',
        ],
        customCSS: [
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        ],
        editor: {
          autoSelectOnDrop: true,
        },
        tools: {
          'custom#articles': {},
          'custom#total-prices': {},
          'custom#label-prices': {},
          'custom#condition-paiement': {},
          'custom#notes': {},
        },
      });
    }
    let iframe = document.getElementsByTagName('IFRAME')[0];
    this.renderer.setStyle(iframe, 'min-height', '48rem');
  }

  exportHtml() {
    if (window && window['unlayer']) {
      window['unlayer'].exportHtml((data) =>
        console.log('exportHtml', data.html)
      );
    }
  }
}
