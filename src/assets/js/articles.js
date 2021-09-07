unlayer.registerTool({
  name: "articles",
  label: "Table",
  icon: "fa-table",
  supportedDisplayModes: ["web", "email"],
  options: {
    columns: {
      title: "COLUMS",
      position: 1,
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
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render: (values) => registerArticlesTool(values),
    }),
    exporters: {
      web: (values) => registerArticlesTool(values),
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});

function registerArticlesTool(values) {
  console.log("values", values);

  let textHTML = "";
  let textHTMLHeader = "";
  let articles = [
    {
      article: "article 1",
      designation: "Lorem ipsum dolor sit amet.",
      qte: 5,
      udm: "m",
      puht: 1000,
      tva: 20,
      remise: "0",
      ht: 1200,
    },
    {
      article: "article 2",
      designation: "Lorem ipsum dolor sit amet.",
      qte: 10,
      udm: "kg",
      puht: 3000,
      tva: 20,
      remise: "0",
      ht: 3600,
    },
  ];

  let articleHeaders = ["ARTICLE", "DESIGNATION"];
  if (values.qnt) {
    articleHeaders.push("QTE");
  }
  if (values.prixUnitaire) {
    articleHeaders.push("UDM");
  }
  if (values.udm) {
    articleHeaders.push("PU HT");
  }
  articleHeaders = [...articleHeaders, ...["TVA", "REM %", "HT"]];

  articleHeaders.forEach((header) => {
    textHTMLHeader += `<th> ${header} </th>`;
  });
  for (let i = 0; i < articles.length; i++) {
    textHTML += `
    <tr>
          <td style="width: 20rem"> ${articles[i].article}  </td>                    
          <td>  ${articles[i].designation} </td> `;
    if (values.qnt) {
      textHTML += `<td>${articles[i].qte} </td>`;
    }
    if (values.udm) {
      textHTML += `<td>${articles[i].udm}</td>`;
    }
    if (values.prixUnitaire) {
      textHTML += `<td>${articles[i].puht} </td>`;
    }
    textHTML += `
          <td>  ${articles[i].tva} </td>  
          <td>  ${articles[i].remise} </td> 
          <td>  ${articles[i].ht} </td> 
    </tr> 
              `;
  }
  const renderHTML = `<div style="width:100%" >
  <table class="table table-striped  table-responsive">
      <thead class="thead-inverse" >
      <tr>
       ${textHTMLHeader} 
      </tr>
      </thead>
      <tbody>
      ${textHTML}
      </tbody> 
  </table>
</div>`;
  return renderHTML;
}
