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
  <li>A working sample of the site so far can be found HERE</li>
  </ul>


**keep in mind, links may need to be altered in HTML, dynamic content is commented in the files.
