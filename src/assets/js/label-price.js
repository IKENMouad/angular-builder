unlayer.registerTool({
  name: "label-prices",
  label: "CardPrice",
  icon: "fa-money-check",
  supportedDisplayModes: ["web", "email"],
  options: {},
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerLabelPriceTool(values),
    }),
    exporters: {
      web: (values) => registerLabelPriceTool(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerLabelPriceTool(values) {
  return `<div style="border-left: 6px solid grey; height: 45px;" >
  <div style="margin-left:10px">
    <span  style="color: #353333; font-size: 12px;" > Arreté le présent facture à la sommede:  </span>
    <br>
    <span> mille cinq cent soixante-douze Dirhams </span>
  </div>
</div> 
<br>
`;
}
