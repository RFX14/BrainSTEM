#define THERMOPIN A0
#define RESISTOR 10000

const int MAIN = 0, THERMO = 1;
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
    Serial.println("This is main!");
  } else if(incomingByte == THERMO) {
    Serial.println(analogRead(THERMOPIN));
  }
}