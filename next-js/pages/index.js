import React from "react";
import Link from "next/link";
import Router from "next/router";

class Main extends React.Component {
  static async getInitialProps(context) {
    console.log(context);
    return { appName: "Super App" };
  }

  render() {
    return (
      <div>
        <h1>The main page {this.props.appName}</h1>
        <p>
          Go to{" "}
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </p>
        <button
          onClick={() => {
            Router.push("/auth");
          }}
        >
          Go to Auth
        </button>
      </div>
    );
  }
}

export default Main;
