import { Segment, Item, Label } from "semantic-ui-react";
import Link from "next/link";
const CardItem = props => (
  <Segment.Group className="card">
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image size="tiny" src={props.item.imageURL} />

          <Item.Content>
            <Link
              as={`/framework/${props.item.id}/${props.item.name}`}
              href={`/framework?id=${props.item.id}`}
            >
              <Item.Header as="a">{props.item.name}</Item.Header>
            </Link>
            <Item.Meta>{props.item.description}</Item.Meta>
            <Item.Extra>Created in {props.item.creationYear}</Item.Extra>
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
