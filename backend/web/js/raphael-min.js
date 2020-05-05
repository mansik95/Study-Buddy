





<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">



  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-148da7a2b8b9ad739a5a0b8b68683fed4ac7e50ce8185f17d86aa05e75ed376e.css" media="all" rel="stylesheet" />
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-4cb6b37ae0c653978a80cfe0c9288fcb02f00f746d1e076237703e57761c8973.css" media="all" rel="stylesheet" />
  
  
  <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/site-533b8a15e9857d8168369b00b52ff589cba2fe9e3ecf8db1a110517b9814d246.css" media="all" rel="stylesheet" />
  

  <meta name="viewport" content="width=device-width">
  
  <title>raphael/raphael.min.js at master · DmitryBaranovskiy/raphael · GitHub</title>
  <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
  <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
  <meta property="fb:app_id" content="1401488693436528">

    
    <meta content="https://avatars1.githubusercontent.com/u/22726?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="DmitryBaranovskiy/raphael" property="og:title" /><meta content="https://github.com/DmitryBaranovskiy/raphael" property="og:url" /><meta content="raphael - JavaScript Vector Library" property="og:description" />

  <link rel="assets" href="https://assets-cdn.github.com/">
  
  <meta name="pjax-timeout" content="1000">
  
  <meta name="request-id" content="53CD:0E18:35D94B1:50A6B3D:592C10D1" data-pjax-transient>
  

  <meta name="selected-link" value="repo_source" data-pjax-transient>

  <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="https://collector.githubapp.com/github-external/browser_event" name="octolytics-event-url" /><meta content="53CD:0E18:35D94B1:50A6B3D:592C10D1" name="octolytics-dimension-request_id" /><meta content="iad" name="octolytics-dimension-region_edge" /><meta content="iad" name="octolytics-dimension-region_render" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />




  <meta class="js-ga-set" name="dimension1" content="Logged Out">


  

      <meta name="hostname" content="github.com">
  <meta name="user-login" content="">

      <meta name="expected-hostname" content="github.com">
    <meta name="js-proxy-site-detection-payload" content="NzRiYWM2N2Y1ZThjMTVhYjhiZGQzMGM5NzQwMzg4OTgxMjQyMGI3MjQ5NDhjMWE2M2ZiYzU2MjU2MDNhMWJiOXx7InJlbW90ZV9hZGRyZXNzIjoiNDIuMTA2LjExMy4xMDYiLCJyZXF1ZXN0X2lkIjoiNTNDRDowRTE4OjM1RDk0QjE6NTBBNkIzRDo1OTJDMTBEMSIsInRpbWVzdGFtcCI6MTQ5NjA2MDExMywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


  <meta name="html-safe-nonce" content="6ed0b58d4bf61e0755fe520090653b0f7e98e709">

  <meta http-equiv="x-pjax-version" content="757efe3f0bbc93dc131b9a7d2ae5448c">
  

    
  <meta name="description" content="raphael - JavaScript Vector Library">
  <meta name="go-import" content="github.com/DmitryBaranovskiy/raphael git https://github.com/DmitryBaranovskiy/raphael.git">

  <meta content="22726" name="octolytics-dimension-user_id" /><meta content="DmitryBaranovskiy" name="octolytics-dimension-user_login" /><meta content="48296" name="octolytics-dimension-repository_id" /><meta content="DmitryBaranovskiy/raphael" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="48296" name="octolytics-dimension-repository_network_root_id" /><meta content="DmitryBaranovskiy/raphael" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/DmitryBaranovskiy/raphael/commits/master.atom" rel="alternate" title="Recent Commits to raphael:master" type="application/atom+xml">


    <link rel="canonical" href="https://github.com/DmitryBaranovskiy/raphael/blob/master/raphael.min.js" data-pjax-transient>


  <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">

  <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">

  <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#000000">
  <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

<meta name="theme-color" content="#1e2327">

  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
  <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">


  </head>

  <body class="logged-out env-production page-blob">
    



  <div class="position-relative js-header-wrapper ">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>

    
    
    



          <header class="site-header js-details-container Details" role="banner">
  <div class="site-nav-container">
    <a class="header-logo-invertocat" href="https://github.com/" aria-label="Homepage" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="32" version="1.1" viewBox="0 0 16 16" width="32"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
    </a>

    <button class="btn-link float-right site-header-toggle js-details-target" type="button" aria-label="Toggle navigation">
      <svg aria-hidden="true" class="octicon octicon-three-bars" height="24" version="1.1" viewBox="0 0 12 16" width="18"><path fill-rule="evenodd" d="M11.41 9H.59C0 9 0 8.59 0 8c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zm0-4H.59C0 5 0 4.59 0 4c0-.59 0-1 .59-1H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1h.01zM.59 11H11.4c.59 0 .59.41.59 1 0 .59 0 1-.59 1H.59C0 13 0 12.59 0 12c0-.59 0-1 .59-1z"/></svg>
    </button>

    <div class="site-header-menu">
      <nav class="site-header-nav">
        <a href="/features" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:features" data-selected-links="/features /features">
          Features
</a>        <a href="/business" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:business" data-selected-links="/business /business/security /business/customers /business">
          Business
</a>        <a href="/explore" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:explore" data-selected-links="/explore /trending /trending/developers /integrations /integrations/feature/code /integrations/feature/collaborate /integrations/feature/ship /showcases /explore">
          Explore
</a>            <a href="/marketplace" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:marketplace" data-selected-links=" /marketplace">
              Marketplace
</a>        <a href="/pricing" class="js-selected-navigation-item nav-item" data-ga-click="Header, click, Nav menu - item:pricing" data-selected-links="/pricing /pricing/developer /pricing/team /pricing/business-hosted /pricing/business-enterprise /pricing">
          Pricing
</a>      </nav>

      <div class="site-header-actions">
          <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/DmitryBaranovskiy/raphael/search" class="js-site-search-form" data-scoped-search-url="/DmitryBaranovskiy/raphael/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
        <a href="/DmitryBaranovskiy/raphael/blob/master/raphael.min.js" class="header-search-scope no-underline">This repository</a>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        value=""
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
        <input type="hidden" class="js-site-search-type-field" name="type" >
    </label>
</form></div>


          <a class="text-bold site-header-link" href="/login?return_to=%2FDmitryBaranovskiy%2Fraphael%2Fblob%2Fmaster%2Fraphael.min.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
            <span class="text-gray">or</span>
            <a class="text-bold site-header-link" href="/join?source=header-repo" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      </div>
    </div>
  </div>
</header>


  </div>

  <div id="start-of-content" class="accessibility-aid"></div>

    <div id="js-flash-container">
</div>



  <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
        



    <div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
      <div class="container repohead-details-container">

        <ul class="pagehead-actions">
  <li>
      <a href="/login?return_to=%2FDmitryBaranovskiy%2Fraphael"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
    Watch
  </a>
  <a class="social-count" href="/DmitryBaranovskiy/raphael/watchers"
     aria-label="387 users are watching this repository">
    387
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2FDmitryBaranovskiy%2Fraphael"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
    Star
  </a>

    <a class="social-count js-social-count" href="/DmitryBaranovskiy/raphael/stargazers"
      aria-label="9102 users starred this repository">
      9,102
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2FDmitryBaranovskiy%2Fraphael"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
        Fork
      </a>

    <a href="/DmitryBaranovskiy/raphael/network" class="social-count"
       aria-label="1448 users forked this repository">
      1,448
    </a>
  </li>
</ul>

        <h1 class="public ">
  <svg aria-hidden="true" class="octicon octicon-repo" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 9H3V8h1v1zm0-3H3v1h1V6zm0-2H3v1h1V4zm0-2H3v1h1V2zm8-1v12c0 .55-.45 1-1 1H6v2l-1.5-1.5L3 16v-2H1c-.55 0-1-.45-1-1V1c0-.55.45-1 1-1h10c.55 0 1 .45 1 1zm-1 10H1v2h2v-1h3v1h5v-2zm0-10H2v9h9V1z"/></svg>
  <span class="author" itemprop="author"><a href="/DmitryBaranovskiy" class="url fn" rel="author">DmitryBaranovskiy</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/DmitryBaranovskiy/raphael" data-pjax="#js-repo-pjax-container">raphael</a></strong>

</h1>

      </div>
      <div class="container">
        
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/DmitryBaranovskiy/raphael" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /DmitryBaranovskiy/raphael" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/DmitryBaranovskiy/raphael/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /DmitryBaranovskiy/raphael/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="Counter">300</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/DmitryBaranovskiy/raphael/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /DmitryBaranovskiy/raphael/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="Counter">38</span>
      <meta itemprop="position" content="3">
</a>  </span>

    <a href="/DmitryBaranovskiy/raphael/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /DmitryBaranovskiy/raphael/projects">
      <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
      Projects
      <span class="Counter" >0</span>
</a>


    <div class="reponav-dropdown js-menu-container">
      <button type="button" class="btn-link reponav-item reponav-dropdown js-menu-target " data-no-toggle aria-expanded="false" aria-haspopup="true">
        Insights
        <svg aria-hidden="true" class="octicon octicon-triangle-down v-align-middle text-gray" height="11" version="1.1" viewBox="0 0 12 16" width="8"><path fill-rule="evenodd" d="M0 5l6 6 6-6z"/></svg>
      </button>
      <div class="dropdown-menu-content js-menu-content">
        <div class="dropdown-menu dropdown-menu-sw">
          <a class="dropdown-item" href="/DmitryBaranovskiy/raphael/pulse" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
            Pulse
          </a>
          <a class="dropdown-item" href="/DmitryBaranovskiy/raphael/graphs" data-skip-pjax>
            <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
            Graphs
          </a>
        </div>
      </div>
    </div>
</nav>

      </div>
    </div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    
          

<a href="/DmitryBaranovskiy/raphael/blob/fe8e591e1c86b5aeb4c252b33c08e647434504c5/raphael.min.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:e7d7b8a13833d15c81f9217b777be036 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class=" btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
      <i>Branch:</i>
      <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax>

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/0.7/raphael.min.js"
               data-name="0.7"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                0.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/0.8/raphael.min.js"
               data-name="0.8"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                0.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/1.0/raphael.min.js"
               data-name="1.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/2.0/raphael.min.js"
               data-name="2.0"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/cuttingedge/raphael.min.js"
               data-name="cuttingedge"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                cuttingedge
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/gh-pages/raphael.min.js"
               data-name="gh-pages"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                gh-pages
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/DmitryBaranovskiy/raphael/blob/master/raphael.min.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/DmitryBaranovskiy/raphael/blob/offsetAttrsDeprecated/raphael.min.js"
               data-name="offsetAttrsDeprecated"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                offsetAttrsDeprecated
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.7/raphael.min.js"
              data-name="v2.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.7">
                v2.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.6/raphael.min.js"
              data-name="v2.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.6">
                v2.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.5/raphael.min.js"
              data-name="v2.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.5">
                v2.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.4/raphael.min.js"
              data-name="v2.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.4">
                v2.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.3/raphael.min.js"
              data-name="v2.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.3">
                v2.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.2/raphael.min.js"
              data-name="v2.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.2">
                v2.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.1/raphael.min.js"
              data-name="v2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.1">
                v2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.2.0/raphael.min.js"
              data-name="v2.2.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.2.0">
                v2.2.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.1.4/raphael.min.js"
              data-name="v2.1.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.4">
                v2.1.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.1.3/raphael.min.js"
              data-name="v2.1.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.3">
                v2.1.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.1.2/raphael.min.js"
              data-name="v2.1.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.2">
                v2.1.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.1.1/raphael.min.js"
              data-name="v2.1.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.1">
                v2.1.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.1.0/raphael.min.js"
              data-name="v2.1.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.1.0">
                v2.1.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.0.2/raphael.min.js"
              data-name="v2.0.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.2">
                v2.0.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.0.1/raphael.min.js"
              data-name="v2.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.1">
                v2.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v2.0.0/raphael.min.js"
              data-name="v2.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v2.0.0">
                v2.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.7/raphael.min.js"
              data-name="v1.4.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.7">
                v1.4.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.6/raphael.min.js"
              data-name="v1.4.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.6">
                v1.4.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.5/raphael.min.js"
              data-name="v1.4.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.5">
                v1.4.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.4/raphael.min.js"
              data-name="v1.4.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.4">
                v1.4.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.3/raphael.min.js"
              data-name="v1.4.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.3">
                v1.4.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.2/raphael.min.js"
              data-name="v1.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.2">
                v1.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.1/raphael.min.js"
              data-name="v1.4.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.1">
                v1.4.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.4.0/raphael.min.js"
              data-name="v1.4.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.4.0">
                v1.4.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.3.2/raphael.min.js"
              data-name="v1.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.2">
                v1.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.3.0/raphael.min.js"
              data-name="v1.3.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.3.0">
                v1.3.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/v1.2.9/raphael.min.js"
              data-name="v1.2.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="v1.2.9">
                v1.2.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/DmitryBaranovskiy/raphael/tree/semver/raphael.min.js"
              data-name="semver"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="semver">
                semver
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/DmitryBaranovskiy/raphael/find/master"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/DmitryBaranovskiy/raphael"><span>raphael</span></a></span></span><span class="separator">/</span><strong class="final-path">raphael.min.js</strong>
  </div>
