---
description: The getting started guide take you through rendering content created through content types and entries using Razor views and the .NET Delivery API.
---
# Getting started

This guide will take you through rendering content created using the content type builder and entries screens in Contensis, into razor views using the .NET Delivery API. Throughout the documentation we use examples based on movies.

## Assumptions

- You have an understanding of managing and creating content in the project explorer.
- You know how to create and edit pages and razor views.

## Create a new project (optional)

Projects are the home for all your content in Contensis. Either use an existing project or create a [new project](https://zenhub.zengenti.com/Contensis/9/kb/setup-and-configuration/Administration/Create-a-project.aspx) called MovieDB. You can use the default values for assets and languages. If you're creating a new project you'll need to setup a publishing server, [follow our guide](https://zenhub.zengenti.com/Contensis/9/kb/setup-and-configuration/Configuration/Setup-and-configure-a-publishing-server.aspx) to get one up and running.


## Create a movie content type

You can [create a new content type](https://zenhub.zengenti.com/Contensis/9/kb/content-types-and-entries/content-types/create-a-content-type.aspx) using the content type builder. Create a new content type called *Movie* with the following fields.

| Field name | API id | Type | Description |
| ---------- | ------ | ---- | ----------- |
| Title | title | Text | The title of the movie. |
| Overview | overview | Text | An overview of what the movie is about. |
| Release Date | releaseDate | Date | The date the movie was released. |
| Runtime | runtime | number (integer) | The runtime in minutes. |
| Poster image | posterImage | Image | A reference to the cover image asset. |


## Create a folder

Lets create a folder called *Movies Demo* in the project explorer to contain our page and razor views. In that folder create a sub folder called *images* to contain our poster images. If you don't already have one, then create a basic template that can be used to create the pages from and assign the template to the new folder. Ensure that the folder also has *C# Razor View* and *Image* content types assigned.

We will end up with the following folder and file structure.

![Example folder structure in the project explorer](/images/movie-demo-files.png)


## Create some movies

Now it's time to create some content!

Head over to either [IMDB](http://www.imdb.com/) or [The Movie DB](https://www.themoviedb.org/) and choose 5 of your favourite movies to use, and then [create](https://zenhub.zengenti.com/Contensis/9/kb/content-types-and-entries/entries/Create-an-entry.aspx) a set of entries from you new content type.

The content will benefit from the inclusion of images, so [upload](https://zenhub.zengenti.com/Contensis/9/kb/Assets-uploadable-content/Images/upload-an-image.aspx) the cover images for the movies into the images folder and link to them from your newly created entries.

## Create a movie listing in a razor view

Next we'll create the razor view that will render the movie listing in a Contensis page. First, ensure that you have a new page called 'Movies' created in the demo folder with a placeholder that supports razor views.

> **Note** If you don't know how, then [learn how to create your own pages with razor views](https://zenhub.zengenti.com/Contensis/9/Development/Razor/Razoroverview.aspx).

Create a new C# razor view called *movie-listing* within the demo folder with the following code.

```cs
@using Zengenti.Contensis.Delivery

@{
    // Add foundation to help align elements
    CurrentContext.Page.CSS.Add("https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css");

    // Create a client to allow access to the content
    var client = ContensisClient.Create();

    // Get the movies as a PagedList type
    var movies = client.Entries.List("movie");
}

<div class="movie-listing">

@foreach(var movie in movies.Items)
{
    <div class="row">
        <div class="large-2 columns">
            <img src="@(movie.Get<Image>("posterImage").Asset.Uri)">
        </div>
        <div class="large-10 columns"><a href="./movie-record.aspx?id=@movie.Id">@movie.Get("title")</a></div>
    </div>
}

</div>
```

Submit and approve the razor view so that it can be used in a page. Insert the razor view into the placeholder in the *Movies* page and you can then preview the changes.

### Example output

This should output the following page when previewed.

![movie listing](/images/movie-listing.png)


## Create a movie record page

Now we have a listing page, lets create a record page to display further details about a movie.

First, create a new page based on your basic template called *Movie record* and a new razor view called *Movie record*.

Add the following code into the razor view and insert the razor view into a placeholder in the new page.


```cs
@using System.Web;
@using Zengenti.Contensis.Delivery

@{
    // Add foundation to help align elements
    CurrentContext.Page.CSS.Add("https://cdnjs.cloudflare.com/ajax/libs/foundation/6.3.1/css/foundation.min.css");

    // Create a client to allow access to the content
    var client = ContensisClient.Create();

    // Get entry id passed in on the query string
    var movieId = Request.QueryString["id"];

    // Get the entry by id
    var movie = client.Entries.Get(movieId);
}

<div class="movie-record">
    <div class="row">
        <div class="medium-2 columns"><img src="@(movie.Get<Image>("posterImage").Asset.Uri)" /></div>
        <div class="medium-10 columns"><h2>@movie.Get("title")</h2></div>
    </div>
  	<div class="row">
        <div class="medium-2 columns">Overview</div>
        <div class="medium-10 columns"><p>@movie.Get("overview")</p></div>
    </div>
  	<div class="row">
        <div class="medium-2 columns">Release Date</div>
        <div class="medium-10 columns">@movie.Get("releaseDate").ToShortDateString()</div>
    </div>
  	<div class="row">
        <div class="medium-2 columns">Runtime</div>
        <div class="medium-10 columns">@movie.Get("runtime") minutes</div>
    </div>
</div>
```

## Example output

This should output the following page when previewed.

![movie-listing](/images/movie-record.png)

## Summary
We hope this demonstrates that by using a couple of basic razor views you can easily display new types of content in Contensis web site.
