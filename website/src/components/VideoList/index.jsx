import React from "react"
import data from "../../data/videos.json";

const VideoList = () => {
  return (
    <>
      <ul>
        {data.map(({title, info, year, url, source}) => {
          return (
            <li key={title}>
                <a href={url}>{title}</a> ({source})
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default VideoList;