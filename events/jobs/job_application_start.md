# Job Application Start

Fire whenever a user begins a job application. 

## Javascript Code

```js
window.dataLayer = window.dataLayer || []; // Initialize the dataLayer variable to avoid JS errors
window.dataLayer.push({event_data: null}) // conditionally reset portions of DL 
window.dataLayer.push({
  "event": "job_application_start",
  "event_data": {
    "hiring_organization": "<hiring_organization>",
    "identifier": "<identifier>",
    "method": "<method>",
    franchise_id: '<franchise_id>'
  }
})
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|hiring_organization|object|recommended|Organization offering the job position. See https://schema.org/hiringOrganization.|`{"@type": "Organization", "name": "Comfort Keepers Home Care", "sameAs": "https://www.comfortkeepers.com/offices/north-carolina/greensboro", "logo": "https://www.comfortkeepers.com/assets/logo.png"}`|
|identifier|string|recommended|A unique machine-readible identifier whose purpose will vary by event, but generally is used to differentiate one "thing" (form, link, video) from another. See https://schema.org/identifier.|ckfi:56f9dd7d-80e6-445c-b638-4e1759789077|
|method|string|recommended|The method by which a user is applying|webform,phone,chat|
|franchise_id|integer|optional|Set on all events that can be tied back to a franchise.|143, 576, 1134|
