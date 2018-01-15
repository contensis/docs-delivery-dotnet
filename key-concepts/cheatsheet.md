---
description: Cheatsheet to provide code examples for the .Net API
---
# API cheat sheet

## Entry data

### Client creation and get an entry

```cs
@using Zengenti.Contensis.Delivery
@{
    // create the client
    ContensisClient client = ContensisClient.Create();

    // Get an entry
    var movie = client.Entries.Get("c0798fc6-1bea-4c46-b67a-e367385704fc");

}
```

### Entry - Standard properties

```cs
@movie.Id
@movie.Uri
@movie.ProjectId
@movie.ContentTypeId
@movie.DataFormat
@movie.Language
@movie.Owner
```

### Entry - Version data

```cs
@movie.Version.CreatedBy
@movie.Version.Created
@movie.Version.ModifiedBy
@movie.Version.Modified
@movie.Version.PublishedBy
@movie.Version.Published
@movie.Version.VersionNo
```

### Entry - Field data
These are the fields that you can set and name when you build the content type e.g.
```cs
// Explicitly typed variables:

movie.Get<string>("title")              // text string
movie.Get<string>("description")        // text string
movie.Get<string>("content")            // HTML markup
movie.Get<Image>("bannerImage")         // image
movie.Get<Entry>("download")            // linked entry e.g. PDF download
movie.Get<int>("revenue")               // number set to integer
movie.Get<double>("revenue")            // number set to decimal
movie.Get<Location>("shootLoc")         // lat/lon location coordinates
movie.Get<string>("list")               // single list item
movie.Get<List<string>>("listMulti")    // multiple choice list 
movie.Get<TaxonomyNode>("genre")        // single taxonomy
movie.Get<List<TaxonomyNode>>("genres") // multi choice taxonomy
movie.Get<DateTime>("releaseDate")      // single date
movie.Get<DateRange>("filmingPeriod")   // date range
movie.Get<bool>("showOnHomepage")       // boolean

// If in an HTML element need to be written slightly differently e.g.

<div>@(movie.Get<string>("title"))</div>
<div>@(movie.Get<string>("title"))</div>
// etc...

```



### HTML markup
Wrap in in Html.Raw() to output as HTML
```cs
@Html.Raw(@movie.Get("content"))
```

### Quote
```cs
@{
    // Get the field value as a Quote instance.
    var filmQuote = movie.Get<Quote>("memorableQuote");
}

<blockquote cite="@filmQuote.Source">
    @filmQuote.Text
</blockquote>
```

### List
```cs
// Single selection list item
<p>@movie.Get("list")</p>

// Multiple selection list
@{
    var multiList = landing.Get<List<string>>("listMulti");
    if(multiList.Count > 0)
    {
        <ul>
            @foreach(var listItem in multiList){
                <li>@listItem</li>
            }
        </ul>
    }
}
```

### Taxonomy fields in an entry

```cs
// Single selection taxonomy node instance
@{
    var genre = movie.Get<TaxonomyNode>("genre");
    <p>@genre.Key</p> // Taxonomy Key e.g. 0/24/27
    <p>@genre.Name</p> // Taxonomy Name e.g. News
}
// Multiple selection taxonomy node instance
@{
    var genres = landing.Get<List<TaxonomyNode>>("genres");
    if(genres.Count > 0)
    {
        <ul>
            @foreach(var item in genres){
                <li>@item.Key @item.Name</li>
            }
        </ul>
    }
}

// Accessing child nodes
@{
    var genre = landing.Get<TaxonomyNode>("genre");
    <ul>
        @foreach(var item in genre.Children){
            <li>@item.Key @item.Name</li>
        }
    </ul>
}


```
### Location
```cs
@using Zengenti.Contensis.Delivery;

@{
    // Get the field value as a Location instance.
    var filmingLocation = movie.Get<Location>("filmingLocation");

    // Combine lat/lng into a string.
    var latLng = $"{filmingLocation.Lat},{filmingLocation.Lon}";

    // Use Google map API to generate a map image.
    var imgUrl = "https://maps.googleapis.com/maps/api/staticmap?center="+latLng+"&zoom=14&size=400x300&sensor=false";
}

<div id="map">
    <img src="@imgUrl" />
</div>
```

### Get a DateTime field object

```cs
@{
    // Get the field value as a DateTime instance.
    var releaseDate = movie.Get<DateTime>("releaseDate");
}

<div>@releaseDate</div>
```


### Get a DateRange field object

```cs
@{
    // Get the field value as a DateRange instance.
    var filmingPeriod = movie.Get<DateRange>("filmingPeriod");
}

<div class="start">@filmingPeriod.From</div>

<div class="end">@filmingPeriod.To</div>

// DateRange is a nullable DateTime so add .Value when formatting:

<div class="start">@filmingPeriod.From.Value.ToString("d MMMM yyyy")</div>

<div class="end">@filmingPeriod.To.Value.ToString("d MMMM yyyy")</div>

```

### Boolean
```cs
@{
    var showOnHome = movie.Get<bool>("showOnHomepage");
    
    if(showOnHome == true)
    {
        <p>Yay! the entry will appear on the homepage!</p>
    }
}
```

## Assets - getting a file (e.g. PDF) from an entry
PDFs, zip, and other file types in entries are just links to an entry with a type of "asset" - you need to get the asset first, then access its fields.



### Get the linked asset
```cs
@{
    // Get the asset instance from the entry  (single)
    var download = movie.Get<Entry>("download");

    // Get the asset instances from the entry  (multi)
    List relatedDownloads = movie.Get<List<Entry>>("relatedFiles");
}

// Example use - single
<a href="@download.Uri">@download.Get("title") - @download.Properties.FileSize bytes</a>

// Example use - multiple
<ul>
    foreach(var item in relatedDownloads) 
    {
        <li><a href="@item.Uri">@item.Get("title") - @item.Properties.FileSize bytes</a></li>
    }
</ul>


```

