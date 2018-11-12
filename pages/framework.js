import { Menu, Icon, Input, Tab, Segment } from "semantic-ui-react";
import FrameworkHeader from "../components/framework/FrameworkHeader";
import { withRouter } from "next/router";
import GitHubRepo from "../components/github/GitHubRepo";

const Framework = withRouter(props => (
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
    <FrameworkHeader framework={props.framework} />
    <Tab
      {...props}
      panes={[
        {
          menuItem: { key: "github", icon: "github", content: "GitHub Repos" },
          render: ({ repos, framework }) => (
            <div
              style={{
                maxHeight: "70vh",
                overflowY: "auto",
                paddingRight: "10px",
                marginTop: "10px"
              }}
            >
              {repos.map(repo => (
                <GitHubRepo repo={repo} framework={framework} />
              ))}
            </div>
          )
        }
      ]}
    />
  </div>
));

Framework.getInitialProps = async function(context) {
  const { id } = context.query;
  const res = await fetch(`http://localhost:3000/api/frameworks/${id}`);

  const data = await res.json();
  const { framework } = data;
  return {
    framework,
    repos: [
      {
        name: "first repo",
        imageURL: "https://avatars3.githubusercontent.com/u/35979086?v=4",
        owner: "bob",
        description:
          "⚡️  [WIP]  Build blazing fast websites for any CMS or data with Vue.js"
      },
      {
        name: "second repo",
        owner: "bab",
        imageURL: "https://avatars1.githubusercontent.com/u/38835652?v=4",
        description:
          "⚡️  [WIP]  Build blazing fast websites for any CMS or data with Vue.js"
      },
      {
        name: "third repo",
        owner: "bib",
        imageURL: "https://avatars2.githubusercontent.com/u/17981963?v=4",
        description:
          "⚡️  [WIP]  Build blazing fast websites for any CMS or data with Vue.js"
      },
      {
        name: "first repo",
        imageURL: "https://avatars3.githubusercontent.com/u/35979086?v=4",
        owner: "bob",
        description:
          "⚡️  [WIP]  Build blazing fast websites for any CMS or data with Vue.js"
      },
      {
        name: "first repo",
        imageURL: "https://avatars3.githubusercontent.com/u/35979086?v=4",
        owner: "bob",
        description:
          "⚡️  [WIP]  Build blazing fast websites for any CMS or data with Vue.js"
      },
      {
        name: "first repo",
        imageURL: "https://avatars3.githubusercontent.com/u/35979086?v=4",
        owner: "bob",
        description:
          "⚡️  [WIP]  Build blazing fast websites for any CMS or data with Vue.js"
      }
    ]
  };
};

export default Framework;
