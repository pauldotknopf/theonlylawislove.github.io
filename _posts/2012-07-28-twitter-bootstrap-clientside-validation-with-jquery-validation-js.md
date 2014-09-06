---
layout: post
title:  "Twitter Bootstrap Clientside Validation with jquery.validation.js"
date:   2012-07-28
categories: development
tags: [sample post]
disqus-identifier: post-27
redirect_from: "/blog/twitter-bootstrap-clientside-validation-with-jquery-validation-js"

---
Twitter Bootstrap is a great css/html/js framework, but sometimes it is difficult to ensure other plugins generate html that conform to the markup that Twitter Bootstrap works best with.

For example, Twitter Bootstrap has support for error stying at a field level, while jquery.validation only adds styles at an input level. When using jquery.validation.js with Twitter Bootstrap, you will not instantly get the styling that is has to offer because of this. This scripts modifies some functions of jquery.validation so that you get the full power of an already established javascript validation library with the wonderful base components of Twitter Bootstrap.

1. highlight/unlight - These two events are used to dynamically add/remove the "has-error" class from the "form-group". jquery.validation has two events that you can change that I found by digging through the source code. They are not simple "listening" events because they actually replace the default implementation of jquery.validation. I looked into the source to ensure that my new methods also keep the existing functionality that was inside of the default methods.

2. Add "help-block" to all <p />'s to the jquery.validation messages. This wouldn't typically be an issue if you render your own markup because you could add the class you want yourself. The problem is that in ASP.NET MVC, the ValidationMessageFor html helper doesn't render the Twitter Bootstrap classes.

3. Add the "has-error" class to any errors that were rendered on page load. It is nice to have client side validation stying but what about when the page gets rendered with an error? For example, without EnableClientsideValidation in MVC, error messages will only get rendered after a post back. This would cause errors to not appear as errors until you modify the field so that the client side magic can do its work.

##The end result
<p><iframe src="http://jsfiddle.net/theonlylawislove/9eLFu/2/embedded/result" width="100%" height="320"></iframe></p>

##Download
I put a [sample project up on GitHub](https://github.com/theonlylawislove/TwitterBootstrapjQueryValidate) to demo the script (the fiddle above is using scripts hosted on github). Here is a link to [the only script file that you will need](https://github.com/theonlylawislove/TwitterBootstrapjQueryValidate/blob/master/Content/Scripts/jquery.validate.bootstrap.js).</p>
