import React, { Component } from "react";
import { Segment, Item, Label, Icon } from "semantic-ui-react";
export default class SiteHeader extends Component {
  render() {
    return (
      <Segment>
        <Label attached="top" className="tech-blue">
          <Icon name="hand spock" />
          Welcome
        </Label>
        <Item.Group>
          <Item>
            <Item.Image
              size="small"
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/hello_aeia.svg"
            />

            <Item.Content>
              <Item.Header>Tech Overdose Goes 2.0</Item.Header>

              <Item.Meta />
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}
