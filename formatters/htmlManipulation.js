function manipulateHtmlTable(inputString) {
  // Split the input string into an array of table strings
  const tables = inputString.split("</table>");

  // Apply transformations to each table
  const processedTables = tables.map((tableString) => {
    if (!tableString.trim()) return ""; // Skip empty strings resulted from split

    // Append </table> back to each table string as split removes it
    tableString += "</table>";

    const brandNameStartIndex = tableString.indexOf(`>Marca:`) + 8;
    const brandNameEndIndex = tableString
      .substring(brandNameStartIndex)
      .indexOf("</th>");

    const brandName = tableString.substr(brandNameStartIndex, brandNameEndIndex);

    let reducedString = tableString
      .replace(
        '<th class="cabeza_tabla" colspan="2">Periodo comercial</th>\n          ',
        ""
      )
      .replace(
        '<th class="cabeza_tabla" colspan="5">Datos ficha técnica</th>\n          ',
        ""
      )
      .replace(
        `<th class="cabeza_tabla" colspan="10">Marca: ${brandName}</th>`,
        '<th class="cabeza_tabla">brandName</th>'
      )
      .replace(
        '</tr>\n        <tr>\n          <th class="cabeza_tabla">Inicio</th>',
        '  <th class="cabeza_tabla">Inicio</th>'
      )
      .replace(
        '</tr>\n        <tr>\n          <th class="cabeza_tabla" rowspan="2">Modelo-Tipo</th>',
        '  <th class="cabeza_tabla">modelName</th>'
      )
      .replace(
        '<th class="cabeza_tabla" rowspan="2">cv</th>',
        '<th class="cabeza_tabla">cv</th>'
      )
      .replace(
        '<th class="cabeza_tabla" rowspan="2">2024 Valor euros</th>',
        '<th class="cabeza_tabla">value</th>'
      )
      .replace(
        /<th class="cabeza_tabla"\s+rowspan="2"\s*>[\s\S]*?<\/th>/,
        '<th class="cabeza_tabla">value</th>'
      )
      .replace(
        '<th class="cabeza_tabla">Inicio</th>',
        '<th class="cabeza_tabla">startYear</th>'
      )
      .replace(
        '<th class="cabeza_tabla">Fin</th>',
        '<th class="cabeza_tabla">endYear</th>'
      )
      .replace(
        '<th class="cabeza_tabla">C.C.</th>',
        '<th class="cabeza_tabla">cc</th>'
      )
      .replace(
        '<th class="cabeza_tabla">N.º de cilind.</th>',
        '<th class="cabeza_tabla">cylindersNumber</th>'
      )
      .replace(
        '<th class="cabeza_tabla">G/D</th>',
        '<th class="cabeza_tabla">fuel</th>'
      )
      .replace(
        '<th class="cabeza_tabla">P kW</th>',
        '<th class="cabeza_tabla">kWPower</th>'
      )
      .replace(
        '<th class="cabeza_tabla">cvf</th>',
        '<th class="cabeza_tabla">cvf</th>'
      );

    const models = reducedString.split("</tr>");

    const processedModels = models.map((modelString) => {
      if (!modelString.trim()) return "";

      modelString += "</tr>";

      let formattedModel = modelString.replace(
        '<td class="cuerpo_tabla_izq">',
        `<td class="cuerpo_tabla_centro">${brandName}</td>\n    <td class="cuerpo_tabla_izq">`
      );

      return formattedModel;
    });

    return processedModels;
  });

  // Recombine the processed tables into a single string
  const finalString = processedTables.join("");

  return finalString;
}

module.exports = manipulateHtmlTable;