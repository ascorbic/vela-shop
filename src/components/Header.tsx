import React, { useEffect } from "react";
import { CartButton } from "./CartButton";
import "./Header.css";

export const Header: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [loaded, setLoaded] = React.useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);
  return (
    <header>
      <h1>
        <a href="/">Vela</a>
      </h1>
      <div>{children}</div>
      {loaded ? <CartButton /> : <span />}
    </header>
  );
};
