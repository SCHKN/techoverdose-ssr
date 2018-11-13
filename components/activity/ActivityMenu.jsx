import { Menu, Feed, Icon } from "semantic-ui-react";
import Link from "next/link";

class ActivityMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Menu vertical borderless fluid>
        <Menu.Item>
          <Menu.Header>Activity</Menu.Header>
          <Feed>
            <Feed.Event>
              <Feed.Label>
                <img src="https://png.pngtree.com/svg/20170314/download_react_native_1115508.png" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User className="blue">ablankrepotest</Feed.User> added to React
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="star" />5 stars
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label>
                <img src="https://png.pngtree.com/svg/20170314/download_react_native_1115508.png" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User className="blue">ablankrepotest</Feed.User> added to React
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="star" />5 stars
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
            <Feed.Event>
              <Feed.Label>
                <img src="https://png.pngtree.com/svg/20170314/download_react_native_1115508.png" />
              </Feed.Label>
              <Feed.Content>
                <Feed.Summary>
                  <Feed.User className="blue">ablankrepotest</Feed.User> added to React
                  <Feed.Date>1 Hour Ago</Feed.Date>
                </Feed.Summary>
                <Feed.Meta>
                  <Feed.Like>
                    <Icon name="star" />5 stars
                  </Feed.Like>
                </Feed.Meta>
              </Feed.Content>
            </Feed.Event>
          </Feed>
        </Menu.Item>
      </Menu>
    );
  }
}

export default ActivityMenu;
