#define THERMOPIN A0
#define STRAINPIN 3
#define RESISTOR 10000

const int MAIN = 48, THERMO = 49;
int count = 0;

void readMain();
void readThermo();
int reset = 1;

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  //Serial.println("READY");
}

void loop() {
  // put your main code here, to run repeatedly:
  //int incomingByte = THERMO;
  
  char incomingByte = (char)Serial.read();
  Serial.println("Finished Reading");
  
  if(incomingByte == '0') {
    Serial.println(0);
    //Serial.println(analogRead(THERMOPIN));
  } else {
    Serial.println(6);
  }
  delay(500);
}