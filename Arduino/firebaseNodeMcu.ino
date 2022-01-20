
#include <ESP8266WiFi.h>
#include <FirebaseESP8266.h>

#define FIREBASE_HOST "x"
#define FIREBASE_AUTH "x"
#define WIFI_SSID "x"
#define WIFI_PASSWORD "x"
FirebaseData firebaseData;

#define D4 2
int rele = D4;
int estado = 0;

void setup() {

  Serial.begin(115200);     

  pinMode(rele, OUTPUT);
  
  Serial.println("Serial communication started\n\n");

  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);                                     //try to connect with wifi
  Serial.print("Connecting to ");
  Serial.print(WIFI_SSID);



  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(500);
  }


  Serial.println();
  Serial.print("Connected to ");
  Serial.println(WIFI_SSID);
  Serial.print("IP Address is : ");
  Serial.println(WiFi.localIP());                                           
  Firebase.begin(FIREBASE_HOST, FIREBASE_AUTH);  
  Firebase.reconnectWiFi(true);
  delay(1000);




}

void loop() {


  if (Firebase.getInt(firebaseData, "smartEnergy/led/status")) {                        

    if (firebaseData.dataType() == "int") {                         

      estado = firebaseData.intData();
      Serial.println(estado);
      digitalWrite(rele, !estado);
      delay(500);

    }

  } else {
    Serial.println(firebaseData.errorReason());
  }
}
