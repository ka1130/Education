import React from "react";

export default class InifiniteScroll extends React.Component {
  constructor(props) {
    super(props);
    this.container = null;
  }

  componentDidMount() {
    document.addEventListener("scroll", this.scrollListener);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollListener);
  }

  scrollListener = () => {
    const { isLoading, onTrigger } = this.props;
    const viewportHeight = document.documentElement.clientHeight;
    const { bottom } = this.container.getBoundingClientRect();

    if (!isLoading && bottom <= viewportHeight) {
      onTrigger();
    }
  };

  render() {
    const { children, isLoading } = this.props;
    return (
      <div ref={el => (this.container = el)}>
        {children}
        {isLoading && <div>Loading...</div>}
      </div>
    );
  }
}
