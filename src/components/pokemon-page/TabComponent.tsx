import Button from "../button/Button";

type Props = {
  activeTab: string;
  setActiveTab: (tab: "stats" | "evolutions" | "moves") => void;
  backgroundColor: string;
};

const TabComponent = ({ activeTab, setActiveTab, backgroundColor }: Props) => {
  return (
    <div className="pokemon_page_tab_container">
      {(["stats", "evolutions", "moves"] as const).map((tab) => (
        <Button
          type="button"
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`tab_button ${activeTab === tab ? "active" : ""}`}
          style={
            activeTab === tab ? { backgroundColor } : { color: backgroundColor }
          }
        >
          {tab.charAt(0).toUpperCase() + tab.slice(1)}
        </Button>
      ))}
    </div>
  );
};

export default TabComponent;
