"use client";

import {
  Accessibility,
  Sun,
  Moon,
  Contrast,
  Underline,
  Text,
  RotateCw,
} from "lucide-react";
import { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

export default function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTools, setActiveTools] = useState({
    increaseText: false,
    decreaseText: false,
    grayscale: false,
    highContrast: false,
    negativeContrast: false,
    lightBackground: false,
    linksUnderline: false,
    readableFont: false,
  });

  // Memoized function to prevent unnecessary recreations
  const applyAccessibilityChanges = useCallback(() => {
    const root = document.documentElement;
    const body = document.body;

    // Reset all classes and styles first
    root.className = "";
    root.style.fontSize = "";
    root.style.fontFamily = "";
    body.style.filter = "";
    body.style.backgroundColor = "";
    body.style.color = "";

    // Apply text size
    if (activeTools.increaseText || activeTools.readableFont) {
      root.style.fontSize = "120%";
    }
    if (activeTools.decreaseText) {
      root.style.fontSize = "90%";
    }

    // Apply grayscale (preserve widgets)
    if (activeTools.grayscale) {
      body.style.filter = "grayscale(100%)";
      document.querySelectorAll(".accessibility-widget").forEach((el) => {
        el.style.filter = "grayscale(0)";
      });
    }

    // Apply high contrast (black bg with blue text)
    if (activeTools.highContrast) {
      body.style.backgroundColor = "#000000";
      body.style.color = "#0066FF";
      // Preserve button styles by targeting only text elements
      const style = document.createElement("style");
      style.id = "high-contrast-style";
      style.textContent = `
        body, p, h1, h2, h3, h4, h5, h6, span, div:not(.preserve-style) {
          color: #0066FF !important;
          background-color: #000000 !important;
        }
        a {
          color: #0099FF !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      const existing = document.getElementById("high-contrast-style");
      if (existing) existing.remove();
    }

    // Apply negative contrast (black bg with yellow text)
    if (activeTools.negativeContrast) {
      body.style.backgroundColor = "#000000";
      body.style.color = "#FFFF00";
      const style = document.createElement("style");
      style.id = "negative-contrast-style";
      style.textContent = `
        body, p, h1, h2, h3, h4, h5, h6, span, div:not(.preserve-style) {
          color: #FFFF00 !important;
          background-color: #000000 !important;
        }
        a {
          color: #FFCC00 !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      const existing = document.getElementById("negative-contrast-style");
      if (existing) existing.remove();
    }

    // Apply light background (white bg)
    if (activeTools.lightBackground) {
      body.style.backgroundColor = "#FFFFFF";
      body.style.color = "#000000";
      const style = document.createElement("style");
      style.id = "light-background-style";
      style.textContent = `
        body {
          background-color: #FFFFFF !important;
          color: #000000 !important;
        }
      `;
      document.head.appendChild(style);
    } else {
      const existing = document.getElementById("light-background-style");
      if (existing) existing.remove();
    }

    // Apply link underlines
    if (activeTools.linksUnderline) {
      const style = document.createElement("style");
      style.id = "accessibility-links";
      style.textContent = `a { text-decoration: underline !important; }`;
      document.head.appendChild(style);
    } else {
      const existing = document.getElementById("accessibility-links");
      if (existing) existing.remove();
    }

    // Apply readable font (Arial + increased size)
    if (activeTools.readableFont) {
      root.style.fontFamily = "Arial, sans-serif";
      root.style.fontSize = "120%";
    }
  }, [activeTools]);

  // Apply changes on mount and when activeTools changes
  useEffect(() => {
    applyAccessibilityChanges();
  }, [applyAccessibilityChanges]);

  const toggleTool = (tool) => {
    setActiveTools((prev) => ({
      ...prev,
      [tool]: !prev[tool],
      // Ensure mutually exclusive options
      ...(tool === "highContrast" && {
        negativeContrast: false,
        lightBackground: false,
        grayscale: false,
      }),
      ...(tool === "negativeContrast" && {
        highContrast: false,
        lightBackground: false,
        grayscale: false,
      }),
      ...(tool === "lightBackground" && {
        highContrast: false,
        negativeContrast: false,
        grayscale: false,
      }),
      ...(tool === "grayscale" && {
        highContrast: false,
        negativeContrast: false,
        lightBackground: false,
      }),
      ...(tool === "increaseText" && { decreaseText: false }),
      ...(tool === "decreaseText" && { increaseText: false }),
      ...(tool === "readableFont" && { increaseText: true }), // Auto-enlarge font
    }));
  };

  const resetTools = () => {
    setActiveTools({
      increaseText: false,
      decreaseText: false,
      grayscale: false,
      highContrast: false,
      negativeContrast: false,
      lightBackground: false,
      linksUnderline: false,
      readableFont: false,
    });
  };

  return (
    <div className="fixed top-32 left-0 z-[100] flex flex-col items-start gap-2 accessibility-widget preserve-style">
      {/* Main toggle button */}
      <Button
        size="icon"
        className="size-14 shadow-lg bg-primary hover:bg-secondary border-none rounded-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
          fill="currentColor"
          width="2em"
          className="size-8 text-white"
        >
          <path d="M50 8.1c23.2 0 41.9 18.8 41.9 41.9 0 23.2-18.8 41.9-41.9 41.9C26.8 91.9 8.1 73.2 8.1 50S26.8 8.1 50 8.1M50 0C22.4 0 0 22.4 0 50s22.4 50 50 50 50-22.4 50-50S77.6 0 50 0zm0 11.3c-21.4 0-38.7 17.3-38.7 38.7S28.6 88.7 50 88.7 88.7 71.4 88.7 50 71.4 11.3 50 11.3zm0 8.9c4 0 7.3 3.2 7.3 7.3S54 34.7 50 34.7s-7.3-3.2-7.3-7.3 3.3-7.2 7.3-7.2zm23.7 19.7c-5.8 1.4-11.2 2.6-16.6 3.2.2 20.4 2.5 24.8 5 31.4.7 1.9-.2 4-2.1 4.7-1.9.7-4-.2-4.7-2.1-1.8-4.5-3.4-8.2-4.5-15.8h-2c-1 7.6-2.7 11.3-4.5 15.8-.7 1.9-2.8 2.8-4.7 2.1-1.9-.7-2.8-2.8-2.1-4.7 2.6-6.6 4.9-11 5-31.4-5.4-.6-10.8-1.8-16.6-3.2-1.7-.4-2.8-2.1-2.4-3.9.4-1.7 2.1-2.8 3.9-2.4 19.5 4.6 25.1 4.6 44.5 0 1.7-.4 3.5.7 3.9 2.4.7 1.8-.3 3.5-2.1 3.9z"></path>{" "}
        </svg>
      </Button>

      {/* Tools panel */}
      {isOpen && (
        <div className="bg-white shadow-xl p-4 w-64 border border-gray-200 accessibility-widget preserve-style">
          <div className="flex justify-between items-center mb-3 preserve-style">
            <h3 className="font-medium text-gray-900 preserve-style">
              Accessibility Tools
            </h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={resetTools}
              className="text-sm flex items-center gap-1 preserve-style"
            >
              <RotateCw className="w-4 h-4" />
              Reset
            </Button>
          </div>

          <div className="space-y-2 preserve-style">
            {/* Text Size */}
            <div className="flex items-center justify-between preserve-style cursor-pointer">
              <div className="flex items-center gap-2 preserve-style">
                <Text className="w-4 h-4 text-gray-600 preserve-style" />
                <span className="text-sm preserve-style">Text Size</span>
              </div>
              <div className="flex gap-1 preserve-style">
                <Button
                  variant={activeTools.decreaseText ? "default" : "outline"}
                  size="sm"
                  className="h-8 w-8 p-0 preserve-style"
                  onClick={() => toggleTool("decreaseText")}
                >
                  A-
                </Button>
                <Button
                  variant={activeTools.increaseText ? "default" : "outline"}
                  size="sm"
                  className="h-8 w-8 p-0 preserve-style"
                  onClick={() => toggleTool("increaseText")}
                >
                  A+
                </Button>
              </div>
            </div>

            {/* Color Adjustments */}
            <Button
              variant={activeTools.grayscale ? "default" : "outline"}
              className="w-full justify-start gap-2 preserve-style cursor-pointer"
              onClick={() => toggleTool("grayscale")}
            >
              <Contrast className="w-4 h-4 preserve-style" />
              Grayscale
            </Button>

            <Button
              variant={activeTools.highContrast ? "default" : "outline"}
              className="w-full justify-start gap-2 preserve-style cursor-pointer"
              onClick={() => toggleTool("highContrast")}
            >
              <Sun className="w-4 h-4 preserve-style" />
              High Contrast
            </Button>

            <Button
              variant={activeTools.negativeContrast ? "default" : "outline"}
              className="w-full justify-start gap-2 preserve-style cursor-pointer"
              onClick={() => toggleTool("negativeContrast")}
            >
              <Moon className="w-4 h-4 preserve-style" />
              Negative Contrast
            </Button>

            <Button
              variant={activeTools.lightBackground ? "default" : "outline"}
              className="w-full justify-start gap-2 preserve-style cursor-pointer"
              onClick={() => toggleTool("lightBackground")}
            >
              <Sun className="w-4 h-4 preserve-style" />
              Light Background
            </Button>

            {/* Other Tools */}
            <Button
              variant={activeTools.linksUnderline ? "default" : "outline"}
              className="w-full justify-start gap-2 preserve-style cursor-pointer"
              onClick={() => toggleTool("linksUnderline")}
            >
              <Underline className="w-4 h-4 preserve-style" />
              Links Underline
            </Button>

            <Button
              variant={activeTools.readableFont ? "default" : "outline"}
              className="w-full justify-start gap-2 preserve-style cursor-pointer"
              onClick={() => toggleTool("readableFont")}
            >
              <Text className="w-4 h-4 preserve-style" />
              Readable Font (+Size)
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
