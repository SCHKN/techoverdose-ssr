import "semantic-ui-css/semantic.min.css";
import "../style.css";
import AppLayout from "../components/layout/AppLayout";
import { withRouter } from "next/router";
import { Grid, Menu, Icon } from "semantic-ui-react";
import fetch from "isomorphic-unfetch";

const Index = withRouter(props => (
  <AppLayout>
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
  </AppLayout>
));

// Index.getInitialProps = async function() {
//   const res = await fetch("http://localhost:3000/api/hubs");
//   const data = await res.json();
//   const { hubs } = data;
//   return {
//     hubs
//   };
// };

export default Index;
