export interface ProjectSection {
  image: string;
  caption: string;
  text: string;
}

export interface Project {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  image: string;
  sections: ProjectSection[];
  status?: "upcoming";
}

export const projects: Project[] = [
  {
    slug: "deep-learning-state-estimation",
    title: "Deep Learning-Driven State Estimation for Nonlinear Systems",
    summary:
      "ESKF-based attitude estimation fused with a multi-channel TCN, deployed on embedded hardware.",
    tags: ["C++", "PyTorch", "Control Systems", "Hardware"],
    image: "/images/projects/dlse.png",
    sections: [
      {
        image: "/images/projects/deep-learning-state-estimation/1.jpg",
        caption: "ESP32 hardware setup",
        text: "The first stage of the project was setting up the Kalman Filter on ESP32. After researching quaternion kinematics and learning how to apply a Kalman filter, I fused  gyro with accelerometer readings, getting clean, smooth attitude estimation.",
      },
      {
        image: "/images/projects/deep-learning-state-estimation/2.png",
        caption: "TCN architecture",
        text: "Then I developed a compact, 4-layer, 4,274 parameter TCN to perform IMU-to-attitude mapping from ESKF-generated training data. The biggest challenge was the compromise between model size and accuracy, as the ESP32's strict memory constrains were of essence. My experience with the EPIC Lab implementing a large TCN proved to be useful in understanding the design choices to be made under constrains.",
      },
      {
        image: "/images/projects/deep-learning-state-estimation/3.png",
        caption: "Deployment results",
        text: "Finally, I quantized the model and deployed it using ESP-DL. One funny thing that happened at first is that the model found a shortcut: just take the nominal quaternion from the next frame and inject it as the corrected quaternion prediction for the current frame. This look-ahead bias was solved by making the model predict not the corrected quaternion, but the dq correction factor applied to the nominal quaternion.",
      },
    ],
  },
  {
    slug: "bionic-prosthesis-controller",
    title: "Sim2Real GAN for End-to-End robotic prosthesis control.",
    summary:
      "In collaboration with the Exoskeleton and Prosthetic Intelligent Controls lab at Georgia Tech.",
    tags: ["PyTorch", "ROS2", "Simulation", "Inverse Kinematics / Inverse Dynamics"],
    image: "/images/projects/bionic.png",
    sections: [
      {
        image: "/images/projects/bionic-prosthesis-controller/1.png",
        caption: "Motion capture data collection, processing, and sensor simulation.",
        text: "Biomechanical data only tracks position and ground reaction forces. What we needed were sensor signals: joint angles, angular velocities, and accelerations. Using OpenSim in junction with MATLAB, we used inverse kinematics and inverse dynamics to generate simulated sensor data from motion capture recordings. The best part: the same pipeline can be applied to able-bodied subjects too, turning recordings into learning material for the controller.",
      },
      {
        image: "/images/projects/bionic-prosthesis-controller/2.jpg",
        caption: "Early U-net performance",
        text: "I have impemented a U-net TCN to map perfect, simulated sensor values to real, noisy sensor values. The model showed great performance on evaluations, but an important conceptual detail had to be taken into account. Deleting noise is a better approach than adding artificial noise, as information is deleted and not created. Thus, the model was retrained to map real signals into simulated signals. ",
      },
      {
        image: "/images/projects/bionic-prosthesis-controller/3.png",
        caption: "Experiment",
        text: "Before, the controller learned to walk like a robot, taught on data from other controllers. Now, it learned to walk like a human. ",
      },
    ],
  },
  {
    slug: "robotic-arm-tooling-defect-detection",
    title: "Mechanical Engineering and Process Automation intern at AVZ Engineering.",
    summary:
      "Detachable end-of-arm tooling and an OpenCV-based defect detection pipeline for an industrial 6-DOF robotic arm.",
    tags: ["OpenCV", "Robotics", "Manufacturing", "Automation"],
    image: "/images/projects/robot.png",
    sections: [
      {
        image: "/images/projects/robotic-arm-tooling-defect-detection/1.jpg",
        caption: "Automated valve assembly line: rotary table.",
        text: "As an intern at the Almaty Ventilation Plant, I worked on creating an automated assembly line for fireproof valves. The first few weeks of the internship I worked with Programmable Logic Controllers setting up robust conditions to trigger the appropriate assembly instructions for valves of different dimensions. ",
      },
      {
        image: "/images/projects/robotic-arm-tooling-defect-detection/2.png",
        caption: "Automated valve assembly line: 6 DOF robotic arm",
        text: "After setting up the PLCs, I worked on designing detachable end effector tooling for the robotic arm. This included welding, vacuum gripping, and fastening tools. The tools were engaged and disengaged using a pneumatic tool changer.",
      },
      {
        image: "/images/projects/robotic-arm-tooling-defect-detection/3.png",
        caption: "Defect detection and hole location debug image",
        text: "The valve body is subject to manufacturing defects during the bending part. These do not pose a threat when assembled manually, but can throw off the robotic arm's pre-programmed trajectory. Thus, I developed a prototype of a computer vision system that locates holes and passes their locations into the robot's memory for variable path planning. This allowed the robot to accurately place bolts into holes that deviate from the ideal model by +-5mm (1/5 inch), which was more than sufficient for the assembly line.",
      },
    ],
  },
  {
    slug: "human-humanoid-collaboration",
    title: "Human-Humanoid Collaboration",
    summary: "In collaboration with the LIDAR Lab at Georgia Tech. Coming soon.",
    tags: ["Reinforcement Learning", "Humanoid", "Robotics"],
    image: "/images/projects/humanoid.png",
    sections: [
      {
        image: "/images/projects/human-humanoid-collaboration/1.svg",
        caption: "Coming soon",
        text: "This project is in progress — more details will be added soon.",
      },
      {
        image: "/images/projects/human-humanoid-collaboration/2.svg",
        caption: "Coming soon",
        text: "This project is in progress — more details will be added soon.",
      },
      {
        image: "/images/projects/human-humanoid-collaboration/3.svg",
        caption: "Coming soon",
        text: "This project is in progress — more details will be added soon.",
      },
    ],
  },
];
