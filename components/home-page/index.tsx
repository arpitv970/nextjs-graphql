"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { gql, useQuery } from "@apollo/client";
import type { Link as LinkType } from "@prisma/client";
import { links } from "@/data/links";
import { Badge } from "../ui/badge";

const AllLinkQuery = gql`
  query {
    links {
      id
      title
      url
      description
      imageUrl
      category
    }
  }
`;

export const HomePage = () => {
  const { data, loading, error } = useQuery(AllLinkQuery);
  if (loading)
    return (
      <div className="w-full h-[80vh] flex justify-center items-center text-center m-auto">
        <p>Loading...</p>
      </div>
    );
  if (error)
    return (
      <div className="w-full h-[80vh] flex justify-center items-center text-center m-auto">
        <p>Error Occured... {error.message}</p>
      </div>
    );
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-5 mt-5">
      {data.links.map((item: LinkType) => (
        <Card className="bg-zinc-900 border-zinc-800 hover:border-zinc-500 transition-all duration-300 ease-in-out" key={item.id}>
          <CardHeader className="rounded-lg">
            <img className="rounded-lg border border-zinc-600 border-dashed aspect-square object-cover" src={item.imageUrl} alt={item.title} />
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between items-center">
              <h1>{item.title}</h1>
              <Badge>{item.category}</Badge>
            </div>
            <p>{item.description}</p>
          </CardContent>
          <CardFooter>
            <Link
              href={item.url}
              className="flex gap-3 justify-center items-start mr-auto ml-0 my-0"
            >
              {item.url.replace(/(^\w+:|^)\/\//, "")}
              <ExternalLink />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
