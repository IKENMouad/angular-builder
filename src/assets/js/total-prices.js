unlayer.registerTool({
  name: "total-prices",
  label: "Price",
  icon: "fa-dollar-sign",
  supportedDisplayModes: ["web", "email"],
  options: {},
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerTotalPricesToolView(values),
    }),
    exporters: {
      web: (values) => registerTotalPricesToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerTotalPricesToolView(values) {
  return `<div style="text-align:right" >
                  TOTAL HT  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;            1,310.00
                </div>
                <br>
                <h1 style="text-align:right; float:right; border:1px solid gray; width:8rem"> </h1>
                <br>
                <div style="text-align:right" >
                  TVA   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     262.00
                </div>
                <br>
                <h1 style="text-align:right; float:right; border:1px solid gray; width:8rem"> </h1>
                <br>
                <div style="text-align:right" >
                  Total TTC  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     1,572.00
                </div>
     `;
}

function registerTotalPricesToolWeb(values) {
  return `<table class='foot' style='width: auto; float:right; page-break-inside: avoid !important;'>
  <tr>
    <td style='width: 150px;'>TOTAL HT</td>
    <td>
      {{if model.res.devise != null}}
      <span>{{model.res.devise.symbole }}</span>
      {{end}}
      {{model.res.montant_ht}}
    </td>
  </tr>
  <tr>
    <td style='width: 150px;'>TVA</td>
    <td>

      {{if model.res.devise != null}}

      <span>{{model.res.devise.symbole}}</span>
      {{end}}
      {{model.res.montant_tva}}
    </td>
  </tr>
  <tr>
    <td style='width: 150px;'>TOTAL TTC</td>
    <td>
      {{if model.res.devise != null }}
      <span>{{model.res.devise.symbole}}</span>
      {{end}}
      {{ model.res.montant_ttc}}
    </td>
  </tr>
</table>`;
}
