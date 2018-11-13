import { Menu, Icon, Input, Tab, Segment, Divider } from "semantic-ui-react";
import FrameworkHeader from "../components/framework/FrameworkHeader";
import { withRouter } from "next/router";
import GitHubRepo from "../components/github/GitHubRepo";

class Framework extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      repositories: [],
      page: 1
    };
  }

  componentWillMount() {
    this.setState({
      framework: this.props.framework,
      repositories: this.props.repositories
    });
  }

  handleScroll = async() => {
    if (this.scroller) {
      if (
        this.scroller.scrollHeight - this.scroller.scrollTop ===
        this.scroller.clientHeight
      ) {
        this.setState(prevState => ({ page: prevState.page + 1 }));
        const repositories = await this.fetchRepos(this.state.framework.id, this.state.page);
        this.setState({
          repositories: [...this.state.repositories, ...repositories]
        });
      }
    }
  };

  fetchRepos = async (id, page) => {
    const repositoriesRaw = await fetch(
      `http://localhost:3000/api/repositories/framework/${id}?page=${page}`
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
    return (
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
        <Divider horizontal>Framework</Divider>
        <FrameworkHeader framework={this.state.framework} />
        <Tab
          {...this.state}
          panes={[
            {
              menuItem: {
                key: "github",
                icon: "github",
                content: "GitHub Repos"
              },
              render: ({ repositories, framework }) => (
                <div
                  ref={scroller => {
                    this.scroller = scroller;
                  }}
                  onScroll={this.handleScroll}
                  style={{
                    maxHeight: "70vh",
                    overflowY: "auto",
                    paddingRight: "10px",
                    marginTop: "10px"
                  }}
                >
                  {repositories.map(repo => (
                    <GitHubRepo repo={repo} framework={framework} />
                  ))}
                </div>
              )
            }
          ]}
        />
      </div>
    );
  }
}

export default withRouter(Framework);
