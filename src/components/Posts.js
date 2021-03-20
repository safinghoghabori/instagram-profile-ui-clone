import React from "react";

import { Grid } from "@material-ui/core";

function Posts(props) {
  const { _id, imageUrl } = props;

  //convert image url in proper formate
  // const imageUrlSplit = imageUrl.split('\\');
  // const finalImageUrl = `/${imageUrlSplit[0]}/${imageUrlSplit[1]}`;

  return (
    <>
      <Grid item sm={4} xs={4}>
        <img src={imageUrl} key={_id} alt="img3" className="postsImg" />
      </Grid>
    </>
  );
}

export default Posts;
