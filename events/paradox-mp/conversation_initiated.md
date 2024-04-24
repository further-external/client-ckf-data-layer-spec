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

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|identifier|string|recommended|A unique machine-readible identifier whose purpose will vary by event, but generally is used to differentiate one "thing" (form, link, video) from another. See https://schema.org/identifier.|ckfi:56f9dd7d-80e6-445c-b638-4e1759789077|
|method|string|recommended|The method by which a user is applying|webform,phone,chat|
|office_id|string|optional|Set on all events that can be tied back to an office.|/ohio/springfield|
