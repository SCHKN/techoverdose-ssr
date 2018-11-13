import "semantic-ui-css/semantic.min.css";
import "../style.css";
import { Grid, Menu, Icon, Input, Divider, Button } from "semantic-ui-react";
import CardItem from "../components/framework/CardItem";

import { withRouter } from "next/router";
import HubHeader from "../components/hub/HubHeader";

const Hub = withRouter(props => (
  <div style={{ marginLeft: "10px" }}>
    <Button className="tech-ghost-blue">Back To Home</Button>
    <HubHeader />
    <Divider horizontal>Related Items</Divider>
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
              <CardItem item={framework} />
            </Grid.Column>
          ))}
      </Grid.Row>
    </Grid>
  </div>
));

Hub.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/frameworks/hub/${id}`);

  const data = await res.json();
  const { frameworks } = data;
  console.log(frameworks);
  return {
    frameworks
  };
};

export default Hub;
