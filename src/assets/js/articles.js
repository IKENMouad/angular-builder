unlayer.registerTool({
  name: "articles",
  label: "Table",
  icon: "fa-table",
  supportedDisplayModes: ["web", "email"],
  options: {
    columns: {
      title: "COLUMS",
      options: {
        qnt: {
          label: "Quantité",
          defaultValue: false,
          widget: "toggle",
        },
        prixUnitaire: {
          label: "Prix Unitaire",
          defaultValue: false,
          widget: "toggle",
        },
        udm: {
          label: "Unité de mesure",
          defaultValue: false,
          widget: "toggle",
        },
      },
    },
    styles: {
      title: "STYLES",
      options: {
        height: {
          label: "Height",
          defaultValue: 2,
          widget: "counter",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => {
        console.log("values render", values);
        return registerArticlesToolView(values);
      },
    }),
    exporters: {
      web: (values) => registerArticlesToolWeb(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerArticlesToolView(values) {
  let textHTML = "";
  let textHTMLHeader = "";
  let articles = [
    {
      description: "Lorem ipsum dolor sit amet.",
      qte: 5,
      udm: "m",
      puht: 1000,
      remise: "0",
      total: 1200,
    },
    {
      article: "article 2",
      description: "Lorem ipsum dolor sit amet.",
      qte: 10,
      udm: "kg",
      puht: 3000,
      tva: 20,
      remise: "0",
      total: 3600,
    },
  ];

  textHTMLHeader += `<tr>`;
  textHTMLHeader += `<th style="width: 60rem; text-align: left"> DESCRIPTION </th>`;
  if (values.qnt) {
    textHTMLHeader += `<th> QTE </th>`;
  }
  if (values.prixUnitaire) {
    textHTMLHeader += `<th> UDM </th>`;
  }
  if (values.udm) {
    textHTMLHeader += `<th style="width: 8rem"> PU HT </th>`;
  }
  textHTMLHeader += `<th style="width: 7rem"> REM % </th>`;
  textHTMLHeader += `<th> TOTAL </th>`;
  textHTMLHeader += `</th>`;

  for (let i = 0; i < articles.length; i++) {
    textHTML += `<tr style="border: ${values.height}px solid black " >
    <td style="text-align: left" > ${articles[i].description} </td> `;
    if (values.qnt) {
      textHTML += `<td>${articles[i].qte} </td>`;
    }
    if (values.udm) {
      textHTML += `<td> ${articles[i].udm}</td>`;
    }
    if (values.prixUnitaire) {
      textHTML += `<td >${articles[i].puht} </td>`;
    }

    textHTML += `
    <td > ${articles[i].remise} </td>
    <td> ${articles[i].total} </td>
</tr>
`;
  }

  const renderHTML = `<table class="table table-striped  table-responsive">
  <thead class="thead-inverse">
    ${textHTMLHeader}
  </thead>
  <tbody>
    ${textHTML}
  </tbody>
</table> `;
  return renderHTML;
}

function registerArticlesToolWeb(values) {
  let textHTML = "";
  let textHTMLHeader = "";

  textHTMLHeader += `<tr>`;
  textHTMLHeader += `<th class='desc'> description </th>`;
  if (values.qnt) {
    textHTMLHeader += `<th style='width: 50px;' class='qty'> QTE </th>`;
  }
  if (values.prixUnitaire) {
    textHTMLHeader += `<th style='width: 50px;' class='unit'> UDM </th>`;
  }
  if (values.udm) {
    textHTMLHeader += `<th style='width: 100px;' class='qty'> PU HT </th>`;
  }
  textHTMLHeader += `<th style='width: 50px;' class='unit'> REM % </th>`;
  textHTMLHeader += `<th style='width: 100px;' class='total'> HT </th>`;
  textHTMLHeader += `</th>`;

  textHTML += `
  {{if model.ligne != null}}
  {{for item in model.ligne }}
<tr>
  <td class='desc'>
    <div> {{ item.description }} </div>
  </td>`;
  if (values.qnt) {
    textHTML += `<td class='qty'>
    <div>{{item.quantite}}</div>
  </td>`;
  }
  if (values.udm) {
    textHTML += `<td class='unit'>
    <div>{{item.unite_mesure}}</div>
  </td>`;
  }
  if (values.prixUnitaire) {
    textHTML += `<td class='qty'>
    <div>{{item.prix_unitaire_ht}}</div>
  </td>`;
  }
  textHTML += `<td class='unit'>
    <div>{{item.remise}}</div>
  </td>
  <td class='total'>
    <div>{{item.montant_ttc}}</div>
  </td>
</tr>
{{end}}
{{end}}`;

  const renderHTML = ` <table border='0' cellspacing='0' cellpadding='0'>
  <thead>

    ${textHTMLHeader}

  </thead>
  <tbody style='page-break-after: always;'>
    ${textHTML}
  </tbody>
</table> `;
  return renderHTML;
}
