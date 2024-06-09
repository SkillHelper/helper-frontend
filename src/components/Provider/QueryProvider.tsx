import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

interface Props {
  children: React.ReactNode;
}
export default function QueryProvider({ children }: Props) {
  const client = new QueryClient({
    queryCache: new QueryCache({
      onError: (error) => error,
    }),
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
