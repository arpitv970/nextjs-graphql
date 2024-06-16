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
import { Badge } from "@/components/ui/badge";
export const LinkCard = ({
  id,
  category,
  url,
  imageUrl,
  description,
  title,
}: LinkType) => {
  return (
    <Card
      className="bg-zinc-900 border-zinc-800 hover:border-zinc-500 transition-all duration-300 ease-in-out"
      key={id}
    >
      <CardHeader className="rounded-lg">
        <img
          className="rounded-lg border border-zinc-600 border-dashed aspect-square object-cover"
          src={imageUrl}
          alt={title}
        />
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex justify-between items-center">
          <h1>{title}</h1>
          <Badge>{category}</Badge>
        </div>
        <p>{description}</p>
      </CardContent>
      <CardFooter>
        <Link
          href={url}
          className="flex gap-3 justify-center items-start mr-auto ml-0 my-0"
        >
          {url.replace(/(^\w+:|^)\/\//, "")}
          <ExternalLink />
        </Link>
      </CardFooter>
    </Card>
  );
};
