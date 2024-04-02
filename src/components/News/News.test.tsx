import { screen, within } from "@testing-library/react";
import { renderWithProvider } from "../../testUtils";
import { News } from "./News";

const sampleData = [
  {
    id: 8015699,
    title: "The story behind the Table Snip",
    popularity: 0.129,
    timestamp: "2023-02-16T07:39:55.793Z",
  },
  {
    id: 9895971,
    title: "The dangers behind image resizing (2021)",
    popularity: 0.658,
    timestamp: "2023-02-16T22:51:21.660Z",
  },
  {
    id: 3158876,
    title:
      "Tesla Terminated Dozens in Response to New Union Campaign, Complaint Alleges",
    popularity: 0.165,
    timestamp: "2023-02-16T11:00:27.508Z",
  },
];



describe("News component", () => {
  it("should renders all news items", () => {
    // Arrange
    renderWithProvider(<News />, sampleData);

    // Assert
    expect(screen.getByText(/latest dutch news/i)).toBeInTheDocument();

    const list = screen.getByRole("list");
    expect(list.children.length).toBe(3);
  });

  it("should renders news items in descending order of their popularity", () => {
    // Arrange
    renderWithProvider(<News />, sampleData);

    // Assert
    expect(screen.getByText(/latest dutch news/i)).toBeInTheDocument();

    const list = screen.getByRole("list");

    expect(list.children[0]).toHaveTextContent(
      "The dangers behind image resizing (2021)"
    );
    expect(list.children[1]).toHaveTextContent(
      "Tesla Terminated Dozens in Response to New Union Campaign, Complaint Alleges"
    );
    expect(list.children[2]).toHaveTextContent(
      "The story behind the Table Snip"
    );
  });

  it("should renders most popular news item as banner", () => {
    // Arrange
    renderWithProvider(<News />, sampleData);

    // Assert
    expect(screen.getByText(/latest dutch news/i)).toBeInTheDocument();

    const list = screen.getByRole("list");

    expect(list.children[0]).toHaveTextContent(
      "The dangers behind image resizing (2021)"
    );
    expect(list.children[0]).toHaveAttribute("data-testid", "news-banner");
  });

  it("should renders all news items with link", () => {
    // Arrange
    renderWithProvider(<News />, sampleData);

    // Assert
    expect(screen.getByText(/latest dutch news/i)).toBeInTheDocument();

    const list = screen.getByRole("list");
    expect(list.children.length).toBe(3);

    expect(
      within(list.children[0] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/9895971");
    expect(
      within(list.children[1] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/3158876");
    expect(
      within(list.children[2] as HTMLElement).getByRole("link")
    ).toHaveAttribute("href", "/news/8015699");
  });
});
