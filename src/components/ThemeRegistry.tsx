"use client";

import React from "react";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useServerInsertedHTML } from "next/navigation";
import theme from "../theme"; // your custom MUI theme

// Create a custom Emotion cache
const createEmotionCache = () => {
  return createCache({ key: "css", prepend: true });
};

interface ThemeRegistryProps {
  children: React.ReactNode;
}

export default function ThemeRegistry({ children }: ThemeRegistryProps) {
  const emotionCache = React.useRef(createEmotionCache());
  const { current: cache } = emotionCache;

  // Inject server-side Emotion styles into HTML for SSR
  useServerInsertedHTML(() => (
    <style
      data-emotion={`${cache.key} ${Object.keys(cache.inserted).join(" ")}`}
      dangerouslySetInnerHTML={{
        __html: Object.values(cache.inserted).join(" "),
      }}
    />
  ));

  return (
    <CacheProvider value={cache}>
      <ThemeProvider theme={theme}>
        {/* CssBaseline provides a consistent baseline for MUI */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CacheProvider>
  );
}
