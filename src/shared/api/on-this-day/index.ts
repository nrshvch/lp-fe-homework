import { API_TOKEN, API_USER } from "shared/config";

export type OnThisDayResponseType = {
  births: {
    text: string;
    year: number;
  }[];
};

export async function fetchOnThisDay(month: string, day: string) {
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/births/${month}/${day}`;

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${API_TOKEN}`,
      "Api-User-Agent": API_USER,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status} ${response.statusText}`);
  }

  return (await response.json()) as OnThisDayResponseType;
}
