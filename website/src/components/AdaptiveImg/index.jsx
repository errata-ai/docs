import React from 'react';
import useThemeContext from '@theme/hooks/useThemeContext';

function AdaptiveImg({alt, src, caption, format, size}) {
  const {isDarkTheme, setLightTheme, setDarkTheme} = useThemeContext();

  const ext = isDarkTheme ? '-dark' : '-light';
  const image = src + ext + format;
  const classes = size + '-img';

  if (caption) {
    return (
      <figure>
        <img alt={alt} src={image} className={classes} />
        <figcaption>{caption}</figcaption>
      </figure>
    );
  } else {
    return (
        <img alt={alt} src={image} className={classes} />
    )
  }
}

export default AdaptiveImg;
