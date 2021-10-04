import { Component, OnInit, Renderer2 } from '@angular/core';
import { TemplateService } from './template.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-builder';
  new = true;
  condition = false;
  constructor(
    private renderer: Renderer2,
    private templateService: TemplateService
  ) {}

  ngOnInit(): void {
    // this.editorLoaded();
    this.loadData();
  }

  loadData($event?) {
    let design;
    design = JSON.parse(localStorage.getItem('design'));
    this.loadTemplate(design);
    // this.templateService.getJasonUrl().subscribe((res: any) => {
    // if (res) {
    //   this.templateService.getJason(res.templateJson).subscribe((Jason) => {
    //     design = Jason;
    //     this.new = false;
    //     this.loadTemplate(design);
    //   });
    // } else {
    // design = JSON.parse(localStorage.getItem('design'));
    // this.loadTemplate(design);
    // }
    // });
  }
  loadTemplate(design) {
    if (window && window['unlayer']) {
      this.loadUnlayer(design);
    }
  }
  // editorLoaded(event?: any) {
  //   if (window && window['unlayer']) {
  //     const design = JSON.parse(localStorage.getItem('design'));
  //     this.loadUnlayer(design);
  //   }
  // }

  exportHtml() {
    if (window && window['unlayer']) {
      window['unlayer'].exportHtml((data: any) => {
        console.log(data);
        localStorage.setItem('data', JSON.stringify(data.design));
        let template = {};
        template['nom'] = 'facture';
        template['contentTpl'] = data.html;
        template['contentJson'] = JSON.stringify(data.design);
        console.log('template', template);
        if (this.new) {
          this.templateService
            .saveTemplate(template)
            .subscribe((res) => console.log('res :', res));
        } else {
          this.templateService
            .editTemplate(template)
            .subscribe((res) => console.log('res :', res));
        }
      });
    }
  }
  change() {
    let design;
    design = JSON.parse(localStorage.getItem('design'));
    this.condition = !this.condition;
    let iframe = document.getElementsByTagName('IFRAME')[0];
    iframe.remove();
    this.loadUnlayer(design);
  }

  loadUnlayer(design) {
    if (this.condition) {
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
          'http://localhost:4400/assets/js/articles.js',
          'http://localhost:4400/assets/js/total-prices.js',
          'http://localhost:4400/assets/js/customtoolone.js',
          'http://localhost:4400/assets/js/carteInfo.js',
          'http://localhost:4400/assets/js/condition-paiement.js',
          'http://localhost:4400/assets/js/notes.js',
        ],
        customCSS: [
          'http://localhost:4400/assets/css/custom.css',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        ],
        tools: {
          'custom#articles': {},
          'custom#total-prices': {},
          'custom#customtoolone': {},
          'custom#carteInfo': {},
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
    } else {
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
          'http://localhost:4400/assets/js/condition-paiement.js',
          'http://localhost:4400/assets/js/notes.js',
          'http://localhost:4400/assets/js/label-price.js',
          'http://localhost:4400/assets/js/customtool2.js',
        ],
        customCSS: [
          'http://localhost:4400/assets/css/custom.css',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
        ],
        tools: {
          'custom#label-prices': {},
          'custom#notes': {},
          'custom#customTool2': {},
          'custom#condition-paiement': {},
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
    }
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
        contentWidth: '1280px', // or percent "50%"
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
