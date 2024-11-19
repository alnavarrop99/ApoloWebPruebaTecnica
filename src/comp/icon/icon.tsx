import { useRef, useState, useSyncExternalStore } from 'react';
import { Player } from '@lordicon/react';
import { twMerge } from 'tailwind-merge';

type TProps = {
  name: typeof list[`${number}`]
}

export const Icon = ({ name, className }: TProps & Pick<React.ComponentPropsWithRef<'span'>, 'className'>) => {    
  const [icons, setIcons] = useState<icons>({})
  useSyncExternalStore(store.sub(setIcons), store.getStore)

  const playerRef = useRef<Player>(null);
  if(!(`${name}.json` satisfies keyof Required<typeof icons> in icons)) return <div className={twMerge(styles, className)}>not</div>

  return <div className={twMerge(styles, className)} onClick={() => playerRef.current?.play()}>
    <Player ref={playerRef} icon={icons[`${name}.json`]} />
  </div>
}

export default Icon

export const list = ['sign-in', 'account', 'eye', 'filter', 'log-out', 'search'] as const

const getIcons = async () => {
  let res: icons  = {}
  try {
    const list_icons = import.meta.glob< icons[keyof Required<icons>] >('./assets/*.json')
    for( const icon in list_icons ){
      const name = list.find( (data) => ( icon.includes(data) ) )
      if(!name) continue
      res[`${name}.json`] = await list_icons[icon]()
    }
    return res
  } catch (err){
    throw new Error('icons not be available')
  }
}

type module = Object
type icons = Partial<Record<`${TProps['name']}.json`, module>>
const store = {
  sub: ( setIcons: React.Dispatch<React.SetStateAction<icons>> ) => (  ) => {
    getIcons().then( (data) => {
      setIcons(data)
    } )
    return () => {}
  }, 
  getStore: () => undefined
} as const

const styles = '[&>*]:!size-full w-8 aspect-square'
