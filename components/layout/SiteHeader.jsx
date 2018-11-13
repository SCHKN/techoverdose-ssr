import React, { Component } from "react";
import { Segment, Item } from "semantic-ui-react";
export default class SiteHeader extends Component {
  render() {
    return (
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image
              size="small"
              src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/welcome_3gvl.svg"
            />

            <Item.Content>
              <Item.Header>Tech Overdose goes 2.0</Item.Header>

              <Item.Meta>
                Over the past six months, our engineers work to provide you with
                the best <b>resources</b> we could find for your favorite techs.
              </Item.Meta>
              <Item.Extra>Datasources available : GitHub, Reddit</Item.Extra>
              <Item.Extra>Hubs available : Front End Development, Blockchain</Item.Extra>
            </Item.Content>
          </Item>
        </Item.Group>
      </Segment>
    );
  }
}
