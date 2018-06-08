
import React from 'React';

// Props:
// entry: Immutable collection containing the entry data.
// widgetFor: Returns the appropriate widget preview component for a given field.
// widgetsFor: Returns an array of objects with widgets and associated field data. For use with list and object type entries.
// getAsset: Returns the correct filePath or in-memory preview for uploaded images.

export default class IndustryPagePreviewTemplate extends React.Component {
  render() {
    // const { entry } = this.props;

    // const data = entry.get('data').toJSON();
    // console.log(data);

    return (
      <div>
        <p>Put anything you want in here</p>
        {this.props.widgetFor('body')}
      </div>
    );
  }
}
