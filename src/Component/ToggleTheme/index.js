import { useState } from "react";

import Switch from "@mui/material/Switch";
import { useTheme } from "../Theme";

export default function ToggleTheme() {
  const [dark, setDark] = useState(false);
  const { toggleTheme } = useTheme();

  const handleChange = (event) => {
    setDark(event.target.checked);
    toggleTheme();
    if (window.ReactNativeWebView) {
      window.ReactNativeWebView.postMessage(
        JSON.stringify({ theme: event.target.checked ? "dark" : "light" })
      );
    }
  };
  return (
    <div className="flex items-center space-x-2">
      Enable Dark Theme
      <Switch id="airplane-mode" checked={dark} onChange={handleChange} />
    </div>
  );
}
