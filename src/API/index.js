const cohortName = "2308-ftb-et-web-pt";

const APIURL = `https://fsa-puppy-bowl.herokuapp.com/api/${cohortName}`;
const APIURL_PLAYERS = `${APIURL}/players`;

export async function getAllPlayers() {
  try {
    const response = await fetch(APIURL_PLAYERS);
    if (!response.ok) {
      throw new Error("Someing went wrong!");
    }
    const result = await response.json();
    return result.data.players;
  } catch (error) {
    console.error("Uh oh, trouble fetching players!", err);
  }
}
getAllPlayers();

export async function getSinglePlayer(playerId) {
  try {
    const response = await fetch(`${APIURL_PLAYERS}/${playerId}`);
    const result = await response.json();
    return result.data.player;
  } catch (error) {
    console.log(error);
  }
}

export async function postPlayer(player) {
  try {
    const response = await fetch(APIURL_PLAYERS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(player),
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.error("Oops, something went wrong with adding that player!", err);
  }
}

export async function deletePlayer(id) {
  try {
    const response = await fetch(`${APIURL_PLAYERS}/${id}`, {
      method: "DELETE",
    });
    const result = await response.json();
    console.log(result);
  } catch (error) {
    console.log(
      `Whoops, trouble removing player #${id} from the roster!`,
      error
    );
  }
}
