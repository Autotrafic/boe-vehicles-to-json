const table = `
<table class="tabla_ancha">
<colgroup>
  <col width="46%"/>
  <col width="6%"/>
  <col width="6%"/>
  <col width="6%"/>
  <col width="6%"/>
  <col width="5%"/>
  <col width="7%"/>
  <col width="6%"/>
  <col width="5%"/>
  <col width="7%"/>
</colgroup>
<thead>
  <tr>
    <th class="cabeza_tabla" colspan="10">Marca: ABARTH</th>
  </tr>
  <tr>
    <th class="cabeza_tabla" rowspan="2">Modelo-Tipo</th>
    <th class="cabeza_tabla" colspan="2">Periodo comercial</th>
    <th class="cabeza_tabla" colspan="5">Datos ficha técnica</th>
    <th class="cabeza_tabla" rowspan="2">cv</th>
    <th class="cabeza_tabla" rowspan="2">2024 Valor euros</th>
  </tr>
  <tr>
    <th class="cabeza_tabla">Inicio</th>
    <th class="cabeza_tabla">Fin</th>
    <th class="cabeza_tabla">C.C.</th>
    <th class="cabeza_tabla">N.º de cilind.</th>
    <th class="cabeza_tabla">G/D</th>
    <th class="cabeza_tabla">P kW</th>
    <th class="cabeza_tabla">cvf</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="cuerpo_tabla_izq">124  1.4 Spider   / TB Multiair 6V   Aut.      170</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">125</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">170</td>
    <td class="cuerpo_tabla_centro">32.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">124  1.4 Spider  / TB Multiair 6V    170</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">125</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">170</td>
    <td class="cuerpo_tabla_centro">30.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">124  1.4 Spider TB Multiair GT 6V     170</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">125</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">170</td>
    <td class="cuerpo_tabla_centro">31.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">124  1.4 Spider TB Multiair GT 6V  Aut.   170</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">125</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">170</td>
    <td class="cuerpo_tabla_centro">33.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">124  1.4 Spider TB Multiair Turismo 6V     170</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">125</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">170</td>
    <td class="cuerpo_tabla_centro">29.100</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">124  1.4 Spider TB Multiair Turismo 6V  Aut.    170</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">125</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">170</td>
    <td class="cuerpo_tabla_centro">30.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500  1.4 T-Jet 595 Competizione  160</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">17.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500  1.4 T-Jet 595 Competizione  180</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">20.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500  1.4 T-Jet 595 Competizione Secuencial  180</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">21.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500  1.4 T-Jet 595 Competizione Secuencial 160</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">20.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500  1.4 T-Jet 595 Turismo (Secuencial) 160</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">18.100</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500  1.4 T-Jet 595 Turismo 160</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">16.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 1.4 16v 121kW Monster Energy Yamaha E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">21.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 1.4 16v T-Jet 595 107kW (145CV) E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">107</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">145</td>
    <td class="cuerpo_tabla_centro">17.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 1.4 16v T-Jet 695 132kW 70 Anivers. E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">28.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 1.4 T-Jet</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">99</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">135</td>
    <td class="cuerpo_tabla_centro">14.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 1.4 T-Jet  Secuencial</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">103</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">15.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 595 Competizione 1.4 16v T-Jet 132kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">24.100</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 595 Esseesse 1.4 16v T-Jet 132kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">26.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 595 Turismo 1.4 16v T-Jet 121kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">22.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 695 Esseesse 1.4 16v T-Jet 132kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">29.400</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">99</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">135</td>
    <td class="cuerpo_tabla_centro">15.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C  1.4 T-Jet 595 Competizione  180</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">21.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C  1.4 T-Jet 595 Competizione Secuencial  180</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">22.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C 1.4 T-Jet</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">99</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">135</td>
    <td class="cuerpo_tabla_centro">15.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C 1.4 T-Jet 595 Competizione 160</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">19.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C 1.4 T-Jet 595 Competizione Secuencial  160</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">21.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C 1.4 T-Jet 595 Turismo (Secuencial) 160</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">19.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C 1.4 T-Jet 595 Turismo 160</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">18.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 C 1.4 T-Jet Secuencial 140</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">103</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">16.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500 Vita</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">99</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">135</td>
    <td class="cuerpo_tabla_centro">14.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500C 1.4 16v 121kW Monster Energy Yamaha E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">23.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500C 1.4 16v T-Jet 595 107kW (145CV) E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">107</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">145</td>
    <td class="cuerpo_tabla_centro">19.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500C 595C Competiz. 1.4 16v T-Jet 132kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">25.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500C 595C Esseesse 1.4 16v T-Jet 132kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">27.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">500C 595C Turismo 1.4 16v T-Jet 121kW E6D (2021)</td>
    <td class="cuerpo_tabla_centro">2021</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">23.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">103</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">15.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet  145</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">107</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">145</td>
    <td class="cuerpo_tabla_centro">15.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet  Aut.   145</td>
    <td class="cuerpo_tabla_centro">2017</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">107</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">145</td>
    <td class="cuerpo_tabla_centro">17.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Competizione  180</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">20.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Competizione Secuencial  180</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">21.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Pista  160</td>
    <td class="cuerpo_tabla_centro">2018</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">17.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Pista Cabrio   165</td>
    <td class="cuerpo_tabla_centro">2018</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">19.100</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Secuencial</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">103</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">16.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Turismo  160</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">18.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Turismo  165</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">18.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Turismo Aut.   165</td>
    <td class="cuerpo_tabla_centro">2017</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">19.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet Turismo Secuencial  160</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">19.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet XSR Yamaha  165</td>
    <td class="cuerpo_tabla_centro">2018</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">20.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 1.4 T-Jet XSR Yamaha Cabrio  165</td>
    <td class="cuerpo_tabla_centro">2018</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">22.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">99</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">135</td>
    <td class="cuerpo_tabla_centro">16.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet  145</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">107</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">145</td>
    <td class="cuerpo_tabla_centro">16.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet  Aut.   145</td>
    <td class="cuerpo_tabla_centro">2017</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">107</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">145</td>
    <td class="cuerpo_tabla_centro">18.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Competizione  180</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">21.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Competizione Secuencial  180</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">23.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Secuencial  140</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">103</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">17.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Turismo  160</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">19.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Turismo  165</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">20.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Turismo Aut.  165</td>
    <td class="cuerpo_tabla_centro">2017</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">21.700</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">595 C 1.4 T-Jet Turismo Secuencial  160</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">118</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">21.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">695 Biposto</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">190</td>
    <td class="cuerpo_tabla_centro">32.400</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">695 Tributo Biposto</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2016</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">140</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">190</td>
    <td class="cuerpo_tabla_centro">31.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">695 Tributo Ferrari Amarillo Modena</td>
    <td class="cuerpo_tabla_centro">2011</td>
    <td class="cuerpo_tabla_centro">2013</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">36.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">695 Tributo Ferrari Azul Abu Dhabi</td>
    <td class="cuerpo_tabla_centro">2011</td>
    <td class="cuerpo_tabla_centro">2013</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">37.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">695 Tributo Ferrari Gris Titanio</td>
    <td class="cuerpo_tabla_centro">2011</td>
    <td class="cuerpo_tabla_centro">2013</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">37.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">695 Tributo Ferrari Rojo Corsa</td>
    <td class="cuerpo_tabla_centro">2011</td>
    <td class="cuerpo_tabla_centro">2013</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">35.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 500 BEV SCORPIONISSIMA 320 km 114 kW (155 CV)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">113</td>
    <td class="cuerpo_tabla_centro">21,93</td>
    <td class="cuerpo_tabla_centro">154</td>
    <td class="cuerpo_tabla_centro">33.500</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 500 BEV SCORPIONISSIMA CABRIO 320 km 114 kW (155 CV)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">113</td>
    <td class="cuerpo_tabla_centro">21,93</td>
    <td class="cuerpo_tabla_centro">154</td>
    <td class="cuerpo_tabla_centro">35.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 595 1.4 16v T-JET 121 kW (165 CV)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">24.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 595C 1.4 16v T-JET 121 KW (165 CV)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">27.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 695 1.4 16v T-JET 132 KW (180 CV)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">28.300</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 695 1.4 16v T-JET 132 KW (180 CV) AT</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">29.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 695C 1.4 16v T-JET 132 KW (180 CV)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">29.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">ABARTH 695C 1.4 16v T-JET 132 KW (180 CV) AT</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">31.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Grande Punto</td>
    <td class="cuerpo_tabla_centro">2009</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">114</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">155</td>
    <td class="cuerpo_tabla_centro">13.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Nuevo Abarth 500e 42kwh 113kw (154cv)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">113</td>
    <td class="cuerpo_tabla_centro">21,93</td>
    <td class="cuerpo_tabla_centro">154</td>
    <td class="cuerpo_tabla_centro">30.100</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Nuevo Abarth 500e Turismo 42kwh 113kw (154cv)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">113</td>
    <td class="cuerpo_tabla_centro">21,93</td>
    <td class="cuerpo_tabla_centro">154</td>
    <td class="cuerpo_tabla_centro">33.200</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Nuevo Abarth Cabrio 500e 42kwh 113kw (154cv)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">113</td>
    <td class="cuerpo_tabla_centro">21,93</td>
    <td class="cuerpo_tabla_centro">154</td>
    <td class="cuerpo_tabla_centro">32.400</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Nuevo Abarth Cabrio 500e Turismo 42kwh 113kw (154cv)</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">113</td>
    <td class="cuerpo_tabla_centro">21,93</td>
    <td class="cuerpo_tabla_centro">154</td>
    <td class="cuerpo_tabla_centro">35.600</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Punto 1.4 Multiair</td>
    <td class="cuerpo_tabla_centro">2012</td>
    <td class="cuerpo_tabla_centro">2014</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">14.900</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Punto 1.4 Multiair Supersport</td>
    <td class="cuerpo_tabla_centro">2012</td>
    <td class="cuerpo_tabla_centro">2014</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">132</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">180</td>
    <td class="cuerpo_tabla_centro">15.800</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">Punto Evo 1.4 Multiai</td>
    <td class="cuerpo_tabla_centro">2010</td>
    <td class="cuerpo_tabla_centro">2012</td>
    <td class="cuerpo_tabla_centro">1368</td>
    <td class="cuerpo_tabla_centro">4</td>
    <td class="cuerpo_tabla_centro">G</td>
    <td class="cuerpo_tabla_centro">121</td>
    <td class="cuerpo_tabla_centro">10,61</td>
    <td class="cuerpo_tabla_centro">165</td>
    <td class="cuerpo_tabla_centro">14.400</td>
  </tr>
</tbody>
</table>
<table class="tabla_ancha">
<colgroup>
  <col width="46%"/>
  <col width="6%"/>
  <col width="6%"/>
  <col width="6%"/>
  <col width="6%"/>
  <col width="5%"/>
  <col width="7%"/>
  <col width="6%"/>
  <col width="5%"/>
  <col width="7%"/>
</colgroup>
<thead>
  <tr>
    <th class="cabeza_tabla" colspan="10">Marca: AIWAIS</th>
  </tr>
  <tr>
    <th class="cabeza_tabla" rowspan="2">Modelo-Tipo</th>
    <th class="cabeza_tabla" colspan="2">Periodo comercial</th>
    <th class="cabeza_tabla" colspan="5">Datos ficha técnica</th>
    <th class="cabeza_tabla" rowspan="2">cv</th>
    <th class="cabeza_tabla" rowspan="2">2024 Valor euros</th>
  </tr>
  <tr>
    <th class="cabeza_tabla">Inicio</th>
    <th class="cabeza_tabla">Fin</th>
    <th class="cabeza_tabla">C.C.</th>
    <th class="cabeza_tabla">N.º de cilind.</th>
    <th class="cabeza_tabla">G/D</th>
    <th class="cabeza_tabla">P kW</th>
    <th class="cabeza_tabla">cvf</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="cuerpo_tabla_izq">U5 PRIME</td>
    <td class="cuerpo_tabla_centro">2022</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">150</td>
    <td class="cuerpo_tabla_centro">29,11</td>
    <td class="cuerpo_tabla_centro">204</td>
    <td class="cuerpo_tabla_centro">37.000</td>
  </tr>
  <tr>
    <td class="cuerpo_tabla_izq">U6 PRIME</td>
    <td class="cuerpo_tabla_centro">2023</td>
    <td class="cuerpo_tabla_centro">2024</td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro"> </td>
    <td class="cuerpo_tabla_centro">Elc</td>
    <td class="cuerpo_tabla_centro">160</td>
    <td class="cuerpo_tabla_centro">31,05</td>
    <td class="cuerpo_tabla_centro">218</td>
    <td class="cuerpo_tabla_centro">38.500</td>
  </tr>
</tbody>
</table>
`;

module.exports = table;