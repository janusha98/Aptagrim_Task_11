import Header from "./Components/header";
import SideNavigation from "./Components/navigation";
import { Col, Row, Grid } from "react-bootstrap";
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
      <Grid>
        <Row className="show-grid">
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
      </Grid>
    </>
  );
}
export default App;
