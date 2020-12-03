import axios from "axios";

export const fetchHeroes = async () => {
  const BASE_URL = "https://api.opendota.com/api/heroes";
  const BASE_IMAGES_URL = "http://cdn.dota2.com/apps/dota2/images/heroes/";

  try {
    const result = await axios.get(BASE_URL); // Fetch data
    const heroesData = await result.data;

    // Map each hero to a new format
    var resultheros = heroesData.map((hero) => {
      return {
        id: hero.id,
        // localized_name: hero.localized_name.replace("npc_dota_hero_", ""),
        name: hero.localized_name,
        roles: hero.roles,
        image: `${BASE_IMAGES_URL}${hero.name.replace(
          "npc_dota_hero_",
          ""
        )}_full.png`,
      };
    });

    return resultheros;
  } catch (err) {
    console.error(err);
    return [];
  }
};
