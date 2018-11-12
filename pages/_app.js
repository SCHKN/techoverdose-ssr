import React from "react";
import AppLayout from "../components/layout/AppLayout";
import App, { Container } from "next/app";

export default class CommonApp extends App {
  render() {
    const { hubs, Component, pageProps } = this.props;
    return (
      <Container>
        <AppLayout hubs={hubs}>
          <Component {...pageProps} />
        </AppLayout>
      </Container>
    );
  }
}

CommonApp.getInitialProps = async function({ Component, router, ctx }) {
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  const res = await fetch("http://localhost:3000/api/hubs");
  const data = await res.json();
  const { hubs } = data;
  return {
    hubs,
    pageProps
  };
};
