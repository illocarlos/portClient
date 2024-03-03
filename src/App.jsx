import { useEffect } from 'react';
import './App.css';
import UserMessage from '../src/components/UserMessage/UserMessage';
import PortFol from './pages/Portfol/Portfol';
import WorkGalleryPage from './pages/Work/WorkGalleryPage/WorkGalleryPage';
import Footer from './pages/Footer/Footer';
import AppRoutes from './routes/AppRoutes';
import SkillPage from './pages/Skill/SkillPage';

function App() {
  useEffect(() => {
    const cursoEL = document.querySelector('.js-cursor');
    const isClickedClass = 'is-clicked';
    const isHiddenClass = 'is-hidden';

    const onMouseMove = (e) => {
      cursoEL.style.setProperty('--cursor-x', `${e.clientX}px`);
      cursoEL.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    const onMouseDown = () => {
      cursoEL.classList.add(isClickedClass);
    };

    const onMouseUp = () => {
      cursoEL.classList.remove(isClickedClass);
    };

    const onMouseEnter = () => {
      cursoEL.classList.remove(isHiddenClass);
    };

    const onMouseLeave = () => {
      cursoEL.classList.add(isHiddenClass);
    };

    const handleLinkHoverEvents = () => {
      const linksAndButtons = document.querySelectorAll('button, img , Link, link, a, .button-send, .work-content');
      linksAndButtons.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          cursoEL.classList.add('is-hover');
        });
        el.addEventListener("mouseleave", () => {
          cursoEL.classList.remove('is-hover');
        });
      });
    };

    const timeout = setTimeout(() => {
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mousedown', onMouseDown);
      document.addEventListener('mouseup', onMouseUp);
      cursoEL.addEventListener('mouseenter', onMouseEnter);
      cursoEL.addEventListener('mouseleave', onMouseLeave);

      // Modificar el evento mouseleave del cuerpo del documento para quitar la clase is-hidden del cursor cuando el cursor vuelve a entrar
      document.body.addEventListener('mouseleave', () => {
        cursoEL.classList.add(isHiddenClass);
      });
      document.body.addEventListener('mouseenter', () => {
        cursoEL.classList.remove(isHiddenClass);
      });

      handleLinkHoverEvents();
    }, 1000); // Aquí puedes ajustar el tiempo de espera según tus necesidades

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='App'>
      <div className='c-cursor js-cursor'>
        <div className='c-cursor__inner'></div>
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
