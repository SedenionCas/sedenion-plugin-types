import { IPanelPlugin } from "./PanelPlugin";

type PanelPluginManifest = {
  name: string;
  version: string;
  plugin: IPanelPlugin;
  enabledByDefault: boolean;
  renderWhenVisible?: boolean;
  authors: Author[];
};

type Author = {
  name: string;
  profile: string;
};

export { PanelPluginManifest, Author };
