export const current = async ({ headers }: { headers: Partial<Record<'access_token', string>> } ): Promise<Omit<API_User, 'access_token' | 'password'> | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/auth/current`)
    const header = new Headers()
    if(headers?.access_token) header.append('Authorization', `Barear ${headers.access_token}`)

    const req = new Request(url, {
      method: 'GET',
      headers: header
    })
    const res = await fetch(req)
    return res.json()
  } catch(err){
    return { error: err as string } satisfies API_Error
  }
}
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
export const logout = async ( { headers }: { headers: Partial<Record<'access_token', string>> } ): Promise<{} | API_Error> => {
  try{
    const url = new URL(`${import.meta.env.APOLO_API_URL}/auth/logout`)
    const header = new Headers()
    if(headers?.access_token) header.append('Authorization', `Barear ${headers.access_token}`)

    const req = new Request(url, {
      method: 'POST',
      body: JSON.stringify({}),
      headers: header
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
