import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { HelmetPage } from '../components'

export default function Diary() {
  return (
    <>
    <HelmetPage section='Agenda' content='Agenda - Nuevas Constelaciones Familiares Argentina'/>
<Container className=' d-flex flex-column'>
        <h1 className='text-center mt-3 mb-3 textColor'>
            Agenda de actividades
        </h1> <br />
    <h2>
    Diciembre 2023
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
      <tr style={{backgroundColor: "#d4eaf7"}}>
        <td>Sábado 16 de diciembre</td>
        <td>Módulo 16 F. NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}>
        <td>Domingo 17 de diciembre</td>
        <td>Módulo 16 F. NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}>
        <td>Sábado 2 de diciembre</td>
        <td>Taller constelaciones familiares</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ff983f"}}>
        <td>Sábado 9 de diciembre </td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
    </tbody>
  </Table>
  {/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /> <br /><br /> */}
  <h2>
    Febrero 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 4 de Febrero</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> 
        <td>Sábado 17 de febrero</td>
        <td>Módulo 1 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Domingo 18 de febrero</td>
        <td>Módulo 1 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        
        <td>Sábado 17 de febrero</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Marzo 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 9 de marzo</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 16 de marzo</td>
        <td>Módulo 2 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 17 de marzo</td>
        <td>Módulo 2 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 16 de marzo</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 1 de marzo</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>

    </tbody>
  </Table>
  <h2>
    Abril 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
      <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 13 de abril</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 20 de abril</td>
        <td>Módulo 3 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 21 de abril</td>
        <td>Módulo 3 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 20 de abril</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Mayo 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 11 de mayo</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
    <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 18 de mayo</td>
        <td>Módulo 4 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 19 de mayo</td>
        <td>Módulo 4 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 18 de mayo</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 24 de mayo</td>
        <td>EEV</td>
        <td>Presencial <b>*a confirmar*</b></td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Junio 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 8 de junio</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 15 de junio</td>
        <td>Módulo 5 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 16 de junio</td>
        <td>Módulo 5 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 15 de junio</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 28 de junio</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>

    </tbody>
  </Table>
  <h2>
    Julio 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 13 de julio</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 5 de julio</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Agosto 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 10 de agosto</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 24 de agosto</td>
        <td>Módulo 6 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 25 de agosto</td>
        <td>Módulo 6 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 24 de agosto</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Septiembre 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Domingo 8 de septiembre</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 14 de septiembre</td>
        <td>Módulo 7 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 15 de septiembre</td>
        <td>Módulo 7 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 14 de septiembre</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 20 de septiembre</td>
        <td>EEV</td>
        <td>Presencial <b>*a confirmar*</b></td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Octubre 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 12 de octubre</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 26 de octubre</td>
        <td>Módulo 8 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 27 de octubre</td>
        <td>Módulo 8 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 26 de octubre</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 18 de octubre</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Noviembre 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 9 de novimebre</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 16 de noviembre</td>
        <td>Módulo 9 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 17 de noviembre</td>
        <td>Módulo 9 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Sábado 16 de noviembre</td>
        <td>Taller constelaciones fam</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 29 de noviembre</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>
    </tbody>
  </Table>
  <h2>
    Diciembre 2024
    </h2>
    <Table striped bordered hover responsive="lg">
    <thead>
    <tr>
        <th>Fecha</th>
        <th>Actividad</th>
        <th>Modalidad</th>
      </tr>
    </thead>
    <tbody>
    <tr style={{backgroundColor: "#ff983f"}}> {/* naranja */}
        <td>Sábado 14 de dicembre</td>
        <td>Taller presencial Palermo</td>
        <td>Presencial</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Sábado 7 de diciembre</td>
        <td>Módulo 10 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#d4eaf7"}}> {/* celeste */}
        <td>Domingo 8 de diciembre</td>
        <td>Módulo 10 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#8FBC8F"}}> {/* verde */}
        <td>Domingo 8 de diciembre</td>
        <td>Módulo 10 F.NCF y E</td>
        <td>ONLINE</td>
      </tr>
      <tr style={{backgroundColor: "#ffffa1"}}>  {/* amarillo */}
        <td>Viernes 20 de diciembre</td>
        <td>EEV</td>
        <td>Presencial</td>
      </tr>
    </tbody>
  </Table>
  
  </Container>
  </>
  )
}
