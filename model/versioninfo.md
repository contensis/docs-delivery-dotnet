---
description: This type contains all the information relating to the versioning information for an entry or an asset. 
---
# VersionInfo

## Overview

This type contains all the information relating to the versioning information for an entry or an asset. The *Created* and *CreatedBy* property values are established upon creation of the resource and do not change, whereas the remaining property values change as the resource is either modified or published.

## Properties

| Name | Type | Description |
| :--- | :--- | :---------- |
| Created | `DateTime` | The date the entry was created |
| CreatedBy | `string` | The user id of who created the entry |
| Modified | `DateTime` | The date the entry version was last modified |
| ModifiedBy | `string` | The user id of who last modified the entry |
| Published | `DateTime` | The date the entry version was last published |
| PublishedBy | `string` | The user id of who last published the entry |
| VersionNo | `string` | The version of the entry |

## Remarks

The *VersionNo* follows a two-part versioning scheme:

> {Major}.{Minor}

The *minor* part is incremented on every successful update to the entry. The *major* part is incremented once the entry has been approved and subsequently published, which in turn resets the *minor* part to zero.

## Example

### Get the published date of an entry

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create an API client
    var client = ContensisClient.Create();
    
    // Retrieve a movie by it's ID.
    var movie = client.Entries.Get("0aabad4e-a083-4a88-bd75-b2674e2f8298");
}

<p>Published date: @movie.Version.Published</p>
```