### Asset - standard properties
```cs
@download.Id
@download.Uri
@download.ProjectId
@download.ContentTypeId
@download.DataFormat
@download.Language
```

### Asset - properties
```cs
@download.Properties.Filename
@download.Properties.FileSize
```

### Asset - Version
```cs
@download.Version.CreatedBy
@download.Version.Created
@download.Version.ModifiedBy
@download.Version.Modified
@download.Version.PublishedBy
@download.Version.Published
@download.Version.VersionNo
```

### Asset - Field data
```cs
@download.Get("title")
@download.Get("description")
@download.Get("entryTitle")
```


## Getting an image from an entry
Images in entries are links to an Image asset - you need to get the image first, then access its fields.

### Get the linked image
```cs
@{
    // Get the image instance from the entry  
    var banImg = movie.Get<Image>("bannerImage");
}

// Example use

<figure>
    <img src="@banImg.Asset.Uri" 
        alt="@banImg.Asset.Get("altText")" 
        width="@banImg.Asset.Properties["width"]" 
        height="@banImg.Asset.Properties["height"]">
  <figcaption>@banImg.Caption</figcaption>
</figure>

```

### Image instance properties
The instance of the image has two properties; Caption and Asset. The caption allows some text to be associated with that instance of the image (but not the image asset itself) and the asset is the link to the image.

### Image caption
```cs
@banImg.Caption
```

### Image Asset - standard properties
```cs
@banImg.Asset.Id
@banImg.Asset.Uri
@banImg.Asset.ProjectId
@banImg.Asset.ContentTypeId
@banImg.Asset.DataFormat
@banImg.Asset.Language
```

### Image Asset - properties
```cs
@banImg.Asset.Properties.Filename
@banImg.Asset.Properties.FileSize
// Width and height are extended properties so are accessed slightly differently
@banImg.Asset.Properties["width"]
@banImg.Asset.Properties["height"]
```

### Image Asset - Version
```cs
@banImg.Asset.Version.CreatedBy
@banImg.Asset.Version.Created
@banImg.Asset.Version.ModifiedBy
@banImg.Asset.Version.Modified
@banImg.Asset.Version.PublishedBy
@banImg.Asset.Version.Published
@banImg.Asset.Version.VersionNo
```

### Image Asset - Field data
As per a standard asset but with an alt text field.
```cs
@banImg.Asset.Get("title")
@banImg.Asset.Get("description")
@banImg.Asset.Get("altText")
@banImg.Asset.Get("entryTitle")
```

## Composer

```cs
@{

    // Get the synopsis field as a ComposedField type
    var synopsis = filmEntry.Get<ComposedField>("synopsis");
}

<div>

@foreach(ComposedFieldItem item in synopsis)
{
    // Loop through the ComposedFieldItems in the ComposedField and render the items
    //

    if (item.Type == "mainHeading")
    {
        <h1>@item.Value()</h1>
    }

    if (item.Type == "subHeading")
    {
        <h2>@item.Value()</h2>
    }

    if (item.Type == "markup")
    {
        <div>@Html.Raw(item.Value<string>())</div>
    }

    if (item.Type == "quote")
    {
        var filmQuote = item.Value<Quote>();

        <blockquote cite="@filmQuote.Source">
            @filmQuote.Text
        </blockquote>
    }
}

</div>

```

## Components

```cs 
// Get the component as a dynamic object
dynamic banner = movie.Get("banner");

// Text in a components

<h1>@banner.title</h1>

// Image in a component
<img src="@banner.image.Asset.Uri" alt="@banner.image.Asset.Get("altText")" 
    width="@banner.image.Asset.Properties["width"]" 
    height="@banner.image.Asset.Properties["height"]"/>
```

## Repeating fields
Repeating fields are just arrays of items that can be looped through
```cs
@{
    // get multiple text fields    
    var multiText = movie.Get<List<string>>("text");
    
    if(multiText.Count > 0)
    {
        <ul>
            @foreach(var textItem in multiText){
                <li>@textItem</li>
            }
        </ul>
    }
}


```

## Search

```cs 
@using Zengenti.Contensis.Delivery
@using Zengenti.Data
@using Zengenti.Search

@{
    var client = ContensisClient.Create();

    // create query
    var query = new Query(
        Op.EqualTo("sys.contentTypeId", "movie") // get all movies
    );

    query.OrderBy.Add("-releaseDate") // order by release date descending
    query.PageIndex = 1; // start at page 1
    query.PageSize = 50; // 50 items per page

    // Execute the search
    var results = client.Entries.Search(query);
}
```

## Search an object array
Use [ ] to search through an object array e.g. a category taxonomy list or multiple linked entries.
```cs
@using Zengenti.Contensis.Delivery
@using Zengenti.Data
@using Zengenti.Search

@{
    var client = ContensisClient.Create();

    // create query
    var query = new Query(
        Op.And(
            Op.EqualTo("sys.contentTypeId", "movie"), // get all movies
            Op.EqualTo("categories[].sys.id", "action") // With a category of action
        )
    );

    query.OrderBy.Add("-releaseDate") // order by release date descending
    query.PageIndex = 1; // start at page 1
    query.PageSize = 50; // 50 items per page

    // Execute the search
    var results = client.Entries.Search(query);
}
```

## Debugging

```cs
// output json of an object
<pre>@banner.image.Asset.ToJson()</pre>

```

