export function makeUrlWithQueryString(
    url: string,
    qs: Record<string, string | number>
  ) {
    const endpoint = new URL(url);
  
    for (let [name, value] of Object.entries(qs)) {
      endpoint.searchParams.set(name, value as string);
    }
    return endpoint;
  }
  