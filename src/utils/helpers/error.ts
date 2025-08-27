export const getErrorMessageOf = (error: unknown) =>
  error instanceof Error ? error.message : "Something went wrong";
