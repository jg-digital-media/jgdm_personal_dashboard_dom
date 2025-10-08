<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JGDM: Dom Project - Personal Dashboard</title>

    <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>

    <header>

        <div class="live---clock--container">

            <div class="live---clock" data-tooltip="Featuring these DOM elements:">00:00:00<!-- </br> --> GMT</div>

        </div>

        <div class="website---heading">

            <h1>Personal Dashboard App  <a class="heading---links" href="https://www.jonniegrieve.co.uk" target="_blank">v1</a>  <a class="heading---links" href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom" target="_blank">Github Repo</a></h1>
           

        </div>

        <div class="theme---selector--container">

            <h2>Theme Options</h2>

            <div class="theme---selector--inner" data-tooltip="Select Theme Option: Attribute/class manipulation (classList.add/remove/toggle">
                <div class="theme---selector" id="theme-one">&nbsp;</div>
                <div class="theme---selector" id="theme-two">&nbsp;</div>
                <div class="theme---selector" id="theme-three">&nbsp;</div>
            </div>

        </div>

    </header>

    <main>

        <section class="motivational---quote--container"> 

            <h3 class="motivational---quote--heading">Quote of the Day!</h3>

            <p class="motivational---quote">&quot;The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle. As with all matters of the heart, you'll know when you find it.&quot;</p>

        </section>

        <section class="welcome---message--container" data-tooltip="Welcome message container text">

            <!-- Good <div id="morning---or--evening" data-tooltip="Welcome message container text">Morning/Evening</div>, 
            <span class="welcome---message--editable" contenteditable="true" >What do I call you?</span> -->
            <div id="morning---or--evening">Good Morning/Evening</div>, 
            <input class="welcome---message--input" contenteditable="true" placeholder="What do we call you?" /></span> 

        </section>

        <section class="main---dashboard--container">

            <article class="main---dashboard--todo">

                <div class="dashboard---section">

                    <div class="dashboard---section--buttons">
                    
                        <h3 class="dashboard---section--todo">To Do</h3>          

                        <span class="section---button--collapse" id="collapse">&lowbar;</span>
                        <span class="section---button--close" id="close">&times;</span>

                    </div>
                
                <div>

                <div class="dashboard---section--content">

                    <div> <p>Content goes here</p> </div>

                </div>

            </article>

            <article class="main---dashboard--notes">

                <div class="dashboard---section">

                    <div class="dashboard---section--buttons">
                    
                        <h3 class="dashboard---section--todo">Notes</h3>          

                        <span class="section---button--collapse" id="collapse">&lowbar;</span>
                        <span class="section---button--close" id="close">&times;</span>

                    </div>
                
                </div>    

                <div class="dashboard---section--content">

                    <div> <p>Content goes here</p> </div>

                </div>
              
            </article>

            <article class="main---dashboard--shortcuts">          

                <div class="dashboard---section">

                    <div class="dashboard---section--buttons">

                        <h3 class="dashboard---section--todo">Shortcut Links</h3>          

                        <span class="section---button--collapse" id="collapse">&lowbar;</span>
                        <span class="section---button--close" id="close">&times;</span>

                    </div>

                </div>  

                <div class="dashboard---section--content">

                    <div> <p>Content goes here</p> </div>

                </div>
              
            </article> 

        </section>

        <section class="section---fetch--weather">

            <h3>Fetch Weather Details</h3>

            <div class="section---fetch--weather-container">

                <div class="section---fetch--weather-input">
                    <input class="section---fetch--weather-input" type="text" placeholder="Enter City Name" />
                    <button class="section---fetch--weather-button">Fetch</button>
                </div>

                <div class="section---fetch--weather--output">
                    
                    <p class="section---fetch--weather--output--heading">Weather Details</p>

                    <div class="section---fetch--weather--output-content">
                        
                        <div class="day---forecast">
                            <h4>Mon</h4>
                            <img src="#" alt="title"/>Content goes here</p>
                            <div>Sunny</div><div>26</div><div>°C</div>
                        </div>
                        <div class="day---forecast">
                            <h4>Tuesday</h4>
                            <img src="#" alt="title"/>Content goes here</p>
                            <div>Sunny</div><div>26</div><div>°C</div>
                        </div>
                        <div class="day---forecast">
                            <h4>Wed</h4>
                            <img src="#" alt="title"/>Content goes here</p>
                            <div>Sunny</div><div>26</div><div>°C</div>
                        </div>
                        <div class="day---forecast">
                            <h4>Thu</h4>
                            <img src="#" alt="title"/>Content goes here</p>
                            <div>Sunny</div><div>26</div><div>°C</div>
                        </div>
                        <div class="day---forecast">
                            <h4>Fri</h4>
                            <img src="#" alt="title"/>Content goes here</p>
                            <div>Sunny</div><div>26</div><div>°C</div>
                        </div>
                        <div class="day---forecast">
                            <h4>Saturday</h4>
                            <img src="#" alt="title"/>Content goes here</p>
                            <div>Sunny</div><div>26</div><div>°C</div>
                        </div>

                        <!-- More days go here -->

                    </div>
                </div>  

        </section>

    </main>
    
        <p>index.php</p>

    <footer>

        <p>footer</p>  
        <a href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom" target="_blank">Github Repo</a>

    </footer> 


    <script type="text/javascript" src="app.js"></script>

</body>
</html>