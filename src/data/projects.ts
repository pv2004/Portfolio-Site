export interface ProjectMetric {
  value: string;
  label: string;
}

export interface StackFact {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  art: "waveform" | "constellation" | "silicon" | "racetrack" | "aero" | "gate" | "dataflow" | "analytics" | "sky" | "pocketdash";
  image?: string;
  role: string;
  problem: string;
  approach: string;
  features: string[];
  stack: StackFact[];
  metrics: ProjectMetric[];
  repo?: string;
}

export const projects: Project[] = [
  {
    id: "pocketdash",
    title: "PocketDash — ESP32-C3 Pocket Dashboard",
    description:
      "A compact smart dashboard built on the ESP32-C3 SuperMini with a 0.96\" SSD1306 OLED display, delivering real-time digital clock (NTP), motivational quotes (ZenQuotes), aircraft radar (ADSB.lol), weather & air quality (Open-Meteo) in a distraction-free pocket interface.",
    tags: ["IOT", "ESP32", "C++", "OLED", "ADSB.lol", "REST APIs"],
    year: "2025",
    art: "pocketdash",
    image: "/images/pocketdash.jpg",
    role: "Embedded Systems · Firmware Engineering",
    problem:
      "Checking daily information like time, weather forecast, air quality index, nearby aircraft, or daily motivation requires repeatedly unlocking phones or navigating cluttered browser tabs, creating digital friction and distraction.",
    approach:
      "Engineered a modular C++ firmware architecture on the ESP32-C3 SuperMini microcontroller using Adafruit GFX and SSD1306 OLED drivers. The firmware fetches JSON payload data over secure Wi-Fi from ADSB.lol, Open-Meteo, Open-Meteo AQI, ZenQuotes, and pool.ntp.org (NTPClient), running an automated page-rotation loop across 5 dedicated display modules (clock.cpp, quote.cpp, flight.cpp, weather.cpp, display.cpp).",
    features: [
      "🕒 Digital Clock — NTP-synchronized time, day, & date in IST (GMT +5:30)",
      "💬 Daily Quotes — Random motivational quotes from ZenQuotes API (5-min auto refresh)",
      "✈️ Aircraft Radar — ADSB.lol live flight radar showing callsign, type, altitude, speed, & direction",
      "🌤️ Weather & Air Quality — Open-Meteo real-time temp, humidity, wind, & AQI status",
      "🔄 Auto Page Rotation — Smooth automated sequence cycling through all screen modules",
      "📟 Hardware & Stack — ESP32-C3 SuperMini, 0.96\" SSD1306 OLED (128×64), ArduinoJson, HTTPClient",
    ],
    stack: [
      { label: "Microcontroller", value: "ESP32-C3 SuperMini" },
      { label: "Display", value: "0.96\" SSD1306 OLED (128×64 I2C)" },
      { label: "APIs Integrated", value: "ADSB.lol · Open-Meteo · ZenQuotes · NTP" },
      { label: "Libraries", value: "ArduinoJson · NTPClient · Adafruit GFX / SSD1306" },
      { label: "Firmware Architecture", value: "Modular C++ (clock, quote, flight, weather)" },
    ],
    metrics: [
      { value: "5", label: "live screen modules" },
      { value: "128x64", label: "OLED monochrome display" },
      { value: "5-APIs", label: "integrated cloud endpoints" },
    ],
    repo: "https://github.com/pv2004/PocketDash",
  },
  {
    id: "result-management",
    title: "Smart Result Management System",
    description:
      "A desktop application built with Python, Tkinter and SQLite to store, manage and retrieve student records — validated entry, instant search, zero setup.",
    tags: ["Python", "Tkinter", "SQLite"],
    year: "2024",
    art: "dataflow",
    image: "/images/result-management.jpg",
    role: "Design · Development",
    problem:
      "Student results lived in registers and spreadsheets — hard to search, easy to corrupt, impossible to trust. Finding one record meant scrolling; entering one meant risking silent duplicates.",
    approach:
      "A Tkinter desktop interface over an embedded SQLite database. Every insert passes through validated forms; the database itself enforces integrity through a primary key on roll number; every read renders instantly into clean table views. One executable idea: the whole system travels as a single .db file that runs anywhere Python does.",
    features: [
      "Validated entry — empty fields never reach the database",
      "Duplicate roll numbers blocked at the database level",
      "Instant lookup by roll number",
      "Results rendered in clean popup tables",
      "Single-file portable storage",
      "Runs anywhere Python runs — no installs, no servers",
    ],
    stack: [
      { label: "Language", value: "Python 3" },
      { label: "GUI", value: "Tkinter · ttk widgets" },
      { label: "Database", value: "SQLite, embedded" },
      { label: "Integrity", value: "Primary-key constraints, parameterised queries" },
      { label: "Pattern", value: "Desktop CRUD application" },
    ],
    metrics: [
      { value: "<1s", label: "record lookup by roll no" },
      { value: "0", label: "duplicate records possible" },
      { value: "1-file", label: "portable sqlite storage" },
    ],
    repo: "https://github.com/pv2004/Student-Result-Management-System",
  },
  {
    id: "banking-dashboard",
    title: "Banking Data Analysis Dashboard",
    description:
      "A Power BI dashboard analysing $4.38B in loans against $3.77B in deposits across customer segments — built on Python-cleaned banking data.",
    tags: ["Power BI", "Python", "Excel"],
    year: "2023",
    art: "analytics",
    image: "/images/banking-dashboard.jpg",
    role: "EDA · Modelling · Dashboard Design",
    problem:
      "Raw banking exports say very little on their own. Leadership kept asking simple questions — how do loans compare to deposits, which customers hold them, where is the risk — and the CSVs had no answers, only rows.",
    approach:
      "First, a Python EDA notebook: profile every column, standardise categories, understand distributions. Then a Power BI model built to answer questions, not display tables — four linked views covering summary, deposits, loans and individual client drill-through, sliceable by year, gender and institution type.",
    features: [
      "$4.38B loans measured against $3.77B deposits at a glance",
      "Segmentation by income, occupation and nationality",
      "Four linked views — summary, deposit, loan, drill-through",
      "Slicers for year, gender and institution type",
      "Risk flags on deposit/loan imbalances",
      "Every cleaning step documented in the EDA notebook",
    ],
    stack: [
      { label: "Visualisation", value: "Power BI Desktop" },
      { label: "EDA", value: "Python · Pandas" },
      { label: "Data", value: "Banking & client exports (CSV · Excel)" },
      { label: "Views", value: "Summary · Deposit · Loan · Drill-through" },
      { label: "Scale", value: "$8B+ analysed across client base" },
    ],
    metrics: [
      { value: "$4.38B", label: "loans analysed" },
      { value: "$3.77B", label: "deposits analysed" },
      { value: "4", label: "linked dashboard views" },
    ],
    repo: "https://github.com/pv2004/Banking-Analytics-Dashboard",
  },
  {
    id: "weather-forecast",
    title: "Weather Forecast Web App",
    description:
      "A responsive web app fetching live conditions from the OpenWeatherMap API for 200+ cities — asynchronous, sub-two-second renders, graceful error states.",
    tags: ["HTML/CSS/JS", "REST API"],
    year: "2024",
    art: "sky",
    role: "Front-end · API Integration",
    problem:
      "Checking the sky meant fighting slow, ad-clogged sites. The brief was strict: get out of the way between a person and the weather — search to screen in under two seconds.",
    approach:
      "A lightweight vanilla-JS frontend talking directly to the OpenWeatherMap REST API. All requests run asynchronously so the UI never blocks, failed requests fall back to clear retry states instead of blank screens, and the layout is mobile-first so the phone experience is the reference, not an afterthought.",
    features: [
      "Live conditions for 200+ cities via REST API",
      "Asynchronous fetches — UI stays interactive throughout",
      "Sub-two-second search-to-render time",
      "Clear error and retry states for flaky networks",
      "Mobile-first responsive layout",
    ],
    stack: [
      { label: "Frontend", value: "HTML · CSS · JavaScript" },
      { label: "API", value: "OpenWeatherMap REST" },
      { label: "Concurrency", value: "Async fetch, non-blocking render" },
      { label: "Focus", value: "Performance · resilience" },
    ],
    metrics: [
      { value: "200+", label: "cities supported" },
      { value: "<2s", label: "average render time" },
      { value: "0", label: "blocking calls in the UI" },
    ],
  },
  {
    id: "gemini-ai-esp8266",
    title: "Gemini AI on NodeMCU ESP8266",
    description:
      "Running Google Gemini AI on an ESP8266 microcontroller — real-time AI-powered responses over serial communication, bridging cloud intelligence with embedded IOT.",
    tags: ["IOT", "Arduino", "AI/ML"],
    year: "2025",
    art: "silicon",
    image: "/images/gemini-ai.png",
    role: "Embedded Systems · API Integration",
    problem:
      "Can a $3 microcontroller run a large language model? The gap between cloud AI and embedded hardware feels unbridgeable — until you find the right API bridge.",
    approach:
      "An ESP8266 sends user queries via HTTP POST to the Gemini AI REST API, powered by Postman for API validation. The response streams back to the serial monitor in real time. The project documents the hardware limitations, token constraints, and latency trade-offs that come with running AI on microcontrollers.",
    features: [
      "ESP8266 + Gemini AI API integration",
      "Real-time AI-powered responses over serial",
      "Postman API for request validation and testing",
      "Embedded AI on a microcontroller platform",
      "Documented limitations and hardware constraints",
    ],
    stack: [
      { label: "Microcontroller", value: "NodeMCU ESP8266" },
      { label: "AI API", value: "Google Gemini 1.5 Flash" },
      { label: "IDE", value: "Arduino IDE" },
      { label: "Testing", value: "Postman" },
      { label: "Protocol", value: "HTTP REST · Serial" },
    ],
    metrics: [
      { value: "Real-time", label: "AI response generation" },
      { value: "$3", label: "microcontroller cost" },
      { value: "100", label: "max output tokens" },
    ],
    repo: "https://github.com/pv2004/GeminiAI-on-NodeMCU-ESP8266",
  },
  {
    id: "f1-race-prediction",
    title: "F1 Race Pace Prediction",
    description:
      "Machine learning model predicting the 2025 Saudi Arabian GP race results using 2024 FastF1 lap data — GradientBoostingRegressor with sector-time features.",
    tags: ["Python", "ML", "FastF1"],
    year: "2025",
    art: "racetrack",
    image: "/images/f1-prediction.png",
    role: "Data Engineering · Modelling",
    problem:
      "Race predictions based on qualifying times alone miss the deeper story: sector pace, tyre degradation, and historical lap patterns. A model trained on real telemetry data can find what human guessing cannot.",
    approach:
      "2024 Saudi GP lap data fetched via FastF1 — sector times, lap times, and driver metadata — cleaned and fed into a GradientBoostingRegressor. Qualifying times for 2025 drivers are manually injected, with special handling for absent entries. The model predicts realistic race lap times per driver, evaluated using Mean Absolute Error.",
    features: [
      "FastF1 telemetry data ingestion and caching",
      "GradientBoostingRegressor for lap-time prediction",
      "Sector-time and qualifying-time feature engineering",
      "Graceful handling of missing qualifying entries",
      "MAE-based model evaluation",
      "Predicted top-5: Piastri, Norris, Verstappen, Russell, Leclerc",
    ],
    stack: [
      { label: "Language", value: "Python 3.8+" },
      { label: "Data", value: "FastF1 · pandas · numpy" },
      { label: "ML", value: "scikit-learn · GradientBoosting" },
      { label: "Metrics", value: "Mean Absolute Error" },
      { label: "Domain", value: "Formula 1 telemetry analytics" },
    ],
    metrics: [
      { value: "~87s", label: "predicted winning lap time" },
      { value: "20", label: "drivers modelled" },
      { value: "MAE", label: "model evaluation metric" },
    ],
    repo: "https://github.com/pv2004/Formula-1-Race-Pace-Prediction-Saudi-Arabian-GP-2025",
  },
  {
    id: "aircraft-3d-orientation",
    title: "3D Aircraft Orientation Visualizer",
    description:
      "Real-time 3D aircraft orientation rendered in a browser using an ESP8266, MPU6050 gyroscope, and Three.js — live yaw, pitch, and roll over WebSocket.",
    tags: ["IOT", "3D", "WebSocket"],
    year: "2025",
    art: "aero",
    image: "/images/aircraft-3d-1.png",
    role: "Embedded Systems · 3D Visualisation",
    problem:
      "Visualising real-time sensor data in 3D requires bridging raw gyroscope readings with a rendering pipeline — fast enough to feel alive, accurate enough to be useful.",
    approach:
      "An MPU6050 accelerometer and gyroscope feeds orientation data (yaw, pitch, roll) to an ESP8266 via I2C. The ESP8266 streams this data over WebSocket to a Processing sketch that renders a 3D aircraft model with smooth, interactive animation using Three.js. The pipeline runs continuously with minimal latency.",
    features: [
      "Real-time yaw, pitch, roll from MPU6050",
      "Wireless data transmission via ESP8266 WebSocket",
      "3D aircraft model rendered with Three.js",
      "Interactive camera and smooth animation",
      "Hardware: ESP8266 + MPU6050 + breadboard",
    ],
    stack: [
      { label: "Microcontroller", value: "NodeMCU ESP8266" },
      { label: "Sensor", value: "MPU6050 (6-axis IMU)" },
      { label: "3D Rendering", value: "Processing · Three.js" },
      { label: "Protocol", value: "WebSocket · I2C" },
      { label: "IDE", value: "Arduino IDE · Processing" },
    ],
    metrics: [
      { value: "Real-time", label: "sensor-to-render latency" },
      { value: "3-axis", label: "orientation tracking" },
      { value: "Wireless", label: "data transmission" },
    ],
    repo: "https://github.com/pv2004/3D-Visualization-of-Aircraft-Orientation",
  },
  {
    id: "car-parking-system",
    title: "Smart Car Parking System",
    description:
      "Arduino-based parking management using IR sensors, an LCD display, and servo-controlled gate — automatic slot detection and entry control in real time.",
    tags: ["Arduino", "IOT", "Hardware"],
    year: "2024",
    art: "gate",
    role: "Embedded Systems · Hardware Integration",
    problem:
      "Manual parking management is slow, error-prone, and wastes space. A system that detects vehicle presence automatically and controls entry can eliminate the guesswork entirely.",
    approach:
      "IR sensors detect whether each parking slot is occupied. An Arduino Uno reads the sensor states in a loop, updates an LCD display with available slot counts in real time, and drives a servo motor to raise or lower the entrance gate based on availability. The entire system runs autonomously once powered.",
    features: [
      "IR sensors for real-time slot occupancy detection",
      "LCD display showing available slot count",
      "Servo motor-controlled entrance gate",
      "Automatic gate open/close based on availability",
      "Fully autonomous — no human intervention needed",
    ],
    stack: [
      { label: "Controller", value: "Arduino Uno R3" },
      { label: "Sensors", value: "IR proximity sensors" },
      { label: "Display", value: "LCD (I2C · LiquidCrystal_I2C)" },
      { label: "Actuator", value: "Servo motor" },
      { label: "Libraries", value: "Servo.h · Wire.h" },
    ],
    metrics: [
      { value: "Real-time", label: "slot detection" },
      { value: "Auto", label: "gate control" },
      { value: "0", label: "manual intervention needed" },
    ],
    repo: "https://github.com/pv2004/Car-Parking-System-Using-Arduino",
  },
];
