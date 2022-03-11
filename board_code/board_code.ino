#include "HX711.h"

HX711 scale;

#define THERMOPIN A0
#define DOUT 2
#define SCK 3

const char MAIN = '0', THERMO = '1', STRAIN = '2';

void readMain();
void readThermo();
void readStrainGauge();

bool isFirst = true;


void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  //Serial.println("READY");
}

void loop() {
  char incomingByte = (char) Serial.read();
  
  if(incomingByte == THERMO) {
    isFirst = true;
    readThermo();
  } else if(incomingByte == STRAIN) {
    readStrainGauge();
    isFirst = false;
  } else {

  }
}

void readThermo() {
  //Serial.println(0);
  float reading = analogRead(THERMOPIN);
  Serial.println(reading);
  delay(10);
}

void readStrainGauge() {
  if(isFirst) { 
      scale.begin(DOUT, SCK);
      scale.set_scale(2280.f * (32.5/0.39)); 
      scale.tare(); 
  }
  Serial.println(6);
  // Serial.println(scale.get_units(), 2);
  //Serial.println(rand() % 6);
  scale.power_down();	
  delay(1000);
  scale.power_up();
}
