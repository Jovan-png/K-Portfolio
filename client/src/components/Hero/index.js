import React from "react";

function Hero() {

const wr = document.querySelector(".word-rotate");

const words = wr.children;

let x = 0;
rotate(x);

setInterval(() => {
  x = ++x % words.length;
  rotate(x);
}, 1000);

function rotate(start) {
  for (let i = 0; i < words.length; ++i) {
    const j = (start + i) % words.length;
    let percent = j / words.length;
    let rad = percent * 2 * Math.PI;
    let ty = Math.sin(rad) * 200;
    let tz = 40 * Math.cos(rad) - 40;
    let op = (Math.cos(rad) + 1) / 2;
    words[
      i
    ].style.transform = `perspective(100px) translateZ(${tz}px) translateY(${ty}%)`;
    words[i].style.opacity = `${op}`;
  }
}
    
    return(
        <div className=" hero">
<div className="hero-box">
<h1>
  I'm More Than a
<ul class="word-rotate">
  <li>creative</li>
  <li>innovative</li>
  <li>curious</li>
  <li>experimental</li>
  <li>creative</li>
  <li>innovative</li>
  <li>curious</li>
  <li>experimental</li>
</ul>
</h1>


</div>
        
        <div className="container">
  <div>
    <div className="content">
      <h2>Jane Doe</h2>
      <span>UI & UX Designer</span>
    </div>
  </div>
  <div>
    <div className="content">
      <h2>Alex Smith</h2>
      <span>CEO Expert</span>
    </div>
  </div>
  <div>
    <div className="content">
      <h2>Emily New</h2>
      <span>Web Designer</span>
    </div>
  </div>
  <div>
    <div className="content">
      <h2>Lisa Boley</h2>
      <span>Marketing Coordinator</span>
    </div>
  </div>
</div>
</div>
    )
}

export default Hero