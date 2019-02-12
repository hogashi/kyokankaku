import React from 'react';
import './App.css';
import CharSet from './CharSet';

const { useState } = React;

const CharLine = ({ line }) => {
  if (/^ *$/.test(line)) {
      return null;
  }
  const defaultColors = ['#ff5555', '#0044ff', '#44dd44'];
  let colorIndex = -1;
  const chars = line.split('').map((char) => {
    colorIndex += 1;
    return <CharSet key={char} char={char} defaultColor={defaultColors[colorIndex]} />;
  });
  return (
    <div className="charLine">
      {chars}
    </div>
  );
};

const CharSets = ({ lines }) => {
  const charLines = lines.split('\n').map((line, lineIndex) => <CharLine line={line} key={lineIndex} />);
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
      <CharSets lines={lines} />
    </div>
  );
};
