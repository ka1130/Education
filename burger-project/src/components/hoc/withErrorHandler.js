import React, { useState, useEffect } from "react";
import Modal from "components/UI/Modal";

const withErrorHandler = (WrappedComponent, axiosInstance) => {
  return props => {
    const [error, setError] = useState(null);

    const reqInterceptor = axiosInstance.interceptors.request.use(request => {
      setError(null);
      return request;
    });

    const respInterceptor = axiosInstance.interceptors.response.use(
      response => response,
      err => {
        setError(err);
        return Promise.reject(err);
      }
    );

    useEffect(() => {
      // a cleanup fn, equivalent of componentWiiUnmount
      return () => {
        axiosInstance.interceptors.request.eject(reqInterceptor);
        axiosInstance.interceptors.response.eject(respInterceptor);
      };
    }, [reqInterceptor, respInterceptor]);
    // the 2.arg, [], is necessary, run it whenever one of the passed values change

    console.log(error ? "true" : false);
    return (
      <>
        <Modal isOpen={error} onModalClose={() => setError({ error: null })}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
};

export default withErrorHandler;
