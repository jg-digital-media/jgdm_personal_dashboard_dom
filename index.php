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

            <div class="live---clock" data-tooltip="Demonstrates: Content Updates with .textContent, Timed DOM Manipulation with setInterval()">00:00:00<!-- </br> --> GMT</div>

        </div>

        <div class="website---heading">

            <h1>Personal Dashboard App  <a class="heading---links" href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom?tab=readme-ov-file#development" target="_blank">v2</a>  <a class="heading---links" href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom" target="_blank">Github Repo</a></h1>
           

        </div>

        <div class="theme---selector--container">

            <h2>Theme Options</h2>

            <div class="theme---selector--inner" data-tooltip="Select Theme Option: Attribute/class manipulation (classList.add/remove/toggle">
                <div class="theme---selector" id="theme-one">&nbsp;</div>
                <div class="theme---selector" id="theme-two">&nbsp;</div>
                <div class="theme---selector" id="theme-three">&nbsp;</div>
                <div class="theme---selector" id="theme-four">&nbsp;</div>
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

                    <div class="todo---dashboard--container"> 
                        
                        <ul>

                            <li><span class="icon---close">&times;</span>  <span class="icon---edit">&nbsp;</span>  <span class="todo---item--text" contenteditable="true">Item 1</span></li>
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit edit---state--icon">&nbsp;</span>  <span class="todo---item--text text---edit--state" contenteditable="true">Item 2</span></li>
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit edit---state--icon">&nbsp;</span>  <span class="todo---item--text text---edit--state" contenteditable="true">Item 3</span></li>
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit edit---state--icon">&nbsp;</span>  <span class="todo---item--text text---edit--state" contenteditable="true">Item 4</span></li>
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit edit---state--icon">&nbsp;</span>  <span class="todo---item--text text---edit--state" contenteditable="true">Item 5</span></li>
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit">&nbsp;</span>  <span class="todo---item--text" contenteditable="true">Item 6</span></li> 
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit">&nbsp;</span>  <span class="todo---item--text" contenteditable="true">Item 7</span></li> 
                            <li><span class="icon---close">&times;</span>  <span class="icon---edit">&nbsp;</span>  <span class="todo---item--text" contenteditable="true">Item 8</span></li>
                        </ul>

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

                    <div class="notes---dashboard--container"> 
                        
                        <div class="note---dashboard--item">

                            <span class="icon---close">&times;</span>
                            
                            <div class="note---dashboard--content" contenteditable="true">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>

                        </div>
                        
                        <div class="note---dashboard--item">

                            <span class="icon---close">&times;</span>
                            
                            <div class="note---dashboard--content" contenteditable="true">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>

                        </div>
                        
                        <div class="note---dashboard--item">

                            <span class="icon---close">&times;</span>
                            
                            <div class="note---dashboard--content" contenteditable="true">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>

                        </div>
                        
                        <div class="note---dashboard--item">

                            <span class="icon---close">&times;</span>
                            
                            <div class="note---dashboard--content" contenteditable="true">lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</div>

                        </div>

                    </div>

                    <!-- <div> <p>Content goes here</p> </div> -->
                    <a href="#" class="dashboard---btn" id="add---todo--item">Add Note ></a>

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

                    
                  <div class="links---dashboard--container"> 
                        
                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 1</a></span>

                        </div>

                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 2</a></span>

                        </div>

                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 3</a></span>

                        </div>

                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 4</a></span>

                        </div>

                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 5</a></span>

                        </div>


                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 6</a></span>

                        </div>


                        <div class="links---dashboard--item">

                            <span class="icon---close">&times;</span>
                            <span class="icon---edit">&nbsp;</span>
                            <span class="dashboard---link"><a href="">Link 7</a></span>

                        </div>

                    <!-- <div> <p>Content goes here</p> </div> -->
                    </div>  

                </div>

                <a href="#" class="dashboard---btn" id="add---todo--item">Add Link ></a>
              
            </article> 

        </section>

        <section class="section---fetch--weather" id="js----dashboard--weather" data-tooltip="Fetch your latest weather forecast">

            <h3 class="section---fetch--weather--output__heading">Fetch Your latest Weather Forecast</h3>

            <div class="section---fetch--weather-output">

                <div class="section---fetch--weather-container">
                    <input class="section---fetch--weather-input" id="js---weather--input" type="text" placeholder="Enter City Name" />
                    <button class="section---fetch--weather-button" id="js---weather--button">Fetch</button>
                </div>

                <div class="section---fetch--weather-output">                    

                    <div class="section---fetch--weather--output-content">
                        
                        <div class="day---forecast">
                            <h4>Mon</h4>

                            <img src="assets/img/icon-weather-sunny.png" class="forecast---icon" alt="Forecast: " title="Forecast" />

                            <div class="forecast---details">
                                <div class="forecast---temperature">Sunny</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                            
                        </div>

                        <div class="day---forecast">
                            <h4>Tuesday</h4>
                            <img src="assets/img/icon-weather-sunny.png" class="forecast---icon" alt="Forecast: Sunny 30deg "   title="Forecast: Sunny 30deg" />

                            <div class="forecast---details">
                                <div class="forecast---temperature">Sunny</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                        </div>

                        <div class="day---forecast">
                            <h4>Wed</h4>
                            <img src="assets/img/icon-weather-cloudy.png" class="forecast---icon" alt="Forecast: Sunny 30deg " title="Forecast: Sunny 30deg" />

                            <div class="forecast---details">
                                <div class="forecast---temperature">Sunny</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                        </div>

                        <div class="day---forecast">
                            <h4>Thu</h4>
                            <img src="assets/img/icon-weather-sunny.png" class="forecast---icon" alt="Forecast: Sunny 30deg " title="Forecast: Sunny 30deg" />

                            <div class="forecast---details">
                                <div class="forecast---temperature">Sunny</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                        </div>

                        <div class="day---forecast">
                            <h4>Fri</h4>
                            <img src="assets/img/icon-weather-sunny.png" class="forecast---icon" alt="Forecast: Sunny 30deg " title="Forecast: Sunny 30deg"/>

                            <div class="forecast---details">
                                <div class="forecast---temperature">Sunny</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                        </div>

                        <div class="day---forecast">
                            <h4>Saturday</h4>
                            <img src="assets/img/icon-weather-cloudy.png" class="forecast---icon" alt="Forecast: Sunny 30deg " title="Forecast: Sunny 30deg"/>
                            
                            <div class="forecast---details">
                                <div class="forecast---temperature">Sunny</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                        </div>

                        <div class="day---forecast">
                            <h4>Sunday</h4>
                            <img src="assets/img/icon-weather-cloudy.png" class="forecast---icon" alt="Forecast: Cloudy 30deg " title="Forecast: Cloudy 30deg"/>
                            
                            <div class="forecast---details">
                                <div class="forecast---temperature">Cloudy</div>
                                <div class="forecast---temperature">26°C</div>
                            </div>
                        </div>

                        <!-- More days go here -->

                    </div>
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
            <li><a href="#" class="button---reset" id="js---btn_reset" disabled="disabled">Reset</a></li>
            <li><a href="#" class="link" id="js---btn_howto">How to</a></li>
            <li><a href="https://github.com/jg-digital-media/jgdm_personal_dashboard_dom" class="link" target="_blank">Repository</a></li>
            <li>&copy; <a href="#">Jonnie Grieve Digital Media</a> (<?php echo date("Y"); ?>)</li>
        </ul>

    </section>

    <script type="text/javascript" src="app.js"></script>

</body>
</html>