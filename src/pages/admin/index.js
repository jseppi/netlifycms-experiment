/* @flow */
import React from 'react';
import Helmet from 'react-helmet';
import CodeHighlightPreview from '../../components/codeHighlightPreview';

export default class Admin extends React.Component<*> {
  componentDidMount() {
    if (window) {
      window.CMS_MANUAL_INIT = true
      // dynamic require so that batfish build would work
      // (b/c netlify-cms relies on `window` being present)
      const CMS = require('netlify-cms');
      CMS.init();
      CMS.default.registerPreviewTemplate("industries", CodeHighlightPreview);
      CMS.default.registerPreviewTemplate("products", CodeHighlightPreview);
    }
  }

  render() {
    return (
      <div>
        <Helmet>
          <link href="/static/cms.css" rel="stylesheet" />
        </Helmet>
      </div>
    )
  }
}
