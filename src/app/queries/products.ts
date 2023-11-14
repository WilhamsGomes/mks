import { QueryFunctionContext, useQuery } from "@tanstack/react-query";
import { api } from "../services/api";

interface IParamsProducts {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: "ASC" | "DESC";
}

export async function getProducts(ctx: QueryFunctionContext) {
  const [, page, rows, sortBy, orderBy] = ctx.queryKey;
  try {
    const res = await api.get("/products", {
      params: {
        page: page,
        rows: rows,
        sortBy: sortBy,
        orderBy: orderBy,
      },
    });
    return { data: res.data };
  } catch (error: any) {
    return error;
  }
}

export function useProducts({ page, rows, sortBy, orderBy }: IParamsProducts) {
  return useQuery({
    queryKey: ["use-products", page, rows, sortBy, orderBy],
    queryFn: getProducts,
  });
}
