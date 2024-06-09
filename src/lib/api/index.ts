import axios, { AxiosError } from "axios";

export const apiInstance = (withCredentials?: boolean) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: withCredentials ?? true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  instance.interceptors.response.use(
    (config) => config,
    async (error: AxiosError) => error
  );

  return instance;
};

async function refresh() {
  try {
    const res = await apiInstance().get("/auth/refresh");
    localStorage.setItem("accessToken", res.data.accessToken);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any | AxiosError) {
    if (err.response?.status === 401) {
      localStorage.setItem("accessToken", "");
      if (window.location.pathname !== "/login")
        window.location.href = "/login";
      throw new Error("Unauthorized");
    }
  }
}

export const authInstance = (retry?: boolean) => {
  const instance = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  });

  let originalRequest: Array<{
    url: string;
    method: string;
    data: string;
  }> = [];

  instance.interceptors.request.use(async (config) => {
    if (localStorage.getItem("accessToken") === "") await refresh();

    config.headers["Authorization"] = `Bearer ${localStorage.getItem(
      "accessToken"
    )}`;
    originalRequest.push({
      url: config.url || "",
      method: config.method || "",
      data: JSON.stringify(config.data) || "",
    });
    return config;
  });

  instance.interceptors.response.use(
    (config) => config,
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        return await refresh().then(async () => {
          if (retry) return error;
          const data = await authInstance(true).request({
            method: originalRequest[0].method,
            url: originalRequest[0].url,
            data: originalRequest[0].data,
          });
          originalRequest = [];
          return data;
        });
      }
      return error;
    }
  );

  return instance;
};
