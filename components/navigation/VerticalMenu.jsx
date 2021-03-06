import "semantic-ui-css/semantic.min.css";
import { Menu, Label, Icon } from "semantic-ui-react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

class VerticalMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { hubs } = this.props;
    return (
      <Menu vertical borderless fluid>
       <Menu.Item>
          <Menu.Header>Hubs</Menu.Header>
          <Menu.Menu>
            {hubs.map(hub => (
              <Link
                href={`/hub?id=${hub.id}`}
                as={`/hub/${hub.id}/${hub.slug}`}
              >
                <Menu.Item name={hub.displayName} />
              </Link>
            ))}
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    );
  }
}

export default VerticalMenu;
