import React from 'react';
import './App.css';
import CharSet from './CharSet';

const { useState } = React;


const defaultColors = ['#ff5555', '#0044ff', '#44dd44'];

const renderCharsets = ({ lines }) => {
  let colorIndex = -1;
  const charLines = lines.split('\n').map((line, lineIndex) => {
    if (/^ *$/.test(line)) {
        return null;
    }
    const chars = line.split('').map((char) => {
      colorIndex += 1;
      return <CharSet key={char} char={char} defaultColor={defaultColors[colorIndex]} />;
    });
    return (
      <div className="charLine" key={lineIndex}>
        {chars}
      </div>
    );
  });
  return (
    <div className="charLines">
      {charLines}
    </div>
  );
};

export default () => {
  const [lines, setLines] = useState('共感覚\nabc');

  return (
    <div className="App">
      <textarea
        value={lines}
        onChange={(e) => setLines(e.target.value)}></textarea>
      {renderCharsets({ lines })}
    </div>
  );
};
