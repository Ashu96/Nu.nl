import { render } from "@testing-library/react";
import { ReactNode } from "react";
import { NewsData } from "./components/types";
import { NewsContext } from "./context/NewsContext";

export const renderWithProvider = (ui: ReactNode, data: NewsData[]) => {
  const wrapper = ({ children }: { children: ReactNode }) => (
    <NewsContext.Provider value={data}>{children}</NewsContext.Provider>
  );
  return render(ui, { wrapper });
};
