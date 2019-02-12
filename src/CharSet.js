import React from 'react';

const { useState, useEffect } = React;

const BLACK = '#000000';
const WHITE = '#ffffff';

export default ({ char, defaultColor }) => {
  const defaultCode = '共感覚'.indexOf(char) !== -1 ? defaultColor || BLACK : BLACK;
  const [colorCode, setColorCode] = useState(defaultCode);
  const [backgroundColor, setBackgroundColor] = useState(WHITE);

  useEffect(() => {
    const [r, g, b] = colorCode.match(/[0-9a-f]{2}/ig).slice(0, 3).map(n => parseInt(n, 16));
    // 180以上明るかったら背景を黒にする
    setBackgroundColor(((Math.max(r, g, b) + Math.min(r, g, b)) / 2) < 180 ? WHITE : BLACK);
  }, [colorCode]);

  if (char === ' ') {
    return <div className="charSet space"></div>;
  }

  const charsetStyle = { backgroundColor };
  const charStyle = { color: colorCode };

  return (
    <div className="charSet" style={charsetStyle}>
      <div className="char" style={charStyle}>
        {char}
      </div>
      <input
        type="color"
        value={colorCode}
        onChange={(e) => setColorCode(e.target.value)} />
    </div>
  );
};
