unlayer.registerTool({
  name: "condition-paiement",
  label: "Condition Paiement",
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
    <span  style="color: #353333; font-size: 12px;" > Conditions de paiement :  </span>
    <br>
    <span> Avance 60%  </span>
  </div>
</div> 
<br>
`;
}
