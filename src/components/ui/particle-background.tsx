"use client";

import { useCallback } from "react";
import Particles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";
import { cn } from "@/lib/utils";

interface ParticleBackgroundProps {
  className?: string;
  variant?: "default" | "connect" | "bubbles";
  color?: string;
  quantity?: number;
  speed?: number;
}

export function ParticleBackground({ 
  className,
  variant = "default",
  color = "#ffffff",
  quantity = 50,
  speed = 0.5
}: ParticleBackgroundProps) {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  const getOptions = () => {
    switch (variant) {
      case "connect":
        return {
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: quantity,
              density: {
                enable: true,
                value_area: 1200
              }
            },
            color: {
              value: color
            },
            links: {
              enable: true,
              distance: 150,
              color: color,
              opacity: 0.3,
              width: 1
            },
            move: {
              enable: true,
              speed: speed,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "bounce"
              },
              attract: {
                enable: true,
                rotateX: 600,
                rotateY: 1200
              }
            },
            size: {
              value: 1,
              random: {
                enable: true,
                minimumValue: 0.5
              }
            },
            opacity: {
              value: 0.4,
              random: false
            }
          },
          interactivity: {
            detect_on: "window",
            events: {
              onHover: {
                enable: true,
                mode: "grab",
                parallax: {
                  enable: true,
                  force: 80,
                  smooth: 10
                }
              },
              onClick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 200,
                links: {
                  opacity: 0.5,
                  color: color
                }
              },
              push: {
                quantity: 4
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent"
          },
          detectRetina: true
        };
      case "bubbles":
        return {
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: 6,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: color
            },
            shape: {
              type: "circle"
            },
            opacity: {
              value: 0.1,
              random: true
            },
            size: {
              value: 100,
              random: {
                enable: true,
                minimumValue: 50
              }
            },
            move: {
              enable: true,
              speed: speed,
              direction: "none",
              random: false,
              straight: false,
              outModes: {
                default: "out"
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onHover: {
                enable: true,
                mode: "bubble",
                parallax: {
                  enable: true,
                  force: 20,
                  smooth: 20
                }
              },
              resize: true
            },
            modes: {
              bubble: {
                distance: 200,
                size: 120,
                duration: 2,
                opacity: 0.2,
                speed: 3
              }
            }
          },
          retina_detect: true,
          background: {
            color: "transparent"
          }
        };
      default:
        return {
          fullScreen: false,
          fpsLimit: 60,
          particles: {
            number: {
              value: quantity,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: color
            },
            opacity: {
              value: 0.3,
              random: false
            },
            size: {
              value: 2,
              random: {
                enable: true,
                minimumValue: 1
              }
            },
            move: {
              enable: true,
              speed: speed,
              direction: "none",
              random: true,
              straight: false,
              outModes: {
                default: "bounce"
              }
            }
          },
          background: {
            color: "transparent"
          },
          detectRetina: true
        };
    }
  };

  return (
    <Particles
      className={cn("absolute inset-0", className)}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={getOptions()}
    />
  );
} 