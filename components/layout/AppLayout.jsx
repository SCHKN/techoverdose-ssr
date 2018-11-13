import "semantic-ui-css/semantic.min.css";
import TopBar from "../navigation/TopBar";
import VerticalMenu from "../navigation/VerticalMenu";
import {
  Grid,
  Container,
  Button,
  Divider,
  Segment,
  Header,
  Icon,
  Input
} from "semantic-ui-react";
import ActivityMenu from "./../activity/ActivityMenu";

const AppLayout = props => (
  <div style={{ backgroundColor: "#bdbdbd0f", height: "100vh" }}>
    <TopBar />
    <Container>
      <Divider horizontal />
      <Grid stackable columns={2}>
        <Grid.Column width={5}>
          <Button className="tech-blue">Add A Resource</Button>
          <VerticalMenu hubs={props.hubs} />
          <ActivityMenu />
        </Grid.Column>
        <Grid.Column width={11}>{props.children}</Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default AppLayout;
