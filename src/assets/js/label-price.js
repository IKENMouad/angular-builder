unlayer.registerTool({
  name: "label-prices",
  label: "CardPrice",
  icon: "fa-money-check",
  supportedDisplayModes: ["web", "email"],
  options: {
    columns: {
      title: "COLUMS",
      options: {
        weight: {
          label: "border weight",
          defaultValue: 6,
          widget: "counter",
        },
        height: {
          label: "border height",
          defaultValue: 45,
          widget: "counter",
        },
        color: {
          label: "border color",
          defaultValue: "#006FD6",
          widget: "color_picker",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => {
        console.log("values :", values);
        return registerLabelPriceToolView(values);
      },
    }),
    exporters: {
      web: (values) => registerLabelPriceToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerLabelPriceToolView(values) {
  return `<div style="border-left: ${values.weight}px solid ${values.color}; height: ${values.height}px;" >
  <div style="margin-left:10px">
    <span  style="color: #353333; font-size: 12px;" > Arreté le présent facture à la somme de :  </span>
    <br>
    <span> mille cinq cent soixante-douze Dirhams </span>
  </div>
  </div>
  <br>`;
}

function registerLabelPriceToolWeb(values) {
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
