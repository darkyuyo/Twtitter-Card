import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;
  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Darkyuyo"
        name="Alfredo Llanos"
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Darkyuyo"
        name="Alfredo Llanos"
      />
    </section>
  );
}
