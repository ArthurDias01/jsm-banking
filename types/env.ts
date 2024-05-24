import { z } from "zod";

const envVariables = z.object({
  NEXT_PUBLIC_APPWRITE_ENDPOINT: z.string(),
  NEXT_PUBLIC_APPWRITE_PROJECT: z.string(),
  APPWRITE_DATABASE_ID: z.string(),
  APPWRITE_USER_COLLECTION_ID: z.string(),
  APPWRITE_BANK_COLLECTION_ID: z.string(),
  APPWRITE_TRANSACTION_COLLECTION_ID: z.string(),
  NEXT_APPWRITE_KEY: z.string(),
  PLAID_CLIENT_ID: z.string(),
  PLAID_SECRET: z.string(),
  PLAID_ENV: z.string(),
  PLAID_PRODUCTS: z.string(),
  PLAID_COUNTRY_CODES: z.string(),
  DWOLLA_KEY: z.string(),
  DWOLLA_SECRET: z.string(),
  DWOLLA_BASE_URL: z.string(),
  DWOLLA_ENV: z.string(),
  // SENTRY_AUTH_TOKEN: z.string(),
});

envVariables.parse(process.env);

declare global {
  namespace NodeJS {
    interface ProcessEnv extends z.infer<typeof envVariables> {}
  }
}
