"use strict";console.log("Hello there! Thanks for visiting my resume's webpage. Sadly there isn't much JS here, so this console will be rather boring. ~James"),jQuery("img.svg").each(function(){var e=jQuery(this),t=e.attr("id"),r=e.attr("class"),s=e.attr("src");jQuery.get(s,function(s){var a=jQuery(s).find("svg");"undefined"!=typeof t&&(a=a.attr("id",t)),"undefined"!=typeof r&&(a=a.attr("class",r+" replaced-svg")),a=a.removeAttr("xmlns:a"),e.replaceWith(a)},"xml")});