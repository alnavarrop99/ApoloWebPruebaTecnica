import { http } from "msw";
import * as db from "~/db";

export const login = http.post<{}, Parameters<typeof db['login']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/auth/login`, async ({ params, request }) => {

  }
)

export const logout = http.post<{}, {}>(
  `${import.meta.env.APOLO_API_URL}/auth/logout`, async ({ params, request }) => {

  }
)

export const sigin = http.post<{}, Parameters<typeof db['sigin']>['0']['payload']>(
  `${import.meta.env.APOLO_API_URL}/auth/sigin`, async ({ params, request }) => {

  }
)


