/*!
 * CookieStorage.js
 *
 * Copyright (c) 2023 Jan Wassermann
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

"use strict";

(function(lifetime, opts)
{
    var cookieStorageObject = function (lifetime, opts)
    {
        var _ = this;

        _.cookie        = document.cookie;
        _.cookieArray   = _.cookie.split(';');
        _.cookieLen     = _.cookieArray.length;
        _.lifetime      = typeof(lifetime) === "number" ?
                            parseInt(lifetime) : 31536000;
        _.opts          = typeof(opts) === "string" ?
                            opts : "path=/;SameSite=Strict;Secure;";

        _.getItem = function (identifier)
        {
            var search = identifier + "=",
                value = null;

            _.refresh();

            _.cookieArray.forEach(function (elem)
            {
                if (elem.charAt(0) == " ") elem = elem.substring(1);
                if (elem.indexOf(search) == 0)
                {
                    value = elem.substring(search.length, elem.length);
                }
            });

            return value;
        };

        _.setItem = function (identifier, value)
        {
            if (typeof(identifier) !== "string") return;
            if (typeof(value) !== "string") return;

            _.refresh();

            var ageStr = "Max-Age=" + _.lifetime;

            document.cookie = identifier + "=" + value + ";" + ageStr + ";" + _.opts;
        };

        _.hasItem = function (identifier)
        {
            return !(_.getItem(identifier) === null);
        };

        _.refresh = function ()
        {
            _.cookie        = document.cookie;
            _.cookieArray   = _.cookie.split(';');
            _.cookieLen     = _.cookieArray.length;
        };
    };

    window.cookieStorage = new cookieStorageObject(lifetime, opts);
}
)(window.cookieStorageLifetime, window.cookieStorageOpts);
