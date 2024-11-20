/**
 * TODO:
 * - create a mock with msw and localStorage for login api
 * - create a mock with msw and localStorage for logout api
 * - create a mock with msw and localStorage for sigin api
 * - create type for a user add access_token into all fetch
 */

// TODO: YET NOT WORK
export const login = async ( { payload }: { payload: { username: string, password: string } } ): Promise<API_User | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/auth/login`)

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}

// TODO: YET NOT WORK
export const logout = async ( ): Promise<{} | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/auth/logout`)

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify({})
    })
    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}

// TODO: YET NOT WORK
export const sigin = async ( { payload }: { payload: { username: string, password: string } }  ): Promise<{} | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/auth/sigin`)

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
