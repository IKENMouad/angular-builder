unlayer.registerTool({
  name: "label-prices",
  label: "CardPrice",
  icon: "fa-money-check",
  supportedDisplayModes: ["web", "email"],
  options: {},
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerLabelPriceTool(values, "view"),
    }),
    exporters: {
      web: (values) => registerLabelPriceTool(values, "web"),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerLabelPriceTool(values, renderer) {
  if (renderer === "view") {
    return `<div style="border-left: 6px solid grey; height: 45px;" >
    <div style="margin-left:10px">
      <span  style="color: #353333; font-size: 12px;" > Arreté le présent facture à la sommede:  </span>
      <br>
      <span> mille cinq cent soixante-douze Dirhams </span>
    </div>
  </div>
  <br>`;
  } else {
    return `<div id='notices' style='page-break-inside: avoid!important;'>
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
}
