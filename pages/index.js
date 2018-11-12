import "semantic-ui-css/semantic.min.css";
import "../style.css";
import { Grid, Menu, Icon } from "semantic-ui-react";


const Index = () => (
  <div style={{ marginLeft: "10px" }}>
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
    <Grid columns={3} stackable />
  </div>
);

export default Index;
