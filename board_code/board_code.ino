#define THERMOPIN A0
#define STRAINPIN 3
#define RESISTOR 10000

const char MAIN = '0', THERMO = '1';

void readMain();
void readThermo();

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  //Serial.println("READY");
}

void loop() {
  char incomingByte = (char) Serial.read();
  Serial.println("Finished Reading");
  
  if(incomingByte == THERMO) {
    Serial.println(0);
    //Serial.println(analogRead(THERMOPIN));
  } else {
    Serial.println(6);
  }
  
  delay(500);
}