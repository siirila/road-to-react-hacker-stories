import * as React from 'react';

function getTitle(title) {
  return title;
}

function App() {
  return (
    <div>
      <h1>Hello {getTitle('World')}</h1>

      <label htmlFor="sarch">Search: </label>
      <input id="search" type="text" />
    </div>
  );
}
 
export default App;
