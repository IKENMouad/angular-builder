unlayer.registerTool({
  name: "total-prices",
  label: "Price",
  icon: "fa-dollar-sign",
  supportedDisplayModes: ["web", "email"],
  options: {
    text: {
      title: "Prices",
      position: 1,
      options: {
        ht: {
          label: "TOTAL HT",
          defaultValue: "1,310.00",
          widget: "text",
        },
        tva: {
          label: "TVA",
          defaultValue: "262.00",
          widget: "text",
        },
        ttc: {
          label: "Text TTC",
          defaultValue: "1,572.00",
          widget: "text",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerTotalPricesTool(values),
    }),
    exporters: {
      web: (values) => registerTotalPricesTool(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerTotalPricesTool(values) {
  return `<div style="text-align:right" >
                  TOTAL HT  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            ${values.ht}
                </div> 
                <br>
                <h1 style="text-align:right; float:right; border:1px solid gray; width:8rem"> </h1>
                <br>
                <div style="text-align:right" >
                  TVA   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;    ${values.tva}
                </div>
                <br>
                <h1 style="text-align:right; float:right; border:1px solid gray; width:8rem"> </h1>
                <br>
                <div style="text-align:right" >
                  Total TTC  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     ${values.ttc}
                </div> 
     `;
}
