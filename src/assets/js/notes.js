unlayer.registerTool({
  name: "Notes",
  label: "notes",
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
          defaultValue: 60,
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
      render: (values) => registerLabelPriceToolView(values),
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
  return `<div style="border-left: ${values.weight}px solid ${values.color}; height:  ${values.height}px;" >
  <div style="margin-left:10px">
    <span> Pretation livrée
     </span>
  </div>
</div>
<br>
`;
}
function registerLabelPriceToolWeb(values) {
  return `{{if model.res.note != null}}
    <div id='notices' style='page-break-inside: avoid!important;'>
      <div class='notice'>{{model.res.note}}</div>
    </div>
    {{end}}`;
}
