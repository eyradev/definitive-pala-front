import { ApolloError } from "@apollo/client";
import { PalanteErrorMessages } from "./error-messages";
import { PalanteErrorCodes } from "./palante-error-codes.enum";

export class PalanteError extends Error {
  constructor(public palanteCode: PalanteErrorCodes, message?: string) {
    super(message?.length ? message : PalanteErrorMessages.get(palanteCode));
  }

  static getErrorCodeFrom(error: Error): PalanteErrorCodes | null {
    const { message } = error;
    try {
      const data = JSON.parse(message);
      if (
        data?.palanteCode &&
        Object.values(PalanteErrorCodes).includes(data.palanteCode)
      ) {
        return data.palanteCode;
      }
    } catch {
      return null;
    }

    return null;
  }

  static from(error: Error) {
    const errorCode = PalanteError.getErrorCodeFrom(error);
    if (errorCode) return new PalanteError(errorCode);
  }
}
