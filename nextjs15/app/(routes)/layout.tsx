import React from "react";

interface RoutesLayoutProps {
  children: React.ReactNode;
}

const RoutesLayout = ({ children }: RoutesLayoutProps) => {
  return (
    <div>
      header
      {children}
      footer
    </div>
  );
};

export default RoutesLayout;
