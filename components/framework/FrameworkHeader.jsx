import React, { Component } from "react";
import { Segment, Item } from "semantic-ui-react";

class FrameworkHeader extends Component {
  render() {
    const { framework } = this.props;
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" src={framework.imageURL} />

            <Item.Content>
              <Item.Header>{framework.name}</Item.Header>

              <Item.Meta>{framework.description}</Item.Meta>
              <Item.Extra>Created in {framework.creationYear}</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}

export default FrameworkHeader;