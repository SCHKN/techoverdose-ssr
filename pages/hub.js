import "semantic-ui-css/semantic.min.css";
import "../style.css";
import { Grid, Menu, Icon, Input } from "semantic-ui-react";
import CardItem from "../components/framework/CardItem";
import Link from "next/link";
import { withRouter } from "next/router";

const Hub = withRouter(props => (
  <div style={{ marginLeft: "10px" }}>
    <Menu borderless>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input placeholder="Search..." />
        </Menu.Item>
        <Menu.Item>
          <Icon name="list" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="grid layout" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <Grid columns={3} stackable>
      <Grid.Row>
        {props.frameworks &&
          props.frameworks.map(framework => (
            <Grid.Column>
              <Link
                as={`/framework/${framework.name}`}
                href={`/framework?id=${framework.id}`}
              >
                <CardItem framework={framework} />
              </Link>
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  </div>
));

Hub.getInitialProps = async function(context) {
  
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/frameworks/${id}`);
  
  const data = await res.json();
  const { frameworks } = data;
  console.log(frameworks);
  return {
    frameworks
  };
};

export default Hub;
