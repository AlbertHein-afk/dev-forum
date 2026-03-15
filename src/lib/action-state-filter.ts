import { ZodError } from "zod";

export type ActionState = { message: string; payload?: FormData };

export const actionStateFilter = (
  error: unknown,
  formdata: FormData,
): ActionState => {
  if (error instanceof ZodError || error instanceof Error) {
    return {
      message: error.message,
      payload: formdata,
    };
  } else {
    return {
      message: "An unknown error",
      payload: formdata,
    };
  }
};
