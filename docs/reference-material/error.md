---
title: Errors
sidebar_label:  Errors
sidebar_position: 2

---

# Errors

A list of errors you might come across while using TMDB.

| Code | HTTP Status | Message                                              |Reason   |
| :--- | :---------- | :---------------------------------------------------- | :---   |
| 1    | 200         | Success.                                              | Request is successful.   |
| 7    | 401         | Invalid API key: You must be granted a valid key.     |  API token is missing, invalid, or expired.  |
| 34   | 404        | The resource you requested could not be found.     |  The path is missing or invalid.  |
| 22   | 400        | Invalid page: Pages start at 1 and max at 500. They are expected to be an integer.     |  Value of page query parameter is invalid. |
| 27   | 400        | Too many append to response objects: The maximum number of remote calls is 20.    |  Number of values in append to response objects exceeded the maximum limit. |


## Error Behaviour

1. Sending an invalid filter value, or a misspelled parameter name does not return an error. The API silently ignores the value and responds with 200 success code. A 200 therefore does not confirm your filter was applied — verify by inspecting the results, not the status code.

2. A request that matches no result also returns 200 success code. For example: 

```json
{
    "page": 1,
    "results": [],
    "total_pages": 1,
    "total_results": 0
}
```
