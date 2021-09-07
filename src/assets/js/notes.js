unlayer.registerTool({
  name: "Notes",
  label: "notes",
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
  return `<div style="border-left: 6px solid grey; height: 60px;" >
  <div style="margin-left:10px">
    <span> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti quis facilis ipsam quia consectetur, mollitia exercitationem quisquam pariatur excepturi incidunt. 
     </span>
  </div>
</div> 
<br>
`;
}
