"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";

interface Props {
  children: any;
}

const NProgress = ({ children }: Props) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#fffd00"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export default NProgress;
