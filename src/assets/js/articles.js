unlayer.registerTool({
  name: "articles",
  label: "Table",
  icon: "fa-table",
  supportedDisplayModes: ["web", "email"],
  options: {},
  values: {},
  renderer: {
    Viewer: unlayer.createViewer({
      render(values) {
        let textHTML = "";
        let artiles = [
          {
            description: "description 1",
            qte: 5,
            udm: "m",
            puht: 1000,
          },
          {
            description: "description 2",
            qte: 10,
            udm: "kg",
            puht: 3000,
          },
        ];
        for (let i = 0; i < artiles.length; i++) {
          textHTML += `<tr>
          <td style="width: 20rem"> ${artiles[i].description}  </td>                    
          <td>  ${artiles[i].qte} </td>
          <td>  ${artiles[i].udm} </td>
          <td>  ${artiles[i].puht} </td>
        </tr>`;
        }

        return `<div style="width:100%" >
            <table class="table table-striped  table-responsive">
                <thead class="thead-inverse" >
                  <tr>
                    <th> DESCRIPTION </th>
                    <th> QTE </th>
                    <th> UDM </th>
                    <th> PU HT </th>
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
        return ` <div style="width:100%" >
        <table class="table table-striped  table-responsive">
            <thead class="thead-inverse" >
              <tr>
                <th> DESCRIPTION </th>
                <th> QTE </th>
                <th> UDM </th>
                <th> PU HT </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="width: 20rem"> DESCRIPTION 1 </td>                    
                <td> 5 </td>
                <td> m </td>
                <td> 1000 </td>
              </tr>
              <tr>
                <td style="width: 20rem"  > DESCRIPTION 2</td>                    
                <td> 10 </td>
                <td> kg </td>
                <td> 2000 </td>
              </tr>
            </tbody> 
        </table>
    </div>  `;
      },
    },
    head: {
      css: function (values) {},
      js: function (values) {},
    },
  },
});
