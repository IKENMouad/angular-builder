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
        column1: {
          label: "Column 1",
          defaultValue: "Masquer",
          widget: "dropdown",
        },
        column2: {
          label: "Column 2",
          defaultValue: "Masquer",
          widget: "dropdown",
        },
        column3: {
          label: "Column 3",
          defaultValue: "Masquer",
          widget: "dropdown",
        },
        column4: {
          label: "Column 4",
          defaultValue: "Masquer",
          widget: "dropdown",
        },
      },
    },
  },
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        console.log("values", values);

        let textHTML = "";
        let textHTMLHeader = "";
        let articles = [
          {
            description: "Lorem ipsum dolor sit amet.",
            qte: 5,
            udm: "m",
            puht: 1000,
            total: () => qte * puht,
          },
          {
            description: "Lorem ipsum dolor sit amet.",
            qte: 10,
            udm: "kg",
            puht: 3000,
            total: () => qte * puht,
          },
        ];

        let articleHeaders = ["description", "qte", "udm", "puht", "total"];
        if (values.column1 !== "Masquer") {
          articleHeaders.push("column1");
        }
        if (values.column2 !== "Masquer") {
          articleHeaders.push("column2");
        }
        if (values.column3 !== "Masquer") {
          articleHeaders.push("column3");
        }
        if (values.column4 !== "Masquer") {
          articleHeaders.push("column4");
        }
        articleHeaders.forEach((header) => {
          textHTMLHeader += `<th> ${header} </th>`;
        });
        for (let i = 0; i < articles.length; i++) {
          textHTML += `<tr>
          <td style="width: 20rem"> ${
            articles[i].description
          }  </td>                    
          <td>  ${articles[i].qte} </td>
          <td>  ${articles[i].udm} </td>
          <td>  ${articles[i].puht} </td>
          <td>  ${articles[i].qte * articles[i].puht} </td>`;
          if (values.column1 !== "Masquer") {
            textHTML += `<td>column1</td>`;
          }
          if (values.column2 !== "Masquer") {
            textHTML += `<td>column2</td>`;
          }
          if (values.column3 !== "Masquer") {
            textHTML += `<td>column3</td>`;
          }
          if (values.column4 !== "Masquer") {
            textHTML += `<td>column4</td>`;
          }
          textHTML += `</tr>`;
        }

        return `<div style="width:100%" >
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
      },
    }),
    exporters: {
      web: function (values) {
        return ` web `;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
