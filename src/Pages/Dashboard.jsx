import { useState } from "react";
import { FaInbox, FaCalendarAlt, FaThLarge, FaLayerGroup } from "react-icons/fa";

export default function TrelloLikeDashboard() {
  const [activeTabs, setActiveTabs] = useState(["Inbox"]);

  const tabs = [
    { name: "Inbox", icon: <FaInbox /> },
    { name: "Planner", icon: <FaCalendarAlt /> },
    { name: "Board", icon: <FaThLarge /> },
    { name: "Switch Boards", icon: <FaLayerGroup /> },
  ];

  const cards = {
    Inbox: [
      { id: 1, title: "Capture Email", desc: "Tasks captured from email & Slack" },
      { id: 2, title: "Follow Up", desc: "Client follow-up pending" },
    ],
    Planner: [
      { id: 1, title: "Team Meeting", desc: "Schedule project sync" },
      { id: 2, title: "Plan Sprint", desc: "Prepare tasks for next sprint" },
    ],
    Board: [
      { id: 1, title: "Backlog", desc: "Pending tasks" },
      { id: 2, title: "In Progress", desc: "Currently working on" },
    ],
    "Switch Boards": [
      { id: 1, title: "Board 1", desc: "Switch to Board 1" },
      { id: 2, title: "Board 2", desc: "Switch to Board 2" },
    ],
  };

  const handleTabClick = (name, e) => {
    if (e.ctrlKey || e.metaKey) {
      setActiveTabs((prev) =>{
        if(prev.includes(name)){
            return prev.length > 1 ? prev.filter((t)=> t !== name) : prev;
        }
        return [...prev, name]
      }
        // prev.includes(name) ? prev.filter((t) => t !== name) :
      );
    } else {
      setActiveTabs([name]);
    }
  };

  const getColumnWidth = (count) => {
    switch (count) {
      case 1:
        return "w-full";
      case 2:
        return "w-1/2";
      case 3:
        return "w-1/3";
      case 4:
        return "w-1/4";
      default:
        return "w-full";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Top Panels */}
      <div className="flex flex-1 p-4 gap-4">
        {activeTabs.map((tab) => (
          <div
            key={tab}
            className={`${getColumnWidth(activeTabs.length)} bg-white rounded-lg shadow p-4 flex flex-col`}
          >
            <h2 className="text-lg font-semibold text-blue-600 mb-3">{tab}</h2>
            <div className="space-y-3">
              {cards[tab].map((card) => (
                <div
                  key={card.id}
                  className="bg-blue-50 p-3 rounded-md shadow-sm border hover:shadow-md transition"
                >
                  <h3 className="font-medium">{card.title}</h3>
                  <p className="text-sm text-gray-600">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Navbar */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-3 py-2 flex space-x-3 items-center border">
        {tabs.map((item) => (
          <button
            key={item.name}
            onClick={(e) => handleTabClick(item.name, e)}
            className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 
              ${activeTabs.includes(item.name) ? "bg-blue-50 text-blue-600 shadow-inner" : "text-gray-700 hover:bg-gray-100"}`}
          >
            {item.icon}
            <span className="text-sm font-medium">{item.name}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
