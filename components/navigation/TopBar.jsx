import "semantic-ui-css/semantic.min.css";
import { Menu, Button } from "semantic-ui-react";

const TopBar = () => (
  <Menu>
    <Menu.Item header>Tech Overdose</Menu.Item>
    <Menu.Menu position="right">
      <Menu.Item>
        <Button inverted color="blue">Log In</Button>
      </Menu.Item>
      <Menu.Item>
        <Button inverted color="red">Sign Up</Button>
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

export default TopBar;
