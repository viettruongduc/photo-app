import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./index.scss";

export default function Header() {
  return (
    <header className="header">
      <Container>
        <Row>
          <Col>
						<a href="/" className="header__title">
							EASY CODING
						</a>
					</Col>
					<Col>
						<NavLink to="/photos" exact className="header__photos">
							PHOTOS
						</NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
}
