# Integration

Decupla was designed to be easily integrated into any project, regardless of the technology used. Therefore, the only specification we give is how the API should be called. How you process the data retrieved from the api is entirely up to you.

However, to help you get started, we provide an example of how to use Decupla data in a **React App**

## Integration Example

In this example, we will give you an example how to integrate Decupla into a React application. This example includes fetching content from the Decupla API, rendering it dynamically, and setting up routing within your React app.

### Step 1: Building the Blocks

Decupla allows you to define blocks, which can be reused in the content, each containing various fields. In the first step, we’ll define how to render the different blocks. Below is an example of a TextBlock component, which renders a headline and paragraph text.

```javascript
const TextBlock = ({ output }) => {
    return (
        <div className="textblock">
            <h2>{output?.headline ?? ''}</h2>
            <p>{output?.text ?? ''}</p>
        </div>
    )
}

export default TextBlock;
```

### Step 2: Building the Blocks Handler

Next, we need a component that will decide which type of block to display based on the blockKey.

Here is a simple implementation of a blocks handler component:

```javascript
import TextBlock from './blocks/TextBlock';
import QuoteBlock from './blocks/QuoteBlock';
// import all your blocks here

const BlocksHandler = ({ blockKey, output }) => {
    switch (blockKey) {
        // write a case for each of your blocks to link the keys to the compontents
        case 'textblock':
            return <TextBlock output={output} />;
        case 'quoteBlock':
            return <QuoteBlock output={output} />;
        default:
            console.log(`Block with key "${blockKey}" could not be found.`);
            return null;
    }
};

export default BlocksHandler;
```

###  Step 3: Building the Content Handler

The ContentHandler component is responsible for displaying the content on the frontend. It will use the BlocksHandler to dynamically render each block based on the data provided.

Here’s an example of how the content handler can work:

```javascript
import BlocksHandler from "./BlocksHandler";

const ContentHandler = ({ content }) => {
    return (
        <div>
            <h1>{content.title}</h1>
            {
                content.blocks.map((block) => (
                    <BlocksHandler key={block.instanceID} blockKey={block.blockKey} output={block.output} />
                ))
            }
        </div>
    );
}

export default ContentHandler;
```

### Step 4: Implementing the Router

The next step is setting up the React Router to dynamically load the content. We fetch the content from the API and dynamically create routes for each content.

Here is how we can implement the router component:

```javascript
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ContentHandler from "./contentHandler";

const AppRoutes = () => {

    const [contentData, setContentData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5500/api/content/all', {
            method: 'GET',
            headers: {
                'Authorization': 'Bearer qSqJtwxVZfYZMJykCsbacY03FDP0KWYt', // replace with your token
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(json => setContentData(json))
            .catch(error => console.error("Error while fetching the menu:", error));
    }, []);


    return (
        <Routes>
            {contentData.map((content) => (
               <Route key={content.id} path={content.url} element={<ContentHandler content={content} />} />
            ))}
        </Routes>
    );
};

export default AppRoutes;
```
Now, integrate this into your application:

```javascript
import Menu from './components/Menu';
import './App.css';
import AppRoutes from './routes';

function App() {


  return (
    <div className="App">
      <Menu />
      <AppRoutes />
    </div>
  );
}

export default App;
```

### 5. Build a Menu

To make navigation easier, you can create a simple menu that lists all available routes automatically. Just fetch the menu from the Decupla API.

Here is an example of a simple menu component that fetches and displays the menu links:

```javascript
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
  const [menuData, setMenuData] = useState({});

  useEffect(() => {
    fetch('http://localhost:5500/api/menus/header-menu', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer qSqJtwxVZfYZMJykCsbacY03FDP0KWYt', // replace with your token
        'Content-Type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setMenuData(json))
      .catch(error => console.error("Error while fetching the menu:", error));
  }, []);

  const hasEntries = menuData?.entries?.length > 0;

  return (
    <ul id="header-menu">
      {hasEntries ? (
        menuData.entries.map((entry) => (
          <li key={entry.entryID}><Link to={entry.url}>{entry.title}</Link></li>
        ))
      ) : ''}
    </ul>
  );
}

export default Menu;
```

> Of course, this is just one example of how Decupla can be integrated into an application. There are many different ways to integrate Decupla, depending on your needs and used technology.
