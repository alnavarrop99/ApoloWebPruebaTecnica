/*
 * DEFINITION INTERFACE ( Rick and Morty API )
 * - https://github.com/afuh/rick-and-morty-api-node/blob/master/src/interfaces.ts
 */

type API_Category = "character" | "location" | "episode"
type API_Url<T extends API_Category = 'episode' | 'character' | 'location'> = `${ImportMetaEnv['APOLO_API_URL']}/${T}`

type API_Info<T extends API_Category> = {
  "count": number,
  "pages": number,
  "next": API_Url<T> | null,
  "prev": API_Url<T> | null
}

interface API_ResourceBase<T extends API_Category> {
  'id': number
  'name': string
  'url': API_Url<T>
  'created': ReturnType<typeof Date.prototype.toISOString>
}

type API_Status = 'Dead' | 'Alive' | 'unknown'
type API_Gender = 'Female' | 'Male' | 'Genderless' | 'unknown'
interface API_Character extends API_ResourceBase<'character'> {
  'status': API_Status
  'species': string
  'type': string
  'gender': API_Gender
  'origin': {
    "name": string
    "url": API_Url | null
  }
  'location': {
    "name": string,
    "url": API_Url | null
  }
  "image": `${API_Url<'character'>}/avatar/${number}.jpeg` | null,
  "episode": Array<`${API_Url<'episode'>}/${number}`>,
}

interface API_Location extends API_ResourceBase<'location'> {
  'type': string
  'dimension': string
  'residents': Array<`${API_Url<'character'>}/${number}`>
}

interface API_Episode extends API_ResourceBase<'episode'> {
  'air_date': string // format date
  'episode': string
  'characters': Array<`${API_Url<'character'>}/${number}`>
}

interface API_ParamsBase {
  'page': number,
}

interface API_CategoryParams extends API_ParamsBase {
  'name': string,
  'status': API_Status
  'species': string
  'type': string
  'gender': API_Gender
}

interface API_LocationParams extends Pick<API_CategoryParams, 'name' | 'type'> extends API_ParamsBase {
  'dimension': string
}

interface API_EpisodeParams extends Pick<CharacterFilter, 'name'> extends API_ParamsBase {
  'episode': string,
}

type API_Response<T extends API_Category, M extends 'GET' | 'ALL' = "GET"> = M extends 'ALL' ?
  {
  'info': API_Info<T>
  'results': Array< 
    T extends 'character' ? API_Character : 
    T extends 'location' ? API_Location : 
    T extends 'episode' ? API_Episode : 
    unknown>
  } : 
    T extends 'character' ? API_Character : 
    T extends 'location' ? API_Location : 
    T extends 'episode' ? API_Episode : 
    unknown

type API_Params<T extends API_Category> = Partial<
  T extends 'character' ? API_CategoryParams : 
  T extends 'location' ? API_LocationParams : 
  T extends 'episode' ? API_EpisodeParams : 
  unknown
  >

type API_Error = {
  'error': string
}
