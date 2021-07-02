import React, {useContext} from 'react';
import Masonry from "react-masonry-css";

import {AppContext} from "../../App";
import ImageCard from "../ImageCard";
import './style.css';

const Cards = () => {
  const {posts} = useContext(AppContext);

  return (
      <Masonry breakpointCols={4} className="my-masonry-grid" columnClassName="my-masonry-grid_column">
        {
          posts.map((item) =>
            <ImageCard
              avatar={item.ownerImage}
              text={item.text}
              name={item.ownerName}
              image={item.image}
              comments={item.comments}
              likes={item.likes}
            />
          )
        }
      </Masonry>
  )
};

export default Cards;
