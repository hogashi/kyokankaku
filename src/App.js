import React, { Component } from 'react';
import './App.css';

const BLACK = '#000000';
const WHITE = '#ffffff';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lines: '共感覚\nabc',
      colors: [
        '#ff5555',
        '#0044ff',
        '#44dd44',
        BLACK,
        BLACK,
        BLACK,
      ],
    };
  }

  onCharsChange(e) {
    this.setState({
      lines: e.target.value,
      colors: [...this.state.colors, BLACK],
    });
  }

  onColorChange(e, idx) {
    const colors = [...this.state.colors];
    const color = e.target.value;
    colors[idx] = color;
    this.setState({
      colors,
    });
  }

  renderCharsets() {
    const { lines, colors } = this.state;
    let charIndex = 0;
    return lines.split('\n').map(line => {
      const charsets = line.split('').map((char, idx) => {
        const index = charIndex + idx;
        const [r, g, b] = (colors[index] || BLACK).match(/[0-9a-f]{2}/ig).slice(0, 3).map(n => parseInt(n, 16));
        const charsetStyle = {
          // 180以上明るかったら背景を黒にする
          backgroundColor: ((Math.max(r, g, b) + Math.min(r, g, b)) / 2) < 180 ? WHITE : BLACK,
        };
        const charStyle = {
          color: colors[index] || BLACK,
        };
        return (
          <div
            className="charset"
            key={`key-${index}-${char}`}
            style={charsetStyle}>
            <div className="char" style={charStyle}>{char}</div>
            <input
              type="color"
              value={this.state.colors[index]}
              onChange={e => this.onColorChange(e, index)} />
          </div>
        );
      });
      charIndex += line.length;
      return (
        <div className="charsets" key={line}>
          {charsets}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="App">
        <textarea
          value={this.state.lines}
          onChange={this.onCharsChange.bind(this)}></textarea>
        {this.renderCharsets()}
      </div>
    );
  }
}

export default App;
