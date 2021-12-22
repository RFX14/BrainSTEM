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
  if(Serial.available() > 0) {
    int incomingByte = Serial.read();
    if(incomingByte == MAIN) {
      readMain();    
    } else if(incomingByte == THERMO) {
      readThermo();
    } else if(incomingByte == -1) {
      Serial.println("Empty Byte");
    } else {
      Serial.println("Dunno, what this is");
    }
  }
}

void readMain() {
  while(Serial.read() == MAIN) {
    Serial.println("This is main!"); 
  }
}

void readThermo() {
  float reading;
  while(Serial.read() == MAIN) {
    Serial.println("This is thermo!");
  }
}
