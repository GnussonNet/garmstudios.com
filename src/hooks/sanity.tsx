import { useEffect, useState } from "react";
import sanityClient from "../client";
import { Social } from "../typings";

export const useSocials = () => {
  const [data, setData] = useState<Social[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "social"]{
        name,
        icon,
        url
    }`
      )
      .then((data) => setData(data))
      .catch(console.error);
  }, []);

  return data;
};
