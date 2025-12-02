import { ConfigProvider, Switch, theme } from "antd";
import { useEffect, useState, type ReactNode } from "react";

const ThemeControl = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState("dark");
  const handleChangeMode = (mode: boolean) => {
    localStorage.setItem("theme", mode ? "dark" : "light");
    setMode(mode ? "dark" : "light");
  };

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) setMode(theme);
  }, []);
  return (
    <ConfigProvider
      theme={{
        algorithm:
          mode === "dark"
            ? [theme.darkAlgorithm, theme.compactAlgorithm]
            : theme.defaultAlgorithm,
        token: {
          colorBgContainer: "#ffc0cb",
          colorPrimary: "#ffc0cb",
          colorBgMask: "rgba(0,0,0,1)",
          colorText: "#858182ff ",
        },
      }}
    >
      <div
        style={{
          backgroundColor: mode === "dark" ? "rgba(0,0,0,0.8)" : "white",
          minHeight: "100vh",
          maxWidth: "100vw",
        }}
      >
        <Switch
          checked={mode === "dark"}
          onChange={(e) => handleChangeMode(e)}
        />
        {children}
      </div>
    </ConfigProvider>
  );
};

export default ThemeControl;
