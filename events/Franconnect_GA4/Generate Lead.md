# Generate Lead

Fire when a successful submit of form is being received. 


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
      "name": "generate_lead",
      "detailed_event": "Franconnect Generate Lead",
      "params": {
        "session_id": "<session_id>",
        "engagement_time_msec": "<engagement_time_msec>",
        "franconnect_lead_id": "<hashed_franconnect_lead_id>",
        "lead_source": "Franconnect",
        "utm_source": "<franconnect_utm_source>",
        "utm_medium": "<franconnect_utm_medium>",
        "utm_campaign": "<franconnect_utm_campaign>",
        "is_international": "<franconnect_is_international>"
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
|`timestamp_micros`|string|required|Timestamp of the event in Unix epoch microseconds. Highly recommended for accurate event ordering. GA4 accepts events up to 72 hours old. Needs conversion from Franconnect timestamp.|`1713872747000000`|||||||
|`events[].name`|string|required|Name of the event being sent. Must match GA4 recommended or custom event names. Max 40 chars, alphanumeric & underscores, start with letter[cite: 92, 93].|`generate_lead`|`^[a-zA-Z][a-zA-Z0-9_]*$`||40||||
|`events[].params.session_id`|string|recommended|The unique identifier for the session associated with the event. Enhances session attribution. Can be retrieved from `_ga_<measurement_id>` cookie.|`1714677480`|||100||||
|`events[].params.engagement_time_msec`|string|recommended|Time the application was in the foreground (milliseconds).|`11586`|||100||||
|`events[].params.franconnect_lead_id`|string|required|Hashed unique identifier for the lead in Franconnect. Hashing (SHA-256 recommended) enhances privacy. Derived from Franconnect `referenceId`. Max 100 chars for value[cite: 94].|`<hashed_franconnect_lead_id>`|||100||||
|`events[].params.lead_source`|string|required|Source system where the lead originated. Indicates the event data comes from Franconnect. Max 100 chars for value[cite: 94].|`Franconnect`|||100||||
|`events[].params.utm_source`|string|optional|UTM source parameter associated with the lead in Franconnect. Populated from Franconnect lead data. Max 100 chars for value[cite: 94].|`<franconnect_utm_source>`|||100||||
|`events[].params.utm_medium`|string|optional|UTM medium parameter associated with the lead in Franconnect. Populated from Franconnect lead data. Max 100 chars for value[cite: 94].|`<franconnect_utm_medium>`|||100||||
|`events[].params.utm_campaign`|string|optional|UTM campaign parameter associated with the lead in Franconnect. Populated from Franconnect lead data. Max 100 chars for value[cite: 94].|`<franconnect_utm_campaign>`|||100||||
|`events[].params.is_international`|boolean|optional|Indicates if the lead is international. Mapped from Franconnect 'International Lead' status/field. Max 100 chars for value[cite: 94].|`true`|||100||||
|`user_data.sha256_first_name`|string|recommended|SHA-256 Hashed first name of the user. Required if sending PII. Max 100 chars[cite: 94].|`916b1f...83cc`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_last_name`|string|recommended|SHA-256 Hashed last name of the user. Required if sending PII. Max 100 chars[cite: 94].|`10eb1e...5d2`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_user_email`|string|recommended|SHA-256 Hashed email address of the user. Required if sending PII. Max 100 chars[cite: 94].|`c90b82...1a6f`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_user_phone_number`|string|recommended|SHA-256 Hashed phone number of the user. Required if sending PII. Max 100 chars[cite: 94].|`048140...76f9d`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_street`|string|recommended|SHA-256 Hashed street address of the user. Required if sending PII. Max 100 chars[cite: 94].|`d96546...3c7fa`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_city`|string|recommended|SHA-256 Hashed city of the user. Required if sending PII. Max 100 chars[cite: 94].|`c55ec4...f3f7`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_region`|string|recommended|SHA-256 Hashed state/region of the user. Required if sending PII. Max 100 chars[cite: 94].|`8e9e26...8ccf15`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_postal_code`|string|recommended|SHA-256 Hashed postal code of the user. Required if sending PII. Max 100 chars[cite: 94].|`a187be...0f15e`|`^[a-fA-F0-9]{64}$`|64|64||||
|`user_data.sha256_country`|string|recommended|SHA-256 Hashed country code of the user. Required if sending PII. Max 100 chars[cite: 94].|`aa5ab3...0046`|`^[a-fA-F0-9]{64}$`|64|64||||








