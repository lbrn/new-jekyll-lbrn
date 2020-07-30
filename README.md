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

Jack update, 7/28/2020

General code:
-Most pages that update with new articles - like, events, news, etc, use Liquid and a template. The template- for example, news-list-item-featured.html, is referenced in the code and in the _includes folder.  This includes the People/cores page

-The site's CSS uses SASS to compile and output a file. It's kind of a mess at the time of writing, as there were updates done to the CSS that weren't included in the original sass file, so it's currently a mix of base changed CSS and SASS.

--The screen.scss is the main file for the sass. it contains all the basic rules, and at the time of writing, a mix of css style code and nested sass style code. Variables used here - $md, $primary, etc, are defined in the "variables" file. You can use a compiler like Prepros  (or Codekit if on a mac) to compile the sass files into screen.css. These programs both have autoprefixer options- meaning if you enter a line of code that has a different version for, say, safari, it will automatically add the safari version when compiling.


-The header menu has two seperate "include" files, depending on if the page files are nested or not. dropdown.html and dropdown_nested.html, due to requiring different linking methods if they're a folder deeper. It is also  first thing to break if bootstrap isn't linked correctly.

-The site's been updated to use the latest version of bootstrap, which allows access to any features included. Currently, the carousel on the main page, and the dropdowns on various pages are powered by it. They've been reworked from the old version that used a custom script due to definition conflicts.

Other code notes:
-Jekyll code (Usually stuff like {{% include for etc etc etc...}}) cannot be commented out; the generation process ignores the comments and runs the code anyway. As such, some sections (e.g. the removed "partner institutes" section in the people page). One way to hide this code while keeping it intact is to put it in a <div style="Display: none;"> to make it not render.


-A lot of the styles on the sites are controlled by inheriting them to minimize the amount of classes required. E.g., if a section's classed as "testsection", and the h1 content has unique styles, it's most likely under "testsection h1" in the css. Some pages have a tag that controls most of the styling on the page, but to over-ride that, you can either use more specific tags- such as adding a class for an individual post- or putting the class directly on the h1.

-For accessibility, some sections of the site- e.g. the jekyll-generated People page- triggers accessibility warnings if the template simply has the the same alt text for each one. The fix I found is making it more specific and including the title tag, e.g. "{{pi.author}}'s profile picture.". This is specific enough that it isn't redundant in regards to the name listed elsewhere, as well as not being identical for each profie photo.

-The sidebars on pages like the Cores/People page use modified versions of the same code- usually with a unique ID (#lbrnEventSidebar2 for example) with unique code based on what page they're used on.

COLOR CHANGING
-the "variables" file tags all the color variables as !default. This means that they can be over-written by another imported sheet loaded in after they're declared. Currently, the partials/blm sheet is commented out, but loading in a new sheet that replaces those colors will allow you to change the colorscheme by simply re-declarinng the colors you wanna change.

-Note that the only change not included in the sheet is the black version of the site logo. It's seperate and must be changed in includes/dropdown.html and dropdown_nested.html.


Homepage

-Uses the "home.html" layout to control its page content, rather then a markdown file

-Uses a jekyll Liquid bit of code in the Events sidebar to capture the current date, the date of the events to be displayed, and compare them to make sure they're in the proper order and not showing old events

-News section uses a simpler piece of code then the sidebar because it doesnt need to cut off old news, so it's just the events in the proper order

-News files can be tagged with "featured" in their markdown file

-Events section displays posts with "categories: notice" display differently, and the include - events-list-item , contains code that adjusts the format based on factors such as hiding the start time if none is listed, or changing the format if the post is tagged as "events". It checks if event.catgories contains events (and note that using "contains" is important and much easier to handle then if EQUALS events. I could never get that to work)

-The twitter timeline on the main page is their embed code, and some of the features are documented here: https://developer.twitter.com/en/docs/twitter-for-websites/timelines/overview.html

About
-The map section of the about uses divs wrapped in an Anchor link with margins to get em into the proper location- because they're % based, they stay in the proper location/size with the image that they're on, because the image fills 100% of the container

- the "Cores" graph is 3 seperate sections, and the buttons simply toggle a class which displays the section with that class
-The charts themselves use flexbox to make sure that they properly adjust with the page sizes and varying names/title lengths


Cores/People page
People Page:

-The site's collection folders (Events, posts, project_investigators, etc) have been consolidated under site_collections. This is controlled by the _config.yml file, under the setting collections_dir: site_collections.

-If this breaks (e.g. github doesn't sync the _config.yml file), then the collections won't work and the events sections, and profiles, etc, will render empty.

    --To add a new folder for posts etc, add the name (e.g. _test) to _config.yml
    (e.g. as
    test:
      output:)

      --If you want a profile/post/etc to generate its own page, find the folder (e.g.   admin_core) in _config.yml, and beneath its line, type output: true . This will generate an HTML page for every profile in the folder. The template for the page is chosen under the layout: line on each invdividual post.

    --The Project investigator on Cores(used to be People) and the Research>Project Investigators page both feature PIs drawing from the same source code.

    ---The pages are generated from markdown files in site_collections/pis, which conntain the layout and person's name.

    ---The layout- pidatapage- references a data file, data/pis_full . This file contains a list of all PIs, and data on whether they're active or not, as well as things like employment history, etc. The layout matches the name from the markdown to the data file and loads that data- make sure they match case wise, too, or else it won't load anything.  (if possible, I would've generated them based on pis_full, but I couldn't find a way to create new pages without using independant markdown files)

    ---Other less-updated profile sections, such as the Cores, have individual markdown files that contain the needed data, and are organized by file name- meaning those in charge often have a 1 before their filename, etc, to display in the proper


    - The People/cores page uses code such as {% if (variable).active == true %}  whether it displays active or inactive PIs, followed by some nested loops that put every 2 profiles in a div for display purposes. Updating which section is shown should be as simple as changing true/false

   --The profile folders are separated by the different sections on the People page- e.g. MCBR, Admin Core, Project Investigators and Previous Project Investigators, etc.


  -The collapsing section titles on the people page that toggle section visibility are controlled via a combo of javascript and css. The javascript is partially old code adapted to the new site, including using bootstrap. Clicking on the title hides the section containing the profiles associated with it (identified by a class that's coded to respond when clicked, e.g. .piac), and adds the "on" class to the title. Adding the class to the title also triggers some css that flips the arrow/caret section (.on .caret{css here}).



-Training and Education, which has a unique header, said header is controlled by the page's title in the markdown page- the title is added as a class to the header, (e.g. on research, the header becomes header.research) and the css has a unique background image that is applied to the header with the research class.


Resources, Events, Education, Newsletters

-These pages are reliant on code for the two and three collumn arrangements of articles. As such, be careful about modifying this code- some of the changes can roll over from one page to another if you aren't careful. So a lot of the changes are under the "research" or "resource" classes the pages are tagged with. This can carries over to some subpages and the events page.

-Events pages have seperate layouts for seminars and events.

--Despite having their own sections in posts, the pages themselves are controlled/stored in the main directory (e.g. computational-biology-seminar-series.html)
