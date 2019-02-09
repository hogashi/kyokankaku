import React from 'react';
import './App.css';
import CharSet from './CharSet';

const { useState } = React;

const renderCharsets = ({ lines }) => {
  const charLines = lines.split('\n').map((line, lineIndex) => {
    if (/^ *$/.test(line)) {
        return null;
    }
    const chars = line.split('').map((char, charIndex) =>
      <CharSet key={charIndex} char={char} />
    );
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
  // TODO: "共感覚"の3文字だけデフォルトの色をつけたい
  //   '#ff5555', '#0044ff', '#44dd44'

  return (
    <div className="App">
      <textarea
        value={lines}
        onChange={(e) => setLines(e.target.value)}></textarea>
      {renderCharsets({ lines })}
    </div>
  );
};
