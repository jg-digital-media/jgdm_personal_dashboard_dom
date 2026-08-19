<!DOCTYPE html>
<html lang="en">
<head>


    <!-- Basic SEO Tags -->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    
    <!-- Global site tag (gtag.js) - Google Analytics -->

    <!-- Slick Styling -->
    <!-- <link rel="stylesheet" type="text/css" href ="assets/slick/slick.css" />
    <link rel="stylesheet" type="text/css" href ="assets/slick/slick-theme.css" /> -->

    <!-- Lightbox-->
    <!-- <link href="../assets/lightbox/dist/css/lightbox.css" rel="stylesheet" /> -->

    <!-- Google Font -->
    <!-- <link href="https://fonts.googleapis.com/css?family=Merriweather|Odibee+Sans|Quicksand&display=swap" rel="stylesheet"> -->

    <!-- Meta Tags -->
    <meta name="description" content="">
    <meta name="image" content="">

    <!-- FACEBOOK: Open Graph -->
    <meta property="og:title" content="">
    <meta property="og:description" content="">
    <meta property="og:image" content="">
    <meta property="og:url" content="">
    <meta property="og:image" content="">
    <meta property="og:site_name" content="">
    <meta property="og:locale" content="en_GB">

    <!-- TWITTER: Card Tags -->
    <meta name="twitter:title" content="">
    <meta name="twitter:description" content="">
    <meta name="twitter:image" content="">
    <meta name="twitter:card" content="">
    <meta name="twitter:creator" content="@jonniegrieve">

    <!-- Structured Data (Schema.org JSON-LD) -->
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "WebApplication",
            "name": "Weigh up the Pros and Cons",
            "url": "https://www.jonniegrieve.co.uk/",
            "description": "A simple web app that helps you weigh up pros and cons and make better decisions.",
            "applicationCategory": "ProductivityApplication",
            "operatingSystem": "All",
            "creator": {
                "@type": "Person",
                "name": "Jonnie Grieve",
                "url": "https://www.jonniegrieve.co.uk/"
            },
            "image": "https://www.jonniegrieve.co.uk/assets/images/share-image.jpg",
            "inLanguage": "en-GB"
        }
    </script>

    <!-- Favicon -->
    <link rel="icon" href="favicon.png" type="image/png">

    <!-- Canonical link -->
    <link rel="canonical" href="">


    <title>JGDM: Dom Project - Personal Dashboard</title>

    <link rel="stylesheet" type="text/css" href="style.css">
</head>

