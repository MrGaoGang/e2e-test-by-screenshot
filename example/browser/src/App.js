import "./App.css";
import "antd-mobile/dist/antd-mobile.css";
import { Tabs, WhiteSpace, Badge } from "antd-mobile";
import Table from './Table';

const App = () => {
  const tabs = [
    { title: <Badge text={"3"}>First Tab</Badge> },
    { title: <Badge text={"今日(20)"}>Second Tab</Badge> },
    { title: <Badge dot>Third Tab</Badge> },
  ];


  return (
    <div>
      <Tabs
        tabs={tabs}
        onChange={(tab, index) => {
          console.log("onChange", index, tab);
        }}
        onTabClick={(tab, index) => {
          console.log("onTabClick", index, tab);
        }}
      >
        <div
          style={{
          
          }}
        >
         <Table/>
        </div>
        <div
          style={{
         
          }}
        >
          Content of second tab
        </div>
        <div
          style={{
        
          }}
        >
          Content of third tab
        </div>
      </Tabs>

      <WhiteSpace />
    </div>
  );
};

export default App;
