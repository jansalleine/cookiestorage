# CookieStorage.js
Provides a simple [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
like API just with using cookies. I hate all the shenanigans you have to do with
cookies, but sometimes you need to use them instead of localStorage because you
have to interact with PHP etc...

## Config:
Before including CookieStorage.js set variable **window.cookieStorageLifetime**
to change the default cookie lifetime (default: 31536000000 = 1 year) and / or
**window.cookieStorageOpts** to the default cookie options included after
Max-Age (default: "path=/;SameSite=Strict;Secure;").

## Usage examples:

    cookieStorage.setItem("myItem", "myValue"); // set string key, value pair ("myItem", "myValue")
    cookieStorage.getItem("myItem"); // get string value for key "myItem"
    cookieStorage.hasItem("myItem"); // returns true if key "myItem" exists, else false

## License
Copyright (c) 2023 Jan Wassermann

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the “Software”), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
