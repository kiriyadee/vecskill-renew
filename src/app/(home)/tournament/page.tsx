"use client";

import React from "react";
import { Header } from "@/components/tournament-head";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const tabs = ["ระดับจังหวัด", "ระดับภาค", "ระดับประเทศ"];

const Tournament = () => {
  return (
    <div className="">
      <div className=" bg-gray-200 p-2 font-normal">
        <div className="container mx-auto flex justify-between">
          <div className="flex space-x-2 items-center">
            <div>Last Tournaments Winners</div>
            <span className="text-gray-600 text-sm">test</span>
          </div>
          <div className="flex space-x-2 items-center">
            <div>Last Tournaments Winners</div>
            <span className="text-gray-600 text-sm">test</span>
          </div>
          <div className="flex space-x-2 items-center">
            <div>Last Tournaments Winners</div>
            <span className="text-gray-600 text-sm">test</span>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Header />
      </div>
    </div>
  );
};

export default Tournament;

function NavList() {
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  return (
    <div className="flex justify-center items-center">
      <div className="pt-4 flex justify-center">
        <Tabs className="">
          <TabsList className="space-x-2">
            {tabs.map((tab, index) => (
              <TabsTrigger key={tab} value="overview" className="bg-white">
                {tab}
              </TabsTrigger>
              // <TabsTrigger value="analytics" disabled>
              //   Analytics
              // </TabsTrigger>
              // <TabsTrigger value="reports" disabled>
              //   Reports
              // </TabsTrigger>
              // <TabsTrigger value="notifications" disabled>
              //   Notifications
              // </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>
    </div>
  );
}
