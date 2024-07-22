import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCatsFetch, getMoreCatsFetch} from "./Setstate";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const cats = useSelector((state) => state.cat.cats);
  const isLoading = useSelector((state) => state.cat.isLoading);
  const error = useSelector((state) => state.cat.error);

  useEffect(() => {
    dispatch(getCatsFetch());
  }, [dispatch]);

  const handleLoadMoreCats = () => {
    dispatch(getMoreCatsFetch());
  };

  return (
    <div className="App">
      <button onClick={handleLoadMoreCats}>Load More Cats</button>
      <div className="cats-container">
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        {cats &&
          cats.map((cat) => (
            <div key={cat.id} className="cat-card">
              <div className="cat-image-container">
                <img className="cat-image" src={cat.imageUrl} alt={cat.name} />
              </div>
              <p>{cat.name}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default App;
