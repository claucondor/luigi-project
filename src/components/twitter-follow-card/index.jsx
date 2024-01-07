import { useState } from "react";
import { FOLLOW_BUTTON } from "../../assets/buttons";
import { Button } from "../button";
import "../button/follow-button/follow-button.css";

export function TwitterFollowCard({
  userName,
  children: name,
  isFollowing: initialIsFollowing,
  formatUserName,
}) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const imageSrc = `https://unavatar.io/twitter/${userName}`;
  const buttonClassName = isFollowing
    ? "cs-tw-follow-button is-following"
    : "cs-tw-follow-button";

  const handleFollowClick = () => {
    setIsFollowing(!isFollowing);
  };
  return (
    <article className="cs-tw-followCard">
      <header className="cs-tw-followCard-header">
        <img
          className="cs-tw-followCard-avatar"
          src={imageSrc}
          alt="Imagen de usuario"
        />
        <div className="cs-tw-followCard-info">
          {name}
          <span className="cs-tw-followCard-infoUserName">
            {formatUserName(userName)}
          </span>
        </div>
      </header>

      <aside>
        <Button
          icon={FOLLOW_BUTTON}
          className={buttonClassName}
          handleClick={handleFollowClick}
        >
          {isFollowing ? "Siguiendo" : "Seguir"}
        </Button>
      </aside>
    </article>
  );
}
