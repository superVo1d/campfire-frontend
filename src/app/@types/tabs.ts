export interface TabsItemInterface {
  root?: boolean;
  path: string;
  fullPath?: string;
  name?: string;
  iconPath?: string;
}

export type TabsInterface = Array<TabsItemInterface>;
