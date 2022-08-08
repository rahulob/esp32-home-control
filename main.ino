
#include <WiFi.h>
#include <Firebase_ESP_Client.h>
//Provide the token generation process info.
#include "addons/TokenHelper.h"
//Provide the RTDB payload printing info and other helper functions.
#include "addons/RTDBHelper.h"


// Insert your network credentials
#define WIFI_SSID ""
#define WIFI_PASSWORD ""

// Insert Firebase project API Key and database url
#define DATABASE_URL "https://databaseurl"
#define API_KEY "PROJECT_API_KEY"


//Define Firebase Data object
FirebaseData fbdo;

FirebaseAuth auth;
FirebaseConfig config;

unsigned long sendDataPrevMillis = 0;
bool intValue;
float floatValue;
bool signupOK = false;

#define RELAY1 13
#define RELAY2 12
#define RELAY3 14
#define RELAY4 27

void setup() {
  Serial.begin(115200);
  pinMode(LED_BUILTIN, OUTPUT);
  pinMode(RELAY1, OUTPUT);
  pinMode(RELAY2, OUTPUT);
  pinMode(RELAY3, OUTPUT);
  pinMode(RELAY4, OUTPUT);
  digitalWrite(RELAY1, HIGH);
  digitalWrite(RELAY2, HIGH);
  digitalWrite(RELAY3, HIGH);
  digitalWrite(RELAY4, HIGH);
  WiFi.begin(WIFI_SSID, WIFI_PASSWORD);
  Serial.print("Connecting to Wi-Fi");
  while (WiFi.status() != WL_CONNECTED) {
    Serial.print(".");
    delay(300);
  }
  Serial.println();
  Serial.print("Connected with IP: ");
  Serial.println(WiFi.localIP());
  Serial.println();
  digitalWrite(LED_BUILTIN, HIGH);
  /* Assign the api key (required) */
  config.api_key = API_KEY;

  /* Assign the RTDB URL (required) */
  config.database_url = DATABASE_URL;

  /* Sign up */
  if (Firebase.signUp(&config, &auth, "", "")) {
    Serial.println("ok");
    signupOK = true;
  }
  else {
    Serial.printf("%s\n", config.signer.signupError.message.c_str());
  }

  /* Assign the callback function for the long running token generation task */
  config.token_status_callback = tokenStatusCallback; //see addons/TokenHelper.h

  Firebase.begin(&config, &auth);
  Firebase.reconnectWiFi(true);
}

void loop() {
 if (Firebase.ready() && signupOK && (millis() - sendDataPrevMillis > 500 || sendDataPrevMillis == 0)) {
    digitalWrite(LED_BUILTIN, HIGH);
    sendDataPrevMillis = millis();
    if (Firebase.RTDB.getBool(&fbdo, "/Data/Relay1")) {
        Serial.print(fbdo.boolData());
        if(!fbdo.boolData()){
          digitalWrite(RELAY1, HIGH);
        }
        else{
          digitalWrite(RELAY1, LOW);
        }
    }
    if (Firebase.RTDB.getBool(&fbdo, "/Data/Relay2")) {
        Serial.print(fbdo.boolData());
        if(!fbdo.boolData()){
          digitalWrite(RELAY2, HIGH);
        }
        else{
          digitalWrite(RELAY2, LOW);
        }
    }
    if (Firebase.RTDB.getBool(&fbdo, "/Data/Relay3")) {
        Serial.print(fbdo.boolData());
        if(!fbdo.boolData()){
          digitalWrite(RELAY3, HIGH);
        }
        else{
          digitalWrite(RELAY3, LOW);
        }
    }
    if (Firebase.RTDB.getBool(&fbdo, "/Data/Relay4")) {
        Serial.print(fbdo.boolData());
        if(!fbdo.boolData()){
          digitalWrite(RELAY4, HIGH);
        }
        else{
          digitalWrite(RELAY4, LOW);
        }
    }
  }
  else{
    digitalWrite(LED_BUILTIN, LOW);
  }
}
