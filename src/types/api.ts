export type ApiSuccess<T> = { success: true; data: T };
export type ApiError = { success: false; error: { code: string; message: string; fieldErrors?: Record<string, string[]> } };
export type ApiResponse<T> = ApiSuccess<T> | ApiError;
export type Paginated<T> = { items: T[]; page: number; pageSize: number; total: number; hasNextPage: boolean };
