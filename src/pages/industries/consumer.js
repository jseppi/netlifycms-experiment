/*---
title: Consumer
heroText: "Build beautiful experiences and drive engagement"
description: >-
  Connect the physical world with the digital world through immersive augmented reality experiences.
  Use personal, real-time information to make your apps useful and sticky. Surface the right
  location information — weather, traffic, and nearby places — even when people aren’t looking at a map.
  Mapbox’s mapping and location building blocks enable product teams to build innovative experiences
  that engage and delight users.
featuredImage: "/static/industry-consumer-c.jpeg"
---*/

/* @flow */

// TODO: might be better to use jsxtreme-markdown .md file instead of .js

import React from 'react';

type Props = {
  frontMatter: {
    title: string,
    heroText: string,
    description: string,
    featuredImage: string
  }
};

export default class Consumer extends React.PureComponent<Props> {
  render() {
    const { frontMatter } = this.props;
    const { title, heroText, description, featuredImage } = frontMatter;

    return (
      <div>
        <h1>{title}</h1>
        <h2>{heroText}</h2>
        <p>{description}</p>
        <img src={featuredImage} />
      </div>
    );
  }
}
