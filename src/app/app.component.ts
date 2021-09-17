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
      const design = JSON.parse(localStorage.getItem('design'));
      this.loadUnlayer(design);
    }
  }

  exportHtml() {
    if (window && window['unlayer']) {
      window['unlayer'].saveDesign((design: any) => {
        localStorage.setItem('design', JSON.stringify(design));
      });
      window['unlayer'].exportHtml((design: any) => {
        console.log(design);
      });
    }
  }

  loadUnlayer(design) {
    window['unlayer'].init({
      id: 'editor-wrapper',
      // displayMode: 'email',
      locale: 'fr-FR',
      features: {
        preview: false,
        preheaderText: false,
        userUploads: false,
        imageEditor: false,
        stockImages: {
          enabled: false,
        },
        textEditor: {
          spellChecker: false,
          tables: false,
          cleanPaste: false,
          emojis: false,
        },
      },
      projectId: 1,
      customJS: [
        'http://localhost:4300/assets/js/articles.js',
        'http://localhost:4300/assets/js/total-prices.js',
        'http://localhost:4300/assets/js/label-price.js',
        'http://localhost:4300/assets/js/condition-paiement.js',
        'http://localhost:4300/assets/js/notes.js',
        'http://localhost:4300/assets/js/configue.js',
      ],
      customCSS: [
        'http://localhost:4300/assets/css/custom.css',
        'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
      ],
      tools: {
        'custom#articles': {},
        'custom#total-prices': {},
        'custom#label-prices': {},
        'custom#condition-paiement': {},
        'custom#notes': {},
        button: {
          enabled: false,
        },
        form: {
          enabled: false,
        },
        image: {
          enabled: false,
        },
        menu: {
          enabled: false,
        },
        social: {
          enabled: false,
        },
        timer: {
          enabled: false,
        },
        video: {
          enabled: false,
        },
      },
    });
    if (design) {
      window['unlayer'].loadDesign(design);
    }

    let iframe = document.getElementsByTagName('IFRAME')[0];
    if (iframe) {
      this.renderer.setStyle(iframe, 'min-height', '90vh');
    }
    setTimeout(() => {
      window['unlayer'].setBodyValues({
        // backgroundColor: '#fff',
        contentWidth: '800px', // or percent "50%"
        fontFamily: {
          label: 'Helvetica',
          value: "'Helvetica Neue', Helvetica, Arial, sans-serif",
        },
        preheaderText: 'Hello World',
      });
      window['unlayer'].hidePreview();
    }, 2000);
  }
}
