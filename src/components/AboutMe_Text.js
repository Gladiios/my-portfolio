import React from "react";
import { useTranslation } from "next-i18next";

const AboutMe_Text = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <span className="about-text">{t("aboutText")}</span>
      <span className="about-text about-tools">{t("aboutTools")}</span>
    </div>
  );
};

export default AboutMe_Text;