</div>



  <div class="commit-tease">
      <span class="float-right">
        <a class="commit-tease-sha" href="/DmitryBaranovskiy/raphael/commit/07f3dd1d3c03f88561e9e59fe72308374ac53ad8" data-pjax>
          07f3dd1
        </a>
        <relative-time datetime="2016-10-02T18:48:35Z">Oct 3, 2016</relative-time>
      </span>
      <div>
        <img alt="@tomasAlabes" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/699432?v=3&amp;s=40" width="20" />
        <a href="/tomasAlabes" class="user-mention" rel="contributor">tomasAlabes</a>
          <a href="/DmitryBaranovskiy/raphael/commit/07f3dd1d3c03f88561e9e59fe72308374ac53ad8" class="message" data-pjax="true" title="Using custom repo for eve as all other repos are outdated">Using custom repo for eve as all other repos are outdated</a>
      </div>

    <div class="commit-tease-contributors">
      <button type="button" class="btn-link muted-link contributors-toggle" data-facebox="#blob_contributors_box">
        <strong>2</strong>
         contributors
      </button>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="tomasAlabes" href="/DmitryBaranovskiy/raphael/commits/master/raphael.min.js?author=tomasAlabes"><img alt="@tomasAlabes" class="avatar" height="20" src="https://avatars1.githubusercontent.com/u/699432?v=3&amp;s=40" width="20" /> </a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="artcups" href="/DmitryBaranovskiy/raphael/commits/master/raphael.min.js?author=artcups"><img alt="@artcups" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/2920344?v=3&amp;s=40" width="20" /> </a>


    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@tomasAlabes" height="24" src="https://avatars3.githubusercontent.com/u/699432?v=3&amp;s=48" width="24" />
            <a href="/tomasAlabes">tomasAlabes</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="@artcups" height="24" src="https://avatars0.githubusercontent.com/u/2920344?v=3&amp;s=48" width="24" />
            <a href="/artcups">artcups</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/DmitryBaranovskiy/raphael/raw/master/raphael.min.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/DmitryBaranovskiy/raphael/blame/master/raphael.min.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item" data-hotkey="b">Blame</a>
      <a href="/DmitryBaranovskiy/raphael/commits/master/raphael.min.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>


        <button type="button" class="btn-octicon disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
        </button>
        <button type="button" class="btn-octicon btn-octicon-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
        </button>
  </div>

  <div class="file-info">
      3 lines (3 sloc)
      <span class="file-info-divider"></span>
    91.1 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line">!function t(e,r){&quot;object&quot;==typeof exports&amp;&amp;&quot;object&quot;==typeof module?module.exports=r():&quot;function&quot;==typeof define&amp;&amp;define.amd?define([],r):&quot;object&quot;==typeof exports?exports.Raphael=r():e.Raphael=r()}(this,function(){return function(t){function e(i){if(r[i])return r[i].exports;var n=r[i]={exports:{},id:i,loaded:!1};return t[i].call(n.exports,n,n.exports,e),n.loaded=!0,n.exports}var r={};return e.m=t,e.c=r,e.p=&quot;&quot;,e(0)}([function(t,e,r){var i,n;i=[r(1),r(3),r(4)],n=function(t){return t}.apply(e,i),!(void 0!==n&amp;&amp;(t.exports=n))},function(t,e,r){var i,n;i=[r(2)],n=function(t){function e(r){if(e.is(r,&quot;function&quot;))return w?r():t.on(&quot;raphael.DOMload&quot;,r);if(e.is(r,Q))return e._engine.create[z](e,r.splice(0,3+e.is(r[0],$))).add(r);var i=Array.prototype.slice.call(arguments,0);if(e.is(i[i.length-1],&quot;function&quot;)){var n=i.pop();return w?n.call(e._engine.create[z](e,i)):t.on(&quot;raphael.DOMload&quot;,function(){n.call(e._engine.create[z](e,i))})}return e._engine.create[z](e,arguments)}function r(t){if(&quot;function&quot;==typeof t||Object(t)!==t)return t;var e=new t.constructor;for(var i in t)t[A](i)&amp;&amp;(e[i]=r(t[i]));return e}function i(t,e){for(var r=0,i=t.length;r&lt;i;r++)if(t[r]===e)return t.push(t.splice(r,1)[0])}function n(t,e,r){function n(){var a=Array.prototype.slice.call(arguments,0),s=a.join(&quot;␀&quot;),o=n.cache=n.cache||{},l=n.count=n.count||[];return o[A](s)?(i(l,s),r?r(o[s]):o[s]):(l.length&gt;=1e3&amp;&amp;delete o[l.shift()],l.push(s),o[s]=t[z](e,a),r?r(o[s]):o[s])}return n}function a(){return this.hex}function s(t,e){for(var r=[],i=0,n=t.length;n-2*!e&gt;i;i+=2){var a=[{x:+t[i-2],y:+t[i-1]},{x:+t[i],y:+t[i+1]},{x:+t[i+2],y:+t[i+3]},{x:+t[i+4],y:+t[i+5]}];e?i?n-4==i?a[3]={x:+t[0],y:+t[1]}:n-2==i&amp;&amp;(a[2]={x:+t[0],y:+t[1]},a[3]={x:+t[2],y:+t[3]}):a[0]={x:+t[n-2],y:+t[n-1]}:n-4==i?a[3]=a[2]:i||(a[0]={x:+t[i],y:+t[i+1]}),r.push([&quot;C&quot;,(-a[0].x+6*a[1].x+a[2].x)/6,(-a[0].y+6*a[1].y+a[2].y)/6,(a[1].x+6*a[2].x-a[3].x)/6,(a[1].y+6*a[2].y-a[3].y)/6,a[2].x,a[2].y])}return r}function o(t,e,r,i,n){var a=-3*e+9*r-9*i+3*n,s=t*a+6*e-12*r+6*i;return t*s-3*e+3*r}function l(t,e,r,i,n,a,s,l,h){null==h&amp;&amp;(h=1),h=h&gt;1?1:h&lt;0?0:h;for(var u=h/2,c=12,f=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],p=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],d=0,g=0;g&lt;c;g++){var v=u*f[g]+u,x=o(v,t,r,n,s),y=o(v,e,i,a,l),m=x*x+y*y;d+=p[g]*Y.sqrt(m)}return u*d}function h(t,e,r,i,n,a,s,o,h){if(!(h&lt;0||l(t,e,r,i,n,a,s,o)&lt;h)){var u=1,c=u/2,f=u-c,p,d=.01;for(p=l(t,e,r,i,n,a,s,o,f);H(p-h)&gt;d;)c/=2,f+=(p&lt;h?1:-1)*c,p=l(t,e,r,i,n,a,s,o,f);return f}}function u(t,e,r,i,n,a,s,o){if(!(W(t,r)&lt;G(n,s)||G(t,r)&gt;W(n,s)||W(e,i)&lt;G(a,o)||G(e,i)&gt;W(a,o))){var l=(t*i-e*r)*(n-s)-(t-r)*(n*o-a*s),h=(t*i-e*r)*(a-o)-(e-i)*(n*o-a*s),u=(t-r)*(a-o)-(e-i)*(n-s);if(u){var c=l/u,f=h/u,p=+c.toFixed(2),d=+f.toFixed(2);if(!(p&lt;+G(t,r).toFixed(2)||p&gt;+W(t,r).toFixed(2)||p&lt;+G(n,s).toFixed(2)||p&gt;+W(n,s).toFixed(2)||d&lt;+G(e,i).toFixed(2)||d&gt;+W(e,i).toFixed(2)||d&lt;+G(a,o).toFixed(2)||d&gt;+W(a,o).toFixed(2)))return{x:c,y:f}}}}function c(t,e){return p(t,e)}function f(t,e){return p(t,e,1)}function p(t,r,i){var n=e.bezierBBox(t),a=e.bezierBBox(r);if(!e.isBBoxIntersect(n,a))return i?0:[];for(var s=l.apply(0,t),o=l.apply(0,r),h=W(~~(s/5),1),c=W(~~(o/5),1),f=[],p=[],d={},g=i?0:[],v=0;v&lt;h+1;v++){var x=e.findDotsAtSegment.apply(e,t.concat(v/h));f.push({x:x.x,y:x.y,t:v/h})}for(v=0;v&lt;c+1;v++)x=e.findDotsAtSegment.apply(e,r.concat(v/c)),p.push({x:x.x,y:x.y,t:v/c});for(v=0;v&lt;h;v++)for(var y=0;y&lt;c;y++){var m=f[v],b=f[v+1],_=p[y],w=p[y+1],k=H(b.x-m.x)&lt;.001?&quot;y&quot;:&quot;x&quot;,B=H(w.x-_.x)&lt;.001?&quot;y&quot;:&quot;x&quot;,C=u(m.x,m.y,b.x,b.y,_.x,_.y,w.x,w.y);if(C){if(d[C.x.toFixed(4)]==C.y.toFixed(4))continue;d[C.x.toFixed(4)]=C.y.toFixed(4);var S=m.t+H((C[k]-m[k])/(b[k]-m[k]))*(b.t-m.t),A=_.t+H((C[B]-_[B])/(w[B]-_[B]))*(w.t-_.t);S&gt;=0&amp;&amp;S&lt;=1.001&amp;&amp;A&gt;=0&amp;&amp;A&lt;=1.001&amp;&amp;(i?g++:g.push({x:C.x,y:C.y,t1:G(S,1),t2:G(A,1)}))}}return g}function d(t,r,i){t=e._path2curve(t),r=e._path2curve(r);for(var n,a,s,o,l,h,u,c,f,d,g=i?0:[],v=0,x=t.length;v&lt;x;v++){var y=t[v];if(&quot;M&quot;==y[0])n=l=y[1],a=h=y[2];else{&quot;C&quot;==y[0]?(f=[n,a].concat(y.slice(1)),n=f[6],a=f[7]):(f=[n,a,n,a,l,h,l,h],n=l,a=h);for(var m=0,b=r.length;m&lt;b;m++){var _=r[m];if(&quot;M&quot;==_[0])s=u=_[1],o=c=_[2];else{&quot;C&quot;==_[0]?(d=[s,o].concat(_.slice(1)),s=d[6],o=d[7]):(d=[s,o,s,o,u,c,u,c],s=u,o=c);var w=p(f,d,i);if(i)g+=w;else{for(var k=0,B=w.length;k&lt;B;k++)w[k].segment1=v,w[k].segment2=m,w[k].bez1=f,w[k].bez2=d;g=g.concat(w)}}}}}return g}function g(t,e,r,i,n,a){null!=t?(this.a=+t,this.b=+e,this.c=+r,this.d=+i,this.e=+n,this.f=+a):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function v(){return this.x+j+this.y}function x(){return this.x+j+this.y+j+this.width+&quot; × &quot;+this.height}function y(t,e,r,i,n,a){function s(t){return((c*t+u)*t+h)*t}function o(t,e){var r=l(t,e);return((d*r+p)*r+f)*r}function l(t,e){var r,i,n,a,o,l;for(n=t,l=0;l&lt;8;l++){if(a=s(n)-t,H(a)&lt;e)return n;if(o=(3*c*n+2*u)*n+h,H(o)&lt;1e-6)break;n-=a/o}if(r=0,i=1,n=t,n&lt;r)return r;if(n&gt;i)return i;for(;r&lt;i;){if(a=s(n),H(a-t)&lt;e)return n;t&gt;a?r=n:i=n,n=(i-r)/2+r}return n}var h=3*e,u=3*(i-e)-h,c=1-h-u,f=3*r,p=3*(n-r)-f,d=1-f-p;return o(t,1/(200*a))}function m(t,e){var r=[],i={};if(this.ms=e,this.times=1,t){for(var n in t)t[A](n)&amp;&amp;(i[ht(n)]=t[n],r.push(ht(n)));r.sort(Bt)}this.anim=i,this.top=r[r.length-1],this.percents=r}function b(r,i,n,a,s,o){n=ht(n);var l,h,u,c=[],f,p,d,v=r.ms,x={},m={},b={};if(a)for(w=0,B=Ee.length;w&lt;B;w++){var _=Ee[w];if(_.el.id==i.id&amp;&amp;_.anim==r){_.percent!=n?(Ee.splice(w,1),u=1):h=_,i.attr(_.totalOrigin);break}}else a=+m;for(var w=0,B=r.percents.length;w&lt;B;w++){if(r.percents[w]==n||r.percents[w]&gt;a*r.top){n=r.percents[w],p=r.percents[w-1]||0,v=v/r.top*(n-p),f=r.percents[w+1],l=r.anim[n];break}a&amp;&amp;i.attr(r.anim[r.percents[w]])}if(l){if(h)h.initstatus=a,h.start=new Date-h.ms*a;else{for(var C in l)if(l[A](C)&amp;&amp;(pt[A](C)||i.paper.customAttributes[A](C)))switch(x[C]=i.attr(C),null==x[C]&amp;&amp;(x[C]=ft[C]),m[C]=l[C],pt[C]){case $:b[C]=(m[C]-x[C])/v;break;case&quot;colour&quot;:x[C]=e.getRGB(x[C]);var S=e.getRGB(m[C]);b[C]={r:(S.r-x[C].r)/v,g:(S.g-x[C].g)/v,b:(S.b-x[C].b)/v};break;case&quot;path&quot;:var T=Qt(x[C],m[C]),E=T[1];for(x[C]=T[0],b[C]=[],w=0,B=x[C].length;w&lt;B;w++){b[C][w]=[0];for(var M=1,N=x[C][w].length;M&lt;N;M++)b[C][w][M]=(E[w][M]-x[C][w][M])/v}break;case&quot;transform&quot;:var L=i._,z=le(L[C],m[C]);if(z)for(x[C]=z.from,m[C]=z.to,b[C]=[],b[C].real=!0,w=0,B=x[C].length;w&lt;B;w++)for(b[C][w]=[x[C][w][0]],M=1,N=x[C][w].length;M&lt;N;M++)b[C][w][M]=(m[C][w][M]-x[C][w][M])/v;else{var F=i.matrix||new g,R={_:{transform:L.transform},getBBox:function(){return i.getBBox(1)}};x[C]=[F.a,F.b,F.c,F.d,F.e,F.f],se(R,m[C]),m[C]=R._.transform,b[C]=[(R.matrix.a-F.a)/v,(R.matrix.b-F.b)/v,(R.matrix.c-F.c)/v,(R.matrix.d-F.d)/v,(R.matrix.e-F.e)/v,(R.matrix.f-F.f)/v]}break;case&quot;csv&quot;:var j=I(l[C])[q](k),D=I(x[C])[q](k);if(&quot;clip-rect&quot;==C)for(x[C]=D,b[C]=[],w=D.length;w--;)b[C][w]=(j[w]-x[C][w])/v;m[C]=j;break;default:for(j=[][P](l[C]),D=[][P](x[C]),b[C]=[],w=i.paper.customAttributes[C].length;w--;)b[C][w]=((j[w]||0)-(D[w]||0))/v}var V=l.easing,O=e.easing_formulas[V];if(!O)if(O=I(V).match(st),O&amp;&amp;5==O.length){var Y=O;O=function(t){return y(t,+Y[1],+Y[2],+Y[3],+Y[4],v)}}else O=St;if(d=l.start||r.start||+new Date,_={anim:r,percent:n,timestamp:d,start:d+(r.del||0),status:0,initstatus:a||0,stop:!1,ms:v,easing:O,from:x,diff:b,to:m,el:i,callback:l.callback,prev:p,next:f,repeat:o||r.times,origin:i.attr(),totalOrigin:s},Ee.push(_),a&amp;&amp;!h&amp;&amp;!u&amp;&amp;(_.stop=!0,_.start=new Date-v*a,1==Ee.length))return Ne();u&amp;&amp;(_.start=new Date-_.ms*a),1==Ee.length&amp;&amp;Me(Ne)}t(&quot;raphael.anim.start.&quot;+i.id,i,r)}}function _(t){for(var e=0;e&lt;Ee.length;e++)Ee[e].el.paper==t&amp;&amp;Ee.splice(e--,1)}e.version=&quot;2.2.0&quot;,e.eve=t;var w,k=/[, ]+/,B={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},C=/\{(\d+)\}/g,S=&quot;prototype&quot;,A=&quot;hasOwnProperty&quot;,T={doc:document,win:window},E={was:Object.prototype[A].call(T.win,&quot;Raphael&quot;),is:T.win.Raphael},M=function(){this.ca=this.customAttributes={}},N,L=&quot;appendChild&quot;,z=&quot;apply&quot;,P=&quot;concat&quot;,F=&quot;ontouchstart&quot;in T.win||T.win.DocumentTouch&amp;&amp;T.doc instanceof DocumentTouch,R=&quot;&quot;,j=&quot; &quot;,I=String,q=&quot;split&quot;,D=&quot;click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel&quot;[q](j),V={mousedown:&quot;touchstart&quot;,mousemove:&quot;touchmove&quot;,mouseup:&quot;touchend&quot;},O=I.prototype.toLowerCase,Y=Math,W=Y.max,G=Y.min,H=Y.abs,X=Y.pow,U=Y.PI,$=&quot;number&quot;,Z=&quot;string&quot;,Q=&quot;array&quot;,J=&quot;toString&quot;,K=&quot;fill&quot;,tt=Object.prototype.toString,et={},rt=&quot;push&quot;,it=e._ISURL=/^url\([&#39;&quot;]?(.+?)[&#39;&quot;]?\)$/i,nt=/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i,at={NaN:1,Infinity:1,&quot;-Infinity&quot;:1},st=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,ot=Y.round,lt=&quot;setAttribute&quot;,ht=parseFloat,ut=parseInt,ct=I.prototype.toUpperCase,ft=e._availableAttrs={&quot;arrow-end&quot;:&quot;none&quot;,&quot;arrow-start&quot;:&quot;none&quot;,blur:0,&quot;clip-rect&quot;:&quot;0 0 1e9 1e9&quot;,cursor:&quot;default&quot;,cx:0,cy:0,fill:&quot;#fff&quot;,&quot;fill-opacity&quot;:1,font:&#39;10px &quot;Arial&quot;&#39;,&quot;font-family&quot;:&#39;&quot;Arial&quot;&#39;,&quot;font-size&quot;:&quot;10&quot;,&quot;font-style&quot;:&quot;normal&quot;,&quot;font-weight&quot;:400,gradient:0,height:0,href:&quot;http://raphaeljs.com/&quot;,&quot;letter-spacing&quot;:0,opacity:1,path:&quot;M0,0&quot;,r:0,rx:0,ry:0,src:&quot;&quot;,stroke:&quot;#000&quot;,&quot;stroke-dasharray&quot;:&quot;&quot;,&quot;stroke-linecap&quot;:&quot;butt&quot;,&quot;stroke-linejoin&quot;:&quot;butt&quot;,&quot;stroke-miterlimit&quot;:0,&quot;stroke-opacity&quot;:1,&quot;stroke-width&quot;:1,target:&quot;_blank&quot;,&quot;text-anchor&quot;:&quot;middle&quot;,title:&quot;Raphael&quot;,transform:&quot;&quot;,width:0,x:0,y:0,&quot;class&quot;:&quot;&quot;},pt=e._availableAnimAttrs={blur:$,&quot;clip-rect&quot;:&quot;csv&quot;,cx:$,cy:$,fill:&quot;colour&quot;,&quot;fill-opacity&quot;:$,&quot;font-size&quot;:$,height:$,opacity:$,path:&quot;path&quot;,r:$,rx:$,ry:$,stroke:&quot;colour&quot;,&quot;stroke-opacity&quot;:$,&quot;stroke-width&quot;:$,transform:&quot;transform&quot;,width:$,x:$,y:$},dt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]/g,gt=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,vt={hs:1,rg:1},xt=/,?([achlmqrstvxz]),?/gi,yt=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,mt=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,bt=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,_t=e._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,wt={},kt=function(t,e){return t.key-e.key},Bt=function(t,e){return ht(t)-ht(e)},Ct=function(){},St=function(t){return t},At=e._rectPath=function(t,e,r,i,n){return n?[[&quot;M&quot;,t+n,e],[&quot;l&quot;,r-2*n,0],[&quot;a&quot;,n,n,0,0,1,n,n],[&quot;l&quot;,0,i-2*n],[&quot;a&quot;,n,n,0,0,1,-n,n],[&quot;l&quot;,2*n-r,0],[&quot;a&quot;,n,n,0,0,1,-n,-n],[&quot;l&quot;,0,2*n-i],[&quot;a&quot;,n,n,0,0,1,n,-n],[&quot;z&quot;]]:[[&quot;M&quot;,t,e],[&quot;l&quot;,r,0],[&quot;l&quot;,0,i],[&quot;l&quot;,-r,0],[&quot;z&quot;]]},Tt=function(t,e,r,i){return null==i&amp;&amp;(i=r),[[&quot;M&quot;,t,e],[&quot;m&quot;,0,-i],[&quot;a&quot;,r,i,0,1,1,0,2*i],[&quot;a&quot;,r,i,0,1,1,0,-2*i],[&quot;z&quot;]]},Et=e._getPath={path:function(t){return t.attr(&quot;path&quot;)},circle:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.r)},ellipse:function(t){var e=t.attrs;return Tt(e.cx,e.cy,e.rx,e.ry)},rect:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height,e.r)},image:function(t){var e=t.attrs;return At(e.x,e.y,e.width,e.height)},text:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)},set:function(t){var e=t._getBBox();return At(e.x,e.y,e.width,e.height)}},Mt=e.mapPath=function(t,e){if(!e)return t;var r,i,n,a,s,o,l;for(t=Qt(t),n=0,s=t.length;n&lt;s;n++)for(l=t[n],a=1,o=l.length;a&lt;o;a+=2)r=e.x(l[a],l[a+1]),i=e.y(l[a],l[a+1]),l[a]=r,l[a+1]=i;return t};if(e._g=T,e.type=T.win.SVGAngle||T.doc.implementation.hasFeature(&quot;http://www.w3.org/TR/SVG11/feature#BasicStructure&quot;,&quot;1.1&quot;)?&quot;SVG&quot;:&quot;VML&quot;,&quot;VML&quot;==e.type){var Nt=T.doc.createElement(&quot;div&quot;),Lt;if(Nt.innerHTML=&#39;&lt;v:shape adj=&quot;1&quot;/&gt;&#39;,Lt=Nt.firstChild,Lt.style.behavior=&quot;url(#default#VML)&quot;,!Lt||&quot;object&quot;!=typeof Lt.adj)return e.type=R;Nt=null}e.svg=!(e.vml=&quot;VML&quot;==e.type),e._Paper=M,e.fn=N=M.prototype=e.prototype,e._id=0,e.is=function(t,e){return e=O.call(e),&quot;finite&quot;==e?!at[A](+t):&quot;array&quot;==e?t instanceof Array:&quot;null&quot;==e&amp;&amp;null===t||e==typeof t&amp;&amp;null!==t||&quot;object&quot;==e&amp;&amp;t===Object(t)||&quot;array&quot;==e&amp;&amp;Array.isArray&amp;&amp;Array.isArray(t)||tt.call(t).slice(8,-1).toLowerCase()==e},e.angle=function(t,r,i,n,a,s){if(null==a){var o=t-i,l=r-n;return o||l?(180+180*Y.atan2(-l,-o)/U+360)%360:0}return e.angle(t,r,a,s)-e.angle(i,n,a,s)},e.rad=function(t){return t%360*U/180},e.deg=function(t){return Math.round(180*t/U%360*1e3)/1e3},e.snapTo=function(t,r,i){if(i=e.is(i,&quot;finite&quot;)?i:10,e.is(t,Q)){for(var n=t.length;n--;)if(H(t[n]-r)&lt;=i)return t[n]}else{t=+t;var a=r%t;if(a&lt;i)return r-a;if(a&gt;t-i)return r-a+t}return r};var zt=e.createUUID=function(t,e){return function(){return&quot;xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx&quot;.replace(t,e).toUpperCase()}}(/[xy]/g,function(t){var e=16*Y.random()|0,r=&quot;x&quot;==t?e:3&amp;e|8;return r.toString(16)});e.setWindow=function(r){t(&quot;raphael.setWindow&quot;,e,T.win,r),T.win=r,T.doc=T.win.document,e._engine.initWin&amp;&amp;e._engine.initWin(T.win)};var Pt=function(t){if(e.vml){var r=/^\s+|\s+$/g,i;try{var a=new ActiveXObject(&quot;htmlfile&quot;);a.write(&quot;&lt;body&gt;&quot;),a.close(),i=a.body}catch(s){i=createPopup().document.body}var o=i.createTextRange();Pt=n(function(t){try{i.style.color=I(t).replace(r,R);var e=o.queryCommandValue(&quot;ForeColor&quot;);return e=(255&amp;e)&lt;&lt;16|65280&amp;e|(16711680&amp;e)&gt;&gt;&gt;16,&quot;#&quot;+(&quot;000000&quot;+e.toString(16)).slice(-6)}catch(n){return&quot;none&quot;}})}else{var l=T.doc.createElement(&quot;i&quot;);l.title=&quot;Raphaël Colour Picker&quot;,l.style.display=&quot;none&quot;,T.doc.body.appendChild(l),Pt=n(function(t){return l.style.color=t,T.doc.defaultView.getComputedStyle(l,R).getPropertyValue(&quot;color&quot;)})}return Pt(t)},Ft=function(){return&quot;hsb(&quot;+[this.h,this.s,this.b]+&quot;)&quot;},Rt=function(){return&quot;hsl(&quot;+[this.h,this.s,this.l]+&quot;)&quot;},jt=function(){return this.hex},It=function(t,r,i){if(null==r&amp;&amp;e.is(t,&quot;object&quot;)&amp;&amp;&quot;r&quot;in t&amp;&amp;&quot;g&quot;in t&amp;&amp;&quot;b&quot;in t&amp;&amp;(i=t.b,r=t.g,t=t.r),null==r&amp;&amp;e.is(t,Z)){var n=e.getRGB(t);t=n.r,r=n.g,i=n.b}return(t&gt;1||r&gt;1||i&gt;1)&amp;&amp;(t/=255,r/=255,i/=255),[t,r,i]},qt=function(t,r,i,n){t*=255,r*=255,i*=255;var a={r:t,g:r,b:i,hex:e.rgb(t,r,i),toString:jt};return e.is(n,&quot;finite&quot;)&amp;&amp;(a.opacity=n),a};e.color=function(t){var r;return e.is(t,&quot;object&quot;)&amp;&amp;&quot;h&quot;in t&amp;&amp;&quot;s&quot;in t&amp;&amp;&quot;b&quot;in t?(r=e.hsb2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):e.is(t,&quot;object&quot;)&amp;&amp;&quot;h&quot;in t&amp;&amp;&quot;s&quot;in t&amp;&amp;&quot;l&quot;in t?(r=e.hsl2rgb(t),t.r=r.r,t.g=r.g,t.b=r.b,t.hex=r.hex):(e.is(t,&quot;string&quot;)&amp;&amp;(t=e.getRGB(t)),e.is(t,&quot;object&quot;)&amp;&amp;&quot;r&quot;in t&amp;&amp;&quot;g&quot;in t&amp;&amp;&quot;b&quot;in t?(r=e.rgb2hsl(t),t.h=r.h,t.s=r.s,t.l=r.l,r=e.rgb2hsb(t),t.v=r.b):(t={hex:&quot;none&quot;},t.r=t.g=t.b=t.h=t.s=t.v=t.l=-1)),t.toString=jt,t},e.hsb2rgb=function(t,e,r,i){this.is(t,&quot;object&quot;)&amp;&amp;&quot;h&quot;in t&amp;&amp;&quot;s&quot;in t&amp;&amp;&quot;b&quot;in t&amp;&amp;(r=t.b,e=t.s,i=t.o,t=t.h),t*=360;var n,a,s,o,l;return t=t%360/60,l=r*e,o=l*(1-H(t%2-1)),n=a=s=r-l,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.hsl2rgb=function(t,e,r,i){this.is(t,&quot;object&quot;)&amp;&amp;&quot;h&quot;in t&amp;&amp;&quot;s&quot;in t&amp;&amp;&quot;l&quot;in t&amp;&amp;(r=t.l,e=t.s,t=t.h),(t&gt;1||e&gt;1||r&gt;1)&amp;&amp;(t/=360,e/=100,r/=100),t*=360;var n,a,s,o,l;return t=t%360/60,l=2*e*(r&lt;.5?r:1-r),o=l*(1-H(t%2-1)),n=a=s=r-l/2,t=~~t,n+=[l,o,0,0,o,l][t],a+=[o,l,l,o,0,0][t],s+=[0,0,o,l,l,o][t],qt(n,a,s,i)},e.rgb2hsb=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s;return a=W(t,e,r),s=a-G(t,e,r),i=0==s?null:a==t?(e-r)/s:a==e?(r-t)/s+2:(t-e)/s+4,i=(i+360)%6*60/360,n=0==s?0:s/a,{h:i,s:n,b:a,toString:Ft}},e.rgb2hsl=function(t,e,r){r=It(t,e,r),t=r[0],e=r[1],r=r[2];var i,n,a,s,o,l;return s=W(t,e,r),o=G(t,e,r),l=s-o,i=0==l?null:s==t?(e-r)/l:s==e?(r-t)/l+2:(t-e)/l+4,i=(i+360)%6*60/360,a=(s+o)/2,n=0==l?0:a&lt;.5?l/(2*a):l/(2-2*a),{h:i,s:n,l:a,toString:Rt}},e._path2string=function(){return this.join(&quot;,&quot;).replace(xt,&quot;$1&quot;)};var Dt=e._preload=function(t,e){var r=T.doc.createElement(&quot;img&quot;);r.style.cssText=&quot;position:absolute;left:-9999em;top:-9999em&quot;,r.onload=function(){e.call(this),this.onload=null,T.doc.body.removeChild(this)},r.onerror=function(){T.doc.body.removeChild(this)},T.doc.body.appendChild(r),r.src=t};e.getRGB=n(function(t){if(!t||(t=I(t)).indexOf(&quot;-&quot;)+1)return{r:-1,g:-1,b:-1,hex:&quot;none&quot;,error:1,toString:a};if(&quot;none&quot;==t)return{r:-1,g:-1,b:-1,hex:&quot;none&quot;,toString:a};!(vt[A](t.toLowerCase().substring(0,2))||&quot;#&quot;==t.charAt())&amp;&amp;(t=Pt(t));var r,i,n,s,o,l,h,u=t.match(nt);return u?(u[2]&amp;&amp;(s=ut(u[2].substring(5),16),n=ut(u[2].substring(3,5),16),i=ut(u[2].substring(1,3),16)),u[3]&amp;&amp;(s=ut((l=u[3].charAt(3))+l,16),n=ut((l=u[3].charAt(2))+l,16),i=ut((l=u[3].charAt(1))+l,16)),u[4]&amp;&amp;(h=u[4][q](gt),i=ht(h[0]),&quot;%&quot;==h[0].slice(-1)&amp;&amp;(i*=2.55),n=ht(h[1]),&quot;%&quot;==h[1].slice(-1)&amp;&amp;(n*=2.55),s=ht(h[2]),&quot;%&quot;==h[2].slice(-1)&amp;&amp;(s*=2.55),&quot;rgba&quot;==u[1].toLowerCase().slice(0,4)&amp;&amp;(o=ht(h[3])),h[3]&amp;&amp;&quot;%&quot;==h[3].slice(-1)&amp;&amp;(o/=100)),u[5]?(h=u[5][q](gt),i=ht(h[0]),&quot;%&quot;==h[0].slice(-1)&amp;&amp;(i*=2.55),n=ht(h[1]),&quot;%&quot;==h[1].slice(-1)&amp;&amp;(n*=2.55),s=ht(h[2]),&quot;%&quot;==h[2].slice(-1)&amp;&amp;(s*=2.55),(&quot;deg&quot;==h[0].slice(-3)||&quot;°&quot;==h[0].slice(-1))&amp;&amp;(i/=360),&quot;hsba&quot;==u[1].toLowerCase().slice(0,4)&amp;&amp;(o=ht(h[3])),h[3]&amp;&amp;&quot;%&quot;==h[3].slice(-1)&amp;&amp;(o/=100),e.hsb2rgb(i,n,s,o)):u[6]?(h=u[6][q](gt),i=ht(h[0]),&quot;%&quot;==h[0].slice(-1)&amp;&amp;(i*=2.55),n=ht(h[1]),&quot;%&quot;==h[1].slice(-1)&amp;&amp;(n*=2.55),s=ht(h[2]),&quot;%&quot;==h[2].slice(-1)&amp;&amp;(s*=2.55),(&quot;deg&quot;==h[0].slice(-3)||&quot;°&quot;==h[0].slice(-1))&amp;&amp;(i/=360),&quot;hsla&quot;==u[1].toLowerCase().slice(0,4)&amp;&amp;(o=ht(h[3])),h[3]&amp;&amp;&quot;%&quot;==h[3].slice(-1)&amp;&amp;(o/=100),e.hsl2rgb(i,n,s,o)):(u={r:i,g:n,b:s,toString:a},u.hex=&quot;#&quot;+(16777216|s|n&lt;&lt;8|i&lt;&lt;16).toString(16).slice(1),e.is(o,&quot;finite&quot;)&amp;&amp;(u.opacity=o),u)):{r:-1,g:-1,b:-1,hex:&quot;none&quot;,error:1,toString:a}},e),e.hsb=n(function(t,r,i){return e.hsb2rgb(t,r,i).hex}),e.hsl=n(function(t,r,i){return e.hsl2rgb(t,r,i).hex}),e.rgb=n(function(t,e,r){function i(t){return t+.5|0}return&quot;#&quot;+(16777216|i(r)|i(e)&lt;&lt;8|i(t)&lt;&lt;16).toString(16).slice(1)}),e.getColor=function(t){var e=this.getColor.start=this.getColor.start||{h:0,s:1,b:t||.75},r=this.hsb2rgb(e.h,e.s,e.b);return e.h+=.075,e.h&gt;1&amp;&amp;(e.h=0,e.s-=.2,e.s&lt;=0&amp;&amp;(this.getColor.start={h:0,s:1,b:e.b})),r.hex},e.getColor.reset=function(){delete this.start},e.parsePathString=function(t){if(!t)return null;var r=Vt(t);if(r.arr)return Yt(r.arr);var i={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},n=[];return e.is(t,Q)&amp;&amp;e.is(t[0],Q)&amp;&amp;(n=Yt(t)),n.length||I(t).replace(yt,function(t,e,r){var a=[],s=e.toLowerCase();if(r.replace(bt,function(t,e){e&amp;&amp;a.push(+e)}),&quot;m&quot;==s&amp;&amp;a.length&gt;2&amp;&amp;(n.push([e][P](a.splice(0,2))),s=&quot;l&quot;,e=&quot;m&quot;==e?&quot;l&quot;:&quot;L&quot;),&quot;r&quot;==s)n.push([e][P](a));else for(;a.length&gt;=i[s]&amp;&amp;(n.push([e][P](a.splice(0,i[s]))),i[s]););}),n.toString=e._path2string,r.arr=Yt(n),n},e.parseTransformString=n(function(t){if(!t)return null;var r={r:3,s:4,t:2,m:6},i=[];return e.is(t,Q)&amp;&amp;e.is(t[0],Q)&amp;&amp;(i=Yt(t)),i.length||I(t).replace(mt,function(t,e,r){var n=[],a=O.call(e);r.replace(bt,function(t,e){e&amp;&amp;n.push(+e)}),i.push([e][P](n))}),i.toString=e._path2string,i});var Vt=function(t){var e=Vt.ps=Vt.ps||{};return e[t]?e[t].sleep=100:e[t]={sleep:100},setTimeout(function(){for(var r in e)e[A](r)&amp;&amp;r!=t&amp;&amp;(e[r].sleep--,!e[r].sleep&amp;&amp;delete e[r])}),e[t]};e.findDotsAtSegment=function(t,e,r,i,n,a,s,o,l){var h=1-l,u=X(h,3),c=X(h,2),f=l*l,p=f*l,d=u*t+3*c*l*r+3*h*l*l*n+p*s,g=u*e+3*c*l*i+3*h*l*l*a+p*o,v=t+2*l*(r-t)+f*(n-2*r+t),x=e+2*l*(i-e)+f*(a-2*i+e),y=r+2*l*(n-r)+f*(s-2*n+r),m=i+2*l*(a-i)+f*(o-2*a+i),b=h*t+l*r,_=h*e+l*i,w=h*n+l*s,k=h*a+l*o,B=90-180*Y.atan2(v-y,x-m)/U;return(v&gt;y||x&lt;m)&amp;&amp;(B+=180),{x:d,y:g,m:{x:v,y:x},n:{x:y,y:m},start:{x:b,y:_},end:{x:w,y:k},alpha:B}},e.bezierBBox=function(t,r,i,n,a,s,o,l){e.is(t,&quot;array&quot;)||(t=[t,r,i,n,a,s,o,l]);var h=Zt.apply(null,t);return{x:h.min.x,y:h.min.y,x2:h.max.x,y2:h.max.y,width:h.max.x-h.min.x,height:h.max.y-h.min.y}},e.isPointInsideBBox=function(t,e,r){return e&gt;=t.x&amp;&amp;e&lt;=t.x2&amp;&amp;r&gt;=t.y&amp;&amp;r&lt;=t.y2},e.isBBoxIntersect=function(t,r){var i=e.isPointInsideBBox;return i(r,t.x,t.y)||i(r,t.x2,t.y)||i(r,t.x,t.y2)||i(r,t.x2,t.y2)||i(t,r.x,r.y)||i(t,r.x2,r.y)||i(t,r.x,r.y2)||i(t,r.x2,r.y2)||(t.x&lt;r.x2&amp;&amp;t.x&gt;r.x||r.x&lt;t.x2&amp;&amp;r.x&gt;t.x)&amp;&amp;(t.y&lt;r.y2&amp;&amp;t.y&gt;r.y||r.y&lt;t.y2&amp;&amp;r.y&gt;t.y)},e.pathIntersection=function(t,e){return d(t,e)},e.pathIntersectionNumber=function(t,e){return d(t,e,1)},e.isPointInsidePath=function(t,r,i){var n=e.pathBBox(t);return e.isPointInsideBBox(n,r,i)&amp;&amp;d(t,[[&quot;M&quot;,r,i],[&quot;H&quot;,n.x2+10]],1)%2==1},e._removedFactory=function(e){return function(){t(&quot;raphael.log&quot;,null,&quot;Raphaël: you are calling to method “&quot;+e+&quot;” of removed object&quot;,e)}};var Ot=e.pathBBox=function(t){var e=Vt(t);if(e.bbox)return r(e.bbox);if(!t)return{x:0,y:0,width:0,height:0,x2:0,y2:0};t=Qt(t);for(var i=0,n=0,a=[],s=[],o,l=0,h=t.length;l&lt;h;l++)if(o=t[l],&quot;M&quot;==o[0])i=o[1],n=o[2],a.push(i),s.push(n);else{var u=Zt(i,n,o[1],o[2],o[3],o[4],o[5],o[6]);a=a[P](u.min.x,u.max.x),s=s[P](u.min.y,u.max.y),i=o[5],n=o[6]}var c=G[z](0,a),f=G[z](0,s),p=W[z](0,a),d=W[z](0,s),g=p-c,v=d-f,x={x:c,y:f,x2:p,y2:d,width:g,height:v,cx:c+g/2,cy:f+v/2};return e.bbox=r(x),x},Yt=function(t){var i=r(t);return i.toString=e._path2string,i},Wt=e._pathToRelative=function(t){var r=Vt(t);if(r.rel)return Yt(r.rel);e.is(t,Q)&amp;&amp;e.is(t&amp;&amp;t[0],Q)||(t=e.parsePathString(t));var i=[],n=0,a=0,s=0,o=0,l=0;&quot;M&quot;==t[0][0]&amp;&amp;(n=t[0][1],a=t[0][2],s=n,o=a,l++,i.push([&quot;M&quot;,n,a]));for(var h=l,u=t.length;h&lt;u;h++){var c=i[h]=[],f=t[h];if(f[0]!=O.call(f[0]))switch(c[0]=O.call(f[0]),c[0]){case&quot;a&quot;:c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]-n).toFixed(3),c[7]=+(f[7]-a).toFixed(3);break;case&quot;v&quot;:c[1]=+(f[1]-a).toFixed(3);break;case&quot;m&quot;:s=f[1],o=f[2];default:for(var p=1,d=f.length;p&lt;d;p++)c[p]=+(f[p]-(p%2?n:a)).toFixed(3)}else{c=i[h]=[],&quot;m&quot;==f[0]&amp;&amp;(s=f[1]+n,o=f[2]+a);for(var g=0,v=f.length;g&lt;v;g++)i[h][g]=f[g]}var x=i[h].length;switch(i[h][0]){case&quot;z&quot;:n=s,a=o;break;case&quot;h&quot;:n+=+i[h][x-1];break;case&quot;v&quot;:a+=+i[h][x-1];break;default:n+=+i[h][x-2],a+=+i[h][x-1]}}return i.toString=e._path2string,r.rel=Yt(i),i},Gt=e._pathToAbsolute=function(t){var r=Vt(t);if(r.abs)return Yt(r.abs);if(e.is(t,Q)&amp;&amp;e.is(t&amp;&amp;t[0],Q)||(t=e.parsePathString(t)),!t||!t.length)return[[&quot;M&quot;,0,0]];var i=[],n=0,a=0,o=0,l=0,h=0;&quot;M&quot;==t[0][0]&amp;&amp;(n=+t[0][1],a=+t[0][2],o=n,l=a,h++,i[0]=[&quot;M&quot;,n,a]);for(var u=3==t.length&amp;&amp;&quot;M&quot;==t[0][0]&amp;&amp;&quot;R&quot;==t[1][0].toUpperCase()&amp;&amp;&quot;Z&quot;==t[2][0].toUpperCase(),c,f,p=h,d=t.length;p&lt;d;p++){if(i.push(c=[]),f=t[p],f[0]!=ct.call(f[0]))switch(c[0]=ct.call(f[0]),c[0]){case&quot;A&quot;:c[1]=f[1],c[2]=f[2],c[3]=f[3],c[4]=f[4],c[5]=f[5],c[6]=+(f[6]+n),c[7]=+(f[7]+a);break;case&quot;V&quot;:c[1]=+f[1]+a;break;case&quot;H&quot;:c[1]=+f[1]+n;break;case&quot;R&quot;:for(var g=[n,a][P](f.slice(1)),v=2,x=g.length;v&lt;x;v++)g[v]=+g[v]+n,g[++v]=+g[v]+a;i.pop(),i=i[P](s(g,u));break;case&quot;M&quot;:o=+f[1]+n,l=+f[2]+a;default:for(v=1,x=f.length;v&lt;x;v++)c[v]=+f[v]+(v%2?n:a)}else if(&quot;R&quot;==f[0])g=[n,a][P](f.slice(1)),i.pop(),i=i[P](s(g,u)),c=[&quot;R&quot;][P](f.slice(-2));else for(var y=0,m=f.length;y&lt;m;y++)c[y]=f[y];switch(c[0]){case&quot;Z&quot;:n=o,a=l;break;case&quot;H&quot;:n=c[1];break;case&quot;V&quot;:a=c[1];break;case&quot;M&quot;:o=c[c.length-2],l=c[c.length-1];default:n=c[c.length-2],a=c[c.length-1]}}return i.toString=e._path2string,r.abs=Yt(i),i},Ht=function(t,e,r,i){return[t,e,r,i,r,i]},Xt=function(t,e,r,i,n,a){var s=1/3,o=2/3;return[s*t+o*r,s*e+o*i,s*n+o*r,s*a+o*i,n,a]},Ut=function(t,e,r,i,a,s,o,l,h,u){var c=120*U/180,f=U/180*(+a||0),p=[],d,g=n(function(t,e,r){var i=t*Y.cos(r)-e*Y.sin(r),n=t*Y.sin(r)+e*Y.cos(r);return{x:i,y:n}});if(u)S=u[0],A=u[1],B=u[2],C=u[3];else{d=g(t,e,-f),t=d.x,e=d.y,d=g(l,h,-f),l=d.x,h=d.y;var v=Y.cos(U/180*a),x=Y.sin(U/180*a),y=(t-l)/2,m=(e-h)/2,b=y*y/(r*r)+m*m/(i*i);b&gt;1&amp;&amp;(b=Y.sqrt(b),r=b*r,i=b*i);var _=r*r,w=i*i,k=(s==o?-1:1)*Y.sqrt(H((_*w-_*m*m-w*y*y)/(_*m*m+w*y*y))),B=k*r*m/i+(t+l)/2,C=k*-i*y/r+(e+h)/2,S=Y.asin(((e-C)/i).toFixed(9)),A=Y.asin(((h-C)/i).toFixed(9));S=t&lt;B?U-S:S,A=l&lt;B?U-A:A,S&lt;0&amp;&amp;(S=2*U+S),A&lt;0&amp;&amp;(A=2*U+A),o&amp;&amp;S&gt;A&amp;&amp;(S-=2*U),!o&amp;&amp;A&gt;S&amp;&amp;(A-=2*U)}var T=A-S;if(H(T)&gt;c){var E=A,M=l,N=h;A=S+c*(o&amp;&amp;A&gt;S?1:-1),l=B+r*Y.cos(A),h=C+i*Y.sin(A),p=Ut(l,h,r,i,a,0,o,M,N,[A,E,B,C])}T=A-S;var L=Y.cos(S),z=Y.sin(S),F=Y.cos(A),R=Y.sin(A),j=Y.tan(T/4),I=4/3*r*j,D=4/3*i*j,V=[t,e],O=[t+I*z,e-D*L],W=[l+I*R,h-D*F],G=[l,h];if(O[0]=2*V[0]-O[0],O[1]=2*V[1]-O[1],u)return[O,W,G][P](p);p=[O,W,G][P](p).join()[q](&quot;,&quot;);for(var X=[],$=0,Z=p.length;$&lt;Z;$++)X[$]=$%2?g(p[$-1],p[$],f).y:g(p[$],p[$+1],f).x;return X},$t=function(t,e,r,i,n,a,s,o,l){var h=1-l;return{x:X(h,3)*t+3*X(h,2)*l*r+3*h*l*l*n+X(l,3)*s,y:X(h,3)*e+3*X(h,2)*l*i+3*h*l*l*a+X(l,3)*o}},Zt=n(function(t,e,r,i,n,a,s,o){var l=n-2*r+t-(s-2*n+r),h=2*(r-t)-2*(n-r),u=t-r,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,p=[e,o],d=[t,s],g;return H(c)&gt;&quot;1e12&quot;&amp;&amp;(c=.5),H(f)&gt;&quot;1e12&quot;&amp;&amp;(f=.5),c&gt;0&amp;&amp;c&lt;1&amp;&amp;(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f&gt;0&amp;&amp;f&lt;1&amp;&amp;(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),l=a-2*i+e-(o-2*a+i),h=2*(i-e)-2*(a-i),u=e-i,c=(-h+Y.sqrt(h*h-4*l*u))/2/l,f=(-h-Y.sqrt(h*h-4*l*u))/2/l,H(c)&gt;&quot;1e12&quot;&amp;&amp;(c=.5),H(f)&gt;&quot;1e12&quot;&amp;&amp;(f=.5),c&gt;0&amp;&amp;c&lt;1&amp;&amp;(g=$t(t,e,r,i,n,a,s,o,c),d.push(g.x),p.push(g.y)),f&gt;0&amp;&amp;f&lt;1&amp;&amp;(g=$t(t,e,r,i,n,a,s,o,f),d.push(g.x),p.push(g.y)),{min:{x:G[z](0,d),y:G[z](0,p)},max:{x:W[z](0,d),y:W[z](0,p)}}}),Qt=e._path2curve=n(function(t,e){var r=!e&amp;&amp;Vt(t);if(!e&amp;&amp;r.curve)return Yt(r.curve);for(var i=Gt(t),n=e&amp;&amp;Gt(e),a={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},s={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},o=(function(t,e,r){var i,n,a={T:1,Q:1};if(!t)return[&quot;C&quot;,e.x,e.y,e.x,e.y,e.x,e.y];switch(!(t[0]in a)&amp;&amp;(e.qx=e.qy=null),t[0]){case&quot;M&quot;:e.X=t[1],e.Y=t[2];break;case&quot;A&quot;:t=[&quot;C&quot;][P](Ut[z](0,[e.x,e.y][P](t.slice(1))));break;case&quot;S&quot;:&quot;C&quot;==r||&quot;S&quot;==r?(i=2*e.x-e.bx,n=2*e.y-e.by):(i=e.x,n=e.y),t=[&quot;C&quot;,i,n][P](t.slice(1));break;case&quot;T&quot;:&quot;Q&quot;==r||&quot;T&quot;==r?(e.qx=2*e.x-e.qx,e.qy=2*e.y-e.qy):(e.qx=e.x,e.qy=e.y),t=[&quot;C&quot;][P](Xt(e.x,e.y,e.qx,e.qy,t[1],t[2]));break;case&quot;Q&quot;:e.qx=t[1],e.qy=t[2],t=[&quot;C&quot;][P](Xt(e.x,e.y,t[1],t[2],t[3],t[4]));break;case&quot;L&quot;:t=[&quot;C&quot;][P](Ht(e.x,e.y,t[1],t[2]));break;case&quot;H&quot;:t=[&quot;C&quot;][P](Ht(e.x,e.y,t[1],e.y));break;case&quot;V&quot;:t=[&quot;C&quot;][P](Ht(e.x,e.y,e.x,t[1]));break;case&quot;Z&quot;:t=[&quot;C&quot;][P](Ht(e.x,e.y,e.X,e.Y))}return t}),l=function(t,e){if(t[e].length&gt;7){t[e].shift();for(var r=t[e];r.length;)u[e]=&quot;A&quot;,n&amp;&amp;(c[e]=&quot;A&quot;),t.splice(e++,0,[&quot;C&quot;][P](r.splice(0,6)));t.splice(e,1),g=W(i.length,n&amp;&amp;n.length||0)}},h=function(t,e,r,a,s){t&amp;&amp;e&amp;&amp;&quot;M&quot;==t[s][0]&amp;&amp;&quot;M&quot;!=e[s][0]&amp;&amp;(e.splice(s,0,[&quot;M&quot;,a.x,a.y]),r.bx=0,r.by=0,r.x=t[s][1],r.y=t[s][2],g=W(i.length,n&amp;&amp;n.length||0))},u=[],c=[],f=&quot;&quot;,p=&quot;&quot;,d=0,g=W(i.length,n&amp;&amp;n.length||0);d&lt;g;d++){i[d]&amp;&amp;(f=i[d][0]),&quot;C&quot;!=f&amp;&amp;(u[d]=f,d&amp;&amp;(p=u[d-1])),i[d]=o(i[d],a,p),&quot;A&quot;!=u[d]&amp;&amp;&quot;C&quot;==f&amp;&amp;(u[d]=&quot;C&quot;),l(i,d),n&amp;&amp;(n[d]&amp;&amp;(f=n[d][0]),&quot;C&quot;!=f&amp;&amp;(c[d]=f,d&amp;&amp;(p=c[d-1])),n[d]=o(n[d],s,p),&quot;A&quot;!=c[d]&amp;&amp;&quot;C&quot;==f&amp;&amp;(c[d]=&quot;C&quot;),l(n,d)),h(i,n,a,s,d),h(n,i,s,a,d);var v=i[d],x=n&amp;&amp;n[d],y=v.length,m=n&amp;&amp;x.length;a.x=v[y-2],a.y=v[y-1],a.bx=ht(v[y-4])||a.x,a.by=ht(v[y-3])||a.y,s.bx=n&amp;&amp;(ht(x[m-4])||s.x),s.by=n&amp;&amp;(ht(x[m-3])||s.y),s.x=n&amp;&amp;x[m-2],s.y=n&amp;&amp;x[m-1]}return n||(r.curve=Yt(i)),n?[i,n]:i},null,Yt),Jt=e._parseDots=n(function(t){for(var r=[],i=0,n=t.length;i&lt;n;i++){var a={},s=t[i].match(/^([^:]*):?([\d\.]*)/);if(a.color=e.getRGB(s[1]),a.color.error)return null;a.opacity=a.color.opacity,a.color=a.color.hex,s[2]&amp;&amp;(a.offset=s[2]+&quot;%&quot;),r.push(a)}for(i=1,n=r.length-1;i&lt;n;i++)if(!r[i].offset){for(var o=ht(r[i-1].offset||0),l=0,h=i+1;h&lt;n;h++)if(r[h].offset){l=r[h].offset;break}l||(l=100,h=n),l=ht(l);for(var u=(l-o)/(h-i+1);i&lt;h;i++)o+=u,r[i].offset=o+&quot;%&quot;}return r}),Kt=e._tear=function(t,e){t==e.top&amp;&amp;(e.top=t.prev),t==e.bottom&amp;&amp;(e.bottom=t.next),t.next&amp;&amp;(t.next.prev=t.prev),t.prev&amp;&amp;(t.prev.next=t.next)},te=e._tofront=function(t,e){e.top!==t&amp;&amp;(Kt(t,e),t.next=null,t.prev=e.top,e.top.next=t,e.top=t)},ee=e._toback=function(t,e){e.bottom!==t&amp;&amp;(Kt(t,e),t.next=e.bottom,t.prev=null,e.bottom.prev=t,e.bottom=t)},re=e._insertafter=function(t,e,r){Kt(t,r),e==r.top&amp;&amp;(r.top=t),e.next&amp;&amp;(e.next.prev=t),t.next=e.next,t.prev=e,e.next=t},ie=e._insertbefore=function(t,e,r){Kt(t,r),e==r.bottom&amp;&amp;(r.bottom=t),e.prev&amp;&amp;(e.prev.next=t),t.prev=e.prev,e.prev=t,t.next=e},ne=e.toMatrix=function(t,e){var r=Ot(t),i={_:{transform:R},getBBox:function(){return r}};return se(i,e),i.matrix},ae=e.transformPath=function(t,e){return Mt(t,ne(t,e))},se=e._extractTransform=function(t,r){if(null==r)return t._.transform;r=I(r).replace(/\.{3}|\u2026/g,t._.transform||R);var i=e.parseTransformString(r),n=0,a=0,s=0,o=1,l=1,h=t._,u=new g;if(h.transform=i||[],i)for(var c=0,f=i.length;c&lt;f;c++){var p=i[c],d=p.length,v=I(p[0]).toLowerCase(),x=p[0]!=v,y=x?u.invert():0,m,b,_,w,k;&quot;t&quot;==v&amp;&amp;3==d?x?(m=y.x(0,0),b=y.y(0,0),_=y.x(p[1],p[2]),w=y.y(p[1],p[2]),u.translate(_-m,w-b)):u.translate(p[1],p[2]):&quot;r&quot;==v?2==d?(k=k||t.getBBox(1),u.rotate(p[1],k.x+k.width/2,k.y+k.height/2),n+=p[1]):4==d&amp;&amp;(x?(_=y.x(p[2],p[3]),w=y.y(p[2],p[3]),u.rotate(p[1],_,w)):u.rotate(p[1],p[2],p[3]),n+=p[1]):&quot;s&quot;==v?2==d||3==d?(k=k||t.getBBox(1),u.scale(p[1],p[d-1],k.x+k.width/2,k.y+k.height/2),o*=p[1],l*=p[d-1]):5==d&amp;&amp;(x?(_=y.x(p[3],p[4]),w=y.y(p[3],p[4]),u.scale(p[1],p[2],_,w)):u.scale(p[1],p[2],p[3],p[4]),o*=p[1],l*=p[2]):&quot;m&quot;==v&amp;&amp;7==d&amp;&amp;u.add(p[1],p[2],p[3],p[4],p[5],p[6]),h.dirtyT=1,t.matrix=u}t.matrix=u,h.sx=o,h.sy=l,h.deg=n,h.dx=a=u.e,h.dy=s=u.f,1==o&amp;&amp;1==l&amp;&amp;!n&amp;&amp;h.bbox?(h.bbox.x+=+a,h.bbox.y+=+s):h.dirtyT=1},oe=function(t){var e=t[0];switch(e.toLowerCase()){case&quot;t&quot;:return[e,0,0];case&quot;m&quot;:return[e,1,0,0,1,0,0];case&quot;r&quot;:return 4==t.length?[e,0,t[2],t[3]]:[e,0];case&quot;s&quot;:return 5==t.length?[e,1,1,t[3],t[4]]:3==t.length?[e,1,1]:[e,1]}},le=e._equaliseTransform=function(t,r){r=I(r).replace(/\.{3}|\u2026/g,t),t=e.parseTransformString(t)||[],r=e.parseTransformString(r)||[];for(var i=W(t.length,r.length),n=[],a=[],s=0,o,l,h,u;s&lt;i;s++){if(h=t[s]||oe(r[s]),u=r[s]||oe(h),h[0]!=u[0]||&quot;r&quot;==h[0].toLowerCase()&amp;&amp;(h[2]!=u[2]||h[3]!=u[3])||&quot;s&quot;==h[0].toLowerCase()&amp;&amp;(h[3]!=u[3]||h[4]!=u[4]))return;for(n[s]=[],a[s]=[],o=0,l=W(h.length,u.length);o&lt;l;o++)o in h&amp;&amp;(n[s][o]=h[o]),o in u&amp;&amp;(a[s][o]=u[o])}return{from:n,to:a}};e._getContainer=function(t,r,i,n){var a;if(a=null!=n||e.is(t,&quot;object&quot;)?t:T.doc.getElementById(t),null!=a)return a.tagName?null==r?{container:a,width:a.style.pixelWidth||a.offsetWidth,height:a.style.pixelHeight||a.offsetHeight}:{container:a,width:r,height:i}:{container:1,x:t,y:r,width:i,height:n}},e.pathToRelative=Wt,e._engine={},e.path2curve=Qt,e.matrix=function(t,e,r,i,n,a){return new g(t,e,r,i,n,a)},function(t){function r(t){return t[0]*t[0]+t[1]*t[1]}function i(t){var e=Y.sqrt(r(t));t[0]&amp;&amp;(t[0]/=e),t[1]&amp;&amp;(t[1]/=e)}t.add=function(t,e,r,i,n,a){var s=[[],[],[]],o=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],l=[[t,r,n],[e,i,a],[0,0,1]],h,u,c,f;for(t&amp;&amp;t instanceof g&amp;&amp;(l=[[t.a,t.c,t.e],[t.b,t.d,t.f],[0,0,1]]),h=0;h&lt;3;h++)for(u=0;u&lt;3;u++){for(f=0,c=0;c&lt;3;c++)f+=o[h][c]*l[c][u];s[h][u]=f}this.a=s[0][0],this.b=s[1][0],this.c=s[0][1],this.d=s[1][1],this.e=s[0][2],this.f=s[1][2]},t.invert=function(){var t=this,e=t.a*t.d-t.b*t.c;return new g(t.d/e,-t.b/e,-t.c/e,t.a/e,(t.c*t.f-t.d*t.e)/e,(t.b*t.e-t.a*t.f)/e)},t.clone=function(){return new g(this.a,this.b,this.c,this.d,this.e,this.f)},t.translate=function(t,e){</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">this.add(1,0,0,1,t,e)},t.scale=function(t,e,r,i){null==e&amp;&amp;(e=t),(r||i)&amp;&amp;this.add(1,0,0,1,r,i),this.add(t,0,0,e,0,0),(r||i)&amp;&amp;this.add(1,0,0,1,-r,-i)},t.rotate=function(t,r,i){t=e.rad(t),r=r||0,i=i||0;var n=+Y.cos(t).toFixed(9),a=+Y.sin(t).toFixed(9);this.add(n,a,-a,n,r,i),this.add(1,0,0,1,-r,-i)},t.x=function(t,e){return t*this.a+e*this.c+this.e},t.y=function(t,e){return t*this.b+e*this.d+this.f},t.get=function(t){return+this[I.fromCharCode(97+t)].toFixed(4)},t.toString=function(){return e.svg?&quot;matrix(&quot;+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+&quot;)&quot;:[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},t.toFilter=function(){return&quot;progid:DXImageTransform.Microsoft.Matrix(M11=&quot;+this.get(0)+&quot;, M12=&quot;+this.get(2)+&quot;, M21=&quot;+this.get(1)+&quot;, M22=&quot;+this.get(3)+&quot;, Dx=&quot;+this.get(4)+&quot;, Dy=&quot;+this.get(5)+&quot;, sizingmethod=&#39;auto expand&#39;)&quot;},t.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},t.split=function(){var t={};t.dx=this.e,t.dy=this.f;var n=[[this.a,this.c],[this.b,this.d]];t.scalex=Y.sqrt(r(n[0])),i(n[0]),t.shear=n[0][0]*n[1][0]+n[0][1]*n[1][1],n[1]=[n[1][0]-n[0][0]*t.shear,n[1][1]-n[0][1]*t.shear],t.scaley=Y.sqrt(r(n[1])),i(n[1]),t.shear/=t.scaley;var a=-n[0][1],s=n[1][1];return s&lt;0?(t.rotate=e.deg(Y.acos(s)),a&lt;0&amp;&amp;(t.rotate=360-t.rotate)):t.rotate=e.deg(Y.asin(a)),t.isSimple=!(+t.shear.toFixed(9)||t.scalex.toFixed(9)!=t.scaley.toFixed(9)&amp;&amp;t.rotate),t.isSuperSimple=!+t.shear.toFixed(9)&amp;&amp;t.scalex.toFixed(9)==t.scaley.toFixed(9)&amp;&amp;!t.rotate,t.noRotation=!+t.shear.toFixed(9)&amp;&amp;!t.rotate,t},t.toTransformString=function(t){var e=t||this[q]();return e.isSimple?(e.scalex=+e.scalex.toFixed(4),e.scaley=+e.scaley.toFixed(4),e.rotate=+e.rotate.toFixed(4),(e.dx||e.dy?&quot;t&quot;+[e.dx,e.dy]:R)+(1!=e.scalex||1!=e.scaley?&quot;s&quot;+[e.scalex,e.scaley,0,0]:R)+(e.rotate?&quot;r&quot;+[e.rotate,0,0]:R)):&quot;m&quot;+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(g.prototype);for(var he=function(){this.returnValue=!1},ue=function(){return this.originalEvent.preventDefault()},ce=function(){this.cancelBubble=!0},fe=function(){return this.originalEvent.stopPropagation()},pe=function(t){var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,r=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;return{x:t.clientX+r,y:t.clientY+e}},de=function(){return T.doc.addEventListener?function(t,e,r,i){var n=function(t){var e=pe(t);return r.call(i,t,e.x,e.y)};if(t.addEventListener(e,n,!1),F&amp;&amp;V[e]){var a=function(e){for(var n=pe(e),a=e,s=0,o=e.targetTouches&amp;&amp;e.targetTouches.length;s&lt;o;s++)if(e.targetTouches[s].target==t){e=e.targetTouches[s],e.originalEvent=a,e.preventDefault=ue,e.stopPropagation=fe;break}return r.call(i,e,n.x,n.y)};t.addEventListener(V[e],a,!1)}return function(){return t.removeEventListener(e,n,!1),F&amp;&amp;V[e]&amp;&amp;t.removeEventListener(V[e],a,!1),!0}}:T.doc.attachEvent?function(t,e,r,i){var n=function(t){t=t||T.win.event;var e=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,n=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,a=t.clientX+n,s=t.clientY+e;return t.preventDefault=t.preventDefault||he,t.stopPropagation=t.stopPropagation||ce,r.call(i,t,a,s)};t.attachEvent(&quot;on&quot;+e,n);var a=function(){return t.detachEvent(&quot;on&quot;+e,n),!0};return a}:void 0}(),ge=[],ve=function(e){for(var r=e.clientX,i=e.clientY,n=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,a=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft,s,o=ge.length;o--;){if(s=ge[o],F&amp;&amp;e.touches){for(var l=e.touches.length,h;l--;)if(h=e.touches[l],h.identifier==s.el._drag.id){r=h.clientX,i=h.clientY,(e.originalEvent?e.originalEvent:e).preventDefault();break}}else e.preventDefault();var u=s.el.node,c,f=u.nextSibling,p=u.parentNode,d=u.style.display;T.win.opera&amp;&amp;p.removeChild(u),u.style.display=&quot;none&quot;,c=s.el.paper.getElementByPoint(r,i),u.style.display=d,T.win.opera&amp;&amp;(f?p.insertBefore(u,f):p.appendChild(u)),c&amp;&amp;t(&quot;raphael.drag.over.&quot;+s.el.id,s.el,c),r+=a,i+=n,t(&quot;raphael.drag.move.&quot;+s.el.id,s.move_scope||s.el,r-s.el._drag.x,i-s.el._drag.y,r,i,e)}},xe=function(r){e.unmousemove(ve).unmouseup(xe);for(var i=ge.length,n;i--;)n=ge[i],n.el._drag={},t(&quot;raphael.drag.end.&quot;+n.el.id,n.end_scope||n.start_scope||n.move_scope||n.el,r);ge=[]},ye=e.el={},me=D.length;me--;)!function(t){e[t]=ye[t]=function(r,i){return e.is(r,&quot;function&quot;)&amp;&amp;(this.events=this.events||[],this.events.push({name:t,f:r,unbind:de(this.shape||this.node||T.doc,t,r,i||this)})),this},e[&quot;un&quot;+t]=ye[&quot;un&quot;+t]=function(r){for(var i=this.events||[],n=i.length;n--;)i[n].name!=t||!e.is(r,&quot;undefined&quot;)&amp;&amp;i[n].f!=r||(i[n].unbind(),i.splice(n,1),!i.length&amp;&amp;delete this.events);return this}}(D[me]);ye.data=function(r,i){var n=wt[this.id]=wt[this.id]||{};if(0==arguments.length)return n;if(1==arguments.length){if(e.is(r,&quot;object&quot;)){for(var a in r)r[A](a)&amp;&amp;this.data(a,r[a]);return this}return t(&quot;raphael.data.get.&quot;+this.id,this,n[r],r),n[r]}return n[r]=i,t(&quot;raphael.data.set.&quot;+this.id,this,i,r),this},ye.removeData=function(t){return null==t?wt[this.id]={}:wt[this.id]&amp;&amp;delete wt[this.id][t],this},ye.getData=function(){return r(wt[this.id]||{})},ye.hover=function(t,e,r,i){return this.mouseover(t,r).mouseout(e,i||r)},ye.unhover=function(t,e){return this.unmouseover(t).unmouseout(e)};var be=[];ye.drag=function(r,i,n,a,s,o){function l(l){(l.originalEvent||l).preventDefault();var h=l.clientX,u=l.clientY,c=T.doc.documentElement.scrollTop||T.doc.body.scrollTop,f=T.doc.documentElement.scrollLeft||T.doc.body.scrollLeft;if(this._drag.id=l.identifier,F&amp;&amp;l.touches)for(var p=l.touches.length,d;p--;)if(d=l.touches[p],this._drag.id=d.identifier,d.identifier==this._drag.id){h=d.clientX,u=d.clientY;break}this._drag.x=h+f,this._drag.y=u+c,!ge.length&amp;&amp;e.mousemove(ve).mouseup(xe),ge.push({el:this,move_scope:a,start_scope:s,end_scope:o}),i&amp;&amp;t.on(&quot;raphael.drag.start.&quot;+this.id,i),r&amp;&amp;t.on(&quot;raphael.drag.move.&quot;+this.id,r),n&amp;&amp;t.on(&quot;raphael.drag.end.&quot;+this.id,n),t(&quot;raphael.drag.start.&quot;+this.id,s||a||this,l.clientX+f,l.clientY+c,l)}return this._drag={},be.push({el:this,start:l}),this.mousedown(l),this},ye.onDragOver=function(e){e?t.on(&quot;raphael.drag.over.&quot;+this.id,e):t.unbind(&quot;raphael.drag.over.&quot;+this.id)},ye.undrag=function(){for(var r=be.length;r--;)be[r].el==this&amp;&amp;(this.unmousedown(be[r].start),be.splice(r,1),t.unbind(&quot;raphael.drag.*.&quot;+this.id));!be.length&amp;&amp;e.unmousemove(ve).unmouseup(xe),ge=[]},N.circle=function(t,r,i){var n=e._engine.circle(this,t||0,r||0,i||0);return this.__set__&amp;&amp;this.__set__.push(n),n},N.rect=function(t,r,i,n,a){var s=e._engine.rect(this,t||0,r||0,i||0,n||0,a||0);return this.__set__&amp;&amp;this.__set__.push(s),s},N.ellipse=function(t,r,i,n){var a=e._engine.ellipse(this,t||0,r||0,i||0,n||0);return this.__set__&amp;&amp;this.__set__.push(a),a},N.path=function(t){t&amp;&amp;!e.is(t,Z)&amp;&amp;!e.is(t[0],Q)&amp;&amp;(t+=R);var r=e._engine.path(e.format[z](e,arguments),this);return this.__set__&amp;&amp;this.__set__.push(r),r},N.image=function(t,r,i,n,a){var s=e._engine.image(this,t||&quot;about:blank&quot;,r||0,i||0,n||0,a||0);return this.__set__&amp;&amp;this.__set__.push(s),s},N.text=function(t,r,i){var n=e._engine.text(this,t||0,r||0,I(i));return this.__set__&amp;&amp;this.__set__.push(n),n},N.set=function(t){!e.is(t,&quot;array&quot;)&amp;&amp;(t=Array.prototype.splice.call(arguments,0,arguments.length));var r=new ze(t);return this.__set__&amp;&amp;this.__set__.push(r),r.paper=this,r.type=&quot;set&quot;,r},N.setStart=function(t){this.__set__=t||this.set()},N.setFinish=function(t){var e=this.__set__;return delete this.__set__,e},N.getSize=function(){var t=this.canvas.parentNode;return{width:t.offsetWidth,height:t.offsetHeight}},N.setSize=function(t,r){return e._engine.setSize.call(this,t,r)},N.setViewBox=function(t,r,i,n,a){return e._engine.setViewBox.call(this,t,r,i,n,a)},N.top=N.bottom=null,N.raphael=e;var _e=function(t){var e=t.getBoundingClientRect(),r=t.ownerDocument,i=r.body,n=r.documentElement,a=n.clientTop||i.clientTop||0,s=n.clientLeft||i.clientLeft||0,o=e.top+(T.win.pageYOffset||n.scrollTop||i.scrollTop)-a,l=e.left+(T.win.pageXOffset||n.scrollLeft||i.scrollLeft)-s;return{y:o,x:l}};N.getElementByPoint=function(t,e){var r=this,i=r.canvas,n=T.doc.elementFromPoint(t,e);if(T.win.opera&amp;&amp;&quot;svg&quot;==n.tagName){var a=_e(i),s=i.createSVGRect();s.x=t-a.x,s.y=e-a.y,s.width=s.height=1;var o=i.getIntersectionList(s,null);o.length&amp;&amp;(n=o[o.length-1])}if(!n)return null;for(;n.parentNode&amp;&amp;n!=i.parentNode&amp;&amp;!n.raphael;)n=n.parentNode;return n==r.canvas.parentNode&amp;&amp;(n=i),n=n&amp;&amp;n.raphael?r.getById(n.raphaelid):null},N.getElementsByBBox=function(t){var r=this.set();return this.forEach(function(i){e.isBBoxIntersect(i.getBBox(),t)&amp;&amp;r.push(i)}),r},N.getById=function(t){for(var e=this.bottom;e;){if(e.id==t)return e;e=e.next}return null},N.forEach=function(t,e){for(var r=this.bottom;r;){if(t.call(e,r)===!1)return this;r=r.next}return this},N.getElementsByPoint=function(t,e){var r=this.set();return this.forEach(function(i){i.isPointInside(t,e)&amp;&amp;r.push(i)}),r},ye.isPointInside=function(t,r){var i=this.realPath=Et[this.type](this);return this.attr(&quot;transform&quot;)&amp;&amp;this.attr(&quot;transform&quot;).length&amp;&amp;(i=e.transformPath(i,this.attr(&quot;transform&quot;))),e.isPointInsidePath(i,t,r)},ye.getBBox=function(t){if(this.removed)return{};var e=this._;return t?(!e.dirty&amp;&amp;e.bboxwt||(this.realPath=Et[this.type](this),e.bboxwt=Ot(this.realPath),e.bboxwt.toString=x,e.dirty=0),e.bboxwt):((e.dirty||e.dirtyT||!e.bbox)&amp;&amp;(!e.dirty&amp;&amp;this.realPath||(e.bboxwt=0,this.realPath=Et[this.type](this)),e.bbox=Ot(Mt(this.realPath,this.matrix)),e.bbox.toString=x,e.dirty=e.dirtyT=0),e.bbox)},ye.clone=function(){if(this.removed)return null;var t=this.paper[this.type]().attr(this.attr());return this.__set__&amp;&amp;this.__set__.push(t),t},ye.glow=function(t){if(&quot;text&quot;==this.type)return null;t=t||{};var e={width:(t.width||10)+(+this.attr(&quot;stroke-width&quot;)||1),fill:t.fill||!1,opacity:null==t.opacity?.5:t.opacity,offsetx:t.offsetx||0,offsety:t.offsety||0,color:t.color||&quot;#000&quot;},r=e.width/2,i=this.paper,n=i.set(),a=this.realPath||Et[this.type](this);a=this.matrix?Mt(a,this.matrix):a;for(var s=1;s&lt;r+1;s++)n.push(i.path(a).attr({stroke:e.color,fill:e.fill?e.color:&quot;none&quot;,&quot;stroke-linejoin&quot;:&quot;round&quot;,&quot;stroke-linecap&quot;:&quot;round&quot;,&quot;stroke-width&quot;:+(e.width/r*s).toFixed(3),opacity:+(e.opacity/r).toFixed(3)}));return n.insertBefore(this).translate(e.offsetx,e.offsety)};var we={},ke=function(t,r,i,n,a,s,o,u,c){return null==c?l(t,r,i,n,a,s,o,u):e.findDotsAtSegment(t,r,i,n,a,s,o,u,h(t,r,i,n,a,s,o,u,c))},Be=function(t,r){return function(i,n,a){i=Qt(i);for(var s,o,l,h,u=&quot;&quot;,c={},f,p=0,d=0,g=i.length;d&lt;g;d++){if(l=i[d],&quot;M&quot;==l[0])s=+l[1],o=+l[2];else{if(h=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6]),p+h&gt;n){if(r&amp;&amp;!c.start){if(f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),u+=[&quot;C&quot;+f.start.x,f.start.y,f.m.x,f.m.y,f.x,f.y],a)return u;c.start=u,u=[&quot;M&quot;+f.x,f.y+&quot;C&quot;+f.n.x,f.n.y,f.end.x,f.end.y,l[5],l[6]].join(),p+=h,s=+l[5],o=+l[6];continue}if(!t&amp;&amp;!r)return f=ke(s,o,l[1],l[2],l[3],l[4],l[5],l[6],n-p),{x:f.x,y:f.y,alpha:f.alpha}}p+=h,s=+l[5],o=+l[6]}u+=l.shift()+l}return c.end=u,f=t?p:r?c:e.findDotsAtSegment(s,o,l[0],l[1],l[2],l[3],l[4],l[5],1),f.alpha&amp;&amp;(f={x:f.x,y:f.y,alpha:f.alpha}),f}},Ce=Be(1),Se=Be(),Ae=Be(0,1);e.getTotalLength=Ce,e.getPointAtLength=Se,e.getSubpath=function(t,e,r){if(this.getTotalLength(t)-r&lt;1e-6)return Ae(t,e).end;var i=Ae(t,r,1);return e?Ae(i,e).end:i},ye.getTotalLength=function(){var t=this.getPath();if(t)return this.node.getTotalLength?this.node.getTotalLength():Ce(t)},ye.getPointAtLength=function(t){var e=this.getPath();if(e)return Se(e,t)},ye.getPath=function(){var t,r=e._getPath[this.type];if(&quot;text&quot;!=this.type&amp;&amp;&quot;set&quot;!=this.type)return r&amp;&amp;(t=r(this)),t},ye.getSubpath=function(t,r){var i=this.getPath();if(i)return e.getSubpath(i,t,r)};var Te=e.easing_formulas={linear:function(t){return t},&quot;&lt;&quot;:function(t){return X(t,1.7)},&quot;&gt;&quot;:function(t){return X(t,.48)},&quot;&lt;&gt;&quot;:function(t){var e=.48-t/1.04,r=Y.sqrt(.1734+e*e),i=r-e,n=X(H(i),1/3)*(i&lt;0?-1:1),a=-r-e,s=X(H(a),1/3)*(a&lt;0?-1:1),o=n+s+.5;return 3*(1-o)*o*o+o*o*o},backIn:function(t){var e=1.70158;return t*t*((e+1)*t-e)},backOut:function(t){t-=1;var e=1.70158;return t*t*((e+1)*t+e)+1},elastic:function(t){return t==!!t?t:X(2,-10*t)*Y.sin((t-.075)*(2*U)/.3)+1},bounce:function(t){var e=7.5625,r=2.75,i;return t&lt;1/r?i=e*t*t:t&lt;2/r?(t-=1.5/r,i=e*t*t+.75):t&lt;2.5/r?(t-=2.25/r,i=e*t*t+.9375):(t-=2.625/r,i=e*t*t+.984375),i}};Te.easeIn=Te[&quot;ease-in&quot;]=Te[&quot;&lt;&quot;],Te.easeOut=Te[&quot;ease-out&quot;]=Te[&quot;&gt;&quot;],Te.easeInOut=Te[&quot;ease-in-out&quot;]=Te[&quot;&lt;&gt;&quot;],Te[&quot;back-in&quot;]=Te.backIn,Te[&quot;back-out&quot;]=Te.backOut;var Ee=[],Me=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){setTimeout(t,16)},Ne=function(){for(var r=+new Date,i=0;i&lt;Ee.length;i++){var n=Ee[i];if(!n.el.removed&amp;&amp;!n.paused){var a=r-n.start,s=n.ms,o=n.easing,l=n.from,h=n.diff,u=n.to,c=n.t,f=n.el,p={},d,g={},v;if(n.initstatus?(a=(n.initstatus*n.anim.top-n.prev)/(n.percent-n.prev)*s,n.status=n.initstatus,delete n.initstatus,n.stop&amp;&amp;Ee.splice(i--,1)):n.status=(n.prev+(n.percent-n.prev)*(a/s))/n.anim.top,!(a&lt;0))if(a&lt;s){var x=o(a/s);for(var y in l)if(l[A](y)){switch(pt[y]){case $:d=+l[y]+x*s*h[y];break;case&quot;colour&quot;:d=&quot;rgb(&quot;+[Le(ot(l[y].r+x*s*h[y].r)),Le(ot(l[y].g+x*s*h[y].g)),Le(ot(l[y].b+x*s*h[y].b))].join(&quot;,&quot;)+&quot;)&quot;;break;case&quot;path&quot;:d=[];for(var m=0,_=l[y].length;m&lt;_;m++){d[m]=[l[y][m][0]];for(var w=1,k=l[y][m].length;w&lt;k;w++)d[m][w]=+l[y][m][w]+x*s*h[y][m][w];d[m]=d[m].join(j)}d=d.join(j);break;case&quot;transform&quot;:if(h[y].real)for(d=[],m=0,_=l[y].length;m&lt;_;m++)for(d[m]=[l[y][m][0]],w=1,k=l[y][m].length;w&lt;k;w++)d[m][w]=l[y][m][w]+x*s*h[y][m][w];else{var B=function(t){return+l[y][t]+x*s*h[y][t]};d=[[&quot;m&quot;,B(0),B(1),B(2),B(3),B(4),B(5)]]}break;case&quot;csv&quot;:if(&quot;clip-rect&quot;==y)for(d=[],m=4;m--;)d[m]=+l[y][m]+x*s*h[y][m];break;default:var C=[][P](l[y]);for(d=[],m=f.paper.customAttributes[y].length;m--;)d[m]=+C[m]+x*s*h[y][m]}p[y]=d}f.attr(p),function(e,r,i){setTimeout(function(){t(&quot;raphael.anim.frame.&quot;+e,r,i)})}(f.id,f,n.anim)}else{if(function(r,i,n){setTimeout(function(){t(&quot;raphael.anim.frame.&quot;+i.id,i,n),t(&quot;raphael.anim.finish.&quot;+i.id,i,n),e.is(r,&quot;function&quot;)&amp;&amp;r.call(i)})}(n.callback,f,n.anim),f.attr(u),Ee.splice(i--,1),n.repeat&gt;1&amp;&amp;!n.next){for(v in u)u[A](v)&amp;&amp;(g[v]=n.totalOrigin[v]);n.el.attr(g),b(n.anim,n.el,n.anim.percents[0],null,n.totalOrigin,n.repeat-1)}n.next&amp;&amp;!n.stop&amp;&amp;b(n.anim,n.el,n.next,null,n.totalOrigin,n.repeat)}}}Ee.length&amp;&amp;Me(Ne)},Le=function(t){return t&gt;255?255:t&lt;0?0:t};ye.animateWith=function(t,r,i,n,a,s){var o=this;if(o.removed)return s&amp;&amp;s.call(o),o;var l=i instanceof m?i:e.animation(i,n,a,s),h,u;b(l,o,l.percents[0],null,o.attr());for(var c=0,f=Ee.length;c&lt;f;c++)if(Ee[c].anim==r&amp;&amp;Ee[c].el==t){Ee[f-1].start=Ee[c].start;break}return o},ye.onAnimation=function(e){return e?t.on(&quot;raphael.anim.frame.&quot;+this.id,e):t.unbind(&quot;raphael.anim.frame.&quot;+this.id),this},m.prototype.delay=function(t){var e=new m(this.anim,this.ms);return e.times=this.times,e.del=+t||0,e},m.prototype.repeat=function(t){var e=new m(this.anim,this.ms);return e.del=this.del,e.times=Y.floor(W(t,0))||1,e},e.animation=function(t,r,i,n){if(t instanceof m)return t;!e.is(i,&quot;function&quot;)&amp;&amp;i||(n=n||i||null,i=null),t=Object(t),r=+r||0;var a={},s,o;for(o in t)t[A](o)&amp;&amp;ht(o)!=o&amp;&amp;ht(o)+&quot;%&quot;!=o&amp;&amp;(s=!0,a[o]=t[o]);if(s)return i&amp;&amp;(a.easing=i),n&amp;&amp;(a.callback=n),new m({100:a},r);if(n){var l=0;for(var h in t){var u=ut(h);t[A](h)&amp;&amp;u&gt;l&amp;&amp;(l=u)}l+=&quot;%&quot;,!t[l].callback&amp;&amp;(t[l].callback=n)}return new m(t,r)},ye.animate=function(t,r,i,n){var a=this;if(a.removed)return n&amp;&amp;n.call(a),a;var s=t instanceof m?t:e.animation(t,r,i,n);return b(s,a,s.percents[0],null,a.attr()),a},ye.setTime=function(t,e){return t&amp;&amp;null!=e&amp;&amp;this.status(t,G(e,t.ms)/t.ms),this},ye.status=function(t,e){var r=[],i=0,n,a;if(null!=e)return b(t,this,-1,G(e,1)),this;for(n=Ee.length;i&lt;n;i++)if(a=Ee[i],a.el.id==this.id&amp;&amp;(!t||a.anim==t)){if(t)return a.status;r.push({anim:a.anim,status:a.status})}return t?0:r},ye.pause=function(e){for(var r=0;r&lt;Ee.length;r++)Ee[r].el.id!=this.id||e&amp;&amp;Ee[r].anim!=e||t(&quot;raphael.anim.pause.&quot;+this.id,this,Ee[r].anim)!==!1&amp;&amp;(Ee[r].paused=!0);return this},ye.resume=function(e){for(var r=0;r&lt;Ee.length;r++)if(Ee[r].el.id==this.id&amp;&amp;(!e||Ee[r].anim==e)){var i=Ee[r];t(&quot;raphael.anim.resume.&quot;+this.id,this,i.anim)!==!1&amp;&amp;(delete i.paused,this.status(i.anim,i.status))}return this},ye.stop=function(e){for(var r=0;r&lt;Ee.length;r++)Ee[r].el.id!=this.id||e&amp;&amp;Ee[r].anim!=e||t(&quot;raphael.anim.stop.&quot;+this.id,this,Ee[r].anim)!==!1&amp;&amp;Ee.splice(r--,1);return this},t.on(&quot;raphael.remove&quot;,_),t.on(&quot;raphael.clear&quot;,_),ye.toString=function(){return&quot;Raphaël’s object&quot;};var ze=function(t){if(this.items=[],this.length=0,this.type=&quot;set&quot;,t)for(var e=0,r=t.length;e&lt;r;e++)!t[e]||t[e].constructor!=ye.constructor&amp;&amp;t[e].constructor!=ze||(this[this.items.length]=this.items[this.items.length]=t[e],this.length++)},Pe=ze.prototype;Pe.push=function(){for(var t,e,r=0,i=arguments.length;r&lt;i;r++)t=arguments[r],!t||t.constructor!=ye.constructor&amp;&amp;t.constructor!=ze||(e=this.items.length,this[e]=this.items[e]=t,this.length++);return this},Pe.pop=function(){return this.length&amp;&amp;delete this[this.length--],this.items.pop()},Pe.forEach=function(t,e){for(var r=0,i=this.items.length;r&lt;i;r++)if(t.call(e,this.items[r],r)===!1)return this;return this};for(var Fe in ye)ye[A](Fe)&amp;&amp;(Pe[Fe]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t][z](r,e)})}}(Fe));return Pe.attr=function(t,r){if(t&amp;&amp;e.is(t,Q)&amp;&amp;e.is(t[0],&quot;object&quot;))for(var i=0,n=t.length;i&lt;n;i++)this.items[i].attr(t[i]);else for(var a=0,s=this.items.length;a&lt;s;a++)this.items[a].attr(t,r);return this},Pe.clear=function(){for(;this.length;)this.pop()},Pe.splice=function(t,e,r){t=t&lt;0?W(this.length+t,0):t,e=W(0,G(this.length-t,e));var i=[],n=[],a=[],s;for(s=2;s&lt;arguments.length;s++)a.push(arguments[s]);for(s=0;s&lt;e;s++)n.push(this[t+s]);for(;s&lt;this.length-t;s++)i.push(this[t+s]);var o=a.length;for(s=0;s&lt;o+i.length;s++)this.items[t+s]=this[t+s]=s&lt;o?a[s]:i[s-o];for(s=this.items.length=this.length-=e-o;this[s];)delete this[s++];return new ze(n)},Pe.exclude=function(t){for(var e=0,r=this.length;e&lt;r;e++)if(this[e]==t)return this.splice(e,1),!0},Pe.animate=function(t,r,i,n){(e.is(i,&quot;function&quot;)||!i)&amp;&amp;(n=i||null);var a=this.items.length,s=a,o,l=this,h;if(!a)return this;n&amp;&amp;(h=function(){!--a&amp;&amp;n.call(l)}),i=e.is(i,Z)?i:h;var u=e.animation(t,r,i,h);for(o=this.items[--s].animate(u);s--;)this.items[s]&amp;&amp;!this.items[s].removed&amp;&amp;this.items[s].animateWith(o,u,u),this.items[s]&amp;&amp;!this.items[s].removed||a--;return this},Pe.insertAfter=function(t){for(var e=this.items.length;e--;)this.items[e].insertAfter(t);return this},Pe.getBBox=function(){for(var t=[],e=[],r=[],i=[],n=this.items.length;n--;)if(!this.items[n].removed){var a=this.items[n].getBBox();t.push(a.x),e.push(a.y),r.push(a.x+a.width),i.push(a.y+a.height)}return t=G[z](0,t),e=G[z](0,e),r=W[z](0,r),i=W[z](0,i),{x:t,y:e,x2:r,y2:i,width:r-t,height:i-e}},Pe.clone=function(t){t=this.paper.set();for(var e=0,r=this.items.length;e&lt;r;e++)t.push(this.items[e].clone());return t},Pe.toString=function(){return&quot;Raphaël‘s set&quot;},Pe.glow=function(t){var e=this.paper.set();return this.forEach(function(r,i){var n=r.glow(t);null!=n&amp;&amp;n.forEach(function(t,r){e.push(t)})}),e},Pe.isPointInside=function(t,e){var r=!1;return this.forEach(function(i){if(i.isPointInside(t,e))return r=!0,!1}),r},e.registerFont=function(t){if(!t.face)return t;this.fonts=this.fonts||{};var e={w:t.w,face:{},glyphs:{}},r=t.face[&quot;font-family&quot;];for(var i in t.face)t.face[A](i)&amp;&amp;(e.face[i]=t.face[i]);if(this.fonts[r]?this.fonts[r].push(e):this.fonts[r]=[e],!t.svg){e.face[&quot;units-per-em&quot;]=ut(t.face[&quot;units-per-em&quot;],10);for(var n in t.glyphs)if(t.glyphs[A](n)){var a=t.glyphs[n];if(e.glyphs[n]={w:a.w,k:{},d:a.d&amp;&amp;&quot;M&quot;+a.d.replace(/[mlcxtrv]/g,function(t){return{l:&quot;L&quot;,c:&quot;C&quot;,x:&quot;z&quot;,t:&quot;m&quot;,r:&quot;l&quot;,v:&quot;c&quot;}[t]||&quot;M&quot;})+&quot;z&quot;},a.k)for(var s in a.k)a[A](s)&amp;&amp;(e.glyphs[n].k[s]=a.k[s])}}return t},N.getFont=function(t,r,i,n){if(n=n||&quot;normal&quot;,i=i||&quot;normal&quot;,r=+r||{normal:400,bold:700,lighter:300,bolder:800}[r]||400,e.fonts){var a=e.fonts[t];if(!a){var s=new RegExp(&quot;(^|\\s)&quot;+t.replace(/[^\w\d\s+!~.:_-]/g,R)+&quot;(\\s|$)&quot;,&quot;i&quot;);for(var o in e.fonts)if(e.fonts[A](o)&amp;&amp;s.test(o)){a=e.fonts[o];break}}var l;if(a)for(var h=0,u=a.length;h&lt;u&amp;&amp;(l=a[h],l.face[&quot;font-weight&quot;]!=r||l.face[&quot;font-style&quot;]!=i&amp;&amp;l.face[&quot;font-style&quot;]||l.face[&quot;font-stretch&quot;]!=n);h++);return l}},N.print=function(t,r,i,n,a,s,o,l){s=s||&quot;middle&quot;,o=W(G(o||0,1),-1),l=W(G(l||1,3),1);var h=I(i)[q](R),u=0,c=0,f=R,p;if(e.is(n,&quot;string&quot;)&amp;&amp;(n=this.getFont(n)),n){p=(a||16)/n.face[&quot;units-per-em&quot;];for(var d=n.face.bbox[q](k),g=+d[0],v=d[3]-d[1],x=0,y=+d[1]+(&quot;baseline&quot;==s?v+ +n.face.descent:v/2),m=0,b=h.length;m&lt;b;m++){if(&quot;\n&quot;==h[m])u=0,w=0,c=0,x+=v*l;else{var _=c&amp;&amp;n.glyphs[h[m-1]]||{},w=n.glyphs[h[m]];u+=c?(_.w||n.w)+(_.k&amp;&amp;_.k[h[m]]||0)+n.w*o:0,c=1}w&amp;&amp;w.d&amp;&amp;(f+=e.transformPath(w.d,[&quot;t&quot;,u*p,x*p,&quot;s&quot;,p,p,g,y,&quot;t&quot;,(t-g)/p,(r-y)/p]))}}return this.path(f).attr({fill:&quot;#000&quot;,stroke:&quot;none&quot;})},N.add=function(t){if(e.is(t,&quot;array&quot;))for(var r=this.set(),i=0,n=t.length,a;i&lt;n;i++)a=t[i]||{},B[A](a.type)&amp;&amp;r.push(this[a.type]().attr(a));return r},e.format=function(t,r){var i=e.is(r,Q)?[0][P](r):arguments;return t&amp;&amp;e.is(t,Z)&amp;&amp;i.length-1&amp;&amp;(t=t.replace(C,function(t,e){return null==i[++e]?R:i[e]})),t||R},e.fullfill=function(){var t=/\{([^\}]+)\}/g,e=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[(&#39;|&quot;)(.+?)\2\])(\(\))?/g,r=function(t,r,i){var n=i;return r.replace(e,function(t,e,r,i,a){e=e||i,n&amp;&amp;(e in n&amp;&amp;(n=n[e]),&quot;function&quot;==typeof n&amp;&amp;a&amp;&amp;(n=n()))}),n=(null==n||n==i?t:n)+&quot;&quot;};return function(e,i){return String(e).replace(t,function(t,e){return r(t,e,i)})}}(),e.ninja=function(){if(E.was)T.win.Raphael=E.is;else{window.Raphael=void 0;try{delete window.Raphael}catch(t){}}return e},e.st=Pe,t.on(&quot;raphael.DOMload&quot;,function(){w=!0}),function(t,r,i){function n(){/in/.test(t.readyState)?setTimeout(n,9):e.eve(&quot;raphael.DOMload&quot;)}null==t.readyState&amp;&amp;t.addEventListener&amp;&amp;(t.addEventListener(r,i=function(){t.removeEventListener(r,i,!1),t.readyState=&quot;complete&quot;},!1),t.readyState=&quot;loading&quot;),n()}(document,&quot;DOMContentLoaded&quot;),e}.apply(e,i),!(void 0!==n&amp;&amp;(t.exports=n))},function(t,e,r){var i,n;!function(r){var a=&quot;0.5.0&quot;,s=&quot;hasOwnProperty&quot;,o=/[\.\/]/,l=/\s*,\s*/,h=&quot;*&quot;,u=function(){},c=function(t,e){return t-e},f,p,d={n:{}},g=function(){for(var t=0,e=this.length;t&lt;e;t++)if(&quot;undefined&quot;!=typeof this[t])return this[t]},v=function(){for(var t=this.length;--t;)if(&quot;undefined&quot;!=typeof this[t])return this[t]},x=Object.prototype.toString,y=String,m=Array.isArray||function(t){return t instanceof Array||&quot;[object Array]&quot;==x.call(t)};eve=function(t,e){var r=d,i=p,n=Array.prototype.slice.call(arguments,2),a=eve.listeners(t),s=0,o=!1,l,h=[],u={},x=[],y=f,m=[];x.firstDefined=g,x.lastDefined=v,f=t,p=0;for(var b=0,_=a.length;b&lt;_;b++)&quot;zIndex&quot;in a[b]&amp;&amp;(h.push(a[b].zIndex),a[b].zIndex&lt;0&amp;&amp;(u[a[b].zIndex]=a[b]));for(h.sort(c);h[s]&lt;0;)if(l=u[h[s++]],x.push(l.apply(e,n)),p)return p=i,x;for(b=0;b&lt;_;b++)if(l=a[b],&quot;zIndex&quot;in l)if(l.zIndex==h[s]){if(x.push(l.apply(e,n)),p)break;do if(s++,l=u[h[s]],l&amp;&amp;x.push(l.apply(e,n)),p)break;while(l)}else u[l.zIndex]=l;else if(x.push(l.apply(e,n)),p)break;return p=i,f=y,x},eve._events=d,eve.listeners=function(t){var e=m(t)?t:t.split(o),r=d,i,n,a,s,l,u,c,f,p=[r],g=[];for(s=0,l=e.length;s&lt;l;s++){for(f=[],u=0,c=p.length;u&lt;c;u++)for(r=p[u].n,n=[r[e[s]],r[h]],a=2;a--;)i=n[a],i&amp;&amp;(f.push(i),g=g.concat(i.f||[]));p=f}return g},eve.separator=function(t){t?(t=y(t).replace(/(?=[\.\^\]\[\-])/g,&quot;\\&quot;),t=&quot;[&quot;+t+&quot;]&quot;,o=new RegExp(t)):o=/[\.\/]/},eve.on=function(t,e){if(&quot;function&quot;!=typeof e)return function(){};for(var r=m(t)?m(t[0])?t:[t]:y(t).split(l),i=0,n=r.length;i&lt;n;i++)!function(t){for(var r=m(t)?t:y(t).split(o),i=d,n,a=0,s=r.length;a&lt;s;a++)i=i.n,i=i.hasOwnProperty(r[a])&amp;&amp;i[r[a]]||(i[r[a]]={n:{}});for(i.f=i.f||[],a=0,s=i.f.length;a&lt;s;a++)if(i.f[a]==e){n=!0;break}!n&amp;&amp;i.f.push(e)}(r[i]);return function(t){+t==+t&amp;&amp;(e.zIndex=+t)}},eve.f=function(t){var e=[].slice.call(arguments,1);return function(){eve.apply(null,[t,null].concat(e).concat([].slice.call(arguments,0)))}},eve.stop=function(){p=1},eve.nt=function(t){var e=m(f)?f.join(&quot;.&quot;):f;return t?new RegExp(&quot;(?:\\.|\\/|^)&quot;+t+&quot;(?:\\.|\\/|$)&quot;).test(e):e},eve.nts=function(){return m(f)?f:f.split(o)},eve.off=eve.unbind=function(t,e){if(!t)return void(eve._events=d={n:{}});var r=m(t)?m(t[0])?t:[t]:y(t).split(l);if(r.length&gt;1)for(var i=0,n=r.length;i&lt;n;i++)eve.off(r[i],e);else{r=m(t)?t:y(t).split(o);var a,u,c,i,n,f,p,g=[d];for(i=0,n=r.length;i&lt;n;i++)for(f=0;f&lt;g.length;f+=c.length-2){if(c=[f,1],a=g[f].n,r[i]!=h)a[r[i]]&amp;&amp;c.push(a[r[i]]);else for(u in a)a[s](u)&amp;&amp;c.push(a[u]);g.splice.apply(g,c)}for(i=0,n=g.length;i&lt;n;i++)for(a=g[i];a.n;){if(e){if(a.f){for(f=0,p=a.f.length;f&lt;p;f++)if(a.f[f]==e){a.f.splice(f,1);break}!a.f.length&amp;&amp;delete a.f}for(u in a.n)if(a.n[s](u)&amp;&amp;a.n[u].f){var v=a.n[u].f;for(f=0,p=v.length;f&lt;p;f++)if(v[f]==e){v.splice(f,1);break}!v.length&amp;&amp;delete a.n[u].f}}else{delete a.f;for(u in a.n)a.n[s](u)&amp;&amp;a.n[u].f&amp;&amp;delete a.n[u].f}a=a.n}}},eve.once=function(t,e){var r=function(){return eve.off(t,r),e.apply(this,arguments)};return eve.on(t,r)},eve.version=a,eve.toString=function(){return&quot;You are running Eve &quot;+a},&quot;undefined&quot;!=typeof t&amp;&amp;t.exports?t.exports=eve:(i=[],n=function(){return eve}.apply(e,i),!(void 0!==n&amp;&amp;(t.exports=n)))}(this)},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.svg){var e=&quot;hasOwnProperty&quot;,r=String,i=parseFloat,n=parseInt,a=Math,s=a.max,o=a.abs,l=a.pow,h=/[, ]+/,u=t.eve,c=&quot;&quot;,f=&quot; &quot;,p=&quot;http://www.w3.org/1999/xlink&quot;,d={block:&quot;M5,0 0,2.5 5,5z&quot;,classic:&quot;M5,0 0,2.5 5,5 3.5,3 3.5,2z&quot;,diamond:&quot;M2.5,0 5,2.5 2.5,5 0,2.5z&quot;,open:&quot;M6,1 1,3.5 6,6&quot;,oval:&quot;M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z&quot;},g={};t.toString=function(){return&quot;Your browser supports SVG.\nYou are running Raphaël &quot;+this.version};var v=function(i,n){if(n){&quot;string&quot;==typeof i&amp;&amp;(i=v(i));for(var a in n)n[e](a)&amp;&amp;(&quot;xlink:&quot;==a.substring(0,6)?i.setAttributeNS(p,a.substring(6),r(n[a])):i.setAttribute(a,r(n[a])))}else i=t._g.doc.createElementNS(&quot;http://www.w3.org/2000/svg&quot;,i),i.style&amp;&amp;(i.style.webkitTapHighlightColor=&quot;rgba(0,0,0,0)&quot;);return i},x=function(e,n){var h=&quot;linear&quot;,u=e.id+n,f=.5,p=.5,d=e.node,g=e.paper,x=d.style,y=t._g.doc.getElementById(u);if(!y){if(n=r(n).replace(t._radial_gradient,function(t,e,r){if(h=&quot;radial&quot;,e&amp;&amp;r){f=i(e),p=i(r);var n=2*(p&gt;.5)-1;l(f-.5,2)+l(p-.5,2)&gt;.25&amp;&amp;(p=a.sqrt(.25-l(f-.5,2))*n+.5)&amp;&amp;.5!=p&amp;&amp;(p=p.toFixed(5)-1e-5*n)}return c}),n=n.split(/\s*\-\s*/),&quot;linear&quot;==h){var b=n.shift();if(b=-i(b),isNaN(b))return null;var _=[0,0,a.cos(t.rad(b)),a.sin(t.rad(b))],w=1/(s(o(_[2]),o(_[3]))||1);_[2]*=w,_[3]*=w,_[2]&lt;0&amp;&amp;(_[0]=-_[2],_[2]=0),_[3]&lt;0&amp;&amp;(_[1]=-_[3],_[3]=0)}var k=t._parseDots(n);if(!k)return null;if(u=u.replace(/[\(\)\s,\xb0#]/g,&quot;_&quot;),e.gradient&amp;&amp;u!=e.gradient.id&amp;&amp;(g.defs.removeChild(e.gradient),delete e.gradient),!e.gradient){y=v(h+&quot;Gradient&quot;,{id:u}),e.gradient=y,v(y,&quot;radial&quot;==h?{fx:f,fy:p}:{x1:_[0],y1:_[1],x2:_[2],y2:_[3],gradientTransform:e.matrix.invert()}),g.defs.appendChild(y);for(var B=0,C=k.length;B&lt;C;B++)y.appendChild(v(&quot;stop&quot;,{offset:k[B].offset?k[B].offset:B?&quot;100%&quot;:&quot;0%&quot;,&quot;stop-color&quot;:k[B].color||&quot;#fff&quot;,&quot;stop-opacity&quot;:isFinite(k[B].opacity)?k[B].opacity:1}))}}return v(d,{fill:m(u),opacity:1,&quot;fill-opacity&quot;:1}),x.fill=c,x.opacity=1,x.fillOpacity=1,1},y=function(){var t=document.documentMode;return t&amp;&amp;(9===t||10===t)},m=function(t){if(y())return&quot;url(&#39;#&quot;+t+&quot;&#39;)&quot;;var e=document.location,r=e.protocol+&quot;//&quot;+e.host+e.pathname+e.search;return&quot;url(&#39;&quot;+r+&quot;#&quot;+t+&quot;&#39;)&quot;},b=function(t){var e=t.getBBox(1);v(t.pattern,{patternTransform:t.matrix.invert()+&quot; translate(&quot;+e.x+&quot;,&quot;+e.y+&quot;)&quot;})},_=function(i,n,a){if(&quot;path&quot;==i.type){for(var s=r(n).toLowerCase().split(&quot;-&quot;),o=i.paper,l=a?&quot;end&quot;:&quot;start&quot;,h=i.node,u=i.attrs,f=u[&quot;stroke-width&quot;],p=s.length,x=&quot;classic&quot;,y,m,b,_,w,k=3,B=3,C=5;p--;)switch(s[p]){case&quot;block&quot;:case&quot;classic&quot;:case&quot;oval&quot;:case&quot;diamond&quot;:case&quot;open&quot;:case&quot;none&quot;:x=s[p];break;case&quot;wide&quot;:B=5;break;case&quot;narrow&quot;:B=2;break;case&quot;long&quot;:k=5;break;case&quot;short&quot;:k=2}if(&quot;open&quot;==x?(k+=2,B+=2,C+=2,b=1,_=a?4:1,w={fill:&quot;none&quot;,stroke:u.stroke}):(_=b=k/2,w={fill:u.stroke,stroke:&quot;none&quot;}),i._.arrows?a?(i._.arrows.endPath&amp;&amp;g[i._.arrows.endPath]--,i._.arrows.endMarker&amp;&amp;g[i._.arrows.endMarker]--):(i._.arrows.startPath&amp;&amp;g[i._.arrows.startPath]--,i._.arrows.startMarker&amp;&amp;g[i._.arrows.startMarker]--):i._.arrows={},&quot;none&quot;!=x){var S=&quot;raphael-marker-&quot;+x,A=&quot;raphael-marker-&quot;+l+x+k+B+&quot;-obj&quot;+i.id;t._g.doc.getElementById(S)?g[S]++:(o.defs.appendChild(v(v(&quot;path&quot;),{&quot;stroke-linecap&quot;:&quot;round&quot;,d:d[x],id:S})),g[S]=1);var T=t._g.doc.getElementById(A),E;T?(g[A]++,E=T.getElementsByTagName(&quot;use&quot;)[0]):(T=v(v(&quot;marker&quot;),{id:A,markerHeight:B,markerWidth:k,orient:&quot;auto&quot;,refX:_,refY:B/2}),E=v(v(&quot;use&quot;),{&quot;xlink:href&quot;:&quot;#&quot;+S,transform:(a?&quot;rotate(180 &quot;+k/2+&quot; &quot;+B/2+&quot;) &quot;:c)+&quot;scale(&quot;+k/C+&quot;,&quot;+B/C+&quot;)&quot;,&quot;stroke-width&quot;:(1/((k/C+B/C)/2)).toFixed(4)}),T.appendChild(E),o.defs.appendChild(T),g[A]=1),v(E,w);var M=b*(&quot;diamond&quot;!=x&amp;&amp;&quot;oval&quot;!=x);a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-M*f):(y=M*f,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),w={},w[&quot;marker-&quot;+l]=&quot;url(#&quot;+A+&quot;)&quot;,(m||y)&amp;&amp;(w.d=t.getSubpath(u.path,y,m)),v(h,w),i._.arrows[l+&quot;Path&quot;]=S,i._.arrows[l+&quot;Marker&quot;]=A,i._.arrows[l+&quot;dx&quot;]=M,i._.arrows[l+&quot;Type&quot;]=x,i._.arrows[l+&quot;String&quot;]=n}else a?(y=i._.arrows.startdx*f||0,m=t.getTotalLength(u.path)-y):(y=0,m=t.getTotalLength(u.path)-(i._.arrows.enddx*f||0)),i._.arrows[l+&quot;Path&quot;]&amp;&amp;v(h,{d:t.getSubpath(u.path,y,m)}),delete i._.arrows[l+&quot;Path&quot;],delete i._.arrows[l+&quot;Marker&quot;],delete i._.arrows[l+&quot;dx&quot;],delete i._.arrows[l+&quot;Type&quot;],delete i._.arrows[l+&quot;String&quot;];for(w in g)if(g[e](w)&amp;&amp;!g[w]){var N=t._g.doc.getElementById(w);N&amp;&amp;N.parentNode.removeChild(N)}}},w={&quot;-&quot;:[3,1],&quot;.&quot;:[1,1],&quot;-.&quot;:[3,1,1,1],&quot;-..&quot;:[3,1,1,1,1,1],&quot;. &quot;:[1,3],&quot;- &quot;:[4,3],&quot;--&quot;:[8,3],&quot;- .&quot;:[4,3,1,3],&quot;--.&quot;:[8,3,1,3],&quot;--..&quot;:[8,3,1,3,1,3]},k=function(t,e,i){if(e=w[r(e).toLowerCase()]){for(var n=t.attrs[&quot;stroke-width&quot;]||&quot;1&quot;,a={round:n,square:n,butt:0}[t.attrs[&quot;stroke-linecap&quot;]||i[&quot;stroke-linecap&quot;]]||0,s=[],o=e.length;o--;)s[o]=e[o]*n+(o%2?1:-1)*a;v(t.node,{&quot;stroke-dasharray&quot;:s.join(&quot;,&quot;)})}else v(t.node,{&quot;stroke-dasharray&quot;:&quot;none&quot;})},B=function(i,a){var l=i.node,u=i.attrs,f=l.style.visibility;l.style.visibility=&quot;hidden&quot;;for(var d in a)if(a[e](d)){if(!t._availableAttrs[e](d))continue;var g=a[d];switch(u[d]=g,d){case&quot;blur&quot;:i.blur(g);break;case&quot;title&quot;:var y=l.getElementsByTagName(&quot;title&quot;);if(y.length&amp;&amp;(y=y[0]))y.firstChild.nodeValue=g;else{y=v(&quot;title&quot;);var m=t._g.doc.createTextNode(g);y.appendChild(m),l.appendChild(y)}break;case&quot;href&quot;:case&quot;target&quot;:var w=l.parentNode;if(&quot;a&quot;!=w.tagName.toLowerCase()){var B=v(&quot;a&quot;);w.insertBefore(B,l),B.appendChild(l),w=B}&quot;target&quot;==d?w.setAttributeNS(p,&quot;show&quot;,&quot;blank&quot;==g?&quot;new&quot;:g):w.setAttributeNS(p,d,g);break;case&quot;cursor&quot;:l.style.cursor=g;break;case&quot;transform&quot;:i.transform(g);break;case&quot;arrow-start&quot;:_(i,g);break;case&quot;arrow-end&quot;:_(i,g,1);break;case&quot;clip-rect&quot;:var C=r(g).split(h);if(4==C.length){i.clip&amp;&amp;i.clip.parentNode.parentNode.removeChild(i.clip.parentNode);var A=v(&quot;clipPath&quot;),T=v(&quot;rect&quot;);A.id=t.createUUID(),v(T,{x:C[0],y:C[1],width:C[2],height:C[3]}),A.appendChild(T),i.paper.defs.appendChild(A),v(l,{&quot;clip-path&quot;:&quot;url(#&quot;+A.id+&quot;)&quot;}),i.clip=T}if(!g){var E=l.getAttribute(&quot;clip-path&quot;);if(E){var M=t._g.doc.getElementById(E.replace(/(^url\(#|\)$)/g,c));M&amp;&amp;M.parentNode.removeChild(M),v(l,{&quot;clip-path&quot;:c}),delete i.clip}}break;case&quot;path&quot;:&quot;path&quot;==i.type&amp;&amp;(v(l,{d:g?u.path=t._pathToAbsolute(g):&quot;M0,0&quot;}),i._.dirty=1,i._.arrows&amp;&amp;(&quot;startString&quot;in i._.arrows&amp;&amp;_(i,i._.arrows.startString),&quot;endString&quot;in i._.arrows&amp;&amp;_(i,i._.arrows.endString,1)));break;case&quot;width&quot;:if(l.setAttribute(d,g),i._.dirty=1,!u.fx)break;d=&quot;x&quot;,g=u.x;case&quot;x&quot;:u.fx&amp;&amp;(g=-u.x-(u.width||0));case&quot;rx&quot;:if(&quot;rx&quot;==d&amp;&amp;&quot;rect&quot;==i.type)break;case&quot;cx&quot;:l.setAttribute(d,g),i.pattern&amp;&amp;b(i),i._.dirty=1;break;case&quot;height&quot;:if(l.setAttribute(d,g),i._.dirty=1,!u.fy)break;d=&quot;y&quot;,g=u.y;case&quot;y&quot;:u.fy&amp;&amp;(g=-u.y-(u.height||0));case&quot;ry&quot;:if(&quot;ry&quot;==d&amp;&amp;&quot;rect&quot;==i.type)break;case&quot;cy&quot;:l.setAttribute(d,g),i.pattern&amp;&amp;b(i),i._.dirty=1;break;case&quot;r&quot;:&quot;rect&quot;==i.type?v(l,{rx:g,ry:g}):l.setAttribute(d,g),i._.dirty=1;break;case&quot;src&quot;:&quot;image&quot;==i.type&amp;&amp;l.setAttributeNS(p,&quot;href&quot;,g);break;case&quot;stroke-width&quot;:1==i._.sx&amp;&amp;1==i._.sy||(g/=s(o(i._.sx),o(i._.sy))||1),l.setAttribute(d,g),u[&quot;stroke-dasharray&quot;]&amp;&amp;k(i,u[&quot;stroke-dasharray&quot;],a),</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line">i._.arrows&amp;&amp;(&quot;startString&quot;in i._.arrows&amp;&amp;_(i,i._.arrows.startString),&quot;endString&quot;in i._.arrows&amp;&amp;_(i,i._.arrows.endString,1));break;case&quot;stroke-dasharray&quot;:k(i,g,a);break;case&quot;fill&quot;:var N=r(g).match(t._ISURL);if(N){A=v(&quot;pattern&quot;);var L=v(&quot;image&quot;);A.id=t.createUUID(),v(A,{x:0,y:0,patternUnits:&quot;userSpaceOnUse&quot;,height:1,width:1}),v(L,{x:0,y:0,&quot;xlink:href&quot;:N[1]}),A.appendChild(L),function(e){t._preload(N[1],function(){var t=this.offsetWidth,r=this.offsetHeight;v(e,{width:t,height:r}),v(L,{width:t,height:r})})}(A),i.paper.defs.appendChild(A),v(l,{fill:&quot;url(#&quot;+A.id+&quot;)&quot;}),i.pattern=A,i.pattern&amp;&amp;b(i);break}var z=t.getRGB(g);if(z.error){if((&quot;circle&quot;==i.type||&quot;ellipse&quot;==i.type||&quot;r&quot;!=r(g).charAt())&amp;&amp;x(i,g)){if(&quot;opacity&quot;in u||&quot;fill-opacity&quot;in u){var P=t._g.doc.getElementById(l.getAttribute(&quot;fill&quot;).replace(/^url\(#|\)$/g,c));if(P){var F=P.getElementsByTagName(&quot;stop&quot;);v(F[F.length-1],{&quot;stop-opacity&quot;:(&quot;opacity&quot;in u?u.opacity:1)*(&quot;fill-opacity&quot;in u?u[&quot;fill-opacity&quot;]:1)})}}u.gradient=g,u.fill=&quot;none&quot;;break}}else delete a.gradient,delete u.gradient,!t.is(u.opacity,&quot;undefined&quot;)&amp;&amp;t.is(a.opacity,&quot;undefined&quot;)&amp;&amp;v(l,{opacity:u.opacity}),!t.is(u[&quot;fill-opacity&quot;],&quot;undefined&quot;)&amp;&amp;t.is(a[&quot;fill-opacity&quot;],&quot;undefined&quot;)&amp;&amp;v(l,{&quot;fill-opacity&quot;:u[&quot;fill-opacity&quot;]});z[e](&quot;opacity&quot;)&amp;&amp;v(l,{&quot;fill-opacity&quot;:z.opacity&gt;1?z.opacity/100:z.opacity});case&quot;stroke&quot;:z=t.getRGB(g),l.setAttribute(d,z.hex),&quot;stroke&quot;==d&amp;&amp;z[e](&quot;opacity&quot;)&amp;&amp;v(l,{&quot;stroke-opacity&quot;:z.opacity&gt;1?z.opacity/100:z.opacity}),&quot;stroke&quot;==d&amp;&amp;i._.arrows&amp;&amp;(&quot;startString&quot;in i._.arrows&amp;&amp;_(i,i._.arrows.startString),&quot;endString&quot;in i._.arrows&amp;&amp;_(i,i._.arrows.endString,1));break;case&quot;gradient&quot;:(&quot;circle&quot;==i.type||&quot;ellipse&quot;==i.type||&quot;r&quot;!=r(g).charAt())&amp;&amp;x(i,g);break;case&quot;opacity&quot;:u.gradient&amp;&amp;!u[e](&quot;stroke-opacity&quot;)&amp;&amp;v(l,{&quot;stroke-opacity&quot;:g&gt;1?g/100:g});case&quot;fill-opacity&quot;:if(u.gradient){P=t._g.doc.getElementById(l.getAttribute(&quot;fill&quot;).replace(/^url\(#|\)$/g,c)),P&amp;&amp;(F=P.getElementsByTagName(&quot;stop&quot;),v(F[F.length-1],{&quot;stop-opacity&quot;:g}));break}default:&quot;font-size&quot;==d&amp;&amp;(g=n(g,10)+&quot;px&quot;);var R=d.replace(/(\-.)/g,function(t){return t.substring(1).toUpperCase()});l.style[R]=g,i._.dirty=1,l.setAttribute(d,g)}}S(i,a),l.style.visibility=f},C=1.2,S=function(i,a){if(&quot;text&quot;==i.type&amp;&amp;(a[e](&quot;text&quot;)||a[e](&quot;font&quot;)||a[e](&quot;font-size&quot;)||a[e](&quot;x&quot;)||a[e](&quot;y&quot;))){var s=i.attrs,o=i.node,l=o.firstChild?n(t._g.doc.defaultView.getComputedStyle(o.firstChild,c).getPropertyValue(&quot;font-size&quot;),10):10;if(a[e](&quot;text&quot;)){for(s.text=a.text;o.firstChild;)o.removeChild(o.firstChild);for(var h=r(a.text).split(&quot;\n&quot;),u=[],f,p=0,d=h.length;p&lt;d;p++)f=v(&quot;tspan&quot;),p&amp;&amp;v(f,{dy:l*C,x:s.x}),f.appendChild(t._g.doc.createTextNode(h[p])),o.appendChild(f),u[p]=f}else for(u=o.getElementsByTagName(&quot;tspan&quot;),p=0,d=u.length;p&lt;d;p++)p?v(u[p],{dy:l*C,x:s.x}):v(u[0],{dy:0});v(o,{x:s.x,y:s.y}),i._.dirty=1;var g=i._getBBox(),x=s.y-(g.y+g.height/2);x&amp;&amp;t.is(x,&quot;finite&quot;)&amp;&amp;v(u[0],{dy:x})}},A=function(t){return t.parentNode&amp;&amp;&quot;a&quot;===t.parentNode.tagName.toLowerCase()?t.parentNode:t},T=function(e,r){function i(){return(&quot;0000&quot;+(Math.random()*Math.pow(36,5)&lt;&lt;0).toString(36)).slice(-5)}var n=0,a=0;this[0]=this.node=e,e.raphael=!0,this.id=i(),e.raphaelid=this.id,this.matrix=t.matrix(),this.realPath=null,this.paper=r,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!r.bottom&amp;&amp;(r.bottom=this),this.prev=r.top,r.top&amp;&amp;(r.top.next=this),r.top=this,this.next=null},E=t.el;T.prototype=E,E.constructor=T,t._engine.path=function(t,e){var r=v(&quot;path&quot;);e.canvas&amp;&amp;e.canvas.appendChild(r);var i=new T(r,e);return i.type=&quot;path&quot;,B(i,{fill:&quot;none&quot;,stroke:&quot;#000&quot;,path:t}),i},E.rotate=function(t,e,n){if(this.removed)return this;if(t=r(t).split(h),t.length-1&amp;&amp;(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&amp;&amp;(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this.transform(this._.transform.concat([[&quot;r&quot;,t,e,n]])),this},E.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(h),t.length-1&amp;&amp;(e=i(t[1]),n=i(t[2]),a=i(t[3])),t=i(t[0]),null==e&amp;&amp;(e=t),null==a&amp;&amp;(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([[&quot;s&quot;,t,e,n,a]])),this},E.translate=function(t,e){return this.removed?this:(t=r(t).split(h),t.length-1&amp;&amp;(e=i(t[1])),t=i(t[0])||0,e=+e||0,this.transform(this._.transform.concat([[&quot;t&quot;,t,e]])),this)},E.transform=function(r){var i=this._;if(null==r)return i.transform;if(t._extractTransform(this,r),this.clip&amp;&amp;v(this.clip,{transform:this.matrix.invert()}),this.pattern&amp;&amp;b(this),this.node&amp;&amp;v(this.node,{transform:this.matrix}),1!=i.sx||1!=i.sy){var n=this.attrs[e](&quot;stroke-width&quot;)?this.attrs[&quot;stroke-width&quot;]:1;this.attr({&quot;stroke-width&quot;:n})}return this},E.hide=function(){return this.removed||(this.node.style.display=&quot;none&quot;),this},E.show=function(){return this.removed||(this.node.style.display=&quot;&quot;),this},E.remove=function(){var e=A(this.node);if(!this.removed&amp;&amp;e.parentNode){var r=this.paper;r.__set__&amp;&amp;r.__set__.exclude(this),u.unbind(&quot;raphael.*.*.&quot;+this.id),this.gradient&amp;&amp;r.defs.removeChild(this.gradient),t._tear(this,r),e.parentNode.removeChild(e),this.removeData();for(var i in this)this[i]=&quot;function&quot;==typeof this[i]?t._removedFactory(i):null;this.removed=!0}},E._getBBox=function(){if(&quot;none&quot;==this.node.style.display){this.show();var t=!0}var e=!1,r;this.paper.canvas.parentElement?r=this.paper.canvas.parentElement.style:this.paper.canvas.parentNode&amp;&amp;(r=this.paper.canvas.parentNode.style),r&amp;&amp;&quot;none&quot;==r.display&amp;&amp;(e=!0,r.display=&quot;&quot;);var i={};try{i=this.node.getBBox()}catch(n){i={x:this.node.clientLeft,y:this.node.clientTop,width:this.node.clientWidth,height:this.node.clientHeight}}finally{i=i||{},e&amp;&amp;(r.display=&quot;none&quot;)}return t&amp;&amp;this.hide(),i},E.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&amp;&amp;(n[a]=this.attrs[a]);return n.gradient&amp;&amp;&quot;none&quot;==n.fill&amp;&amp;(n.fill=n.gradient)&amp;&amp;delete n.gradient,n.transform=this._.transform,n}if(null==i&amp;&amp;t.is(r,&quot;string&quot;)){if(&quot;fill&quot;==r&amp;&amp;&quot;none&quot;==this.attrs.fill&amp;&amp;this.attrs.gradient)return this.attrs.gradient;if(&quot;transform&quot;==r)return this._.transform;for(var s=r.split(h),o={},l=0,c=s.length;l&lt;c;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],&quot;function&quot;)?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return c-1?o:o[s[0]]}if(null==i&amp;&amp;t.is(r,&quot;array&quot;)){for(o={},l=0,c=r.length;l&lt;c;l++)o[r[l]]=this.attr(r[l]);return o}if(null!=i){var f={};f[r]=i}else null!=r&amp;&amp;t.is(r,&quot;object&quot;)&amp;&amp;(f=r);for(var p in f)u(&quot;raphael.attr.&quot;+p+&quot;.&quot;+this.id,this,f[p]);for(p in this.paper.customAttributes)if(this.paper.customAttributes[e](p)&amp;&amp;f[e](p)&amp;&amp;t.is(this.paper.customAttributes[p],&quot;function&quot;)){var d=this.paper.customAttributes[p].apply(this,[].concat(f[p]));this.attrs[p]=f[p];for(var g in d)d[e](g)&amp;&amp;(f[g]=d[g])}return B(this,f),this},E.toFront=function(){if(this.removed)return this;var e=A(this.node);e.parentNode.appendChild(e);var r=this.paper;return r.top!=this&amp;&amp;t._tofront(this,r),this},E.toBack=function(){if(this.removed)return this;var e=A(this.node),r=e.parentNode;r.insertBefore(e,r.firstChild),t._toback(this,this.paper);var i=this.paper;return this},E.insertAfter=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[e.length-1].node);return i.nextSibling?i.parentNode.insertBefore(r,i.nextSibling):i.parentNode.appendChild(r),t._insertafter(this,e,this.paper),this},E.insertBefore=function(e){if(this.removed||!e)return this;var r=A(this.node),i=A(e.node||e[0].node);return i.parentNode.insertBefore(r,i),t._insertbefore(this,e,this.paper),this},E.blur=function(e){var r=this;if(0!==+e){var i=v(&quot;filter&quot;),n=v(&quot;feGaussianBlur&quot;);r.attrs.blur=e,i.id=t.createUUID(),v(n,{stdDeviation:+e||1.5}),i.appendChild(n),r.paper.defs.appendChild(i),r._blur=i,v(r.node,{filter:&quot;url(#&quot;+i.id+&quot;)&quot;})}else r._blur&amp;&amp;(r._blur.parentNode.removeChild(r._blur),delete r._blur,delete r.attrs.blur),r.node.removeAttribute(&quot;filter&quot;);return r},t._engine.circle=function(t,e,r,i){var n=v(&quot;circle&quot;);t.canvas&amp;&amp;t.canvas.appendChild(n);var a=new T(n,t);return a.attrs={cx:e,cy:r,r:i,fill:&quot;none&quot;,stroke:&quot;#000&quot;},a.type=&quot;circle&quot;,v(n,a.attrs),a},t._engine.rect=function(t,e,r,i,n,a){var s=v(&quot;rect&quot;);t.canvas&amp;&amp;t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:e,y:r,width:i,height:n,rx:a||0,ry:a||0,fill:&quot;none&quot;,stroke:&quot;#000&quot;},o.type=&quot;rect&quot;,v(s,o.attrs),o},t._engine.ellipse=function(t,e,r,i,n){var a=v(&quot;ellipse&quot;);t.canvas&amp;&amp;t.canvas.appendChild(a);var s=new T(a,t);return s.attrs={cx:e,cy:r,rx:i,ry:n,fill:&quot;none&quot;,stroke:&quot;#000&quot;},s.type=&quot;ellipse&quot;,v(a,s.attrs),s},t._engine.image=function(t,e,r,i,n,a){var s=v(&quot;image&quot;);v(s,{x:r,y:i,width:n,height:a,preserveAspectRatio:&quot;none&quot;}),s.setAttributeNS(p,&quot;href&quot;,e),t.canvas&amp;&amp;t.canvas.appendChild(s);var o=new T(s,t);return o.attrs={x:r,y:i,width:n,height:a,src:e},o.type=&quot;image&quot;,o},t._engine.text=function(e,r,i,n){var a=v(&quot;text&quot;);e.canvas&amp;&amp;e.canvas.appendChild(a);var s=new T(a,e);return s.attrs={x:r,y:i,&quot;text-anchor&quot;:&quot;middle&quot;,text:n,&quot;font-family&quot;:t._availableAttrs[&quot;font-family&quot;],&quot;font-size&quot;:t._availableAttrs[&quot;font-size&quot;],stroke:&quot;none&quot;,fill:&quot;#000&quot;},s.type=&quot;text&quot;,B(s,s.attrs),s},t._engine.setSize=function(t,e){return this.width=t||this.width,this.height=e||this.height,this.canvas.setAttribute(&quot;width&quot;,this.width),this.canvas.setAttribute(&quot;height&quot;,this.height),this._viewBox&amp;&amp;this.setViewBox.apply(this,this._viewBox),this},t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e&amp;&amp;e.container,i=e.x,n=e.y,a=e.width,s=e.height;if(!r)throw new Error(&quot;SVG container not found.&quot;);var o=v(&quot;svg&quot;),l=&quot;overflow:hidden;&quot;,h;return i=i||0,n=n||0,a=a||512,s=s||342,v(o,{height:s,version:1.1,width:a,xmlns:&quot;http://www.w3.org/2000/svg&quot;,&quot;xmlns:xlink&quot;:&quot;http://www.w3.org/1999/xlink&quot;}),1==r?(o.style.cssText=l+&quot;position:absolute;left:&quot;+i+&quot;px;top:&quot;+n+&quot;px&quot;,t._g.doc.body.appendChild(o),h=1):(o.style.cssText=l+&quot;position:relative&quot;,r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o)),r=new t._Paper,r.width=a,r.height=s,r.canvas=o,r.clear(),r._left=r._top=0,h&amp;&amp;(r.renderfix=function(){}),r.renderfix(),r},t._engine.setViewBox=function(t,e,r,i,n){u(&quot;raphael.setViewBox&quot;,this,this._viewBox,[t,e,r,i,n]);var a=this.getSize(),o=s(r/a.width,i/a.height),l=this.top,h=n?&quot;xMidYMid meet&quot;:&quot;xMinYMin&quot;,c,p;for(null==t?(this._vbSize&amp;&amp;(o=1),delete this._vbSize,c=&quot;0 0 &quot;+this.width+f+this.height):(this._vbSize=o,c=t+f+e+f+r+f+i),v(this.canvas,{viewBox:c,preserveAspectRatio:h});o&amp;&amp;l;)p=&quot;stroke-width&quot;in l.attrs?l.attrs[&quot;stroke-width&quot;]:1,l.attr({&quot;stroke-width&quot;:p}),l._.dirty=1,l._.dirtyT=1,l=l.prev;return this._viewBox=[t,e,r,i,!!n],this},t.prototype.renderfix=function(){var t=this.canvas,e=t.style,r;try{r=t.getScreenCTM()||t.createSVGMatrix()}catch(i){r=t.createSVGMatrix()}var n=-r.e%1,a=-r.f%1;(n||a)&amp;&amp;(n&amp;&amp;(this._left=(this._left+n)%1,e.left=this._left+&quot;px&quot;),a&amp;&amp;(this._top=(this._top+a)%1,e.top=this._top+&quot;px&quot;))},t.prototype.clear=function(){t.eve(&quot;raphael.clear&quot;,this);for(var e=this.canvas;e.firstChild;)e.removeChild(e.firstChild);this.bottom=this.top=null,(this.desc=v(&quot;desc&quot;)).appendChild(t._g.doc.createTextNode(&quot;Created with Raphaël &quot;+t.version)),e.appendChild(this.desc),e.appendChild(this.defs=v(&quot;defs&quot;))},t.prototype.remove=function(){u(&quot;raphael.remove&quot;,this),this.canvas.parentNode&amp;&amp;this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]=&quot;function&quot;==typeof this[e]?t._removedFactory(e):null};var M=t.st;for(var N in E)E[e](N)&amp;&amp;!M[e](N)&amp;&amp;(M[N]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(N))}}.apply(e,i),!(void 0!==n&amp;&amp;(t.exports=n))},function(t,e,r){var i,n;i=[r(1)],n=function(t){if(!t||t.vml){var e=&quot;hasOwnProperty&quot;,r=String,i=parseFloat,n=Math,a=n.round,s=n.max,o=n.min,l=n.abs,h=&quot;fill&quot;,u=/[, ]+/,c=t.eve,f=&quot; progid:DXImageTransform.Microsoft&quot;,p=&quot; &quot;,d=&quot;&quot;,g={M:&quot;m&quot;,L:&quot;l&quot;,C:&quot;c&quot;,Z:&quot;x&quot;,m:&quot;t&quot;,l:&quot;r&quot;,c:&quot;v&quot;,z:&quot;x&quot;},v=/([clmz]),?([^clmz]*)/gi,x=/ progid:\S+Blur\([^\)]+\)/g,y=/-?[^,\s-]+/g,m=&quot;position:absolute;left:0;top:0;width:1px;height:1px;behavior:url(#default#VML)&quot;,b=21600,_={path:1,rect:1,image:1},w={circle:1,ellipse:1},k=function(e){var i=/[ahqstv]/gi,n=t._pathToAbsolute;if(r(e).match(i)&amp;&amp;(n=t._path2curve),i=/[clmz]/g,n==t._pathToAbsolute&amp;&amp;!r(e).match(i)){var s=r(e).replace(v,function(t,e,r){var i=[],n=&quot;m&quot;==e.toLowerCase(),s=g[e];return r.replace(y,function(t){n&amp;&amp;2==i.length&amp;&amp;(s+=i+g[&quot;m&quot;==e?&quot;l&quot;:&quot;L&quot;],i=[]),i.push(a(t*b))}),s+i});return s}var o=n(e),l,h;s=[];for(var u=0,c=o.length;u&lt;c;u++){l=o[u],h=o[u][0].toLowerCase(),&quot;z&quot;==h&amp;&amp;(h=&quot;x&quot;);for(var f=1,x=l.length;f&lt;x;f++)h+=a(l[f]*b)+(f!=x-1?&quot;,&quot;:d);s.push(h)}return s.join(p)},B=function(e,r,i){var n=t.matrix();return n.rotate(-e,.5,.5),{dx:n.x(r,i),dy:n.y(r,i)}},C=function(t,e,r,i,n,a){var s=t._,o=t.matrix,u=s.fillpos,c=t.node,f=c.style,d=1,g=&quot;&quot;,v,x=b/e,y=b/r;if(f.visibility=&quot;hidden&quot;,e&amp;&amp;r){if(c.coordsize=l(x)+p+l(y),f.rotation=a*(e*r&lt;0?-1:1),a){var m=B(a,i,n);i=m.dx,n=m.dy}if(e&lt;0&amp;&amp;(g+=&quot;x&quot;),r&lt;0&amp;&amp;(g+=&quot; y&quot;)&amp;&amp;(d=-1),f.flip=g,c.coordorigin=i*-x+p+n*-y,u||s.fillsize){var _=c.getElementsByTagName(h);_=_&amp;&amp;_[0],c.removeChild(_),u&amp;&amp;(m=B(a,o.x(u[0],u[1]),o.y(u[0],u[1])),_.position=m.dx*d+p+m.dy*d),s.fillsize&amp;&amp;(_.size=s.fillsize[0]*l(e)+p+s.fillsize[1]*l(r)),c.appendChild(_)}f.visibility=&quot;visible&quot;}};t.toString=function(){return&quot;Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël &quot;+this.version};var S=function(t,e,i){for(var n=r(e).toLowerCase().split(&quot;-&quot;),a=i?&quot;end&quot;:&quot;start&quot;,s=n.length,o=&quot;classic&quot;,l=&quot;medium&quot;,h=&quot;medium&quot;;s--;)switch(n[s]){case&quot;block&quot;:case&quot;classic&quot;:case&quot;oval&quot;:case&quot;diamond&quot;:case&quot;open&quot;:case&quot;none&quot;:o=n[s];break;case&quot;wide&quot;:case&quot;narrow&quot;:h=n[s];break;case&quot;long&quot;:case&quot;short&quot;:l=n[s]}var u=t.node.getElementsByTagName(&quot;stroke&quot;)[0];u[a+&quot;arrow&quot;]=o,u[a+&quot;arrowlength&quot;]=l,u[a+&quot;arrowwidth&quot;]=h},A=function(n,l){n.attrs=n.attrs||{};var c=n.node,f=n.attrs,g=c.style,v,x=_[n.type]&amp;&amp;(l.x!=f.x||l.y!=f.y||l.width!=f.width||l.height!=f.height||l.cx!=f.cx||l.cy!=f.cy||l.rx!=f.rx||l.ry!=f.ry||l.r!=f.r),y=w[n.type]&amp;&amp;(f.cx!=l.cx||f.cy!=l.cy||f.r!=l.r||f.rx!=l.rx||f.ry!=l.ry),m=n;for(var B in l)l[e](B)&amp;&amp;(f[B]=l[B]);if(x&amp;&amp;(f.path=t._getPath[n.type](n),n._.dirty=1),l.href&amp;&amp;(c.href=l.href),l.title&amp;&amp;(c.title=l.title),l.target&amp;&amp;(c.target=l.target),l.cursor&amp;&amp;(g.cursor=l.cursor),&quot;blur&quot;in l&amp;&amp;n.blur(l.blur),(l.path&amp;&amp;&quot;path&quot;==n.type||x)&amp;&amp;(c.path=k(~r(f.path).toLowerCase().indexOf(&quot;r&quot;)?t._pathToAbsolute(f.path):f.path),n._.dirty=1,&quot;image&quot;==n.type&amp;&amp;(n._.fillpos=[f.x,f.y],n._.fillsize=[f.width,f.height],C(n,1,1,0,0,0))),&quot;transform&quot;in l&amp;&amp;n.transform(l.transform),y){var A=+f.cx,E=+f.cy,M=+f.rx||+f.r||0,L=+f.ry||+f.r||0;c.path=t.format(&quot;ar{0},{1},{2},{3},{4},{1},{4},{1}x&quot;,a((A-M)*b),a((E-L)*b),a((A+M)*b),a((E+L)*b),a(A*b)),n._.dirty=1}if(&quot;clip-rect&quot;in l){var z=r(l[&quot;clip-rect&quot;]).split(u);if(4==z.length){z[2]=+z[2]+ +z[0],z[3]=+z[3]+ +z[1];var P=c.clipRect||t._g.doc.createElement(&quot;div&quot;),F=P.style;F.clip=t.format(&quot;rect({1}px {2}px {3}px {0}px)&quot;,z),c.clipRect||(F.position=&quot;absolute&quot;,F.top=0,F.left=0,F.width=n.paper.width+&quot;px&quot;,F.height=n.paper.height+&quot;px&quot;,c.parentNode.insertBefore(P,c),P.appendChild(c),c.clipRect=P)}l[&quot;clip-rect&quot;]||c.clipRect&amp;&amp;(c.clipRect.style.clip=&quot;auto&quot;)}if(n.textpath){var R=n.textpath.style;l.font&amp;&amp;(R.font=l.font),l[&quot;font-family&quot;]&amp;&amp;(R.fontFamily=&#39;&quot;&#39;+l[&quot;font-family&quot;].split(&quot;,&quot;)[0].replace(/^[&#39;&quot;]+|[&#39;&quot;]+$/g,d)+&#39;&quot;&#39;),l[&quot;font-size&quot;]&amp;&amp;(R.fontSize=l[&quot;font-size&quot;]),l[&quot;font-weight&quot;]&amp;&amp;(R.fontWeight=l[&quot;font-weight&quot;]),l[&quot;font-style&quot;]&amp;&amp;(R.fontStyle=l[&quot;font-style&quot;])}if(&quot;arrow-start&quot;in l&amp;&amp;S(m,l[&quot;arrow-start&quot;]),&quot;arrow-end&quot;in l&amp;&amp;S(m,l[&quot;arrow-end&quot;],1),null!=l.opacity||null!=l.fill||null!=l.src||null!=l.stroke||null!=l[&quot;stroke-width&quot;]||null!=l[&quot;stroke-opacity&quot;]||null!=l[&quot;fill-opacity&quot;]||null!=l[&quot;stroke-dasharray&quot;]||null!=l[&quot;stroke-miterlimit&quot;]||null!=l[&quot;stroke-linejoin&quot;]||null!=l[&quot;stroke-linecap&quot;]){var j=c.getElementsByTagName(h),I=!1;if(j=j&amp;&amp;j[0],!j&amp;&amp;(I=j=N(h)),&quot;image&quot;==n.type&amp;&amp;l.src&amp;&amp;(j.src=l.src),l.fill&amp;&amp;(j.on=!0),null!=j.on&amp;&amp;&quot;none&quot;!=l.fill&amp;&amp;null!==l.fill||(j.on=!1),j.on&amp;&amp;l.fill){var q=r(l.fill).match(t._ISURL);if(q){j.parentNode==c&amp;&amp;c.removeChild(j),j.rotate=!0,j.src=q[1],j.type=&quot;tile&quot;;var D=n.getBBox(1);j.position=D.x+p+D.y,n._.fillpos=[D.x,D.y],t._preload(q[1],function(){n._.fillsize=[this.offsetWidth,this.offsetHeight]})}else j.color=t.getRGB(l.fill).hex,j.src=d,j.type=&quot;solid&quot;,t.getRGB(l.fill).error&amp;&amp;(m.type in{circle:1,ellipse:1}||&quot;r&quot;!=r(l.fill).charAt())&amp;&amp;T(m,l.fill,j)&amp;&amp;(f.fill=&quot;none&quot;,f.gradient=l.fill,j.rotate=!1)}if(&quot;fill-opacity&quot;in l||&quot;opacity&quot;in l){var V=((+f[&quot;fill-opacity&quot;]+1||2)-1)*((+f.opacity+1||2)-1)*((+t.getRGB(l.fill).o+1||2)-1);V=o(s(V,0),1),j.opacity=V,j.src&amp;&amp;(j.color=&quot;none&quot;)}c.appendChild(j);var O=c.getElementsByTagName(&quot;stroke&quot;)&amp;&amp;c.getElementsByTagName(&quot;stroke&quot;)[0],Y=!1;!O&amp;&amp;(Y=O=N(&quot;stroke&quot;)),(l.stroke&amp;&amp;&quot;none&quot;!=l.stroke||l[&quot;stroke-width&quot;]||null!=l[&quot;stroke-opacity&quot;]||l[&quot;stroke-dasharray&quot;]||l[&quot;stroke-miterlimit&quot;]||l[&quot;stroke-linejoin&quot;]||l[&quot;stroke-linecap&quot;])&amp;&amp;(O.on=!0),(&quot;none&quot;==l.stroke||null===l.stroke||null==O.on||0==l.stroke||0==l[&quot;stroke-width&quot;])&amp;&amp;(O.on=!1);var W=t.getRGB(l.stroke);O.on&amp;&amp;l.stroke&amp;&amp;(O.color=W.hex),V=((+f[&quot;stroke-opacity&quot;]+1||2)-1)*((+f.opacity+1||2)-1)*((+W.o+1||2)-1);var G=.75*(i(l[&quot;stroke-width&quot;])||1);if(V=o(s(V,0),1),null==l[&quot;stroke-width&quot;]&amp;&amp;(G=f[&quot;stroke-width&quot;]),l[&quot;stroke-width&quot;]&amp;&amp;(O.weight=G),G&amp;&amp;G&lt;1&amp;&amp;(V*=G)&amp;&amp;(O.weight=1),O.opacity=V,l[&quot;stroke-linejoin&quot;]&amp;&amp;(O.joinstyle=l[&quot;stroke-linejoin&quot;]||&quot;miter&quot;),O.miterlimit=l[&quot;stroke-miterlimit&quot;]||8,l[&quot;stroke-linecap&quot;]&amp;&amp;(O.endcap=&quot;butt&quot;==l[&quot;stroke-linecap&quot;]?&quot;flat&quot;:&quot;square&quot;==l[&quot;stroke-linecap&quot;]?&quot;square&quot;:&quot;round&quot;),&quot;stroke-dasharray&quot;in l){var H={&quot;-&quot;:&quot;shortdash&quot;,&quot;.&quot;:&quot;shortdot&quot;,&quot;-.&quot;:&quot;shortdashdot&quot;,&quot;-..&quot;:&quot;shortdashdotdot&quot;,&quot;. &quot;:&quot;dot&quot;,&quot;- &quot;:&quot;dash&quot;,&quot;--&quot;:&quot;longdash&quot;,&quot;- .&quot;:&quot;dashdot&quot;,&quot;--.&quot;:&quot;longdashdot&quot;,&quot;--..&quot;:&quot;longdashdotdot&quot;};O.dashstyle=H[e](l[&quot;stroke-dasharray&quot;])?H[l[&quot;stroke-dasharray&quot;]]:d}Y&amp;&amp;c.appendChild(O)}if(&quot;text&quot;==m.type){m.paper.canvas.style.display=d;var X=m.paper.span,U=100,$=f.font&amp;&amp;f.font.match(/\d+(?:\.\d*)?(?=px)/);g=X.style,f.font&amp;&amp;(g.font=f.font),f[&quot;font-family&quot;]&amp;&amp;(g.fontFamily=f[&quot;font-family&quot;]),f[&quot;font-weight&quot;]&amp;&amp;(g.fontWeight=f[&quot;font-weight&quot;]),f[&quot;font-style&quot;]&amp;&amp;(g.fontStyle=f[&quot;font-style&quot;]),$=i(f[&quot;font-size&quot;]||$&amp;&amp;$[0])||10,g.fontSize=$*U+&quot;px&quot;,m.textpath.string&amp;&amp;(X.innerHTML=r(m.textpath.string).replace(/&lt;/g,&quot;&amp;#60;&quot;).replace(/&amp;/g,&quot;&amp;#38;&quot;).replace(/\n/g,&quot;&lt;br&gt;&quot;));var Z=X.getBoundingClientRect();m.W=f.w=(Z.right-Z.left)/U,m.H=f.h=(Z.bottom-Z.top)/U,m.X=f.x,m.Y=f.y+m.H/2,(&quot;x&quot;in l||&quot;y&quot;in l)&amp;&amp;(m.path.v=t.format(&quot;m{0},{1}l{2},{1}&quot;,a(f.x*b),a(f.y*b),a(f.x*b)+1));for(var Q=[&quot;x&quot;,&quot;y&quot;,&quot;text&quot;,&quot;font&quot;,&quot;font-family&quot;,&quot;font-weight&quot;,&quot;font-style&quot;,&quot;font-size&quot;],J=0,K=Q.length;J&lt;K;J++)if(Q[J]in l){m._.dirty=1;break}switch(f[&quot;text-anchor&quot;]){case&quot;start&quot;:m.textpath.style[&quot;v-text-align&quot;]=&quot;left&quot;,m.bbx=m.W/2;break;case&quot;end&quot;:m.textpath.style[&quot;v-text-align&quot;]=&quot;right&quot;,m.bbx=-m.W/2;break;default:m.textpath.style[&quot;v-text-align&quot;]=&quot;center&quot;,m.bbx=0}m.textpath.style[&quot;v-text-kern&quot;]=!0}},T=function(e,a,s){e.attrs=e.attrs||{};var o=e.attrs,l=Math.pow,h,u,c=&quot;linear&quot;,f=&quot;.5 .5&quot;;if(e.attrs.gradient=a,a=r(a).replace(t._radial_gradient,function(t,e,r){return c=&quot;radial&quot;,e&amp;&amp;r&amp;&amp;(e=i(e),r=i(r),l(e-.5,2)+l(r-.5,2)&gt;.25&amp;&amp;(r=n.sqrt(.25-l(e-.5,2))*(2*(r&gt;.5)-1)+.5),f=e+p+r),d}),a=a.split(/\s*\-\s*/),&quot;linear&quot;==c){var g=a.shift();if(g=-i(g),isNaN(g))return null}var v=t._parseDots(a);if(!v)return null;if(e=e.shape||e.node,v.length){e.removeChild(s),s.on=!0,s.method=&quot;none&quot;,s.color=v[0].color,s.color2=v[v.length-1].color;for(var x=[],y=0,m=v.length;y&lt;m;y++)v[y].offset&amp;&amp;x.push(v[y].offset+p+v[y].color);s.colors=x.length?x.join():&quot;0% &quot;+s.color,&quot;radial&quot;==c?(s.type=&quot;gradientTitle&quot;,s.focus=&quot;100%&quot;,s.focussize=&quot;0 0&quot;,s.focusposition=f,s.angle=0):(s.type=&quot;gradient&quot;,s.angle=(270-g)%360),e.appendChild(s)}return 1},E=function(e,r){this[0]=this.node=e,e.raphael=!0,this.id=t._oid++,e.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=r,this.matrix=t.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!r.bottom&amp;&amp;(r.bottom=this),this.prev=r.top,r.top&amp;&amp;(r.top.next=this),r.top=this,this.next=null},M=t.el;E.prototype=M,M.constructor=E,M.transform=function(e){if(null==e)return this._.transform;var i=this.paper._viewBoxShift,n=i?&quot;s&quot;+[i.scale,i.scale]+&quot;-1-1t&quot;+[i.dx,i.dy]:d,a;i&amp;&amp;(a=e=r(e).replace(/\.{3}|\u2026/g,this._.transform||d)),t._extractTransform(this,n+e);var s=this.matrix.clone(),o=this.skew,l=this.node,h,u=~r(this.attrs.fill).indexOf(&quot;-&quot;),c=!r(this.attrs.fill).indexOf(&quot;url(&quot;);if(s.translate(1,1),c||u||&quot;image&quot;==this.type)if(o.matrix=&quot;1 0 0 1&quot;,o.offset=&quot;0 0&quot;,h=s.split(),u&amp;&amp;h.noRotation||!h.isSimple){l.style.filter=s.toFilter();var f=this.getBBox(),g=this.getBBox(1),v=f.x-g.x,x=f.y-g.y;l.coordorigin=v*-b+p+x*-b,C(this,1,1,v,x,0)}else l.style.filter=d,C(this,h.scalex,h.scaley,h.dx,h.dy,h.rotate);else l.style.filter=d,o.matrix=r(s),o.offset=s.offset();return null!==a&amp;&amp;(this._.transform=a,t._extractTransform(this,a)),this},M.rotate=function(t,e,n){if(this.removed)return this;if(null!=t){if(t=r(t).split(u),t.length-1&amp;&amp;(e=i(t[1]),n=i(t[2])),t=i(t[0]),null==n&amp;&amp;(e=n),null==e||null==n){var a=this.getBBox(1);e=a.x+a.width/2,n=a.y+a.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([[&quot;r&quot;,t,e,n]])),this}},M.translate=function(t,e){return this.removed?this:(t=r(t).split(u),t.length-1&amp;&amp;(e=i(t[1])),t=i(t[0])||0,e=+e||0,this._.bbox&amp;&amp;(this._.bbox.x+=t,this._.bbox.y+=e),this.transform(this._.transform.concat([[&quot;t&quot;,t,e]])),this)},M.scale=function(t,e,n,a){if(this.removed)return this;if(t=r(t).split(u),t.length-1&amp;&amp;(e=i(t[1]),n=i(t[2]),a=i(t[3]),isNaN(n)&amp;&amp;(n=null),isNaN(a)&amp;&amp;(a=null)),t=i(t[0]),null==e&amp;&amp;(e=t),null==a&amp;&amp;(n=a),null==n||null==a)var s=this.getBBox(1);return n=null==n?s.x+s.width/2:n,a=null==a?s.y+s.height/2:a,this.transform(this._.transform.concat([[&quot;s&quot;,t,e,n,a]])),this._.dirtyT=1,this},M.hide=function(){return!this.removed&amp;&amp;(this.node.style.display=&quot;none&quot;),this},M.show=function(){return!this.removed&amp;&amp;(this.node.style.display=d),this},M.auxGetBBox=t.el.getBBox,M.getBBox=function(){var t=this.auxGetBBox();if(this.paper&amp;&amp;this.paper._viewBoxShift){var e={},r=1/this.paper._viewBoxShift.scale;return e.x=t.x-this.paper._viewBoxShift.dx,e.x*=r,e.y=t.y-this.paper._viewBoxShift.dy,e.y*=r,e.width=t.width*r,e.height=t.height*r,e.x2=e.x+e.width,e.y2=e.y+e.height,e}return t},M._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},M.remove=function(){if(!this.removed&amp;&amp;this.node.parentNode){this.paper.__set__&amp;&amp;this.paper.__set__.exclude(this),t.eve.unbind(&quot;raphael.*.*.&quot;+this.id),t._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&amp;&amp;this.shape.parentNode.removeChild(this.shape);for(var e in this)this[e]=&quot;function&quot;==typeof this[e]?t._removedFactory(e):null;this.removed=!0}},M.attr=function(r,i){if(this.removed)return this;if(null==r){var n={};for(var a in this.attrs)this.attrs[e](a)&amp;&amp;(n[a]=this.attrs[a]);return n.gradient&amp;&amp;&quot;none&quot;==n.fill&amp;&amp;(n.fill=n.gradient)&amp;&amp;delete n.gradient,n.transform=this._.transform,n}if(null==i&amp;&amp;t.is(r,&quot;string&quot;)){if(r==h&amp;&amp;&quot;none&quot;==this.attrs.fill&amp;&amp;this.attrs.gradient)return this.attrs.gradient;for(var s=r.split(u),o={},l=0,f=s.length;l&lt;f;l++)r=s[l],r in this.attrs?o[r]=this.attrs[r]:t.is(this.paper.customAttributes[r],&quot;function&quot;)?o[r]=this.paper.customAttributes[r].def:o[r]=t._availableAttrs[r];return f-1?o:o[s[0]]}if(this.attrs&amp;&amp;null==i&amp;&amp;t.is(r,&quot;array&quot;)){for(o={},l=0,f=r.length;l&lt;f;l++)o[r[l]]=this.attr(r[l]);return o}var p;null!=i&amp;&amp;(p={},p[r]=i),null==i&amp;&amp;t.is(r,&quot;object&quot;)&amp;&amp;(p=r);for(var d in p)c(&quot;raphael.attr.&quot;+d+&quot;.&quot;+this.id,this,p[d]);if(p){for(d in this.paper.customAttributes)if(this.paper.customAttributes[e](d)&amp;&amp;p[e](d)&amp;&amp;t.is(this.paper.customAttributes[d],&quot;function&quot;)){var g=this.paper.customAttributes[d].apply(this,[].concat(p[d]));this.attrs[d]=p[d];for(var v in g)g[e](v)&amp;&amp;(p[v]=g[v])}p.text&amp;&amp;&quot;text&quot;==this.type&amp;&amp;(this.textpath.string=p.text),A(this,p)}return this},M.toFront=function(){return!this.removed&amp;&amp;this.node.parentNode.appendChild(this.node),this.paper&amp;&amp;this.paper.top!=this&amp;&amp;t._tofront(this,this.paper),this},M.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&amp;&amp;(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),t._toback(this,this.paper)),this)},M.insertAfter=function(e){return this.removed?this:(e.constructor==t.st.constructor&amp;&amp;(e=e[e.length-1]),e.node.nextSibling?e.node.parentNode.insertBefore(this.node,e.node.nextSibling):e.node.parentNode.appendChild(this.node),t._insertafter(this,e,this.paper),this)},M.insertBefore=function(e){return this.removed?this:(e.constructor==t.st.constructor&amp;&amp;(e=e[0]),e.node.parentNode.insertBefore(this.node,e.node),t._insertbefore(this,e,this.paper),this)},M.blur=function(e){var r=this.node.runtimeStyle,i=r.filter;return i=i.replace(x,d),0!==+e?(this.attrs.blur=e,r.filter=i+p+f+&quot;.Blur(pixelradius=&quot;+(+e||1.5)+&quot;)&quot;,r.margin=t.format(&quot;-{0}px 0 0 -{0}px&quot;,a(+e||1.5))):(r.filter=i,r.margin=0,delete this.attrs.blur),this},t._engine.path=function(t,e){var r=N(&quot;shape&quot;);r.style.cssText=m,r.coordsize=b+p+b,r.coordorigin=e.coordorigin;var i=new E(r,e),n={fill:&quot;none&quot;,stroke:&quot;#000&quot;};t&amp;&amp;(n.path=t),i.type=&quot;path&quot;,i.path=[],i.Path=d,A(i,n),e.canvas&amp;&amp;e.canvas.appendChild(r);var a=N(&quot;skew&quot;);return a.on=!0,r.appendChild(a),i.skew=a,i.transform(d),i},t._engine.rect=function(e,r,i,n,a,s){var o=t._rectPath(r,i,n,a,s),l=e.path(o),h=l.attrs;return l.X=h.x=r,l.Y=h.y=i,l.W=h.width=n,l.H=h.height=a,h.r=s,h.path=o,l.type=&quot;rect&quot;,l},t._engine.ellipse=function(t,e,r,i,n){var a=t.path(),s=a.attrs;return a.X=e-i,a.Y=r-n,a.W=2*i,a.H=2*n,a.type=&quot;ellipse&quot;,A(a,{cx:e,cy:r,rx:i,ry:n}),a},t._engine.circle=function(t,e,r,i){var n=t.path(),a=n.attrs;return n.X=e-i,n.Y=r-i,n.W=n.H=2*i,n.type=&quot;circle&quot;,A(n,{cx:e,cy:r,r:i}),n},t._engine.image=function(e,r,i,n,a,s){var o=t._rectPath(i,n,a,s),l=e.path(o).attr({stroke:&quot;none&quot;}),u=l.attrs,c=l.node,f=c.getElementsByTagName(h)[0];return u.src=r,l.X=u.x=i,l.Y=u.y=n,l.W=u.width=a,l.H=u.height=s,u.path=o,l.type=&quot;image&quot;,f.parentNode==c&amp;&amp;c.removeChild(f),f.rotate=!0,f.src=r,f.type=&quot;tile&quot;,l._.fillpos=[i,n],l._.fillsize=[a,s],c.appendChild(f),C(l,1,1,0,0,0),l},t._engine.text=function(e,i,n,s){var o=N(&quot;shape&quot;),l=N(&quot;path&quot;),h=N(&quot;textpath&quot;);i=i||0,n=n||0,s=s||&quot;&quot;,l.v=t.format(&quot;m{0},{1}l{2},{1}&quot;,a(i*b),a(n*b),a(i*b)+1),l.textpathok=!0,h.string=r(s),h.on=!0,o.style.cssText=m,o.coordsize=b+p+b,o.coordorigin=&quot;0 0&quot;;var u=new E(o,e),c={fill:&quot;#000&quot;,stroke:&quot;none&quot;,font:t._availableAttrs.font,text:s};u.shape=o,u.path=l,u.textpath=h,u.type=&quot;text&quot;,u.attrs.text=r(s),u.attrs.x=i,u.attrs.y=n,u.attrs.w=1,u.attrs.h=1,A(u,c),o.appendChild(h),o.appendChild(l),e.canvas.appendChild(o);var f=N(&quot;skew&quot;);return f.on=!0,o.appendChild(f),u.skew=f,u.transform(d),u},t._engine.setSize=function(e,r){var i=this.canvas.style;return this.width=e,this.height=r,e==+e&amp;&amp;(e+=&quot;px&quot;),r==+r&amp;&amp;(r+=&quot;px&quot;),i.width=e,i.height=r,i.clip=&quot;rect(0 &quot;+e+&quot; &quot;+r+&quot; 0)&quot;,this._viewBox&amp;&amp;t._engine.setViewBox.apply(this,this._viewBox),this},t._engine.setViewBox=function(e,r,i,n,a){t.eve(&quot;raphael.setViewBox&quot;,this,this._viewBox,[e,r,i,n,a]);var s=this.getSize(),o=s.width,l=s.height,h,u;return a&amp;&amp;(h=l/n,u=o/i,i*h&lt;o&amp;&amp;(e-=(o-i*h)/2/h),n*u&lt;l&amp;&amp;(r-=(l-n*u)/2/u)),this._viewBox=[e,r,i,n,!!a],this._viewBoxShift={dx:-e,dy:-r,scale:s},this.forEach(function(t){t.transform(&quot;...&quot;)}),this};var N;t._engine.initWin=function(t){var e=t.document;e.styleSheets.length&lt;31?e.createStyleSheet().addRule(&quot;.rvml&quot;,&quot;behavior:url(#default#VML)&quot;):e.styleSheets[0].addRule(&quot;.rvml&quot;,&quot;behavior:url(#default#VML)&quot;);try{!e.namespaces.rvml&amp;&amp;e.namespaces.add(&quot;rvml&quot;,&quot;urn:schemas-microsoft-com:vml&quot;),N=function(t){return e.createElement(&quot;&lt;rvml:&quot;+t+&#39; class=&quot;rvml&quot;&gt;&#39;)}}catch(r){N=function(t){return e.createElement(&quot;&lt;&quot;+t+&#39; xmlns=&quot;urn:schemas-microsoft.com:vml&quot; class=&quot;rvml&quot;&gt;&#39;)}}},t._engine.initWin(t._g.win),t._engine.create=function(){var e=t._getContainer.apply(0,arguments),r=e.container,i=e.height,n,a=e.width,s=e.x,o=e.y;if(!r)throw new Error(&quot;VML container not found.&quot;);var l=new t._Paper,h=l.canvas=t._g.doc.createElement(&quot;div&quot;),u=h.style;return s=s||0,o=o||0,a=a||512,i=i||342,l.width=a,l.height=i,a==+a&amp;&amp;(a+=&quot;px&quot;),i==+i&amp;&amp;(i+=&quot;px&quot;),l.coordsize=1e3*b+p+1e3*b,l.coordorigin=&quot;0 0&quot;,l.span=t._g.doc.createElement(&quot;span&quot;),l.span.style.cssText=&quot;position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;&quot;,h.appendChild(l.span),u.cssText=t.format(&quot;top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden&quot;,a,i),1==r?(t._g.doc.body.appendChild(h),u.left=s+&quot;px&quot;,u.top=o+&quot;px&quot;,u.position=&quot;absolute&quot;):r.firstChild?r.insertBefore(h,r.firstChild):r.appendChild(h),l.renderfix=function(){},l},t.prototype.clear=function(){t.eve(&quot;raphael.clear&quot;,this),this.canvas.innerHTML=d,this.span=t._g.doc.createElement(&quot;span&quot;),this.span.style.cssText=&quot;position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;&quot;,this.canvas.appendChild(this.span),this.bottom=this.top=null},t.prototype.remove=function(){t.eve(&quot;raphael.remove&quot;,this),this.canvas.parentNode.removeChild(this.canvas);for(var e in this)this[e]=&quot;function&quot;==typeof this[e]?t._removedFactory(e):null;return!0};var L=t.st;for(var z in M)M[e](z)&amp;&amp;!L[e](z)&amp;&amp;(L[z]=function(t){return function(){var e=arguments;return this.forEach(function(r){r[t].apply(r,e)})}}(z))}}.apply(e,i),!(void 0!==n&amp;&amp;(t.exports=n))}])});</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>


  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>

    </div>
  </div>

  </div>

      
<div class="container site-footer-container">
  <div class="site-footer " role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2017 <span title="0.11261s from github-fe157-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



  <div id="ajax-error-message" class="ajax-error-message flash flash-error">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
    You can't perform that action at this time.
  </div>


    
    <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-12370566edc60b404ac458967a7f2fa0d6696da99f37edf7deb1196f1aff5f0a.js"></script>
    <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-84c44f0ab38bd64791137de92e2f1bc3b0c653493458f6eb2eb8a7f27a866e3e.js"></script>
    
    
    
    
  <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
    <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
    <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
    <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
  </div>
  <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>


  </body>
</html>

