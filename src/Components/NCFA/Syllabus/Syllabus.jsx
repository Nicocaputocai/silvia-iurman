import React from "react";
import { Button, Container } from "react-bootstrap";
import { HelmetPage } from "../../components";
import { Link } from "react-router-dom";
export const Syllabus = () => {
  return (

    <>
        <HelmetPage
    section='Temario de la formación en Nuevas Constelaciones Familiares y Eneagrama'
    content='Temario de la formación en Formación en Nuevas Constelaciones Familiares y Eneagrama Silvia Iurman - Nuevas Constelaciones Familiares Argentina'
  />
      <Container>
      <h1
            className="textColor bg-white text-center m-4"
            >Temario</h1>
        <div>
        <h6>MODULO 0: Eneagrama Psicoespiritual</h6>
        <br />
        <h6>MODULO 1 Del orden al amor - Variantes instintivas- El campo de la
        ilusión</h6>
        <br />
        <h6> MODULO 2 Niveles de desarrollo - Intrincamiento con ancestros</h6>
        <br />
        <h6>MODULO 3 -La enfermedad - Eneagrama: profundización I</h6>
        <br />
        <h6> MODULO 4 La pareja - Eneagrama: profundización II</h6>
        <br />
        <h6> MODULO 5 Campos mórficos- Eneagrama: profundización III</h6>
        <br />
        <h6> MODULO 6 Trastornos de la salud mental - Organización psíquica</h6>
        <br />
        <h6> MODULO 7 Guion de vida, juegos psicológicos de manipulación -
        Organización psíquica</h6>
        <br />
        <h6>MODULO 8 Entrenamiento en constelar desde las nuevas constelaciones
        familiares - Los grupos hornevianos y armónicos-</h6>
        <br />
        <h6>MODULO 9 Resonancia morfogenética y péndulos de resonancia. Biología
        sistémica: la trasmisión. Dinámicas sistémicas - Las alas</h6>
        <br />
        <h6> MODULO 10 La fuerza del dinero y el trabajo. La invitación a despertar
        de cada eneatipo</h6>
        <br />
        <h6>MODULO 11 La sintonía en el éxito y abundancia. La psicología del
        eneagrama la dimensión emocional de los eneatipos</h6>
        <br />
        <h6>MODULO 12 Análisis transaccional: los juegos psicológicos</h6>
        <br />
        <h6>La psicología del eneagrama: la dimensión emocional de los eneatipos</h6>
        <br />
        <h6>MODULO 13 La comunicación dentro del eneagrama. Los centros energéticos
        en el Yo adulto</h6>
        <br />
        <h6>MODULO 14 Los que estuvieron antes: trauma transgeneracional y la fuerza
        que viene de atrás. Psicología y espiritualidad del eneagrama</h6>
        <br />
        <h6>MODULO 15 Las bases de la identidad y su psicosomática sistémica
        transgeneracional transmisiones metabolizadas y no, en el cuerpo</h6>
        <br />
        <h6>MODULO 16 El salto evolutivo. La filosofía de vida de Bert Hellinger. El
        destino. La meta del sistema. Eneagrama y nivel del ser.</h6>
        <br />
        <br />
        </div>
        <div className=" d-flex justify-content-center align-items-center">
        <Button
          variant="secondary"
          className="m-3 bgColor"
          size="lg">
          <Link to="/dashboard" className="text-white text-decoration-none">
              Inscribite
          </Link>
        </Button>
        <Button
          variant="secondary"
          className="m-3 bgColor"
          size="lg">
          <Link to="/NCFA" className="text-white text-decoration-none">
              Información
          </Link>
        </Button>
        </div>
     
      </Container>
    </>
  );
};
