import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import ImmutablePropTypes from 'react-immutable-proptypes';

function isVisible(field) {
  return field.get('widget') !== 'hidden';
}

function guessLanguage(code) {
  if (code.indexOf('import React') > -1) {
    return 'jsx';
  }
  return 'markdown';
}

export default class CodeHighlightPreview extends React.Component {
  render() {
    const { collection, fields, widgetFor, entry } = this.props;
    if (!collection || !fields) {
      return null;
    }
    return (
      <div>
        {
          fields.filter(isVisible).map((field) => {
            const name = field.get('name');
            if (name === 'body') {
              const code = entry.getIn(['data', 'body']);
              return (
                <SyntaxHighlighter language={guessLanguage(code)} style={docco}>
                  {code}
                </SyntaxHighlighter>
              );
            }
            return widgetFor(field.get('name'));
          })
        }
      </div>
    );
  }
}

CodeHighlightPreview.propTypes = {
  collection: ImmutablePropTypes.map.isRequired,
  entry: ImmutablePropTypes.map.isRequired,
  fields: ImmutablePropTypes.list.isRequired,
  getAsset: PropTypes.func.isRequired,
  widgetFor: PropTypes.func.isRequired,
};
