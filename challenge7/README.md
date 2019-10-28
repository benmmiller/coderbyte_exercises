## Regex HTML Get Request Checker

You are to create a special regex that will detect if an HTML GET request is valid or not (with some gotchas). Strings are formated like so:

name1=val1&name2=val2&name3=val3&name4=val4
You need to detect requests with the four names: "val", "id", "desc", "time" (each value can have a different order).

## Example #1
"val=val1&id=val2&desc=val3&time=val4"

"id=val2&val=val1&time=val4&desc=val3"
Each name has a specific value:

val could contain string a to z and number 0 to 9 (any case accepted).
id is a number from 0 to 10.
desc could contain strings a to z.
time is formated value (00:00 to 99:99).

## Example #2
"val=test1151&id=5&desc=helloWorld&time=54:33"

"id=10&val=123test&time=99:00&desc=itsok"
When the regex checker is finished, you need to put all names and their values from the request into an object and return it with the given function dataRegexLovely(). The parameter str is a valid GET request (no gotchas).

## Notes
The regex length is limited to < 161 characters ( "/" and [flags] included).
You might get an empty string "" when users don't send a request.
Warning about data object value types.
