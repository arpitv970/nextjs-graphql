import { links } from "@/data/links";
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

export const HomePage = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-5">
      {links.map((item, idx) => (
        <Card key={idx}>
          <CardHeader className="rounded-lg">
            <img className="rounded-lg" src={item.imageUrl} alt={item.title} />
          </CardHeader>
          <CardContent>
            <p>Card Content</p>
          </CardContent>
          <CardFooter>
            <Link href={item.url} className="flex gap-3 justify-center items-start mr-auto ml-0 my-0">
              {item.url.replace(/(^\w+:|^)\/\//, "")}
              <ExternalLink />
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};
