<h1>LBRN New Website Project Front-End Development Assets</h1>
<h2>Project Overview:</h2>
<p>This repository is used to share the front-end resources for the currently "under construction" Louisiana Biomedical Research Network website (new as of Summer 2017).</p>

<h2>Technologies Used:</h2>
<p>All deliverables are to be rendered in HTML, CSS, and Javascript. That said, the project takes advantage of a number of frameworks to render these deliverables quickly.
</p><p>
<a href="http://sass-lang.com">Sass</a> is a CSS pre-processor that enhances the functionality of CSS. All production styling is written in SASS (using the .scss extension).
</p><p>
In addition to SASS, this project uses a sass framework called <a href="http://compass-style.org">Compass</a>. Compass is also being extended using two compass plug-ins: <a href="http://susy.oddbird.net">Susy</a>, which allows for the creation of flexible grids, and <a href="http://breakpoint-sass.com">Breakpoint</a>, which handles media queries more gracefully.
</p><p>
Scripting includes <a href="https://jquery.com">jQuery</a>, which is linked into the pages using a CDN.
</p>
<p>All templating and content management is done using <a href="https://jekyllrb.com">Jekyll</a>, a static site generator with strong GitHub integration.</p>
<h2>Deliverables</h2>
<p>The final rendered files are placed in the "_site" directory. the original sass filles in the "sass" directiory, and the compiled css files in (you guessed it) the "css" directory.</p>
<p>most of the actual page content is placed in the .md or .html files in the root, but some of the news and event posts are generated on build.</p>
<p>A few tricky ones:</p>
<ul>
  <li>Markup for the home page is actually in the "_layouts" directory, named home.html</li>
  <li>Some of those .md or .html page will contain code that is enclosednin either {{}} or {%%}. That is liquid, and it is mostly self explanatory, and only references other files (like templates in _layouts, or code blocks in _includes, etc.).</li>
  <li>A working sample of the site so far can be found <a href="https://mjtheriot4.github.io/new-jekyll-lbrn/">HERE</a></li>
  </ul>



**keep in mind, links may need to be altered in HTML, dynamic content is commented in the files.

==================================
Jack Update Edits

Summer, 2019

So, first, the big changes.

-The site's collection folders (Events, posts, project_investigators, etc) have been consoldiated under site_collections. This is controlled by the _config.yml file, under the setting collections_dir: site_collections.

    --To add a new folder for posts etc, add the name (e.g. _test) to _config.yml
    (e.g. as
    test:
      output:)

      --If you want a profile/post/etc to generate its own page, find the folder (e.g.   project_investigators) in _config.yml, and beneath its line, type output: true . This will generate an HTML page for every profile in the folder. The template for the page is chosen under the layout: line on each invdividual post.

    --The People and Resources>Project investigators pages now both use the collection function. Previously, the People page had the profiles on a single list, and the PI page had invidiual profiles that also generate the pages they link to. Now they both only need to use the profile folders under site_collections.

    --The profile folders are seperated by the different sections on the People page- e.g. MCBR, Admin Core, Project Investigators and Previous Project Investigators, etc.

    --

-The site's been updated to use the latest version of bootstrap, which allows access to any features included. Currently, the carousel on the main page, and the dropdowns on various pages are powered by it. They've been reworked from the old version that used a custom script due to definition conflicts.

Other less major notes:
-Jekyll code (Usually stuff like {{% include for etc etc etc...}}) cannot be commented out; the generation process ignores the comments and runs the code anyway. As such, some sections (e.g. the removed "partner institutes" section in the people page). One way to hide this code while keeping it intact is to put it in a <div style="Display: none;"> to make it not render.

-The  dropdown menus for navigation at the top of each page are coded as a mobile version and a seperate non-mobile version. The mobile version only renders at a small enough size, and vice-versa.

-A lot of the styles on the sites are controlled by inhereting them to minimize the amount of classes required. E.g., if a section's classed as "testsection", and the h1 content has unique styles, it's most likely under "testsection h1" in the css. Some pages have a tag that controls most of the styling on the page, but to over-ride that, you can either use more specific tags- such as adding a class for an individual post- or putting the class directly on the h1.

-For accessibility, some sections of the site- e.g. the jekyll-generated People page- triggers accessibility warnings if the template simply has the the same alt text for each one. The fix I found is making it more specific and including the title tag, e.g. "{{pi.author}}'s profile picture.". This is specific enough that it isn't redundant in regards to the name listed elsewhere, as well as not being identical for each profie photo.

-News articles have categories split between News and featured

-For the People profile's pages, the html pages are generated and use the layout in the layout: category on the page.  There are two layouts used for these pages:
  --pipage , for profiles from the previous iteration of this site. They only have the title and abstract.
  --Pidatapage , for profiles with more extensive info. The older version of the site from the mid-2000s has a data file which contains info such as mentors, etc. In the future all profiles will use this.
