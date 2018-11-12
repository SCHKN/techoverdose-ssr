import "semantic-ui-css/semantic.min.css";
import "../style.css";
import { Grid, Menu, Icon, Input } from "semantic-ui-react";
import CardItem from "../components/framework/CardItem";
import Link from "next/link";
import { withRouter } from "next/router";

const Hub = withRouter(props => (
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
    <Grid columns={3} stackable>
      <Grid.Row>
        {props.frameworks && props.frameworks.map(({ framework }) => (
          <Grid.Column>
            <Link
              as={`/framework/${framework.name}`}
              href={`/framework?id=${framework.id}`}
            >
              <CardItem framework={framework} />
            </Link>
          </Grid.Column>
        ))}
      </Grid.Row>
    </Grid>
  </div>
));

Hub.getInitialProps = async function(context) {
  const { id } = context.query;
  return {
    frameworks: [
      {
        framework: {
          id: 1,
          name: "React",
          description: "Facebook's Front End Framework",
          creationYear: 2015,
          imageURL:
            "https://png.pngtree.com/svg/20170314/download_react_native_1115508.png"
        }
      },
      {
        framework: {
          id: 2,
          name: "Angular",
          description: "Google's Front End Framework",
          creationYear: 2013,
          imageURL:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png"
        }
      },
      {
        framework: {
          id: 3,
          name: "Redux",
          description: "App State Management",
          creationYear: 2015,
          imageURL:
            "https://avatars0.githubusercontent.com/u/13142323?s=400&v=4"
        }
      }
    ]
  };
};

export default Hub;
