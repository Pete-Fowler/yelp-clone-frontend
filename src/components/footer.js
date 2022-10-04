import React from 'react'


function Footer() {
  return (
    <div className="row" id="footer">
      <div style={{flex:"1"}}/>
      <div className="col">
        <strong>Chase Welsh</strong>
        <a href="https://f53.dev">Website</a>
        <a href="https://www.linkedin.com/in/chase-welsh/">LinkedIn</a>
        <a href="https://dev.to/f53">Blog</a>
        <a href="https://github.com/CodeF53">Github</a>
      </div>
      <div className="col">
        <strong>Tim Daly</strong>
        <a href="https://www.linkedin.com/in/dalytimdaly/">LinkedIn</a>
        <a href="https://dalytimdaly.medium.com">Blog</a>
        <a href="https://github.com/dalytimdaly">Github</a>
      </div>
      <div className="col">
        <strong>Pete Fowler</strong>
        <a href="https://petefowler.dev">Website</a>
        <a href="https://www.linkedin.com/in/pete-fowler/">LinkedIn</a>
        <a href="https://pete-fowler.github.io/battleship/">Battleship</a>
        <a href="https://blog.petefowler.dev/">Blog</a>
        <a href="https://github.com/Pete-Fowler">Github</a>
      </div>
      <div style={{flex:"1"}}/>
    </div>
  );
}

export default Footer;