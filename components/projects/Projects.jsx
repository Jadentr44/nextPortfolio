import React, { useState } from "react";
import ProjectCard from "./ProjectCard";
import IsVisible from "react-is-visible/lib/IsVisible";
import { motion } from "framer-motion";
export default function Projects() {
  const [seen, setSeen] = useState(false);

  return (
    <div className=" min-h-screen ">
      <div className=" ">
        <h2 className="text-center text-7xl">Projects</h2>
        <div className="flex justify-around mt-8 flex-wrap mx-[8%]">
          <ProjectCard
            tech={["Next js", "Next Auth", "MongoDB", "Tailwind", "React"]}
            name={"MyAniRank"}
            desc={
              "a website that allows you to view popular anime, then rank rank your favorite, that can be saved to your account"
            }
            path={"/MyAniRank.png"}
            git={"https://github.com/Jadentr44/AniRank"}
            dep={"https://myanirank.vercel.app/"}
          />

          <ProjectCard
            tech={["next js", "tailwind", "react", "auth-0", "mongodb"]}
            name={"House Ruled"}
            desc={
              "a one stop DND one shot builder. This website includes a monster maker, encounter balancer, and story layout for your next DND session "
            }
            path={"/houseRuled.png"}
            git={"https://github.com/Fighting-Mongooses-pro3/supreme-pancake"}
            dep={"https://www.houseruled.com/"}
          />

          <ProjectCard
            tech={["Handlebars", "Jquery", "Express", "MySQL", "bootstrap"]}
            name={"Battle of the Shadow Tomb"}
            desc={
              "a game  that allows you and another Player to play online in a back and forth pvp game, you each have the ability to customize your characters fighting ability. "
            }
            path={"/botst.jpg"}
            git={"https://github.com/Jadentr44/Battle-of-the-shadow-tomb"}
            dep={"https://the-shadow-tome.herokuapp.com/"}
          />

          <ProjectCard
            tech={["Html", "Jquery", "css", "Bulma", "Weather api", "Express"]}
            name={"Dart on The Map"}
            desc={
              "a website that allows you to get local data, currency exchange rate, and weather on a location you may plan to visit"
            }
            path={"/DotM.jpg"}
            git={"https://github.com/Jadentr44/Dart-On-The-Map"}
            dep={"https://jadentr44.github.io/Dart-On-The-Map/"}
          />
        </div>
      </div>
    </div>
  );
}
