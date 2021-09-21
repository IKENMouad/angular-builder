unlayer.registerTool({
  name: "condition-paiement",
  label: "Condition Paiement",
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
          defaultValue: "#808080",
          widget: "color_picker",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerCondtionPaiementToolView(values),
    }),
    exporters: {
      web: (values) => registerCondtionPaiementToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
function registerCondtionPaiementToolView(values) {
  return `<div style="border-left: ${values.weight}px solid ${values.color}; height:  ${values.height}px;" >
  <div style="margin-left:10px">
    <span  style="color: #353333; font-size: 12px;" > Conditions de paiement :  </span>
    <br>
    <span> Avance 60%  </span>
  </div>
</div>
<br>`;
}
function registerCondtionPaiementToolWeb(values) {
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
