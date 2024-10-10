import React from "react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const layout = ({ children }: AuthLayoutProps) => {
  return <main className="flex items-center justify-center">{children}</main>;
};

export default layout;
