# html-material-css
Material Design for native html components using only CSS

https://elisherer.github.io/html-material-css

# Usage

## Installation

```
npm i -S html-material-css
```

## Import in your code

```less
@import '~html-material-css/less/material.less';

// Possibly use the dark theme
@color-theme: dark;
```

## Colors

Using less variables you can use any of the material design colors:

```less
@import '~html-material-css/less/colors.less';

.some-element {
  color: @color-grey500;
}
```

## Icons with CSS-Modules

Use some material design icons by:

```js
import menu from 'html-material-css/less/icons/menu.less';

...

<i className={menu._} />

```

* Icons are detected by `<i>` tags having the `class` attribute.

Available icons:
```js
import add from 'html-material-css/less/icons/add.less';
import chevron_left from 'html-material-css/less/icons/chevron_left.less';
import chevron_right from 'html-material-css/less/icons/chevron_right.less';
import close from 'html-material-css/less/icons/close.less';
import create from 'html-material-css/less/icons/create.less';
import delete from 'html-material-css/less/icons/delete.less';
import info from 'html-material-css/less/icons/info.less';
import keyboard_arrow_down from 'html-material-css/less/icons/keyboard_arrow_down.less';
import keyboard_arrow_up from 'html-material-css/less/icons/keyboard_arrow_up.less';
import menu from 'html-material-css/less/icons/menu.less';
import print from 'html-material-css/less/icons/print.less';
import refresh from 'html-material-css/less/icons/refresh.less';
import share from 'html-material-css/less/icons/share.less';
import tag_faces from 'html-material-css/less/icons/tag_faces.less';
import undo from 'html-material-css/less/icons/undo.less';
import update from 'html-material-css/less/icons/update.less';
```

## Floating label

In order to enable the floating label on an input, you need to specify when the input has content by adding the `data-fixed` attribute.
```html
<label>
  <input type="text" data-fixed="true"/>
  <span>Hint text</span>
</label>
```

Or you can ...

### Automatic value attribute setting

You can automatically set all inputs' values attributes on change by running this script on application startup.
This will let you **not use** the `data-fixed` attribute to enable floating labels.

```js
/* This is a fix for detecting when an input field has a value filled */
document.addEventListener('input', function(e) {
e.target.setAttribute('value', e.target.value);
});
document.querySelectorAll('input').forEach(function(el) {
el.setAttribute('value', el.value || '');
});
```

You can also use common-js (which will include the script above):

```js
import 'html-material-css';
```

## Errors

Errors are automatically shown when inputs are `invalid` (Native html5 behavior: `required` with an empty `value`, `value` not matching a `pattern`, ...)

To mark errors expilicitly on inputs, you can add the attribute `data-error`.