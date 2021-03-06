import {
  Menu,
  Icon,
  Input,
  Tab,
  Segment,
  Divider,
  Button
} from "semantic-ui-react";
import FrameworkHeader from "../components/framework/FrameworkHeader";
import { withRouter } from "next/router";
import GitHubRepo from "../components/github/GitHubRepo";

class Framework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      page: 1,
      searchValue: ""
    };
    this.timeout = 0;
  }

  componentWillMount() {
    this.setState({
      framework: this.props.framework,
      repositories: this.props.repositories
    });
  }

  handleScroll = async () => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({ page: prevState.page + 1 }));
        const repositories = await this.fetchRepos(
          this.state.framework._id,
          this.state.page,
          this.state.searchValue
        );
        this.setState({
          repositories: [...this.state.repositories, ...repositories]
        });
      }
    }
  };

  onSearchChange = async searchValue => {
    if (this.timeout) clearTimeout(this.timeout);
    this.timeout = setTimeout(async () => {
      this.setState({
        searchValue,
        page: 1,
        repositories: []
      });
      const repositories = await this.fetchRepos(
        this.state.framework._id,
        0,
        this.state.searchValue
      );
      this.setState({
        repositories
      });
    }, 1000);
  };

  fetchRepos = async (id, page, searchValue) => {
    console.log(
      `http://localhost:3000/api/repositories/framework/${id}?page=${page}` +
        (searchValue ? `&q=${searchValue}` : "")
    );
    const repositoriesRaw = await fetch(
      `http://localhost:3000/api/repositories/framework/${id}?page=${page}` +
        (searchValue ? `&q=${searchValue}` : "")
    );
    const repositoriesData = await repositoriesRaw.json();
    const { repositories } = repositoriesData;
    return repositories;
  };

  static async getInitialProps(context) {
    const { id } = context.query;

    // Fetching framework detail
    const res = await fetch(`http://localhost:3000/api/frameworks/${id}`);
    const data = await res.json();
    const { framework } = data;

    // Fetching repos
    const repositoriesRaw = await fetch(
      `http://localhost:3000/api/repositories/framework/${id}?page=0`
    );
    const repositoriesData = await repositoriesRaw.json();
    const { repositories } = repositoriesData;

    return {
      framework,
      repositories
    };
  }

  render() {
    const { repositories, framework } = this.state;
    return (
      <div style={{ marginLeft: "10px" }}>
        <Button className="tech-ghost-blue">Back To Home</Button>
        <Button icon labelPosition="left" className="tech-blue">
          Subscribe to RSS
          <Icon name="rss" />
        </Button>
        <FrameworkHeader framework={this.state.framework} />
        <div>
          <Menu borderless style={{ marginTop: "10px" }} size="big">
            <Menu.Menu position="right">
              <Menu.Item>
                <Input
                  className="icon"
                  icon="code"
                  iconPosition="left"
                  placeholder="Search A Repository..."
                  size="small"
                  onChange={(e, { value }) => this.onSearchChange(value)}
                />
              </Menu.Item>
              <Menu.Item>
                <Icon name="list" />
              </Menu.Item>
              <Menu.Item>
                <Icon name="grid layout" />
              </Menu.Item>
            </Menu.Menu>
          </Menu>
          <Divider horizontal>Results</Divider>
          <div
            ref={scroller => {
              this.scroller = scroller;
            }}
            onScroll={this.handleScroll}
            style={{
              maxHeight: "60vh",
              overflowY: "auto",
              paddingRight: "10px",
              marginTop: "10px"
            }}
          >
            {repositories.map(repo => (
              <GitHubRepo repo={repo} framework={framework} />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Framework);
