import { render, screen } from "@testing-library/react";
import { IGitHubUser } from "@data-type/repositories.type";
import UserCard from "@components/_customs/cards/user-card";
import { UiProvider } from "@components/_chakra-ui/provider";

// Mock the useRouter hook from Next.js
jest.mock("next/navigation", () => ({
  useRouter: jest.fn().mockReturnValue({
    push: jest.fn(),
  }),
}));

describe("UserCard", () => {
  const mockUser: IGitHubUser = {
    login: "testuser",
    name: "Test User",
    followers: 50,
    following: 30,
    bio: "This is a test user",
    blog: "https://testuser.com",
    avatar_url: "https://avatars.githubusercontent.com/u/12345?v=4",
    html_url: "https://github.com/testuser",
    public_repos: 5,
    id: 0,
    node_id: "",
    gravatar_id: "",
    url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    company: null,
    location: null,
    email: null,
    hireable: null,
    public_gists: 0,
    created_at: "",
    updated_at: "",
  };

  const UserCardTest: React.FC<{ user?: IGitHubUser }> = ({
    user = mockUser,
  }) => {
    return (
      <UiProvider>
        <UserCard user={user} />{" "}
      </UiProvider>
    );
  };

  it("should render user card with correct data", () => {
    render(<UserCardTest user={mockUser} />);

    expect(screen.getByText("Test User")).toBeInTheDocument();
  });

  it("should correctly handle user blog link", () => {
    render(<UserCardTest user={mockUser} />);

    const blogLink = screen.getByText(/https:\/\/testuser.com/);
    expect(blogLink).toHaveAttribute("href", "https://testuser.com");
    expect(blogLink).toHaveAttribute("target", "_blank");
  });
});
