import React from 'react';
import './Home.scss'

// images
import perfil from '../../assets/images/pefil_foto.png'
import correo from '../../assets/images/correo.png'
import telefono from '../../assets/images/telefono.png'
import ubicacion from '../../assets/images/ubicación.png'
import github from '../../assets/images//github.png'
import whasapp from '../../assets/images/whatsapp.png'
import linkedin from '../../assets/images/linkedin.png'

const Home = () => {
    return (
    <div class="container">
        <section class="perfil">
            <figure>
                <img class="photo-perfil" loading="lazy" src={perfil} alt=""/>
            </figure>

        </section>
        <div class="contact_info">
            <h1 class="title">Brayan Esneider Guativa Rincon</h1>
            <ul>
                <img loading="lazy" src={correo} alt="" class="correo"/>
                <a> brian_951022@hotmail.com</a>
            </ul>
            <ul>
                <a href="https://api.whatsapp.com/send?phone=3103688644">
                    <img loading="lazy" src={telefono} alt="" class="telefono" href=""/>
                </a>
                <a> +57 - 3103688644</a>
            </ul>
            <ul>
                <img loading="lazy" src={ubicacion} alt="" class="ubicacion"/>
                <span> Funza - Cundinamarca</span>
            </ul>


        </div>
        <div class="general-info">
            <h1 class="sub-title">Perfil</h1>
            <p>Experiencia de 6 años en el área de call center, con estudios básicos en FrontEnd en tecnologías como HTML5 y CSS enfocado en diseño Responsive Design con Flexbox froggy en metodologías de arquitectura OOCSS, BEM, SMACSS, ITCSS y Atomic Design,
                también manejo de git y github en la creación y análisis simples de proyectos; a su vez estudiando constantemente por medio de la plataforma Platzi, cursos de HTML, CSS, JavaScript y React. </p>
            <ul>
                <h1 class="sub-title">Formación</h1>
                <ul>
                    <p>Técnico en asistencia administrativa </p>
                </ul>
                <h3>Cursos complementarios</h3>
                <ul class="cursos">
                    <ul class="lista-cursos">
                        <h4>Platzi</h4>
                        <li>Curso Práctico de HTML y CSS</li>
                        <li>Curso definitivo de HTML y CSS</li>
                        <li>HTML Y CSS</li>
                        <li>Frontend Developer</li>
                        <li>Curso Práctico de Frontend Developer</li>
                        <li>Curso Básico de JavaScript</li>
                        <li>Curso Práctico de JavaScript</li>
                        <li>Programación básica</li>
                        <li>Fundamentos de ingeniería de software</li>
                        <li>Excel básico</li>
                        <h4>SENA</h4>
                        <li>Contabilidad en las organizaciones</li>
                        <li>Conceptualizaciónn y estructuración de un plan de mercadeo</li>
                    </ul>
                </ul>
            </ul>
            <h1 class="networks">Mis redes</h1>
            <div class="my-networks">
                <div class="github">
                    <a href="https://github.com/Guativar95">
                        <img loading="lazy" src={github} class="img-github"/>
                    </a>
                </div>
                <div class="whatsapp">
                    <a href="https://api.whatsapp.com/send?phone=3103688644">
                        <img loading="lazy" src={whasapp} class="img-whasapp"/>
                    </a>
                </div>
                <div class="linkedin">
                    <a href="https://www.linkedin.com/in/brayan-esneider-guativa-rincon-4080451b1/">
                        <img loading="lazy" src={linkedin} class="img-linkedin"/>
                    </a>
                </div>
            </div>

        </div>
        <section>
            <div class="experi-work">
                <h1>Experiencia laboral</h1>
                <p>Durante 6 años me he desempeñado como agente call center de servicio al cliente y analista de PQR, para empresa como claro hogar,claro móvil y entidad bancaria de BBVA.
                </p>

            </div>
        </section>
    </div>
    )
}

export default Home