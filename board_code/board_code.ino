#include "HX711.h"

HX711 scale;

#define THERMO_PIN A1
#define PHOTO_PIN A0
#define MIC_PIN A2

/* Strain Gauge Pins */
#define DOUT 10
#define SCK 13

/* Motion Pins */
#define MOTION_PIN 9
#define LED_PIN 6

const char TEST = '0', THERMO = '1', STRAIN = '2', MOTION = '3', PHOTO = '4', MIC = '5', PHOTO2 = '6';

void readMain();
void readThermo();
void readStrainGauge();
void readMotion();
void readPhoto();
void readMic();
void readPhoto2();

bool isFirst = true;
char incomingByte = 0;

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
    isFirst = true;
    readPhoto();
  } else if (incomingByte == STRAIN) {
    readStrainGauge();
    isFirst = false;
  } else if (incomingByte == MOTION) {
    isFirst = true;
    readMotion();
  } else if (incomingByte == MIC) {
    isFirst = true;
    readMic();
  } else if (incomingByte ^ PHOTO2 >= 10) {
    isFirst = true;
    readPhoto2();
  }
}

/* Graph voltage of thermistor */
void readThermo() {
  //Serial.println(0);
  float reading = analogRead(THERMO_PIN);
  Serial.println(reading);
  delay(10);
}

/* Display weight of item */
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

/* Turn on LED when motino detected, otherwise turn off */
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

/* Graph voltage of photoresistor */
void readPhoto() {
  float reading = analogRead(PHOTO_PIN);
  Serial.println(reading);
  delay(10);
}

/* Toggle LED on clap */
bool LED_STATUS = false;
void readMic() {
  pinMode(MIC_PIN, INPUT);
  int micVal = analogRead(MIC_PIN);
  if(micVal > 600) {
    LED_STATUS = !LED_STATUS;
    digitalWrite(LED_PIN, LED_STATUS);
  }
  Serial.println(micVal);
}

void readPhoto2() {
  int reading = analogRead(PHOTO_PIN);
  int goalSwitch = 206; // Min value before change (approx 1 V)
  
  switch (incomingByte ^ PHOTO2) {
  case 58:
    goalSwitch = 206; // approx 1 V
    break;
  case 59:
    goalSwitch = 410; // approx 2 V
    break;
  case 60:
    goalSwitch = 615; // approx 3 V
    break;
  default: 
    goalSwitch = 820; // approx 4 V
    break;
  }

  // Toggle LED based on photocell sensitivy
  if (reading == goalSwitch) {
    LED_STATUS = !LED_STATUS;
    digitalWrite(LED_PIN, LED_STATUS);
  }
}