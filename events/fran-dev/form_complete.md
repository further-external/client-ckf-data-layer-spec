# Form Submission Succeeded

Fire whenever a user successfully completes a form. 

This event is fired when form input is successfully received and process. This is in contrast to `form_error` which occurs when a submission is attempted but an error occurs and the form input is not recieved and processed.

## Javascript Code

```js
window.dataLayer = window.dataLayer || [];
dataLayer.push({ event_data: null, user_data: null });  // Clear the previous event_data object.
dataLayer.push({
 "detailed_event": "Form Submission Succeeded",
 "event": "form_complete",
  "event_data": {
    "category": "<category>",
    "identifier": "<identifier>",
    "name": "<name>"
  },
});
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|category|string|recommended|A human-readible identifier whose purpose will vary by event, but generally is used to group things (forms, links, videos) into loose assocations based upon shared characteristics. If running low on custom dimensions, you may combine multiple categories together in this field, separated by greater than (>) or slash (/). See https://schema.org/category.|Job Application|
|identifier|string|recommended|The form machine-readable name. This should be a unique value specific to this form, if one exists. If one does not exist, this can also be populated with the same value as the <name>.|form-12345|
|name|string|required|The form human-readable name. This should be something that an analyst without a deep knowledge of the technical implementation of the site can easily identify the form with. It should be lowercase snake_case.|Caregiver 1078 Application|

