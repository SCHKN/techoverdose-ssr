import "semantic-ui-css/semantic.min.css";
import "../style.css";
import { Grid, Menu, Icon, Button } from "semantic-ui-react";
import CardItem from "./../components/framework/CardItem";
import SiteHeader from "../components/layout/SiteHeader";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameworks: [],
      page: 1,
      searchValue: ""
    };
    this.timeout = 0;
  }

  componentWillMount() {
    this.setState({
      frameworks: this.props.frameworks
    });
  }

  handleScroll = async () => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({ page: prevState.page + 1 }));
        const frameworks = await this.fetchFrameworks(this.state.page);
        this.setState({
          frameworks: [...this.state.frameworks, ...frameworks]
        });
      }
    }
  };

  fetchFrameworks = async page => {
    console.log(`http://localhost:3000/api/frameworks?page=${page}`)
    const frameworksRaw = await fetch(
      `http://localhost:3000/api/frameworks?page=${page}`
    );
    const frameworksData = await frameworksRaw.json();
    const { frameworks } = frameworksData;
    return frameworks;
  };

  static async getInitialProps(context) {
    const res = await fetch(`http://localhost:3000/api/frameworks?page=0`);

    const data = await res.json();
    const { frameworks } = data;
    return {
      frameworks
    };
  }

  render() {
    const { frameworks } = this.state;
    return (
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
          ref={scroller => {
            this.scroller = scroller;
          }}
          onScroll={this.handleScroll}
          style={{
            maxHeight: "70vh",
            overflowY: "auto",
            overflowX: "hidden",
            padding: "10px"
          }}
        >
          <Grid columns={3} stackable>
            <Grid.Row>
              {frameworks &&
                frameworks.map(framework => (
                  <Grid.Column>
                    <CardItem item={framework} />
                  </Grid.Column>
                ))}
            </Grid.Row>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Index;
