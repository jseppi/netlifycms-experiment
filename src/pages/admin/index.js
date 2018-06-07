import 'netlify-cms';
import React from 'react';
import Helmet from 'react-helmet';

// TODO: couldn't get this to work so used the unpkg version instead for now
// import CMSCss from 'netlify-cms/dist/cms.css';

export default class Admin extends React.Component {
  render() {
    return (
      <div>
        <Helmet>
          <link
            href="https://unpkg.com/netlify-cms@^1.0.0/dist/cms.css"
            rel="stylesheet"
          />
        </Helmet>
      </div>
    );
  }
}
