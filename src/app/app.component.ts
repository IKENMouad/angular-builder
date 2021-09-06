import { Component, OnInit, Renderer2, ViewChild } from '@angular/core';
// import { EmailEditorComponent  } from 'angular-email-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-builder';

  @ViewChild('emailEditor')
  emailEditor: any;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.editorLoaded();
  }

  editorLoaded(event?: any) {
    if (window && window['unlayer']) {
      window['unlayer'].init({
        id: 'editor-wrapper',
        projectId: 1,
        customJS: [
          'http://localhost:4300/assets/js/articles.js',
          'http://localhost:4300/assets/js/total-prices.js',
          'http://localhost:4300/assets/js/label-price.js',
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
          'custom#label-prices': {
            properties: {
              conditionPaiement: {
                editor: {
                  data: {
                    options: [
                      { label: 'Avance 10%', value: 'Avance 10%' },
                      { label: 'Avance 20%', value: 'Avance 20%' },
                      { label: 'Avance 30%', value: 'Avance 30%' },
                      { label: 'Avance 40%', value: 'Avance 40%' },
                      { label: 'Avance 50%', value: 'Avance 50%' },
                      { label: 'Avance 60%', value: 'Avance 60%' },
                      { label: 'Avance 70%', value: 'Avance 70%' },
                      { label: 'Avance 80%', value: 'Avance 80%' },
                      { label: 'Avance 90%', value: 'Avance 90%' },
                      { label: 'Avance 100%', value: 'Avance 100%' },
                    ],
                  },
                },
              },
            },
          },
        },
      });
    }
    const editor1 = document.getElementsByTagName('IFRAME')[0];
    this.renderer.setStyle(editor1, 'min-height', '48rem');

    // load the design json here
    // this.emailEditor.editor.loadDesign({});
  }

  exportHtml() {
    if (window && window['unlayer']) {
      window['unlayer'].exportHtml((data) =>
        console.log('exportHtml', data.html)
      );
    }
  }
}
