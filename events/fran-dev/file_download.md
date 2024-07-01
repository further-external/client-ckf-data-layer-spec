# File download

This event will be automatically sent whenever a user clicks on an HTML anchor `<a>` tag whose href contains a standard download extension (e.g. - .pdf).

If a download is generated after some other user action is taken (e.g. - clicking on an HTML `<button>`), fire the data layer push as it will not be automatically detected.

## Javascript Code
```js
window.dataLayer = window.dataLayer || []; // Initialize the dataLayer variable to avoid JS errors
window.dataLayer.push({event_data: null}) // conditionally reset portions of DL 
window.dataLayer.push({
  "event": "click",
  "event_data": {
    "category": "<category>",
    "component_ancestry": "<component_ancestry>",
    "identifier": "<identifier>",
    "link_url": "<link_url>",
    "link_id": "<link_id>",
    "link_classes": "<link_classes>",
    "link_text": "<link_text>",
    "file_name": "<file_name>",
    "file_extension": "<file_extension>",
    "navigation_ancestry": "<navigation_ancestry>",
    "outbound": "<outbound>",
    "region_ancestry": "<region_ancestry>",
    "office_id": '<office_id>'
  }
})
```

## Variable Definitions
|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|category|string|optional|A human-readible identifier whose purpose will vary by event, but generally is used to group things (forms, links, videos) into loose assocations based upon shared characteristics. If running low on custom dimensions, you may combine multiple categories together in this field, separated by greater than (>) or slash (/). See https://schema.org/category.||
|component_ancestry|string|optional|A hierarchical list of all components that a link is contained within|main>hero>cta-box|
|identifier|string|optional|A unique machine-readible identifier whose purpose will vary by event, but generally is used to differentiate one "thing" (form, link, video) from another. See https://schema.org/identifier.|unique-identifier|
|link_url|string|required|The HREF of the link interacted with.|https://www.comfortkeepers.com/download.pdf|
|link_id|string|required|The HTML ID of the link interacted with.|html-id-goes-here|
|link_classes|string|required|The list of HTML classes of the link interacted with.|html-classes-go-here|
|link_text|string|required|The text of the link interacted with.|Apply Now >>|
|file_name|string|required|The name of the file interacted with.|filename.pdf|
|file_extension|string|required|The extension of the file interacted with. Typically paired with the "file_downloaded" event.  Example values: "pdf", "doc", etc.|pdf|
|navigation_ancestry|string|optional|A hierarchical list of all navigation (menu) links that a link is contained within. Generally used within dropdown/mega menus to show the path to the menu item clicked.|About Us>Testimonials|
|outbound|boolean|recommended|Set to "true" to indicate that the user clicked on an exit link|FALSE|
|region_ancestry|string|optional|A hierarchical list of all regions that a link is contained within.|header|
|office_id|string|optional|Set on all events that can be tied back to an office.|/ohio/springfield|
