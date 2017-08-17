export function selectArtist(artist) {

  return {
    type: "ARTIST_SELECTED",
    payload: artist
  };
}

export function searchArtist(search){
  return {
    type:"ARTIST_SEARCH",
    payload:search
  }
}