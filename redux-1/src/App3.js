import React, { useRef , useState } from 'react';

const App3 = React.memo((props) => {
  console.log("Đã được re-render")
  console.log(props)

  return (
    <div className="App">
      Đã được re-render
    </div>
  );
})

export default App3;
