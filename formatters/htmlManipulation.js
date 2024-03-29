function manipulateHtmlTable(inputString) {
  // Split the input string into an array of table strings
  const tables = inputString.split("</table>");

  // Apply transformations to each table
  const processedTables = tables.map((tableString) => {
    if (!tableString.trim()) return ""; // Skip empty strings resulted from split

    // Append </table> back to each table string as split removes it
    tableString += "</table>";

    const brandStartIndex = tableString.indexOf(`>Marca:`) + 8;
    const brandEndIndex = tableString
      .substring(brandStartIndex)
      .indexOf("</th>");

    const brand = tableString.substr(brandStartIndex, brandEndIndex);

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
        `<th class="cabeza_tabla" colspan="10">Marca: ${brand}</th>`,
        '<th class="cabeza_tabla">brand</th>'
      )
      .replace(
        '</tr>\n        <tr>\n          <th class="cabeza_tabla">Inicio</th>',
        '  <th class="cabeza_tabla">Inicio</th>'
      )
      .replace(
        '</tr>\n        <tr>\n          <th class="cabeza_tabla" rowspan="2">Modelo-Tipo</th>',
        '  <th class="cabeza_tabla">model</th>'
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
        '<th class="cabeza_tabla">startDate</th>'
      )
      .replace(
        '<th class="cabeza_tabla">Fin</th>',
        '<th class="cabeza_tabla">endDate</th>'
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
        `<td class="cuerpo_tabla_centro">${brand}</td>\n    <td class="cuerpo_tabla_izq">`
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