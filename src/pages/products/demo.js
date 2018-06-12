/*---
title: Demo Product
subTitle: The demoiest product of them all.
---*/
import React from 'react';

export default class ProductDemo extends React.Component {
  render() {
    const { frontMatter } = this.props;
    return (
      <div>
        <h1>{frontMatter.title}</h1>
        <h2>{frontMatter.subTitle}</h2>
        <p>Lorem ipsum blah blah blah</p>
      </div>
    );
  }
}
