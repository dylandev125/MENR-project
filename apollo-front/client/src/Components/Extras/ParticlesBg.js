import React from 'react';
import Particles from 'react-tsparticles';

const ParticlesBg = () => {
    return (
        <Particles
            id='tsparticles'
            //   init={particlesInit}
            //   loaded={particlesLoaded}
            options={{
                background: {
                    color: {
                        value: 'transparent',
                    },
                },
                fpsLimit: 20,
                interactivity: {
                    events: {
                        // onClick: {
                        //     enable: true,
                        //     mode: 'push',
                        // },
                        onHover: {
                            enable: true,
                            mode: 'repulse',
                        },
                        resize: true,
                    },
                    modes: {
                        bubble: {
                            distance: 100,
                            duration: 2,
                            opacity: 0.8,
                            size: 40,
                        },
                        push: {
                            quantity: 4,
                        },
                        repulse: {
                            distance: 100,
                            duration: 0.4,
                        },
                    },
                },
                particles: {
                    color: {
                        value: '#ffffff',
                    },
                    links: {
                        color: '#ffffff',
                        distance: 200,
                        enable: true,
                        opacity: 0.2,
                        width: 1,
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: 'none',
                        enable: true,
                        outMode: 'bounce',
                        random: false,
                        speed: 0.2,
                        straight: false,
                    },
                    number: {
                        density: {
                            enable: true,
                            value_area: 1000,
                        },
                        value: 20,
                    },
                    opacity: {
                        value: 0.2,
                    },
                    shape: {
                        type: 'circle',
                    },
                    size: {
                        random: true,
                        value: 2,
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticlesBg;
