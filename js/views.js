var cases = [
  "limpiar",
  "ayuda",
  "sobre mi",
  "trabajos",
  "estudios",
  "idiomas",
  "cv",
]; // Casos
var comando = {
  1: "Comandos disponibles:<br>limpiar<br>ayuda<br>sobre mi<br>trabajos<br>estudios<br>habilidades<br>cv",
  2: "Hola! Soy Mariano Rodriguez Domato y resido en Buenos Aires, Argentina.<br>Soy Analista de Sistema | Software Developer | Entusiasta de la Seguridad Informática<br>Me considero una persona apasionada por la tecnología en todas sus ramas, busco comprender a los usuarios, entender sus necesidades y así poder ofrecerles la mejor solución posible con las herramientas adecuadas. <br>Decidí crear este portfolio dinámico e interactivo que simula una terminal de Linux uniendo así dos de mis pasiones, el desarrollo web y la seguridad informática.<br> Interactuando con la terminal a través de los comandos disponibles podrá visitar mi Linkedin, Github e incluso descargar mi Curriculum Vitae!<br> Espero que disfrute esta página tanto como yo al hacerla!", 
  3: "Software Developer - Certant (Agosto 2021 - Mayo 2022) <br> Proyecto para el banco Itau de Uruguay en el que desarrollé nuevos features y tareas de mantenimiento, tanto de backend como de frontend.<br>- Tecnologías: Java 7, Spring Framework, Maven, HTML, CSS (Bootstrap), Javscript (Jquery y Vanilla con Babel), MQ Queue, GIT.<br>- Testing: JUnit y Mockito.<br>- Calidad de código: SonarQube y SonarLint.<br> Metodología: Scrum<br><br>Custom Software Engineering Analyst - Accenture (Mayo 2022 - Actualidad)<br>Septiembre 2023 - Actualidad<br>Proyecto para el banco Galicia de Argentina en el cual desarrolló tareas de análisis, creación y mantenimiento de nuevos microservicios para la celula de Consumos y Pagos de la Tribu de Medios de Pago<br>- Tecnologías: Java 8, Spring/SpringBoot, BD Oracle PL/SQL, MongoDB, OpenShift, Jenkins, GIT.<br>- Testing: JUnit y Mockito.<br>- Calidad de código: SonarLint.<br>- Metodología: Scrum.<br><br>Mayo 2022 - Agosto 2023<br>Proyecto para el banco ICBC de Argentina en el cual desarrollé tareas de análisis, detección y corrección de errores, tanto de backend como de frontend para el canal ICBC Multipay Empresas.<br>- Tecnologías: Java 8, Spring Framework, Angular 2, BD Oracle PL/SQL, Jenkins, Kibana, GIT.<br>- Metodología: Kanban.",
  4: "Analista de Sistemas, Instituto de Tecnología ORT (recibido en julio del 2020 - promedio de 8)<br> Ingeniería en Informática, Univerdad del CEMA (en curso) ",
  5: "Inglés - Oral y Escrito (Avanzado)",
  6: '<script> window.open("../files/MarianoRodriguezDomatoCV.pdf")</script>',
}; // Respuesta a comandos
