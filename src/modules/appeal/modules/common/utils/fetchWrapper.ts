export async function fetchWrapper(
  input: RequestInfo | URL,
  init?: RequestInit | undefined,
  multipart?: boolean
) {
  let message;
  try {
    const resp = await fetch(input, {
      ...init,
      headers: {
        Accept: "application/json",
        ...(!multipart && { "Content-Type": "application/json" }),
        ...init?.headers,
      },
    });

    try {
      message = await resp.json();
    } catch (e) {}

    if (!resp.ok) {
      return Promise.reject({
        status: resp.status,
        statusText: resp.statusText,
        message,
      });
    } else {
      return Promise.resolve(message);
    }
  } catch (e) {}

  return Promise.reject({
    status: 500,
    statusText: "Something went wrong",
    message: {
      success: false,
      failure: {
        description: "Unknown Error",
        errorCode: "UNKNOWN_ERROR_CODE",
        errorId: 999999,
      },
    },
  });
}
