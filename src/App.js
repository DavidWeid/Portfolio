import React from "react";
import { BrowserRouter as HashRouter, Route, Switch } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import styled from "styled-components";
import "./App.scss";

import { HomePage, ContactPage, WorksPage, AboutPage } from "./pages";

const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  // overflow: hidden;
`;

function App() {
  return (
    <HashRouter basename="/portfolio">
      <Route
        render={({ location }) => {
          return (
            <PageContainer className="container">
              <TransitionGroup component={null}>
                <CSSTransition
                  timeout={700}
                  classNames="page"
                  key={location.key}
                >
                  <Switch location={location}>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/contact" component={ContactPage} />
                    <Route exact path="/works" component={WorksPage} />
                    <Route exact path="/about" component={AboutPage} />
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </PageContainer>
          );
        }}
      />
    </HashRouter>
  );
}

export default App;
