import "semantic-ui-css/semantic.min.css";
import { Menu } from "semantic-ui-react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";

class VerticalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hubs: []
    };
  }

  // componentWillMount = async () => {
  //   const res = await fetch("http://localhost:3000/api/hubs");
  //   const data = await res.json();
  //   const { hubs } = data;
  //   this.setState({
  //     hubs
  //   });
  // };

  render() {
    const { hubs } = this.props;
    return (
      <Menu vertical borderless>
        <Menu.Item>
          <Menu.Header>Categories</Menu.Header>
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
