import React from "react";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-2.svg";
import Icon3 from "../../images/svg-3.svg";
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from "./ServicesElements";

const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Nos Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Reduisez vos dépenses</ServicesH2>
          <ServicesP>
            Nous vous aidons à réduire vos frais et à augmenter vos revenus.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Locaux Virtuels</ServicesH2>
          <ServicesP>
            Accédez à notre platforme en ligne où que vous soyez dans le monde.
          </ServicesP>
        </ServicesCard>

        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Avantages Premium</ServicesH2>
          <ServicesP>
            Commandez notre carte Premium et recevez 5% de réduction.
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
