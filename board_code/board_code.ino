#define THERMOPIN A0
#define RESISTOR 10000

const int MAIN = 48, THERMO = 49;
int count = 0;

void readMain();
void readThermo();

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  //int incomingByte = THERMO;

  int incomingByte = Serial.read();
  if(incomingByte == MAIN) {
    Serial.println(5);
  } else if(incomingByte == THERMO) {
    Serial.println(0);
    //Serial.println(analogRead(THERMOPIN));
  } else {
    Serial.println(incomingByte);
  }

}