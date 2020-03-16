import React from "react";  
import M from 'materialize-css/dist/js/materialize.min.js'


class Header extends React.Component {
  constructor(props){
    super(props); 
}

componentDidMount(){
   document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems, {});
  });
}


render(){
  return (
    //navbar
    <div>
        <div class="navbar-fixed">
            <nav class="green">
            <div class="container">
                <div class="nav-wrapper">
                <a href="#!" class="brand-logo">NEW - Wap</a>
                <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
                <ul class="right hide-on-med-and-down">
                <li><a href="">Home</a></li>
                <li><a href="">New !</a></li>
                <li><a href="">profil</a></li>
                </ul>
                </div>
            </div>
            </nav>
        </div>

    <div>
        <ul class="sidenav" id="mobile-nav">
        <li><a href="">Home</a></li>
        <li><a href="">Login</a></li>
        <li><a href="">Log Out</a></li>
        </ul>
    </div>
    </div>


    );
  }
}

export default Header;