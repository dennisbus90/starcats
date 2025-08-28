const httpErrorMessages: Record<number, string> = {
    400: "Invalid request. Please check your input.",
    404: "The requested resource was not found.",
    429: "Too many requests. Please try again later.",
    500: "Internal server error. Please try again later.",
    502: "Bad gateway. Please try again shortly.",
    503: "Service unavailable. Try again later.",
    504: "Gateway timeout. Try again later.",
};

export function handleHttpError(status: number, statusText: string): never {
    const message = httpErrorMessages[status] || `Request failed: ${status} ${statusText}`;
    throw new Error(message);
}