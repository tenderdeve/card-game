import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles";
import { Alert } from "../components";
import { battlegrounds } from "../assets";
import { useGlobalContext } from "../context";

const BattleGround = () => {
  const { setBattleGround, setShowAlert, showAlert } = useGlobalContext();
  const navigate = useNavigate();

  const handleBattleChoice = (ground) => {
    setBattleGround(ground.id);

    localStorage.setItem("battleground", ground.id);

    setShowAlert({
      status: true,
      type: "info",
      message: `${ground.name} is battle ready!`,
    });

    setTimeout(() => {
      // -1 will take us back to where we came from for instance if we came from "/battle" page then it will take us to that page
      navigate(-1);
    }, 1000);
  };

  return (
    <div className={`${styles.flexCenter} ${styles.battlegroundContainer}`}>
      {showAlert.status && (
        <Alert type={showAlert.type} message={showAlert.message} />
      )}

      <h1 className={`${styles.headText} text-center`}>
        Choose your
        <span className="text-siteViolet"> Battle </span>
        Ground
      </h1>

      <div className={`${styles.flexCenter} ${styles.battleGroundsWrapper}`}>
        {battlegrounds.map((ground) => (
          <div
            key={ground.id}
            className={`${styles.flexCenter} ${styles.battleGroundCard}`}
            onClick={() => handleBattleChoice(ground)}
          >
            <img
              src={ground.image}
              alt="battlegrounds"
              className={styles.battleGroundCardImg}
            />

            <div className="info absolute">
              <p className={styles.battleGroundCardText}>{ground.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BattleGround;
