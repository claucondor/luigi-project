import { TwitterFollowCard } from "../../components/twitter-follow-card";
import "./App.css";

export function App() {
  const formatUserName = (userName) => {
    return `@${userName}`;
  };

  const angela = {
    formatUserName,
    userName: "ocandocrypto",
    isFollowing: true,
  };

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="elcondor99"
        isFollowing={true}
      >
        <strong>Claudio Condor</strong>
      </TwitterFollowCard>

      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="dixonortizch"
        isFollowing={false}
      >
        Dixon Ortiz
      </TwitterFollowCard>
      <TwitterFollowCard {...angela}>Angela Ocando</TwitterFollowCard>
    </section>
  );
}
