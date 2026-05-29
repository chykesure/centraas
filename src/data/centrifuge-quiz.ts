export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export const centrifugeQuizQuestions: QuizQuestion[] = [
  // Page 1: Q1-Q10
  {
    question: "What is the primary function of a centrifuge machine?",
    options: ["Heating samples", "Separating substances based on density", "Mixing chemicals", "Cooling liquids"],
    correctAnswer: 1,
  },
  {
    question: "The spinning part of a centrifuge machine is called the:",
    options: ["Chamber", "Rotor", "Shaft", "Lid"],
    correctAnswer: 1,
  },
  {
    question: "Which force is responsible for separation in a centrifuge?",
    options: ["Magnetic Force", "Frictional Force", "Centrifugal Force", "Gravitational Force"],
    correctAnswer: 2,
  },
  {
    question: "Which centrifuge is mainly used for very small sample volumes?",
    options: ["Industrial Centrifuge", "Clinical Centrifuge", "Microcentrifuge", "Basket Centrifuge"],
    correctAnswer: 2,
  },
  {
    question: "What is the function of the centrifuge chamber?",
    options: ["To Cool The Motor", "To Contain The Spinning Rotor Safely", "To Increase Sample Volume", "To Measure Speed"],
    correctAnswer: 1,
  },
  {
    question: "What material is commonly used for centrifuge chambers because of corrosion resistance?",
    options: ["Wood", "Stainless Steel", "Rubber", "Paper"],
    correctAnswer: 1,
  },
  {
    question: "The device that prevents the centrifuge lid from opening during operation is called:",
    options: ["Timer", "Rotor", "Safety interlock system", "Speed knob"],
    correctAnswer: 2,
  },
  {
    question: "What is the major function of the centrifuge motor?",
    options: ["To Hold Samples", "To Generate Rotational Force To Spin The Rotor", "To Cool The Machine", "To Measure Temperature"],
    correctAnswer: 1,
  },
  {
    question: "Which centrifuge type is designed to maintain low temperatures during operation?",
    options: ["Hematocrit Centrifuge", "Refrigerated Centrifuge", "Hand Centrifuge", "Clinical Centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "RPM in centrifugation means:",
    options: ["Rotation Per Meter", "Revolutions Per Minute", "Rotor Power Measurement", "Rotation Pressure Meter"],
    correctAnswer: 1,
  },
  // Page 2: Q11-Q20
  {
    question: "What happens if centrifuge tubes are not balanced properly?",
    options: ["Faster Separation", "Machine Vibration And Possible Damage", "Better Cooling", "Increased Sample Size"],
    correctAnswer: 1,
  },
  {
    question: "Which part supports the rotating shaft and reduces friction?",
    options: ["Bearings", "Timer", "Lid", "Chamber"],
    correctAnswer: 0,
  },
  {
    question: "Which centrifuge is commonly used for blood testing in hospitals?",
    options: ["Industrial Centrifuge", "Clinical Centrifuge", "Basket Centrifuge", "Gas Centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of centrifuge tubes?",
    options: ["To Generate Heat", "To Hold Samples During Spinning", "To Reduce Speed", "To Power The Motor"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a safety precaution when using a centrifuge?",
    options: ["Open The Lid While Spinning", "Overload The Rotor", "Balance All Tubes Properly", "Use Cracked Tubes"],
    correctAnswer: 2,
  },
  {
    question: "Which component allows the user to set speed and time?",
    options: ["Chamber", "Rotor", "Control Panel", "Bearing"],
    correctAnswer: 2,
  },
  {
    question: "Which centrifuge type operates at extremely high speeds for molecular studies?",
    options: ["Clinical centrifuge", "Ultracentrifuge", "Hand centrifuge", "Low-speed centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "What is the function of the centrifuge lid?",
    options: ["To Increase Sample Density", "To Prevent Sample Spillage And Improve Safety", "To Rotate The Rotor", "To Cool The Samples"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is commonly used to make centrifuge tubes?",
    options: ["Polypropylene", "Glass", "Leather", "Ceramic"],
    correctAnswer: 0,
  },
  {
    question: "A centrifuge used for separating blood components is called:",
    options: ["Microcentrifuge", "Refrigerated Centrifuge", "Hematocrit Centrifuge", "Industrial Centrifuge"],
    correctAnswer: 2,
  },
  // Page 3: Q21-Q25
  {
    question: "What is the purpose of a timer in a centrifuge machine?",
    options: ["To Increase Temperature", "To Monitor Operation Duration", "To Hold Tubes", "To Lock The Rotor"],
    correctAnswer: 1,
  },
  {
    question: "Which centrifuge component connects the motor to the rotor?",
    options: ["Chamber", "Drive Shaft", "Timer", "Lid"],
    correctAnswer: 1,
  },
  {
    question: "Why is regular cleaning of a centrifuge important?",
    options: ["To Make It Heavier", "To Improve Appearance Only", "To Prevent Contamination And Damage", "To Increase Vibration"],
    correctAnswer: 2,
  },
  {
    question: "Which centrifuge type is commonly used in industries for large-scale separation?",
    options: ["Industrial Centrifuge", "Clinical Centrifuge", "Microcentrifuge", "Hematocrit Centrifuge"],
    correctAnswer: 0,
  },
  {
    question: "What should be done before starting a centrifuge?",
    options: ["Open The Lid", "Remove All Tubes", "Ensure Samples Are Balanced Correctly", "Reduce Chamber Size"],
    correctAnswer: 2,
  },
  // Page 3 continued: Q26-Q30
  {
    question: "What is the role of the drive shaft in a centrifuge?",
    options: ["To Hold Sample Tubes", "To Transmit Rotational Power From Motor To Rotor", "To Cool The Chamber", "To Measure Speed"],
    correctAnswer: 1,
  },
  {
    question: "Which type of centrifuge rotor keeps tubes at a fixed angle during spinning?",
    options: ["Swinging-Bucket Rotor", "Vertical Rotor", "Fixed-Angle Rotor", "Near-Vertical Rotor"],
    correctAnswer: 2,
  },
  {
    question: "What does RCF stand for in centrifugation?",
    options: ["Rotational Centrifuge Frequency", "Relative Centrifugal Force", "Rotor Capacity Factor", "Rotation Control Function"],
    correctAnswer: 1,
  },
  {
    question: "Which material is most commonly used for manufacturing centrifuge rotors?",
    options: ["Plastic", "Wood", "Aluminum Or Titanium", "Rubber"],
    correctAnswer: 2,
  },
  {
    question: "What is the primary purpose of a refrigerated centrifuge?",
    options: ["To Increase Separation Speed", "To Protect Temperature-Sensitive Samples During Spinning", "To Reduce Noise Levels", "To Increase Rotor Capacity"],
    correctAnswer: 1,
  },
  // Page 4: Q31-Q40
  {
    question: "A swinging-bucket rotor is most suitable for which type of separation?",
    options: ["Pelleting Applications", "Density Gradient Separations", "Quick Spin Downs", "Industrial Processing"],
    correctAnswer: 1,
  },
  {
    question: "What is the function of the acceleration/deceleration profile in a centrifuge?",
    options: ["To Change The Sample Volume", "To Control How Quickly The Rotor Speeds Up And Slows Down", "To Adjust The Temperature", "To Lock The Lid"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is a sign of bearing failure in a centrifuge?",
    options: ["Increased Sample Volume", "Unusual Grinding Noise During Operation", "Faster Cooling", "Brighter Display"],
    correctAnswer: 1,
  },
  {
    question: "What is a microcentrifuge primarily used for?",
    options: ["Industrial-Scale Separations", "Processing Small Sample Volumes (0.2-1.5 mL)", "Blood Bank Processing", "Uranium Enrichment"],
    correctAnswer: 1,
  },
  {
    question: "Which centrifuge type is best for separating subcellular organelles like ribosomes and DNA?",
    options: ["Low-Speed Centrifuge", "Hand Centrifuge", "Ultracentrifuge", "Hematocrit Centrifuge"],
    correctAnswer: 2,
  },
  {
    question: "What is the pellet in centrifugation?",
    options: ["The Liquid Portion At The Top", "The Dense Material Collected At The Bottom Of The Tube", "The Container Holding The Sample", "The Lid Of The Centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "What is the supernatant in centrifugation?",
    options: ["The Heavy Material At The Bottom", "The Clear Liquid Above The Pellet After Separation", "The Rotor Assembly", "The Motor Component"],
    correctAnswer: 1,
  },
  {
    question: "Which of the following is an advantage of programmable centrifuges?",
    options: ["Lower Cost", "Ability To Store And Recall Frequently Used Protocols", "Smaller Size", "No Electricity Required"],
    correctAnswer: 1,
  },
  {
    question: "What happens when a centrifuge is overloaded?",
    options: ["Separation Is Faster", "Vibration Increases And May Cause Damage Or Injury", "Temperature Decreases", "The Timer Resets"],
    correctAnswer: 1,
  },
  // Page 5: Q41-Q50
  {
    question: "Which centrifuge type uses magnetic fields instead of physical contact between rotating parts?",
    options: ["Ball Bearing Centrifuge", "Magnetic Bearing Centrifuge", "Hand Centrifuge", "Clinical Centrifuge"],
    correctAnswer: 1,
  },
  {
    question: "What is the purpose of an aerosol-tight chamber in a centrifuge?",
    options: ["To Reduce Weight", "To Contain Biohazardous Materials In Case Of Tube Breakage", "To Speed Up Separation", "To Cool The Motor"],
    correctAnswer: 1,
  },
  {
    question: "Which gas is commonly used in pneumatic (air-driven) ultracentrifuges?",
    options: ["Oxygen", "Nitrogen Or Compressed Air", "Carbon Dioxide", "Helium"],
    correctAnswer: 1,
  },
  {
    question: "What is differential centrifugation?",
    options: ["Separation Based On Color", "Sequential Separation Of Particles By Increasing Speed", "Separation Using Only Gravity", "Continuous Flow Separation"],
    correctAnswer: 1,
  },
  {
    question: "Why should centrifuge tubes never be filled to the brim?",
    options: ["To Save Sample", "To Allow Space For Expansion And Prevent Leakage During Spinning", "To Reduce Weight", "To Speed Up Separation"],
    correctAnswer: 1,
  },
  {
    question: "What is g-force in centrifugation?",
    options: ["The Weight Of The Sample", "A Measure Of Centrifugal Acceleration Relative To Gravity", "The Speed Of The Motor", "The Temperature Inside"],
    correctAnswer: 1,
  },
  {
    question: "Which type of centrifuge is commonly used in blood banks for component separation?",
    options: ["Microcentrifuge", "Ultracentrifuge", "Refrigerated Centrifuge With Specialized Rotors", "Hand Centrifuge"],
    correctAnswer: 2,
  },
  {
    question: "What safety feature automatically stops the centrifuge if excessive vibration is detected?",
    options: ["Timer", "Imbalance Detection System", "Control Panel Display", "Refrigeration System"],
    correctAnswer: 1,
  },
  {
    question: "In density gradient centrifugation, separation is based on:",
    options: ["Particle Size Only", "Particle Density (Buoyant Density)", "Particle Color", "Particle Temperature"],
    correctAnswer: 1,
  },
  {
    question: "What is the recommended practice when only one sample needs to be centrifuged?",
    options: ["Run It Alone", "Balance It With A Blank Tube Of Equal Weight", "Use A Larger Tube", "Do Not Centrifuge Single Samples"],
    correctAnswer: 1,
  },
];
