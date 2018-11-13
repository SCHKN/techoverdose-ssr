import { Label, Feed, Icon, Segment } from "semantic-ui-react";
import Link from "next/link";

class ActivityMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Segment fluid>
        <Label attached="top" size="big" className="tech-blue">
          <Icon loading name="certificate" />
          Activity Feed
        </Label>
        <Feed style={{ marginTop: "20px", padding: "10px" }}>
          <Feed.Event>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User className="blue-tech">ablankrepotest</Feed.User>{" "}
                added to React
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
      </Segment>
    );
  }
}

export default ActivityMenu;
