import { FC, useEffect } from 'react'
import '../assets/styles/home.scss';
import { Link } from 'react-router-dom';
import { Header, Social } from '../components';

interface TxtTypeInstance {
  toRotate: string[];
  el: HTMLElement;
  loopNum: number;
  period: number;
  txt: string;
  isDeleting: boolean;
  tick(): void;
}

class TxtType implements TxtTypeInstance {
  toRotate: string[];
  el: HTMLElement;
  loopNum: number = 0;
  period: number;
  txt: string = '';
  isDeleting: boolean = false;

  constructor(el: HTMLElement, toRotate: string[], period: number) {
    this.toRotate = toRotate;
    this.el = el;
    this.period = period || 2000;
    this.tick();
  }

  tick = (): void => {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];

    if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    let delta = 200 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(this.tick, delta);
  }
}

export const HomeScreen: FC = () => {
  const letters = [
    "Php developer",
    "React Developer",
    "React Native Developer"
  ];

  useEffect(() => {
    const elements = document.getElementsByClassName('typewrite');
    for (let i = 0; i < elements.length; i++) {
      const element = elements[i] as HTMLElement;
      const period = parseInt(element.getAttribute('data-period') || '2000', 10);
      new TxtType(element, letters, period);
    }

    // INJECT CSS
    const css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    document.body.appendChild(css);

    return () => {
      // Cleanup: remove the style element when component unmounts
      const styles = document.getElementsByTagName('style');
      for (let i = 0; i < styles.length; i++) {
        if (styles[i].innerHTML.includes('.typewrite > .wrap')) {
          styles[i].remove();
          break;
        }
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div className="container-fluid home">
        <div>
          <h2>Welcome to my page</h2>
          <h1>
            Hi,<br />
            I'm Fredy,<br />
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
