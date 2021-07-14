import Header from "./Components/header";
import SideNavigation from "./Components/navigation";
import { Col, Row } from "reactstrap";
import Profile from "./Components/profile";

function App() {
  const styles = {
    contentDiv: {
      display: "flex"
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%"
    }
  };
  return (
    <>
      <Row>
        <Col lg={3}>
          <div style={styles.contentDiv}>
            <SideNavigation></SideNavigation>
          </div>
        </Col>
        <Col lg={9}>
          <Header></Header>
          <Row>
            <Profile />
          </Row>
        </Col>
      </Row>
    </>
  );
}
export default App;
