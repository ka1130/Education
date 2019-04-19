import React from "react";
import Modal from "components/UI/Modal";

const withErrorHandler = (WrappedComponent, axiosInstance) => {
  return class extends React.Component {
    state = { error: null };

    componentWillMount() {
      this.reqInterceptor = axiosInstance.interceptors.request.use(request => {
        this.setState({ error: null });
        return request;
      });

      this.respInterceptor = axiosInstance.interceptors.response.use(
        response => response,
        error => {
          this.setState({ error });
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      axiosInstance.interceptors.request.eject(this.reqInterceptor);
      axiosInstance.interceptors.response.eject(this.respInterceptor);
    }

    render() {
      const { error } = this.state;
      return (
        <>
          <Modal
            isOpen={error}
            onModalClose={() => this.setState({ error: null })}
          >
            {error ? error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </>
      );
    }
  };
};

export default withErrorHandler;
