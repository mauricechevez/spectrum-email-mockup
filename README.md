# Spectrum Marketing Email
This is recreation of the marketing email I found recently in my own mailbox. Looking at this one, compared to the rest, seemed to stand out. It loaded fast, and wasn't just text, or just pictures. It was the right balance of both, so I wish to recreate it to see if I can achieve this. 

## Screenshot
This is a screenshot of the full page. I will go purely by this image and not look at the code from gmail, as it gmail adds their own code, and to practice using the [Foundations Email](https://github.com/foundation/foundation-emails) framework, as for the most part, it does save some time when compared to creating tables, rows and columns manually!.

<img src='./src/assets/img/screencapture-mail-google-mail-u-0-2021-08-23-15_46_23.png' style="width:500px;">

## Current Result

coming soon....

## Colors used
```
dark blue : #003057;
blue text: #0099d8;
orange text: #faa41a;
footer grey: #EFEFEF;

```

## Technologies used
* Zurb's [Foundations Email framework](https://github.com/foundation/foundation-emails).
* HTML
* CSS (SASS)
* Javascript (through Panini)
---
## Helpers
A simple helper, since I noticed it was repeated code throughout. Just adding a place for someone to add a phone number so it is styled as intended. If the number were to ever change, just replace the number between the handlbar code.
```js
module.exports = function(phoneNumber){
    const blueBoldText = `<p class="text-center call">or call <u>${phoneNumber.fn(this)}</u></p>`;
    return blueBoldText;
}
```
```html
{{#phoneNumber}}1-877-959-1755{{/phoneNumber}}
```


# Copyright Notice
I do not claim ownership the design, or any of the logos within this project. This is purely for educational purposes.# spectrum-email-mockup
