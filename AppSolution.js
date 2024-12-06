```javascript
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} >
          {/*Check if the route actually matches any path. */}
          {location.pathname === '*' ? <NotFound/> : <Navigate to='/' />}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```