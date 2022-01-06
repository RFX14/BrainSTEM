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
  int incomingByte = Serial.read();
  Serial.println(count);
  if(incomingByte == MAIN) {
    readMain();    
  } else if(incomingByte == THERMO) {
    readThermo();
  }
  count = (count + 1) % 999999;
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
