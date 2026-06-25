import {
  PencilRuler,
  Box,
  Cpu,
  Truck
} from "lucide-react";

export const processSteps = [
  {
    id: "01",
    title: "Brief & Sketch",
    icon: PencilRuler,
    description:
      "We discuss requirements, create concepts and define technical specifications."
  },

  {
    id: "02",
    title: "CAD & Fabrication",
    icon: Box,
    description:
      "Mechanical design, simulation, 3D printing and manufacturing preparation."
  },

  {
    id: "03",
    title: "Electronics & Firmware",
    icon: Cpu,
    description:
      "PCB development, embedded programming and system integration."
  },

  {
    id: "04",
    title: "Assembly & Delivery",
    icon: Truck,
    description:
      "Testing, validation, documentation and final deployment."
  }
];