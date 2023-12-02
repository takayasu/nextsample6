
export const SearchQuery = async (user: string) => {
    const res = await fetch(`https://api.github.com/users/${user}`)

    const json = await res.json();
    console.log(json);

    return json;

  };