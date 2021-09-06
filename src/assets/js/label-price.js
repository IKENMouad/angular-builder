unlayer.registerTool({
  name: "label-prices",
  label: "CardPrice",
  icon: "fa-table",
  supportedDisplayModes: ["web", "email"],
  options: {
    priceAndCondition: {
      title: "Prix et Conditions de paiement",
      position: 1,
      options: {
        labelPrice: {
          label: "Prix",
          defaultValue: "mille cinq cent soixante-douze Dirhams",
          widget: "text",
        },
        conditionPaiement: {
          label: "Conditions de paiement",
          defaultValue: "Avance 20%",
          widget: "dropdown",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        return `<div style="border-left: 6px solid grey; height: 45px;" >
                  <div style="margin-left:10px">
                    <span  style="color: #353333; font-size: 12px;" > Arreté le présent facture à la sommede: </span>
                    <br>
                    <span> ${values.labelPrice} </span>
                  </div>
                </div> 
                <br>
                <div style="border-left: 6px solid grey; height: 45px;" >
                  <div style="margin-left:10px">
                    <span style="color: #353333; font-size: 12px;" > Conditions de paiement: </span>
                    <br>
                    <span> ${values.conditionPaiement} </span>
                  </div>
                </div>
         `;
      },
    }),
    exporters: {
      web: function (values) {
        return `web`;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
