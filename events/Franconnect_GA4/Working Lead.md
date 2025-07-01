# Working Lead

Fire when active engagement begins with a lead, such as when the status changes to "Contacted" in Franconnect, or when specific interaction calls occur (e.g., Intro/Pre-Qual Call, CK Oppty Call, FDD Review Call)[cite: 47, 57].

## Request info
POST /mp/collect?api_secret="insert_secret_key"&measurement_id=G-3BQ5YPKFRC HTTP/1.1   
HOST: www.google-analytics.com
Content-Type: application/json

##Payload

```js
{
  "client_id": "<client_id>",
  "timestamp_micros": "<timestamp_micros>",
  "user_data": {
    "sha256_first_name": "<hashed_user_first_name>",
    "sha256_last_name": "<hashed_user_last_name>",
    "sha256_user_email": "<hashed_user_email>",
    "sha256_user_phone_number": "<hashed_user_phone_number>",
    "sha256_street": "<hashed_street>",
    "sha256_city": "<hashed_city>",
    "sha256_region": "<hashed_region>",
    "sha256_postal_code": "<hashed_postal_code>",
    "sha256_country": "<hashed_country>"
  },
  "events": [
    {
      "name": "qualify_lead",
      "params": {
        "franconnect_lead_id": "<hashed_franconnect_lead_id>",
        "qualification_timestamp": "<qualification_timestamp_micros>",
        "call_type": "<call_type_>",
        "detailed_event": "Franconnect Qualify Lead"
      }
    }
  ]
}
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|`api_secret`|string|required|The API secret for the GA4 property. Found in GA4 Admin: Data Streams > Measurement Protocol API secrets. Must be kept confidential.|`fKhnzB9URSqghrauTtjGMw`|||||||
|`measurement_id`|string|required|The identifier for the GA4 data stream. Found in GA4 Admin: Data Streams.|`G-3BQ5YPKFRC`|||||||
|`client_id`|string|required|Unique identifier for a user/client instance. Essential for linking offline events to online user activity. Typically retrieved from the `_ga` cookie or server-side GTM. Needs to be associated with the Franconnect lead.|`1704286278.1678886400`|||||||
|`timestamp_micros`|string|required|Timestamp of the event in Unix epoch microseconds. Highly recommended for accurate event ordering. GA4 accepts events up to 72 hours old. Needs conversion from Franconnect timestamp.|`1679145600000000`|||||||
|`events[].name`|string|required|Name of the event being sent. Must match GA4 recommended or custom event names. Max 40 chars, alphanumeric & underscores, start with letter.|`working_lead`|`^[a-zA-Z][a-zA-Z0-9_]*$`||40||||
|`events[].params.franconnect_lead_id`|string|required|Hashed unique identifier for the lead in Franconnect. Hashing (SHA-256 recommended) enhances privacy. Derived from Franconnect `referenceId`. Max 100 chars for value.|`<hashed_franconnect_lead_id>`|||100||||
|`events[].params.working_timestamp`|string|recommended|Timestamp in Unix epoch microseconds when the specific 'working' status/interaction occurred. Max 100 chars for value.|`1679145600000`|||100||||
|`events[].params.call_type`|string|required|Specifies the type of 'working' interaction, based on Franconnect stage mapping (e.g., contacted, intro_prequal, opportunity_call, fdd_review, validation_calls, validation_review). Max 100 chars for value.|`intro_prequal`|||100||||
|`user_data.sha256_first_name`|string|recommended|SHA-256 Hashed first name of the user. Required if sending PII. Max 100 chars.|`916b1f...83cc`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_last_name`|string|recommended|SHA-256 Hashed last name of the user. Required if sending PII. Max 100 chars.|`10eb1e...5d2`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_user_email`|string|recommended|SHA-256 Hashed email address of the user. Required if sending PII. Max 100 chars.|`c90b82...1a6f`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_user_phone_number`|string|recommended|SHA-256 Hashed phone number of the user. Required if sending PII. Max 100 chars.|`048140...76f9d`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_street`|string|recommended|SHA-256 Hashed street address of the user. Required if sending PII. Max 100 chars.|`d96546...3c7fa`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_city`|string|recommended|SHA-256 Hashed city of the user. Required if sending PII. Max 100 chars.|`c55ec4...f3f7`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_region`|string|recommended|SHA-256 Hashed state/region of the user. Required if sending PII. Max 100 chars.|`8e9e26...8ccf15`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_postal_code`|string|recommended|SHA-256 Hashed postal code of the user. Required if sending PII. Max 100 chars.|`a187be...0f15e`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_country`|string|recommended|SHA-256 Hashed country code of the user. Required if sending PII. Max 100 chars.|`aa5ab3...0046`|`^[a-fA-F0-9]{64}$`|64|64||||








