import { Outlet,Link } from 'react-router-dom';
import './home/css/style.css'
function Layout(){

  return(
    <>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet"/>

 
    <link href="css/font-awesome.min.css" rel="stylesheet" />
  

    <link href="css/style.css" rel="stylesheet" />
   
    <link href="css/responsive.css" rel="stylesheet" />
  
 
  <body>
  
    <div class="hero_area">
  
      <header class="header_section">
        <div class="container-fluid">
          <nav class="navbar navbar-expand-lg custom_nav-container ">
            <a class="navbar-brand" href="index.html">
              <span>Online_Quiz</span>
            </a>
  
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class=""> </span>
            </button>
  
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav  ml-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">Home <span class="sr-only"></span></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/reg"> Registration</a>
                </li>
                <li class="nav-item">
                 < a class="nav-link" href="/login">Login</a>
                </li>
                
              </ul>
              <div class="quote_btn-container">
                <form class="form-inline">
                  <button class="btn   nav_search-btn" type="submit">
                    <i class="fa fa-search" aria-hidden="true"></i>
                  </button>
                </form>
                <a href="">
                  <i class="fa fa-phone" aria-hidden="true"></i>
                 
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>




  <Outlet></Outlet>
    
  
  
    
    <footer class="footer_section">
      <div class="container">
        <p>
          &copy; <span id="displayYear"></span> 
          <a href="https://html.design/">Quiz platform</a>
        </p>
      </div>
    </footer>
  </div>
  </body>
  
  </>
  );
  }
 export default Layout; 