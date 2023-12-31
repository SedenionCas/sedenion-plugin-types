import { Icon } from "@tabler/icons-react";
import React from "react";
import { IPlugin } from "react-pluggable";
import { SettingSection } from "./Setting";

interface IPanelPlugin extends IPlugin {
  readonly icon: Icon;

  readonly namespace: string;
  readonly version: string;
  readonly index: number;

  settings: SettingSection[];

  display(): React.JSX.Element;

  serialize?(): string;
  deserialize?(data: string): void;
  updateState?(scope: string, data: string): void;

  incrementIndex(): void;
  getIndex(): number;
}

export { IPanelPlugin };
