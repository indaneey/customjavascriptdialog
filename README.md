JavaScript Dialogs.js
====

JavaScript supports three important types of dialog boxes. But this script will help to customize these dialog boxes and can be used to raise and alert, or to get confirmation on any input or to have a kind of input from the users. And this dialogs are asynchronous so that if developer use await keyword then program will wait untill user interect with them before the Javascript will continue exucuting the code..

Installation
------------------

```bash
# Basic Node.JS installation
npm install customjavascriptdialog --save
```

Syntax
------

### Import `customjavascriptdialog()` as component

```js
import { customdialog } from 'customjavascriptdialog';
```

Examples
--------

### Import the minified version of `customDialog.min.js` JavaScript library

```html
<head>
<script src="customDialog.min.js"></script>
<script>
    customdialog.alert({message: "This is a warning message!", title: "Warning"});
    customdialog.confrim({message: "Are you sure you want to delete this file", title: "File delete"});
    customdialog.prompt({message: "Set your account username", title: "Account Set-up"});

</script>
</head>
```

### Other parameters 

```js

{
    message: any;
    title: any;
    buttons?: {
        ok: {
            text: string;
            type: string;
        };
        cancel: {
            text: string;
        };
    };
}

```


# customdialog.js

_Developed by Indaneey.