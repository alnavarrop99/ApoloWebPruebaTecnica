import { twMerge } from 'tailwind-merge'
import { Icon } from '~/comp'

export const Footer = ({ className }: Pick<React.ComponentPropsWithRef<'footer'>, 'className'>) => <footer className={twMerge('bg-base-100 shadow-lg p-4 rounded-t-xl' , className)}>
  <ul className='flex gap-2 flex-col [&>li]:flex [&>li]:gap-1 [&>li]:place-items-center [&>li>:first-child]:w-6'>
    <li><img alt='rick and morty image' src={'/R&M.svg'} className='animate-bounce' /> <a href="https://rickandmortyapi.com" target='_blank'> Rick and Morty <b>API</b></a></li>
    <li><Icon name='play' trigger='always' delay={0.65} /> <a href="https://es.vitejs.dev" target='_blank'>  Make with <b>React & Vite</b></a></li>
    <li><Icon name='heart' trigger='always' delay={0.75} /> <a href="https://lordicon.com" target='_blank'>  Icons by <b>Lordicon</b></a></li>
    <li><Icon name='pizza' trigger='always' delay={0.5} /> <a href="https://reactrouter.com" target='_blank'>  Powered by <b>React Router DOM</b></a></li>
    <li><Icon name='note' trigger='always' delay={0.85} /> <a href="https://storybook.js.org" target='_blank'>  Awesome System Desing with <b>Storybook</b></a></li>
  </ul>
</footer>

export default Footer
