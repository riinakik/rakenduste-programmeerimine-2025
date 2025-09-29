import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";

type WeatherCtx = {
  weather: string;
  changeWeather: () => void;
};

const WeatherContext = createContext<WeatherCtx | undefined>(undefined);

export const WeatherProvider = ({ children }: PropsWithChildren) => {
  const [weather, setWeather] = useState("🌞");
  const changeWeather = () => setWeather((w) => (w === "🌞" ? "🌧️" : "🌞"));

  return (
    <WeatherContext.Provider value={{ weather, changeWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

const useWeather = () => {
  const ctx = useContext(WeatherContext);
  if (!ctx) throw new Error("useWeather peab olema WeatherProvideri sees");
  return ctx;
};

const ContextDemo = () => {
  return (
    <WeatherProvider>
      <Europe />
    </WeatherProvider>
  );
};

const Europe = () => <Estonia />;
const Estonia = () => <Tallinn />;

const Tallinn = () => {
  const { weather, changeWeather } = useWeather();
  return (
    <div
      onClick={changeWeather}
      style={{ fontSize: "2rem", cursor: "pointer" }}
      title="Klõpsa ilma muutmiseks"
    >
      {weather} Tallinnas
    </div>
  );
};

export default ContextDemo;
