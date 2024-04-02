import { screen, within } from "@testing-library/react";
import { renderWithProvider } from "../../testUtils";
import { HotNews } from "./HotNews";

const sampleData = [
  {
    id: 3597990,
    title: "ChatGPT Is Ingesting Corporate Secrets",
    popularity: 0.419,
    timestamp: "2023-02-16T19:41:29.568Z",
  },
  {
    id: 5924260,
    title: "Search through historical cookbooks dating back to the Middle Ages",
    popularity: 0.287,
    timestamp: "2023-02-16T13:57:06.348Z",
  },
  {
    id: 5228934,
    title:
      "Grid of atoms is both a quantum computer and an optimization solver",
    popularity: 0.26,
    timestamp: "2023-02-16T03:11:25.694Z",
  },
  {
    id: 8295316,
    title: "SOBA: Potential blood test for Alzheimer's disease",
    popularity: 0.165,
    timestamp: "2023-02-16T15:17:44.514Z",
  },
];

describe("HotNews component", () => {
  it("should renders all news items", () => {
    // Arrange
    renderWithProvider(<HotNews />, sampleData);

    // Assert
    expect(screen.getByText(/just in/i)).toBeInTheDocument();

    const list = screen.getByRole("list");
    expect(list.children.length).toBe(4);
  });

  it("should renders news items in descending order of their timestamp", () => {
    // Arrange
    renderWithProvider(<HotNews />, sampleData);

    // Assert
    const list = screen.getByRole("list");

    expect(list.children[0]).toHaveTextContent(
      "ChatGPT Is Ingesting Corporate Secrets"
    );
    expect(list.children[1]).toHaveTextContent(
      "SOBA: Potential blood test for Alzheimer's disease"
    );
    expect(list.children[2]).toHaveTextContent(
      "Search through historical cookbooks dating back to the Middle Ages"
    );
    expect(list.children[3]).toHaveTextContent(
      "Grid of atoms is both a quantum computer and an optimization solver"
    );
  });

  it("should renders all news items with link", () => {
    // Arrange
    renderWithProvider(<HotNews />, sampleData);

    // Assert
    const list = screen.getByRole("list");
    expect(list.children.length).toBe(4);

    expect(
      within(list.children[0] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/3597990");
    expect(
      within(list.children[1] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/8295316");
    expect(
      within(list.children[2] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/5924260");
    expect(
      within(list.children[3] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/5228934");
  });
});
