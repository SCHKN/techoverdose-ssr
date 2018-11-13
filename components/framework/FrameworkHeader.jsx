import React, { Component } from "react";
import { Segment, Item, Grid, Icon } from "semantic-ui-react";

class FrameworkHeader extends Component {
  render() {
    const { framework } = this.props;
    return (
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" src={framework.imageURL} />

              <Item.Content>
                <Item.Header>{framework.displayName}</Item.Header>

                <Item.Meta>{framework.description}</Item.Meta>
                <Item.Extra>{framework.released ? "Released " + framework.released : ""}</Item.Extra>
                <Item.Extra>{framework.creator ? "Made by " + framework.creator : ""}</Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
      </Segment.Group>
    );
  }
}

export default FrameworkHeader;
