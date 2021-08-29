import * as React from 'react';

function List(props) {
  return (
    <ul>
      {props.list.map(function(item) {
        return (<Item item={item} />);
      })}
    </ul>
  );
}

const Item = (props) => {
  const item = props.item;

  return (
    <li key={item.objectID}>
    <span>
      <a href={item.url}>{item.title}</a>
    </span>
    <span>{item.author}</span>
    <span>{item.num_comments}</span>
    <span>{item.points}</span>
  </li>
  );
}

function Search() {
  const handleChange = (event) => {
    console.log(event);
  }

  return (
    <div>
      <label htmlFor="sarch">Search: </label>
      <input id="search" type="text" onChange={handleChange} />
    </div>
  );
}

function App() {
  
const stories = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  );
}
 
export default App;
