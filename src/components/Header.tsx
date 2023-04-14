import React, { useEffect } from "react";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return <header>{children}</header>;
};
