import "semantic-ui-css/semantic.min.css";
import TopBar from "../navigation/TopBar";
import VerticalMenu from "../navigation/VerticalMenu";
import { Grid, Container } from "semantic-ui-react";

const AppLayout = props => (
  <div>
    <TopBar />
    <Container>
      <Grid stackable columns={2}>
        <Grid.Column width={4}>
          <VerticalMenu hubs={props.hubs} />
        </Grid.Column>
        <Grid.Column width={12}>{props.children}</Grid.Column>
      </Grid>
    </Container>
  </div>
);

export default AppLayout;
