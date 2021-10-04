unlayer.registerTool({
  name: "carteInfo",
  label: "Cart Info",
  icon: "fa-money-check",
  supportedDisplayModes: ["web", "email"],
  options: {
    columns: {
      title: "COLUMS",
      options: {
        innerText: {
          label: "inner text",
          defaultValue: "note",
          widget: "dropdown",
          data: {
            options: [
              { label: "Note", value: "note" },
              { label: "Condition de paiment", value: "conditionPaiment" },
              { label: "Label price", value: "labelPrice" },
              { label: "Adresse", value: "adresse" },
              { label: "Destinataire Name", value: "destinataireName" },
              { label: "Destinataire Adresse", value: "destinataireAdresse" },
              { label: "Destinataire Code", value: "destinataireCode" },
              { label: "Destinataire ICE", value: "destinataireICE" },
              { label: "Destinataire Email", value: "destinataireEmail" },
            ],
          },
        },
        textColor: {
          label: "text color",
          widget: "color_picker",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerNotePriceToolView(values),
    }),
    exporters: {
      web: (values) => registerNotePriceToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
function registerNotePriceToolView(values) {
  let textHTML = "";
  if (values.innerText == "note") {
    textHTML = `
    <div style="margin-left:10px">
      <span color:${values.textColor}> Pretation livrée
       </span>
    </div>
  `;
  }
  if (values.innerText == "conditionPaiment") {
    textHTML = `
    <div style="margin-left:10px">
      <span color:${values.textColor}> Avance 60% </span>
    </div>
  `;
  }
  if (values.innerText == "labelPrice") {
    textHTML = `
    <div style="margin-left:10px">
      <span color:${values.textColor} > mille cinq cent soixante-douze Dirhams </span>
    </div>
   `;
  }
  if (values.innerText == "destinataireName") {
    textHTML = `
    <div style="margin-left:10px;line-height: 130%;color:${values.textColor}">
    <span style="font-size: 24px;"> Jawad </span>
    </div>
    `;
  }
  if (values.innerText == "destinataireAdresse") {
    textHTML = `
   <div style="margin-left:10px;line-height: 130%;color:${values.textColor}">
   <span style="font-size: 12px;" > LayounLayoun Maroc  </span>
   </div>
    `;
  }
  if (values.innerText == "destinataireCode") {
    textHTML = `
    <div style="margin-left:10px;line-height: 130%;color:${values.textColor}">
    <span style="font-size: 12px;" > 7 </span>
    </div>
    `;
  }
  if (values.innerText == "destinataireICE") {
    textHTML = `
    <div style="margin-left:10px;line-height: 130%;color:${values.textColor}">
    <span style="font-size: 12px;" > 123456789012345 </span>
    </div>
    `;
  }
  if (values.innerText == "destinataireEmail") {
    textHTML = `
    <div style="margin-left:10px;line-height: 130%;color:${values.textColor}">
    <span style="font-size: 12px;" > cherkaouuijawad@gmail.com  </span>
    </div>
 `;
  }
  if (values.innerText == "adresse") {
    textHTML = `
    <div style="margin-left:10px;color:${values.textColor}">
    <span> 113 Av. Mers Sultan, Casablanca 20250
    </span>
    </div>
  `;
  }
  return textHTML;
}
function registerNotePriceToolWeb(values) {
  let textHTML;
  if (values.innerText == "note") {
    textHTML = `{{if model.res.note != null}}
    <div id='notices' style='page-break-inside: avoid!important;'>
    <div class='notice'>{{model.res.note}}</div>
    </div>
    {{end}}`;
  }
  if (values.innerText == "conditionPaiment") {
    textHTML = `{{if model.param.is_visible_condition_paiement && model.res.condition_paiement != null }}
  <div id='notices' style='page-break-inside: avoid!important;'>
    <div> Conditions de paiement:</div>
    <div class='notice'>
      {{if model.res.condition_paiement.designation != "" || model.res.condition_paiement.designation != null}}
      {{model.res.condition_paiement.designation }}
      {{else}}
      {{end}}
    </div>
  </div>
{{end}}`;
  }
  if (values.innerText == "labelPrice") {
    textHTML = `<div id='notices' style='page-break-inside: avoid!important;'>
              <div> Arrêté le présent facture à la somme de :</div>
              <div class='notice'>
                {{ model.res.montant_ttc}}
                {{if model.res.devise != null}}
                  {{model.res.devise.symbole }}
                {{end}}
                {{if model.res.devise != null}}
                  <span>{{model.res.devise.designation }}</span>
                {{else}}
                  <span>Dirhams</span>
                {{end}}
              </div>
            </div>`;
  }
  if (values.innerText == "destinataireName") {
    textHTML = `
    <div class='to'>Destinataire:</div>
              <h2 class='name'>
              {{if model.res.client != null}}
                {{model.res.client.raison_sociale}}
              {{else}}
              {{""}}
              {{end}}
              </h2>
      `;
  }

  if (values.innerText == "destinataireAdresse") {
    textHTML = `   {{if model.res.client != null}}
    <div class='address'>
                {{model.res.client.adresse}} {{model.res.client.ville}}
                {{model.res.client.pays}}
    </div>
    {{end}}`;
  }
  if (values.innerText == "destinataireCode") {
    textHTML = ` {{if model.res.client.code != null || model.res.client.code != ""}}
    <div> Code : {{model.res.client.code}}</div>
    {{end}}`;
  }
  if (values.innerText == "destinataireICE") {
    textHTML = ` {{if model.res.client.ice != null && model.res.client.ice != ""}}
    <div> ICE : {{model.res.client.ice}}</div>
    {{end}}`;
  }
  if (values.innerText == "destinataireEmail") {
    textHTML = ` {{if model.res.client.email!= null || model.res.client.email != ""}}
    <a href ='{{res.client.email}}' >{{model.res.client.email}}</a>
    {{end}}`;
  }
  if (values.innerText == "adresse") {
    textHTML = ` {{if !model.res.is_same_adresse}}
    <div id = 'client' style = 'border-left-width:2px; max-width:150px' >
       <div class='to'>Adresse de Livraison:</div>
       <div class='name'>{{model.res.adresse_livraison}},{{model.res.ville_livraison}}</div>
    </div>
    {{end}}`;
  }
  return textHTML;
}
