import React from 'react';

const { useState } = React;

const BLACK = '#000000';
const WHITE = '#ffffff';

export default ({ char }) => {
  const [colorCode, setColorCode] = useState(BLACK);

  const [r, g, b] = colorCode.match(/[0-9a-f]{2}/ig).slice(0, 3).map(n => parseInt(n, 16));
  const charsetStyle = {
    // 180以上明るかったら背景を黒にする
    backgroundColor: ((Math.max(r, g, b) + Math.min(r, g, b)) / 2) < 180 ? WHITE : BLACK,
  };
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
