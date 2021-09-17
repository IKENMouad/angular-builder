unlayer.registerTool({
  name: "condition-paiement",
  label: "Condition Paiement",
  icon: "fa-money-check",
  supportedDisplayModes: ["web", "email"],
  options: {},
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerCondtionPaiementTool(values, "view"),
    }),
    exporters: {
      web: (values) => registerCondtionPaiementTool(values, "web"),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerCondtionPaiementTool(values, renderer) {
  if (renderer === "view") {
    return `<div style="border-left: 6px solid grey; height: 45px;" >
    <div style="margin-left:10px">
      <span  style="color: #353333; font-size: 12px;" > Conditions de paiement :  </span>
      <br>
      <span> Avance 60%  </span>
    </div>
  </div>
  <br>`;
  } else {
    return `{{if model.param.is_visible_condition_paiement && model.res.condition_paiement != null }}
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
}
