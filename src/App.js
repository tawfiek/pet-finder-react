import { render } from 'react-dom';
import Pet from './Pet';
import SearchParams from './SearchParams'


const App = () => {
  return (
    <div className="">
      <h1>Adopt Me!</h1>
      <SearchParams />
    </div>
  );
}

render(React.createElement(App), document.getElementById("root"));
