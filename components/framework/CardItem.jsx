import { Segment, Item, Label } from "semantic-ui-react";

const CardItem = props => (
  <Segment.Group className="card">
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={props.framework.imageURL} />

          <Item.Content>
            <Item.Header as="a">{props.framework.name}</Item.Header>
            <Item.Meta>{props.framework.description}</Item.Meta>
            <Item.Extra>Created in {props.framework.creationYear}</Item.Extra>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment>
      <Label content="10k" icon="github" />
      <Label content="1k" icon="reddit orange" />
    </Segment>
  </Segment.Group>
);

export default CardItem;
