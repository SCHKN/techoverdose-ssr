import React, { Component } from "react";
import { Segment, Item, Grid, Icon, Rating, Label } from "semantic-ui-react";

export default class GitHubRepo extends Component {
  render() {
    const { repo, framework } = this.props;
    return (
      <Segment.Group>
        <Segment fluid style={{ borderLeft: `5px solid ${framework.color}` }}>
          <Item.Group>
            <Item>
              <Item.Image src={repo.imageURL} size="tiny" />

              <Item.Content>
                <Item.Header as="a" href={repo.url}>
                  {repo.name}
                </Item.Header>
                <Item.Meta>by {repo.owner}</Item.Meta>
                <Item.Description>{repo.description}</Item.Description>
                <Item.Extra>Updated 2 minutes ago</Item.Extra>
                <Item.Extra>Written in <b>{repo.language}</b></Item.Extra>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment fluid>
          <Grid columns={12}>
            <Grid.Row>
              <Grid.Column>
                <Icon name="star" />5
              </Grid.Column>
              <Grid.Column>
                <Icon name="eye" />5
              </Grid.Column>
              <Grid.Column>
                <Icon name="fork" />5
              </Grid.Column>
              <Grid.Column>
                <Rating
                  icon="star"
                  defaultRating={repo.score}
                  maxRating={5}
                  disabled
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </Segment.Group>
    );
  }
}
