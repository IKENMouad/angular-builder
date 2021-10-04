unlayer.registerTool({
  name: "customTool2",
  label: "CustomTool2",
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
          defaultValue: "#006FD6",
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
  return `<div style="border-left: ${values.weight}px solid ${values.color}; height:  ${values.height}px;" >
  <div style="margin-left:10px">
    <span> Pretation livrée
     </span>
  </div>
</div>
<br>
`;
}
function registerNotePriceToolWeb(values) {
  return `{{if model.res.note != null}}
    <div id='notices' style='page-break-inside: avoid!important;'>
      <div class='notice'>{{model.res.note}}</div>
    </div>
    {{end}}`;
}
