import "semantic-ui-css/semantic.min.css";
import "../style.css";
import { Grid, Menu, Icon, Button } from "semantic-ui-react";
import CardItem from "./../components/framework/CardItem";
import SiteHeader from "../components/layout/SiteHeader";

const Index = props => (
  <div style={{ marginLeft: "10px" }}>
    <SiteHeader />
    <Menu borderless>
      <Menu.Menu position="right">
        <Menu.Item>
          <Icon name="list" />
        </Menu.Item>
        <Menu.Item>
          <Icon name="grid layout" />
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    <div
      style={{
        maxHeight: "70vh",
        overflowY: "auto",
        overflowX: "hidden",
        padding: "10px"
      }}
    >
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
  </div>
);

Index.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/frameworks?page=0`);

  const data = await res.json();
  const { frameworks } = data;
  console.log(frameworks);
  return {
    frameworks
  };
};

export default Index;
