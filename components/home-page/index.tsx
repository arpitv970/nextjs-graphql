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
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
      {data.links.map((item: LinkType) => (
        <Card key={item.id}>
          <CardHeader className="rounded-lg">
            <img className="rounded-lg" src={item.imageUrl} alt={item.title} />
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
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
