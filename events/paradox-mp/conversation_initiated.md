# Conversation Initiated

Fire when the user starts a conversation with Olivia Assistan.

## Request info
POST /mp/collect?api_secret=fKhnzB9URSqghrauTtjGMw&measurement_id=G-0KV060Y1BE HTTP/1.1   ##Using Staging properties values
HOST: www.google-analytics.com
Content-Type: application/json

##Payload

```js
{
  "client_id":"<client_id>",
  "timestamp_micros":"<timestamp_micros>",
      "events":[{
          "name":"conversation_initiated",
          "detailed_event": "Conversation Initiated",
          "params":
          {
            "session_id": "<session_id>",
            "engagement_time_msec": "<engagement_time_msec>",
            "job_data": [{
                "identifier": "<identifier>",
                "method": "<method>",
                "office_id": "<franchise_id>",
                "date_posted": "<date_posted>",
                "employment_type": "<employment_type>"
            }],
            "user_data": [{
                "sha256_first_name": "<hashed_user_first_name>",
                "sha256__last_name": "<hashed_user_last_name>",
               "sha256_user_email": "<hashed_user_email>",
                "sha256_user_phone_number": "<hashed_user_phone_number>",
                "sha256_street": "<hashed_street>",
                "sha256_city": "hashed_city",
                "sha256_region": "<hashed_region>",
                "sha256_postal_code": "<hashed_postal_code>",
                "sha256_country": "<hashed_country>"
             }]
          }
     }]
}
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|api_secret|string|required|The API secret for the property to send the event to.|fKhnzB9URSqghrauTtjGMw|
|measurement_id|string|required|The identifier for the data stream to send the event to.|G-0KV060Y1BE|
|client_id|string|required|The unique identifier for an instance of a web client.|1704286278|
|timestamp_micros|string|required|The timestamp of the event in microsonds|1713872747|
|session_id|string|required|The unique identifier for a given session.|1714677480|
|engagement_time_msec|string|required|The amount of time someone spends with application in the foreground.|11586|
|identifier|string|recommended|A unique machine-readible identifier whose purpose will vary by event, but generally is used to differentiate one "thing" (form, link, video) from another. See https://schema.org/identifier.|ckfi:56f9dd7d-80e6-445c-b638-4e1759789077|
|method|string|recommended|The method by which a user is applying|webform,phone,chat|
|office_id|string|optional|Set on all events that can be tied back to an office.|/ohio/springfield|
|date_posted|string|recommended|Publication date of an online listing. See https://schema.org/datePosted.|44594|
|employment_type|string|recommended|The type of job for the position.|Part Time/Full Time|
|description|string|recommended|A description of the item. See https://schema.org/description.|Here at Comfort Keepers of Atlanta, GA our expert caregivers provide a personalized in-home care experience for seniors and disabled individuals to remain independent and comfortable in their own homes. Comfort Keepers uses Interactive Caregiving to ensure our clients are receiving the best care possible.\n\nLearn more on how our Comfort Keepers In-home Caregivers are bringing comfort to home while providing companionship, respite care, and more.\n\nOur team is dedicated to caring for seniors and loved ones within their homes and ensuring their safety during everyday outings and errands.|
|sha256_first_name|string|required|The Hashed and encoded first name of the user.|916b1f01b7d7c08d6a19905fa9eea0fa34289ccf0c0b0e29d523fc57b78283cc|



