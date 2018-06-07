/* @flow */
import React from 'react';
import Helmet from 'react-helmet';

// TODO: couldn't get npm version to work with batfish
// ("window not defined" error during `npm run build`), 
// so used the unpkg-hosted version instead
// Might be able to use the "Manual Configuration" method
// outlined at https://www.netlifycms.org/docs/beta-features/

export default () => (
  <div>
    <Helmet>
      <link
        href="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css"
        rel="stylesheet"
      />
    </Helmet>
    <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js"></script>
  </div>
);
