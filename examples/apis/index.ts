import service from "@/index";

export const getUser = (params: any) => {
  return service({
    url: "ass",
    method: "get",
    data: params,
  });
};
