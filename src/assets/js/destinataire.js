unlayer.registerTool({
  name: "destinataire",
  label: "Destinataire",
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
      render: (values) => registerDestinatairePriceToolView(values),
    }),
    exporters: {
      web: (values) => registerDestinatairePriceToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
function registerDestinatairePriceToolView(values) {
  return `<div style="border-left: ${values.weight}px solid ${values.color}; height:  ${values.height}px;" >
   <div style="margin-left:10px;color:${values.textColor}">
   <span  style="font-size: 12px;" > Destinataire :  </span>
   <br>
   <span style="font-size: 24px;"> Jawad  </span>
   <span  style="font-size: 12px;" > LayounLayoun Maroc  </span>
   <br>
   <span  style="font-size: 12px;" > Code : 7 </span>
   <br>
   <span  style="font-size: 12px;" > ICE : 123456789012345 </span>
   <br>
   <span  style="color: #006FD6; font-size: 12px;" > cherkaouuijawad@gmail.com  </span>
   </div>
  </div>
<br>
`;
}
function registerDestinatairePriceToolWeb(values) {
  return `{{if model.res.note != null}}
    <div id='notices' style='page-break-inside: avoid!important;'>
      <div class='notice'>{{model.res.note}}</div>
    </div>
    {{end}}`;
}