<body data-theme="theme-one">

    <header>

        <div class="live---clock--container">

            <div class="live---clock" data-tooltip="Demonstrates: Content Updates with .textContent, Timed DOM Manipulation with setInterval()">00:00:00<!-- </br> --> GMT</div>

        </div>

        <div class="website---heading">

            <h1>Personal Dashboard App  <a class="heading---links" href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom?tab=readme-ov-file#development" target="_blank">v4.3</a>  <a class="heading---links" href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom" target="_blank">Github Repo</a></h1>
           

        </div>

        <div class="theme---selector--container">

            <h2>Theme Options</h2>

            <div class="theme---selector--inner" data-tooltip="Select Theme Option: Attribute/class manipulation (classList.add/remove/toggle">
                <div class="theme---selector" id="theme-one" title="Theme 1" role="button" tabindex="0">&nbsp;</div>
                <div class="theme---selector" id="theme-two" title="Theme 2" role="button" tabindex="0">&nbsp;</div>
                <div class="theme---selector" id="theme-three" title="Theme 3" role="button" tabindex="0">&nbsp;</div>
                <div class="theme---selector" id="theme-four" title="Theme 4" role="button" tabindex="0">&nbsp;</div>
            </div>

        </div>

    </header>

    <main>

        <section class="motivational---quote--container"> 

            <h3 class="motivational---quote--heading">Quote of the Day!</h3>

            <p class="motivational---quote" data-tooltip="Quote of the day">

                <span id="js---random_quote">The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.</span>
            </p>

        </section>

        <section class="welcome---message--container" data-tooltip="Welcome message container text">

            <!-- Good <div id="morning---or--evening" data-tooltip="Welcome message container text">Morning/Evening</div>, 
            <span class="welcome---message--editable" contenteditable="true" >What do I call you?</span> -->
            <div id="morning---or--evening">Good Morning/Evening</div>, 
            <input class="welcome---message--input" id="js--name_input" contenteditable="true" placeholder="What do we call you?" />

        </section>

        <section class="main---dashboard--container">

            <article class="main---dashboard main---dashboard--todo" id="js---dashboard--todo" data-tooltip="ToDo: section details to go here!">

                <div class="dashboard---section">

                    <div class="dashboard---section--buttons">
                    
                        <h3 class="dashboard---section--heading">To Do</h3>          

                        <span class="section---button--collapse" id="collapse">&lowbar;</span>
                        <span class="section---button--close" id="close">&times;</span>

                    </div>
                
                </div>

                <div class="dashboard---section--content" data-tooltip="Notes: section details">

                    <div class="todo---dashboard--container todo---list--empty">

                        <div class="todo---list--panel">

                            <p class="todo---empty--state" id="js---todo--empty">There are currently no tasks. Add one to get started.</p>

                            <ul id="js---todo--list"></ul>

                        </div>

                        <!-- <p>Content goes here</p> -->
                        <a href="#" class="dashboard---btn" id="add---todo--item">Add Task</a>

                    </div>

                </div>

            </article>

            <article class="main---dashboard main---dashboard--notes" id="js---dashboard--notes" data-tooltip="Notes: section details to go here!">

                <div class="dashboard---section">

                    <div class="dashboard---section--buttons">
                    
                        <h3 class="dashboard---section--heading">Notes</h3>          

                        <span class="section---button--collapse" id="collapse">&lowbar;</span>
                        <span class="section---button--close" id="close">&times;</span>

                    </div>
                
                </div>    

                <div class="dashboard---section--content">

                    <div class="notes---dashboard--container notes---list--empty">

                        <p class="notes---empty--state" id="js---notes--empty">There are currently no notes. Add one to get started.</p>

                        <div id="js---notes--list"></div>

                    </div>

                    <!-- <div> <p>Content goes here</p> </div> -->
                    <a href="#" class="dashboard---btn" id="add---note--item">Add Note ></a>

                </div>
              
            </article>

            <article class="main---dashboard main---dashboard--shortcuts" id="js---dashboard--shortcuts"  data-tooltip="Shortcut Links: section details to go here!">

                <div class="dashboard---section">

                    <div class="dashboard---section--buttons">

                        <h3 class="dashboard---section--heading">Shortcut Links</h3>          

                        <span class="section---button--collapse" id="collapse">&lowbar;</span>
                        <span class="section---button--close" id="close">&times;</span>

                    </div>

                </div>  

                <div class="dashboard---section--content">

                    
                  <div class="links---dashboard--container links---list--empty">

                        <p class="links---empty--state" id="js---links--empty">There are currently no shortcut links. Add one to get started.</p>

                        <div id="js---links--list"></div>

                    </div>

                </div>

                <a href="#" class="dashboard---btn" id="add---link--item">Add Link ></a>
              
            </article> 

        </section>

        <section class="section---fetch--weather" id="js----dashboard--weather" data-tooltip="Fetch your latest weather forecast">

            <h3 class="section---fetch--weather--output__heading">Fetch Your latest Weather Forecast</h3>

            <div class="section---fetch--weather-output">

                <div class="section---fetch--weather-container">
                    <input class="section---fetch--weather-input" id="js---weather--input" type="text" placeholder="Enter City Name" />
                    <button class="section---fetch--weather-button" id="js---weather--button">Fetch</button>
                </div>

                <p class="weather---message" id="js---weather--message">Enter a city name and click Fetch to see a 14-day forecast.</p>

                <div class="section---fetch--weather--output-content" id="js---weather--list"></div>

            </div>

        </section>

    </main>   

    <section class="sticky---footer--container">

        <ul>
            <li id="toggle---dashboard--title">Toggle Dashboard Panels:</li>
            <li><a href="#" class="link button button---toggle" id="js---btn_todos">Todos</a></li>
            <li><a href="#" class="link button button---toggle" id="js---btn_notes">Notes</a></li>
            <li><a href="#" class="link button button---toggle" id="js---btn_links">Links</a></li>
            <li><a href="#" class="link button button---toggle" id="js---btn_weather">Weather</a></li>
            <li><a href="#" class="button---reset" id="js---btn_reset">Reset</a></li>
            <li><a href="#" class="link" id="js---btn_howto">How to</a></li>
            <li><a href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom" class="link" target="_blank">Repository</a></li>
            <li>&copy; <a href="#">Jonnie Grieve Digital Media</a> (<?php echo date("Y"); ?>)</li>
        </ul>

    </section>

    <script type="text/javascript" src="app.js"></script>

</body>
</html>