#define THERMOPIN A0
#define RESISTOR 10000

const int MAIN = 0, THERMO = 1;

void readMain();
void readThermo();

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
}

void loop() {
  // put your main code here, to run repeatedly:
  int incomingByte = Serial.read();
  Serial.write("Howdy\n");
  if(incomingByte == MAIN) {
    readMain();    
  } else if(incomingByte == THERMO) {
    readThermo();
  }
}

void readMain() {
  while(Serial.read() == MAIN) {
    Serial.write("This is main!\n"); 
  }
}

void readThermo() {
  float reading;
  while(Serial.read() == MAIN) {
    Serial.write("This is thermo!\n");
  }
}
