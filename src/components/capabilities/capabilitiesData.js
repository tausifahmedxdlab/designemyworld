import {
  Cpu,
  Bot,
  CircuitBoard
} from "lucide-react";

export const capabilities = [
  {
    id: 1,
    title: "3D Printing",
    icon: Cpu,
    description:
      "Functional prototypes, production parts and rapid manufacturing using PLA, PETG, ABS, ASA, TPU and engineering-grade materials."
  },

  {
    id: 2,
    title: "Robotics",
    icon: Bot,
    description:
      "Custom robotic systems, automation equipment, motion control solutions and prototype machines built from concept to deployment."
  },

  {
    id: 3,
    title: "PCB & Firmware",
    icon: CircuitBoard,
    description:
      "Embedded electronics, PCB design, ESP32 development, firmware architecture and IoT device integration."
  }
];