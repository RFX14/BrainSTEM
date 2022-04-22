import image1 from '../components/QuizPhotos/img1.png';
import image2 from '../components/QuizPhotos/img2.jpg';
import image3 from '../components/QuizPhotos/img3.jpg';
import image4 from '../components/QuizPhotos/img4.png';
import image5 from '../components/QuizPhotos/img5.png';
import image6 from '../components/QuizPhotos/img6.png';
import image7 from '../components/QuizPhotos/img7.png';
import image8 from '../components/QuizPhotos/img8.png';
import image9 from '../components/QuizPhotos/img9.png';
import image10 from '../components/QuizPhotos/img10.png';
import image11 from '../components/QuizPhotos/img11.png';
import image12 from '../components/QuizPhotos/img12.png';
import image13 from '../components/QuizPhotos/img13.png';
import image14 from '../components/QuizPhotos/img14.png';
import image15 from '../components/QuizPhotos/img15.png';


const testQuiz = {
    "quizTitle": "Quiz Testing",
    "quizSynopsis": "This is simply a test of the quiz componenet",
    "questions": [
        {
        "question": "Does this first question look good?",
        "questionType": "text",
        "answers": [
            "Yes",
            "No"
        ],
        "correctAnswer": "1",
        "messageForCorrectAnswer": "Ayy it looks good",
        "messageForIncorrectAnswer": "sad face",
        "explanation": "Just checking",
        "point": "1"
        },
        {
        "question": "Question Two",
        "questionType": "text",
        "answers": [
            "asdf",
            "asdfasdf",
            "asdfasdfasdfasd"
        ],
        "correctAnswer": "3",
        "messageForCorrectAnswer": "Ayy it looks good",
        "messageForIncorrectAnswer": "sad face",
        "point": "1"
        }
    ]
}

const thermB = {
  "quizTitle": "Beginner Thermistor Assessment",
  "questions": [
    {
      "question": "Electricity is much like ____ in a hose",
      "questionType": "text",
      "answers": [
        "WATER",
        "THE OPENING",
        "THE LINING",
        "ANTS"
      ],
      "correctAnswer": "1",
      "point": "1"
    },
    {
      "question": "To reduce the amount of voltage in a circuit you would add a ____ to \"squeeze the ____\"",
      "questionType": "text",
      "answers": [
        "RESISTOR | HOSE",
        "RESISTOR | ANTS",
        "VOLTAGE | HOSE",
        "VOLTAGE | ANTS"
      ],
      "correctAnswer": "1",
      "point": "1"
    },
    {
      "question": "Thermistors are different from regular resistor because their resistance changes based on ____",
      "questionType": "text",
      "answers": [
        "LIGHT",
        "SOUND",
        "TEMPERATURE",
        "ALTITUDE"
      ],
      "correctAnswer": "3",
      "point": "1"
    }
  ]
}

const photoB = {
  "quizTitle": "Beginner Photocell Assesment ",
  "questions": [
    {
      "question": "Electricity is measured in ____",
      "questionType": "text",
      "answers": [
        "OHMS",
        "AMPS",
        "VOLTS",
        "FARADS"
      ],
      "correctAnswer": "3",
      "point": "1"
    },
    {
      "question": "Photocells are different from regular resistor beacuse their resistance changes based on ____",
      "questionType": "text",
      "answers": [
        "LIGHT",
        "SOUND",
        "TEMPERATURE",
        "ALTITUDE"
      ],
      "correctAnswer": "1",
      "point": "1"
    }
  ]
}

const strainB = {
  "quizTitle": "Beginner Strain Gauge Assesment",
  "questions": [
    {
      "question": "The tiny lines on the strain gauge sensor are actually ____",
      "questionType": "text",
      "answers": [
        "MAGIC",
        "ANTS",
        "ELECTRONS",
        "WIRES"
      ],
      "correctAnswer": "4",
      "point": "1"
    },
    {
      "question": "Every object in the world has some ____, even wires",
      "questionType": "text",
      "answers": [
        "ANTS",
        "RESISTANCE",
        "VOLTAGE",
        "CURRENT"
      ],
      "correctAnswer": "2",
      "point": "1"
    },
    {
      "question": "What happens when a strain gauge sensor is compressed or stretched?",
      "questionType": "text",
      "answers": [
        "It tears because it is very small and fragile",
        "The resistance changes",
        "Strain Gauge sensors can't be compressed or stretched",
        "Nothing happens"
      ],
      "correctAnswer": "2",
      "point": "1"
    }
  ]
}

const microB = {
  "quizTitle": "Beginner Microphone Assesment",
  "questions": [
    {
      "question": "____ corresponds to how loud a sound or voice is.",
      "questionType": "text",
      "answers": [
        "AMPLITUDE",
        "PITCH"
      ],
      "correctAnswer": "1",
      "point": "1"
    },
    {
      "question": "____ corresponds to how high or low a voice sounds.",
      "questionType": "text",
      "answers": [
        "AMPLITUDE",
        "PITCH"
      ],
      "correctAnswer": "2",
      "point": "1"
    },
    {
      "question": "The electricity coming out of a capacitor changes based on the ____ plates",
      "questionType": "text",
      "answers": [
        "Size of the plates",
        "Weight of the plates",
        "Distance between the plates",
        "Material of the plates"
      ],
      "correctAnswer": "3",
      "point": "1"
    }
  ]
}

const pirB = {
  "quizTitle": "Beginner PIR Assesment",
  "questions": [
    {
      "question": "Both humans and animals emit ____, but plants do not.",
      "questionType": "text",
      "answers": [
        "HEAT",
        "COLD AIR",
        "ANTS"
      ],
      "correctAnswer": "1",
      "point": "1"
    },
    {
      "question": "The motion sensor works based on ____.",
      "questionType": "text",
      "answers": [
        "COLD AIR",
        "HEAT",
        "MAGIC"
      ],
      "correctAnswer": "2",
      "point": "1"
    },
    {
      "question": "____ could get past a motion sensor without issue.",
      "questionType": "text",
      "answers": [
        "Anything with a higher temperature than the background",
        "Very large ants",
        "Anything with a lower temperature than the background",
        "Anything with the same temperature as the background"
      ],
      "correctAnswer": "4",
      "point": "1"
    }
  ]
}

const thermA = {
  "quizTitle": "Advanced Thermistor Assessment",
  "questions": [
    {
      "question": "Identify the Series Circuit",
      "questionType": "photo",
      "answers": [
        image1,
        image2,
        image3
      ],
      "correctAnswer": "2",
      "point": "1"
    },
    {
      "question": "Identify the parallel circuit",
      "questionType": "photo",
      "answers": [
        image3,
        image2,
        image1
      ],
      "correctAnswer": "1",
      "point": "1"
    },
    {
      "question": "The equation to obtain temperature (°C) from voltage for a certain linearized thermistor is -6.56*Voltage + 44.5. If the voltage reading is 5 V, then what is the temperature in Celsius?",
      "questionType": "text",
      "answers": [
        "7 °C",
        "11 °C",
        "11.7 °C",
        "7.7 °C"
      ],
      "correctAnswer": "3",
      "point": "1"
    },
    {
      "question": "What is 25 degrees Celsius in Fahrenheit? Note: °F = (°C * 9/5) + 32",
      "questionType": "text",
      "answers": [
        "77 °F",
        "854 °F",
        "102.6 °F",
        "45.8 °F"
      ],
      "correctAnswer": "1",
      "point": "1"
    }
  ]
}

export {testQuiz, thermB, photoB, strainB, microB, pirB, thermA}