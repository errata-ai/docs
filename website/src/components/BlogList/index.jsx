import React from "react"
import data from "../../data/posts.json";

const BlogList = () => {
  return (
    <>
      <ul>
        {data.map(({title, info, year, url, author}) => {
          return (
            <li key={title}>
                <a href={url} target="_blank">{title}</a> ({author})
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BlogList;