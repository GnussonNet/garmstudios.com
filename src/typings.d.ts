import * as icons from "lucide-react";

export interface Post {
  _id: string;
  _createdAt: string;
  title: string;
  author: {
    name: string;
    image: string;
  };
  mainImage: {
    asset: {
      url: string;
    };
  };
  slug: {
    current: string;
  };
  body: [object];
}

export interface Client {
  _id: string;
  _createdAt: string;
  name: string;
  logo: {
    asset: {
      url: string;
    };
  };
  url: string;
}

export interface Social {
  _id: string;
  _createdAt: string;
  name: string;
  icon: keyof Omit<typeof icons, "createReactComponent">;
  url: string;
}
