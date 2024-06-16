"use client";
import { gql, useQuery } from "@apollo/client";
import type { Link as LinkType } from "@prisma/client";
import { LinkCard } from "./link-card";
import { Button } from "../ui/button";

const AllLinkQuery = gql`
  query allLinkQuery($first: Int, $after: ID) {
    links(first: $first, after: $after) {
      pageInfo {
        endCursor
        hasNextPage
      }
      edges {
        cursor
        node {
          id
          title
          imageUrl
          url
          description
          category
        }
      }
    }
  }
`;

export const HomePage = () => {
  const { data, loading, error, fetchMore } = useQuery(AllLinkQuery, {
    variables: { first: 2 },
  });
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

  const { endCursor, hasNextPage } = data.links.pageInfo;

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {data?.links.edges.map(({ node }: { node: LinkType }) => (
          <LinkCard key={node.id} {...node} />
        ))}
      </div>
      {hasNextPage ? (
        <Button
          onClick={() => {
            fetchMore({
              variables: { after: endCursor },
              updateQuery: (prev, { fetchMoreResult }) => {
                fetchMoreResult.links.edges = [
                  ...prev.links.edges,
                  ...fetchMoreResult.links.edges,
                ];
                return fetchMoreResult;
              },
            });
          }}
        >
          More
        </Button>
      ) : (
        <p className="my-10 text-center font-medium">
          {`You've reached the end!`}
        </p>
      )}
    </div>
  );
};
