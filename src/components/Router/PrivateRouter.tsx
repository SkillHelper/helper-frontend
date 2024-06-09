import { Navigate, Outlet, useLoaderData } from "react-router-dom";
import { User } from "../../hooks/auth";
import { QueryClient } from "@tanstack/react-query";
import { authInstance } from "../../lib/api";

const loader = (queryClient: QueryClient) => async () => {
  await queryClient.invalidateQueries({
    predicate: (query) => {
      return query.queryKey[0] === "userinfo";
    },
  });

  return (
    (await queryClient.fetchQuery({
      queryKey: ["userinfo"],
      queryFn: async () => {
        const { data } = await authInstance().get<User>("/auth");
        return data ?? "";
      },
    })) ?? ""
  );
};

function PrivateRouter() {
  const userInfo = useLoaderData() as User | undefined;

  if (userInfo) {
    return <Outlet />;
  }

  return (
    <Navigate
      to={{
        pathname: "/login",
      }}
      replace
    />
  );
}

PrivateRouter.loader = loader;

export default PrivateRouter;
