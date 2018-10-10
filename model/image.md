---
description: The Image type represents a link to an image with an associated caption and alt text, if required.
---
# Image

The Image type represents a link to an image with an associated caption and alt text, if required.

## Properties

| Name    | Type                     | Description                                |
|:--------|:-------------------------|:-------------------------------------------|
| AltText | string                   | The image alt text, defined in the entry   |
| Caption | string                   | The image caption, defined in the entry    |
| Asset   | [Asset](/model/asset.md) | The asset that is linked to from the entry |

## Remarks

The caption property allows instance specific text to be associated with an image.

Unlike entry links, an asset link is always resolved so that the full asset details are included when retrieved.

## Example

### Get an Image field object

```cs
@using Zengenti.Contensis.Delivery;

@{
    // Create an API client
    var client = ContensisClient.Create();
    
    // Retrieve a movie by it's ID.
    var movie = client.Entries.Get("0aabad4e-a083-4a88-bd75-b2674e2f8298");

    // Get the field value as an Image instance.
    var coverImage = movie.Get<Image>("posterImage");

    // Get properties of the Image instance.
    var imgWidth = coverImage.Asset.Properties["width"];
    var imgHeight = coverImage.Asset.Properties["height"];

    // Get properties of the image set on the entry.

    var caption = coverImage.Caption;
    var altText = coverImage.AltText;
}

<figure>
  <img src="@coverImage.Asset.Uri" alt="@coverImage.Asset.Get("altText")" width="@imgWidth" height="@imgHeight">
  <figcaption>@coverImage.Caption</figcaption>
</figure>

```
