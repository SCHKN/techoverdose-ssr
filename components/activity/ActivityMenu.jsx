import { Label, Feed, Icon, Segment, Rating } from "semantic-ui-react";
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
            <Feed.Label>
              <img src="http://cdn.app.compendium.com/uploads/user/e7c690e8-6ff9-102a-ac6d-e4aebca50425/f4a5b21d-66fa-4885-92bf-c4e81c06d916/Image/341d6405fa1f03fd2aa5a215441be6e3/2524291.png" />
            </Feed.Label>
            <Feed.Content>
              <Feed.Summary>
                <Feed.User className="blue-tech">orientdb</Feed.User> added to
                NoSQL
                <Feed.Date>1 Hour Ago</Feed.Date>
              </Feed.Summary>
              <Feed.Extra
                images={[
                  "https://avatars0.githubusercontent.com/u/5547849?v=4"
                ]}
              />
              <Feed.Extra>
                <Label>Javascript</Label>
                <Label>
                  <Rating
                    icon="star"
                    defaultRating={3}
                    maxRating={5}
                    disabled
                  />
                </Label>
              </Feed.Extra>
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
