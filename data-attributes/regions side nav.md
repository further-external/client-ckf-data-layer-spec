# Side Nav accordion expand and collapse. 

The data-layer-event attribute should be dynamically updated from collapse_accordion to expand_accordion whenever the accordion is expanded so this event will fire.

## HTML Data Attributes

```html
<a href="<href>" 
  data-layer-event="expand_accordion" 
  data-layer-identifier="<identifier>"
  data-layer-section-name="<section-name>"
  data-layer-heading="<heading>" 
  data-layer-index="<index>" 
  data-layer-type="<type>"
></a>
```

## Variable Definitions

|Field|Type|Required|Description|Example|Pattern|Min Length|Max Length|Minimum|Maximum|Multiple Of|
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|href|string|required|Keep the original href attribute||
|event|string|required|expand_accordion or collapse_accordion||
|identifier|string|required|The computer-readable machine name of the accordion. Use UUID provided by the component||
|section-name|string|required|The name of the section|Side nav filter search results|
|heading|string|required|The text heading of the accordion item that was opened/closed|Category|
|index|string|required|The ordinal slot number of the accordion item|the top item in the accordion will be slot 1. (1-indexed)|
|type|string|required|The type of accordion|regions_side_nav|
