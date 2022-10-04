
import '../assets/styles/home.scss';
import { Link } from 'react-router-dom';
import { Header, Social } from '../components';


export const HomeScreen = () => {

  const letters = [
    "Php developer",
    "React Developer",
    "React Native Developer"
  ];

  var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

TxtType.prototype.tick = function() {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
    }

    setTimeout(function() {
    that.tick();
    }, delta);
};

window.onload = function() {
    var elements = document.getElementsByClassName('typewrite');
    for (var i=0; i<elements.length; i++) {
        // var toRotate = elements[i].getAttribute('data-type');
        var toRotate = letters;
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
          new TxtType(elements[i], toRotate, period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);
};

  /******* */


  return (
    <>
      <Header />
      <div className="container-fluid home" >
        <div>
          <h2>Welcome to my page</h2>
          <h1>Hi,<br/>
          I'm Fredy,<br/>
            <span className="typewrite" data-period="2000"></span>
            <span className="wrap"></span>
          </h1>

          <a href="mailto:fmartinez.bpe@gmail.com">Contact me!</a>
        </div>
        <Social />
      </div>
    </>
  )
}
