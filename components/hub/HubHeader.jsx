import React, { Component } from "react";
import { Segment, Item } from "semantic-ui-react";
export default class HubHeader extends Component {
  render() {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="small" src='https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/JavaScript_Frameworks_x21l.svg' />

            <Item.Content>
              <Item.Header>Front End Development</Item.Header>

              <Item.Meta>Hub related to front end development</Item.Meta>
              <Item.Extra>Created in 2018</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}
