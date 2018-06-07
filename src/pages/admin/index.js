import React from 'react';
import Helmet from 'react-helmet';

// TODO: couldn't get npm version to work with batfish
// ("window not defined" error during `npm run build`), 
// so used the unpkg-hosted version instead

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link
            href="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css"
            rel="stylesheet"
          />
          <script src="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.js"></script>
        </Helmet>
      </div>
    );
  }
}
