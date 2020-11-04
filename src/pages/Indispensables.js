import Wrapper from "../components/Wrapper"
import Visual from "./../components/Visual"
import Content from "./../components/Content"
import TextContent from "./../components/TextContent"

// CHAR
import lisa from "../assets/images/char/lisa.png"
import chibiMap from "../assets/images/chibi/chibiMap.png"
import chibiTimer from "../assets/images/chibi/chibiTimer.png"

function Indispensables() {
  return (
    <Wrapper>
      <Visual srcLeft={lisa} height="95%" />
      <Content>
        <TextContent
          title="Map interactive"
          hrefName="▶ Voir la map"
          href="https://www.genshin-impact.fr/map/"
          src={chibiMap}
          text="Une map interactive pour voir le spot de chaque ressource"
        />

        <TextContent
          title="Timer"
          text="Pour voir le temps de respawn des ressources"
          //   href="https://genshin.mihoyo.com/fr/gift"
          toName="▶ Voir les timers"
          to="/"
          src={chibiTimer}
        />
      </Content>
    </Wrapper>
  )
}

export default Indispensables