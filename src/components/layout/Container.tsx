import React from "react";

interface Props {
  children?: React.ReactNode;
}

const Container = ({ children }: Props): JSX.Element => {
  return <div className="container mx-auto mb-auto mt-6">{children}</div>;
};

Container.defaultProps = {
  children: undefined,
};

export default Container;
