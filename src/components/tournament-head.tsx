/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Header = () => {
  return (
    <div>
      <div className="mt-6">
        <div className="text-xl font-normal">
          <div className="items-center p-2">
            <div className="text-4xl font-bold">
              เขียนเเบบไฟฟ้าด้วยคอมพิวเตอร์
            </div>
          </div>
          <div className="inline-block p-2">
            <div className="inline-flex items-center">
              <a>🎉</a>
              <div
                data-orientation="vertical"
                role="none"
                className="shrink-0 bg-border w-[1px] mx-2 h-4"
              ></div>
              <div className="text-lg font-medium text-gray-700">
                ประกาศณียบัตรวิชาชีพชั้นสูง
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
