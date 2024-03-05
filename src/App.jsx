import { useEffect } from 'react';
import './App.css';
import UserMessage from '../src/components/UserMessage/UserMessage';
import PortFol from './pages/Portfol/Portfol';
import WorkGalleryPage from './pages/Work/WorkGalleryPage/WorkGalleryPage';
import Footer from './pages/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import SkillPage from './pages/Skill/SkillPage';

function App() {
  // Hook useEffect para manejar efectos secundarios en componentes funcionales
  useEffect(() => {
    // Selección del elemento del cursor
    const cursorEL = document.querySelector('.js-cursor');

    // Clases CSS
    const isClickedClass = 'is-clicked';
    const isHiddenClass = 'is-hidden';

    // Función para manejar el movimiento del mouse
    const onMouseMove = (e) => {//e recibe el eventodel cursor que le va dando la informacion 


      cursorEL.style.setProperty('--cursor-x', `${e.clientX}px`);//e.ClientX 
      cursorEL.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    // Función para manejar el clic del mouse
    const onMouseDown = () => {
      cursorEL.classList.add(isClickedClass);
    };

    // Función para manejar la liberación del clic del mouse
    const onMouseUp = () => {
      cursorEL.classList.remove(isClickedClass);
    };

    // Función para manejar el evento de entrar al área del cursor
    const onMouseEnter = () => {
      cursorEL.classList.remove(isHiddenClass);
    };

    // Función para manejar el evento de salir del área del cursor
    const onMouseLeave = () => {
      cursorEL.classList.add(isHiddenClass);
    };

    // Función para manejar eventos de desplazamiento sobre enlaces y botones
    const handleLinkHoverEvents = () => {
      const linksAndButtons = document.querySelectorAll('button, img, Link, link, a, .button-send, .work-content');
      linksAndButtons.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursorEL.classList.add('is-hover');
          const altText = el.getAttribute('alt');
          if (altText) {
            cursorEL.querySelector('.c-cursor__text').textContent = altText;
          } else {
            cursorEL.querySelector('.c-cursor__text').textContent = 'Click';
          }
        });
        el.addEventListener("mouseleave", () => {
          cursorEL.classList.remove('is-hover');
          cursorEL.querySelector('.c-cursor__text').textContent = ''; // Limpiar el texto
        });
      });
    };

    // Esperar un tiempo antes de aplicar los eventos del cursor
    const timeout = setTimeout(() => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      cursorEL.addEventListener('mouseenter', onMouseEnter);
      cursorEL.addEventListener('mouseleave', onMouseLeave);

      // Modificar el evento mouseleave del cuerpo del documento para quitar la clase is-hidden del cursor cuando el cursor vuelve a entrar
      document.body.addEventListener('mouseleave', () => {
        cursorEL.classList.add(isHiddenClass);
      });
      document.body.addEventListener('mouseenter', () => {
        cursorEL.classList.remove(isHiddenClass);
      });

      handleLinkHoverEvents();
    }, 600); // Tiempo de espera antes de aplicar eventos del cursor

    // Limpiar el temporizador para evitar fugas de memoria
    return () => clearTimeout(timeout);
  }, []); // El efecto solo se ejecuta una vez después del montaje del componente

  return (
    <div className='App'>

      {/* creacion de raton personalizado  mediante el DOM */}
      <div className='c-cursor js-cursor'>
        <div className='c-cursor__inner'>
          <span className="c-cursor__text"></span> {/* Elemento para mostrar el texto 'Click' o el atributo "alt" */}
        </div>
      </div>



      <PortFol />
      <SkillPage />
      <WorkGalleryPage />
      <AppRoutes />
      <UserMessage />
      <Footer />
    </div>
  );
}

export default App;