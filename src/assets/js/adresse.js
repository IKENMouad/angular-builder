unlayer.registerTool({
  name: "adresse",
  label: "Adresse",
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
        textColor: {
          label: "text color",
          widget: "color_picker",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerAdressePriceToolView(values),
    }),
    exporters: {
      web: (values) => registerAdressePriceToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
function registerAdressePriceToolView(values) {
  return `<div style="border-left: ${values.weight}px solid ${values.color}; height:  ${values.height}px;" >
  <div style="margin-left:10px;color:${values.textColor}">
    <span> Adresse de Livraison :
     </span>
  </div>
</div>
<br>
`;
}
function registerAdressePriceToolWeb(values) {
  return `{{if model.res.note != null}}
    <div id='notices' style='page-break-inside: avoid!important;'>
      <div class='notice'>{{model.res.note}}</div>
    </div>
    {{end}}`;
}
