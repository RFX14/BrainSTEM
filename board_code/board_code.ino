#include "HX711.h"

HX711 scale;

#define THERMO_PIN A2
#define PHOTO_PIN A3

/* Strain Gauge Pins */
#define DOUT 2
#define SCK 3

/* Motion Pins */
#define MOTION_PIN 2
#define LED_PIN 13

const char TEST = '0', THERMO = '1', STRAIN = '2', MOTION = '3', PHOTO = '4', MIC = '5';

void readMain();
void readThermo();
void readStrainGauge();
void readMotion();
void readPhoto();

bool isFirst = true;

void setup() {
  // put your setup code here, to run once:
  pinMode(LED_PIN, OUTPUT);
  Serial.begin(115200);
  //Serial.println("READY");
}

void loop() {
  char incomingByte = (char) Serial.read();
  
  if (incomingByte == THERMO) {
    isFirst = true;
    readThermo();
  }  else if (incomingByte == PHOTO) {
    // Blink LED and send data to electron
    isFirst = true;
    readPhoto();
  } else if (incomingByte == STRAIN) {
    readStrainGauge();
    isFirst = false;
  } else if (incomingByte == MOTION) {
    isFirst = true;
    readMotion();
  } else {

  }
}

void readThermo() {
  //Serial.println(0);
  float reading = analogRead(THERMO_PIN);
  Serial.println(reading);
  delay(10);
}

void readStrainGauge() {
  if (isFirst) { 
      scale.begin(DOUT, SCK);
      scale.set_scale(2280.f * (32.5/0.39)); 
      scale.tare(); 
  }
  //Serial.println(6);
  Serial.println(scale.get_units(), 2);
  //Serial.println(rand() % 6);
  scale.power_down();	
  delay(1000);
  scale.power_up();
}

void readMotion() {
  pinMode(MOTION_PIN, INPUT);

  int status = digitalRead(MOTION_PIN);
  if (status == HIGH) {
    digitalWrite(LED_PIN, HIGH);
  } else {
    digitalWrite(LED_PIN, LOW);
  }

  delay(10);
}

void readPhoto() {
  float reading = analogRead(PHOTO_PIN);
  Serial.println(reading);
  delay(10);
}