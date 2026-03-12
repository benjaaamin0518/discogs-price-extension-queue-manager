import { useQuery } from "@tanstack/react-query";

export function useQueue() {
  return useQuery({
    queryKey: ["queue"],
    queryFn: async () => {
      console.log("API CALL"); // ←確認
      try {
        const res = await fetch(
          import.meta.env?.VITE_BACKEND_API_URL + "/api/v1/jobInfos",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              accessToken: import.meta.env?.VITE_ACCESS_TOKEN,
            }),
          },
        );
        const data = await res.json();
        console.log(data);
        return data.result;
      } catch (e) {
        console.error(e);
      }
    },
    refetchInterval: 2000,
  });
}
