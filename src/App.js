import React, { useState, useCallback } from 'react';
import Navigation from './components/Navigation/Navigation';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import './App.css';

const App = () => {
  // const [input, setInput] = useState('');
  // const [imageUrl, setImageUrl] = useState('');
  // const [box, setBox] = useState({});
  const [route, setRoute] = useState('signin');

  const onRouteChange = (route) => {
    setRoute(route);
  }

  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async container => {
    console.log(container);
  }, []);

  return (
    <div className="App">
      <Particles className='particles'
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: { color: { value: "", }, },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push", },
              onHover: { enable: true, mode: "repulse", },
              resize: true,
            },
            modes: {
              push: { quantity: 4, },
              repulse: { distance: 200, duration: 0.4, },
            },
          },
          particles: {
            color: { value: "#ffffff", },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true, },
            move: {
              directions: "none",
              enable: true,
              outModes: { default: "bounce", },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: { enable: true, area: 800, },
              value: 80,
            },
            opacity: { value: 0.5, },
            shape: { type: "circle", },
            size: { value: { min: 1, max: 5 }, },
          },
          detectRetina: true,
        }}
      />
      <Navigation onRouteChange={onRouteChange} />
      {route === 'signin'
        ? <SignIn onRouteChange={onRouteChange} />
        : route === 'register'
          ? <Register onRouteChange={onRouteChange} />
          : <>
            <Logo />
            <Rank />
            <ImageLinkForm />
            {/*<FaceRecognition />*/}
          </>}
    </div>
  );
}

export default App;
