import { useState, useRef } from "react";
import { FaInbox, FaCalendarAlt, FaThLarge, FaLayerGroup } from "react-icons/fa";

export default function Dashboard() {
  const [activeTabs, setActiveTabs] = useState(["Inbox"]);
  const [widths, setWidths] = useState({}); // store custom widths
  const draggingIndex = useRef(null);

  const tabs = [
    { name: "Inbox", icon: <FaInbox /> },
    { name: "Planner", icon: <FaCalendarAlt /> },
    { name: "Board", icon: <FaThLarge /> },
    { name: "Switch boards", icon: <FaLayerGroup /> },
  ];

  const TabContent = ({ name }) => {
    const styles = {
      Inbox: "bg-blue-50",
      Planner: "bg-green-50",
      Board: "bg-purple-50",
      "Switch boards": "bg-yellow-50",
    };
    return (
      <div className={`p-4 h-full ${styles[name]} rounded`}>
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="mt-2">This is the {name} view.</p>
      </div>
    );
  };

  // Handle Tab Selection
  const handleTabClick = (name, e) => {
    if (e.ctrlKey || e.metaKey) {
      setActiveTabs((prev) =>
        prev.includes(name) ? prev.filter((t) => t !== name) : [...prev, name]
      );
    } else {
      setActiveTabs([name]);
    }
  };

  // Dragging Logic
  const startDrag = (index, e) => {
    draggingIndex.current = index;
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDrag);
  };

  const handleDrag = (e) => {
    if (draggingIndex.current !== null) {
      const newWidths = { ...widths };
      newWidths[draggingIndex.current] = `${e.clientX / window.innerWidth * 100}%`;
      setWidths(newWidths);
    }
  };

  const stopDrag = () => {
    draggingIndex.current = null;
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDrag);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Split View */}
      <div className="flex flex-1 transition-all">
        {activeTabs.map((tab, i) => (
          <div
            key={tab}
            style={{ width: widths[i] || `${100 / activeTabs.length}%` }}
            className="relative border-l border-gray-200 overflow-auto transition-all duration-300"
          >
            <TabContent name={tab} />
            {/* Drag Handle */}
            {i < activeTabs.length - 1 && (
              <div
                onMouseDown={(e) => startDrag(i, e)}
                className="absolute top-0 right-0 w-2 cursor-col-resize bg-gray-300 hover:bg-blue-400 transition"
              ></div>
            )}
          </div>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-white shadow-lg rounded-2xl px-3 py-2 flex space-x-3 items-center border">
        {tabs.map((item) => (
          <button
            key={item.name}
            onClick={(e) => handleTabClick(item.name, e)}
            className={`relative flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 
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
