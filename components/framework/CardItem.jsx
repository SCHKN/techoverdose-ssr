import { Segment, Item, Label, Icon } from "semantic-ui-react";
import Link from "next/link";
const CardItem = props => (
  <Segment.Group className="card">
    <Segment>
      <Item.Group>
        <Item>
          <Item.Image
            size="tiny"
            src={
              props.item.imageURL
                ? props.item.imageURL
                : "/static/placeholder.jpg"
            }
          />

          <Item.Content>
            <Link
              as={`/framework/${props.item._id}/${props.item.name}`}
              href={`/framework?id=${props.item._id}`}
            >
              <Item.Header as="a" style={{ fontSize: "100%" }}>
                {props.item.displayName}
              </Item.Header>
            </Link>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
    <Segment>
      <Label content={props.item.numberOfRepositories} icon="github" />
      <Label content="1k" icon="reddit" />
      <Link
        as={`/framework/${props.item._id}/${props.item.name}`}
        href={`/framework?id=${props.item._id}`}>
        <Label floated="right" className="tech-blue" as="a">
          Go!
        </Label>
      </Link>
    </Segment>
  </Segment.Group>
);

export default CardItem;
