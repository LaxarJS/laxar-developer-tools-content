# laxar-developer-tools-content

This is an application using the LaxarJS developer tooling API.
The laxar-developer-tools-widget and the laxar-developer-tools-extension embed this application.


## Content

* [Appearance](#appearance)
* [Usage](#usage)
* [Features](#features)
* [Integration](#integration)
* [References](#references)


## Appearance

### Events tab

![The event log of the LaxarJS developer tools](docs/events.png)

The events tab displays the latest publish/subscribe events of the currently running application, including subscribe/unsubscribe calls, as well as publication and delivery of events.
Events may be filtered by name, pattern, or source/target.


### Page tab

![The page inspector of the LaxarJS developer tools](docs/page.png)

This "fusebox" view of the running application visualizes which widgets are connected through shared topics.
See [below](#usage) for more information on how to enable page inspection.

### Log tab

The log tab lists log messages that were created using the `laxar.log` API.
You can also use the browser console to inspect these messages without opening the developer tools.


### Enabling Page Inspection

In the page tab, area nesting (blue connections) will work out of the box.
The standard [LaxarJS patterns](http://laxarjs.org/docs/laxar-patterns-v2-latest) *resource*, *action* and *flag* are also supported, but additional markup needs to be added to your *widget.json* files for visualization to work:

* Configurable topics must use `"format": "topic"` in their JSON schema (with the exception of flag-receivers, which should use `"format": "flag-topic"` to support negated flags). For validation, this is recommended anyway.

* Configurable topics must specify the new field `"axRole"`:

   - `"outlet"` must be used for topic publishers (resource masters, action triggers, flag providers),

   - `"inlet"` must be used for topic subscribers (resource slaves, action/flag handlers).

* If not evident from the configuration path, the field `"axPattern"` must be specified to indicate the standard pattern (one of `"resource", "action", "flag"`) associated with the field.

For example, a widget that is master for a configurable `user.resource` would use the following JSON schema snippet, with description fields omitted in favour of brevity:

```js
"features": {
   // ...
   "user": {
      "type": "object",
      "properties": {
         "resource": {
            "type": "string",
            "format": "topic",
            "axRole": "outlet"
         }
      }
   }
}
```

Alternatively, a widget/activty that subscribes to `order.onActions` would use this:

```js
"features": {
   // ...
   "order": {
      "type": "object",
      "properties": {
         "onActions": {
            "type": "array",
            "item": {
               "type": "string",
               "format": "topic",
               "axRole": "inlet"
            }
         }
      }
   }
}
```


Finally, a widget/activty that processes a flag `visibility.toggleOn` would use this:

```js
"features": {
   // ...
   "visibility": {
      "type": "object",
      "properties": {
         "toggleOn": {
            "type": "string",
            "format": "flag-topic",
            "axRole": "inlet",
            "axPattern": "flag"
         }
      }
   }
}
```

The page inspector simply ignores configuration values that cannot be unambiguously assigned to a specific pattern and role.

[Compositions](http://laxarjs.org/docs/laxar-v2-latest/manuals/writing_compositions) are supported as well, just make sure to add "`format`' and "`role`"
